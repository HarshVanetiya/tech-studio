'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { sendEnquiry } from '@/app/actions/contact';
import { serviceOptions, initialContactState, type ContactField } from '@/lib/contact';
import Button from '@/components/ui/Button';

const inputClass =
  'peer w-full rounded-2xl bg-white/75 px-4 text-[15px] text-[#1A1C1E] placeholder:text-[#80868B]/80 ring-1 ring-[#1A1C1E]/[0.08] outline-none transition-[box-shadow,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white focus:bg-white focus:ring-2 focus:ring-[#1A1C1E]/70 aria-[invalid=true]:ring-[#C2410C]/70';

function Label({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="flex items-baseline justify-between mb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#5F6368] transition-colors duration-200 group-focus-within:text-[#1A1C1E]">
      <span>{children}</span>
      {optional && <span className="normal-case tracking-normal text-[#80868B]">Optional</span>}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="contact-message mt-1.5 text-[13px] text-[#C2410C]">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialContactState);
  const [dismissedId, setDismissedId] = useState<string | undefined>();

  // When the visitor started, for the server's too-fast-to-be-human check.
  // Kept in a ref (not a hidden input) because React resets form fields after each submit.
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const submit = (formData: FormData) => {
    formData.set('startedAt', String(startedAt.current));
    return formAction(formData);
  };

  const sendAnother = () => {
    startedAt.current = Date.now();
    setDismissedId(state.id);
  };

  const err = (f: ContactField) => state.errors?.[f];
  const val = (f: ContactField) => state.values?.[f] ?? '';
  const describedBy = (f: ContactField) => (err(f) ? `${f}-error` : undefined);

  if (state.status === 'success' && state.id !== dismissedId) {
    return (
      <div className="contact-success hero-glass-card rounded-[28px] p-8 sm:p-10 min-h-[420px] flex flex-col justify-center" role="status">
        <svg viewBox="0 0 52 52" className="w-14 h-14 text-[#1A1C1E]" aria-hidden="true">
          <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-check-circle" />
          <path d="M16 27l7 7 13-15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-check-mark" />
        </svg>
        <h3 style={{ '--i': 0 } as React.CSSProperties} className="contact-stagger mt-8 font-display font-extrabold text-[#1A1C1E] text-3xl sm:text-4xl tracking-[-0.035em] leading-[1.05]">
          Thank you{state.values?.name ? `, ${state.values.name.split(' ')[0]}` : ''}.
          <span className="block text-[#5F6368]">Message received.</span>
        </h3>
        <p style={{ '--i': 1 } as React.CSSProperties} className="contact-stagger mt-5 max-w-sm text-[#3C4043] leading-[1.65]">
          We’ll read it properly and reply{state.values?.email ? ` to ${state.values.email}` : ''} with next steps.
        </p>
        <div style={{ '--i': 2 } as React.CSSProperties} className="contact-stagger mt-8">
          <Button type="button" variant="light" icon="right" onClick={sendAnother}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form action={submit} noValidate className="relative hero-glass-card rounded-[28px] p-5 sm:p-8">
      {/* Spam trap: humans never see or fill this */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset>
        <legend className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#5F6368]">What can we help with?</legend>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((option) => (
            <label key={option} className="relative cursor-pointer">
              <input
                type="radio"
                name="service"
                value={option}
                defaultChecked={val('service') === option}
                className="peer sr-only"
              />
              <span className="inline-flex items-center h-9 px-3.5 rounded-full text-[13px] font-medium text-[#3C4043] bg-white/60 ring-1 ring-[#1A1C1E]/[0.08] transition-[background-color,color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white peer-checked:bg-[#1A1C1E] peer-checked:text-white peer-checked:ring-[#1A1C1E] peer-focus-visible:ring-2 peer-focus-visible:ring-[#1A1C1E] active:scale-95">
                {option}
              </span>
            </label>
          ))}
        </div>
        <FieldError id="service-error" message={err('service')} />
      </fieldset>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="group">
          <Label htmlFor="name">Name</Label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            defaultValue={val('name')}
            aria-invalid={!!err('name')}
            aria-describedby={describedBy('name')}
            className={`${inputClass} h-12`}
            placeholder="Your name"
          />
          <FieldError id="name-error" message={err('name')} />
        </div>
        <div className="group">
          <Label htmlFor="email">Email</Label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            defaultValue={val('email')}
            aria-invalid={!!err('email')}
            aria-describedby={describedBy('email')}
            className={`${inputClass} h-12`}
            placeholder="you@company.com"
          />
          <FieldError id="email-error" message={err('email')} />
        </div>
      </div>

      <div className="group mt-4">
        <Label htmlFor="company" optional>
          Company or website
        </Label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          maxLength={150}
          defaultValue={val('company')}
          aria-invalid={!!err('company')}
          aria-describedby={describedBy('company')}
          className={`${inputClass} h-12`}
          placeholder="Business name or URL"
        />
        <FieldError id="company-error" message={err('company')} />
      </div>

      <div className="group mt-4">
        <Label htmlFor="message">About the project</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={5000}
          defaultValue={val('message')}
          aria-invalid={!!err('message')}
          aria-describedby={describedBy('message')}
          className={`${inputClass} py-3 resize-none leading-[1.6]`}
          placeholder="What are you looking to build or improve? Any timelines or goals?"
        />
        <FieldError id="message-error" message={err('message')} />
      </div>

      <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-[12.5px] leading-[1.5] text-[#5F6368] max-w-[30ch]">
          Your details are only used to reply to your enquiry.
        </p>
        <Button type="submit" pending={pending} className="justify-between sm:justify-center">
          Send enquiry
        </Button>
      </div>

      <p aria-live="polite" className={`text-[13.5px] text-[#C2410C] ${state.status === 'error' && state.message ? 'contact-message mt-4' : 'sr-only'}`}>
        {state.status === 'error' ? state.message : ''}
      </p>
    </form>
  );
}
