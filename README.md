# Rosetti Vet Clinic Landing Page

Professional one-page clinic website built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

1. Copy environment variables:
   - `cp .env.example .env.local`
2. Fill in valid Resend values in `.env.local`.
3. Install and run:
   - `npm install`
   - `npm run dev`

## Build checks

- `npm run lint`
- `npm run build`

## Deploy (GitHub + Vercel)

1. Push this project to a GitHub repository.
2. Import the repo in Vercel.
3. Add environment variables:
   - `RESEND_API_KEY`
   - `APPOINTMENT_FROM_EMAIL`
   - `APPOINTMENT_TO_EMAIL`
4. Trigger deploy.
