'use server';

import { headers } from 'next/headers';
import { Resend } from 'resend';
import { site } from '@/lib/site';
import { serviceOptions, type ContactField, type ContactState } from '@/lib/contact';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_MS = 3000;

// Best-effort, per-instance rate limit: 5 enquiries per IP per 10 minutes
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function field(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function sendEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values: Record<ContactField, string> = {
    name: field(formData, 'name'),
    email: field(formData, 'email'),
    company: field(formData, 'company'),
    service: field(formData, 'service'),
    message: field(formData, 'message'),
  };

  // Spam traps: a hidden field humans never fill, and a minimum time on the form.
  // Bots get a quiet "success" so they don't learn to adapt.
  const startedAt = Number(field(formData, 'startedAt'));
  if (field(formData, 'website') || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: 'success', id: crypto.randomUUID() };
  }

  const errors: ContactState['errors'] = {};
  if (!values.name) errors.name = 'Please tell us your name.';
  else if (values.name.length > 100) errors.name = 'That name is a little long.';
  if (!EMAIL_RE.test(values.email) || values.email.length > 200) errors.email = 'Please enter a valid email address.';
  if (values.company.length > 150) errors.company = 'Please shorten this a little.';
  if (values.service && !(serviceOptions as readonly string[]).includes(values.service)) errors.service = 'Please pick an option.';
  if (values.message.length < 10) errors.message = 'A sentence or two about the project helps us reply properly.';
  else if (values.message.length > 5000) errors.message = 'Please keep the message under 5,000 characters.';

  if (Object.keys(errors).length) {
    return { status: 'error', message: 'Please check the highlighted fields.', errors, values };
  }

  const headerList = await headers();
  const ip = headerList.get('x-forwarded-for')?.split(',')[0].trim() || headerList.get('x-real-ip') || 'unknown';
  if (rateLimited(ip)) {
    return {
      status: 'error',
      message: `You’ve sent a few messages already — please wait a little, or email us at ${site.email}.`,
      values,
    };
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('[contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL');
    return {
      status: 'error',
      message: `Our form is temporarily unavailable. Please email us directly at ${site.email}.`,
      values,
    };
  }

  const rows: [string, string][] = [
    ['Name', values.name],
    ['Email', values.email],
    ['Company / website', values.company || '—'],
    ['Interested in', values.service || '—'],
  ];

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1A1C1E;max-width:560px">
      <p style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#80868B;margin:0 0 8px">New enquiry · ${escapeHtml(site.name)}</p>
      <h1 style="font-size:22px;margin:0 0 20px">${escapeHtml(values.name)}</h1>
      <table style="border-collapse:collapse;width:100%;font-size:14px;margin-bottom:20px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:8px 0;color:#5F6368;width:160px;border-bottom:1px solid #EEE">${label}</td><td style="padding:8px 0;border-bottom:1px solid #EEE">${escapeHtml(value)}</td></tr>`
          )
          .join('')}
      </table>
      <p style="font-size:15px;line-height:1.6;white-space:pre-wrap;margin:0">${escapeHtml(values.message)}</p>
    </div>`;

  const text = [...rows.map(([label, value]) => `${label}: ${value}`), '', values.message].join('\n');

  try {
    const resend = new Resend(RESEND_API_KEY);
    const id = crypto.randomUUID();
    const { error } = await resend.emails.send(
      {
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        replyTo: values.email,
        subject: `New enquiry from ${values.name}${values.service ? ` — ${values.service}` : ''}`,
        html,
        text,
      },
      { idempotencyKey: `contact-${id}` }
    );

    if (error) {
      console.error('[contact] Resend error', error);
      return {
        status: 'error',
        message: `Something went wrong sending your message. Please try again, or email us at ${site.email}.`,
        values,
      };
    }

    return { status: 'success', id, values: { name: values.name, email: values.email } };
  } catch (err) {
    console.error('[contact] Unexpected error', err);
    return {
      status: 'error',
      message: `Something went wrong sending your message. Please try again, or email us at ${site.email}.`,
      values,
    };
  }
}
