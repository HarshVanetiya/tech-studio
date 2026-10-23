# IT Studio — agency website

Marketing site for a small web and software studio: websites, growth, business tools and custom software. A single scrolling page with a layered "water" hero headline, frosted-glass cards, scroll-triggered reveals and a working contact form.

**[Live site →](https://tech-studio-iota.vercel.app)**

<!-- Add a screenshot of the hero here, e.g. ![Hero section](docs/hero.png) -->

## Highlights

- **Layered hero headline:** two copies of the same heading, one solid and one translucent "water" layer, kept pixel-aligned by a shared component and revealed line by line with staggered animation
- **Glassmorphism without the mush:** frosted cards use `backdrop-filter` blur and saturation, with contrast tuned so text stays readable over the background
- **Scroll reveals and section tracking:** `IntersectionObserver` drives fade-in-on-scroll and highlights the current section in the navbar and the mobile dock
- **Mobile dock:** a thumb-friendly bottom navigation bar on phones
- **Contact form that actually sends:** a Next.js Server Action validates the enquiry and emails it through [Resend](https://resend.com)
  - HTML-escapes every field before it goes into the email
  - Basic spam protection: a hidden honeypot field, a minimum time-on-form check, and a per-IP rate limit (5 enquiries per 10 minutes)
  - Field-level error messages, and the form keeps what you typed if something fails
- **One place for brand details:** name, email, tagline and section order live in `lib/site.ts`

## Built with

Next.js 16 (App Router, Server Actions) · React 19 · TypeScript · Tailwind CSS 4 · Resend · lucide-react · deployed on Vercel

## Run it locally

You need Node.js 20+ and [pnpm](https://pnpm.io).

```bash
git clone https://github.com/HarshVanetiya/tech-studio.git
cd tech-studio
pnpm install
cp .env.example .env.local   # then fill in the three Resend values
pnpm dev
```

Open http://localhost:3000.

### Environment variables

| Variable | What it's for |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_TO_EMAIL` | Inbox that receives new enquiries |
| `CONTACT_FROM_EMAIL` | Sender address; must be on a domain verified in Resend. For local testing use `Website <onboarding@resend.dev>` |

Everything except the contact form works without these.

## Project structure

```
app/
  page.tsx            the home page and hero
  actions/contact.ts  server action that validates and emails enquiries
components/
  home/               Services, Approach, Process, Work, contact form
  Navbar, Footer, MobileDock, Reveal
lib/
  site.ts             brand name, email, tagline, section list
  contact.ts          form field types and service options
```
