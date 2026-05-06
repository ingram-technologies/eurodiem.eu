# eurodiem.eu

Marketing site for EuroDIEM — a European platform industrializing syndication
of large and unconventional insurance risks.

Built with Next.js 15 (App Router) and deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Environment variables

Copy `.env.local.example` to `.env.local` to enable the contact form:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_EMAIL_API_TOKEN`
- `EMAIL_FROM_DOMAIN` — sending domain (e.g. `mail.eurodiem.eu`)
- `CONTACT_EMAIL` — destination address (defaults to `contact@eurodiem.eu`)
