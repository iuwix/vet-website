# Product Requirements Document (PRD)

## Product
Rosetti Family Vet Clinic Landing Page

## Objective
Create a professional, elegant, red-and-white website for a family veterinary clinic that presents services, prices, social/contact details, testimonials, map location, and a lead form for appointments.

## Business Goals
- Increase appointment requests from first-time website visitors.
- Build trust through clear service presentation and testimonials.
- Provide immediate contact paths via sticky phone CTA and top contact bar.
- Keep implementation deployable on Vercel and maintainable over time.

## Target Users
- Pet owners in Bucuresti searching for a reliable clinic.
- Existing clients looking for phone number, address, and pricing.

## Core Features
1. **Top Bar**
   - Phone number: `0720.123.123`
   - Address: `Strada Maria Rosetti 26A, Bucuresti 020487`
   - Social links (Facebook, Instagram, LinkedIn placeholders).

2. **Main Navigation**
   - Sticky header with text-based logo.
   - Links scroll to specific page sections:
     - Acasa
     - Servicii
     - Preturi
     - Testimoniale
     - Contact

3. **Hero Section**
   - Professional headline and intro copy.
   - Visuals from provided image folder.
   - Appointment form with fields:
     - Name
     - Phone
     - Email
     - Message
     - Send button

4. **Services Section**
   - Clear clinic offerings with short descriptions.

5. **Pricing Section**
   - Transparent pricing list for key services.

6. **Testimonials Section**
   - Three testimonial cards with reviewer image, name, role, and quote.
   - Placeholder reviewer images currently used until review photos are provided in this environment.

7. **Map + Contact Section**
   - Embedded Google map for:
     - `Strada Maria Rosetti 26A, Bucuresti 020487`
   - Operating details and phone contact.

8. **Sticky Bottom Bar**
   - Fixed bottom CTA with message:
     - `Call to make an appointment`
   - Click-to-call number:
     - `0720.123.123`

9. **Appointment Form Backend**
   - API route using Resend to email appointment requests.
   - Server-side validation for required fields.
   - Environment variables for API key and sender/receiver email.

## Non-Functional Requirements
- Built with Next.js (App Router), TypeScript, Tailwind CSS.
- Mobile-first, responsive layout.
- Readable contrast and clear hierarchy.
- Clean, maintainable code structure.
- No secrets committed in source control.

## Success Metrics
- Primary: number of appointment form submissions.
- Secondary: click-to-call events from sticky bar.
- Secondary: time on page and scroll depth through sections.

## Scope Status
- [x] Next.js + Tailwind setup
- [x] Single-page clinic layout
- [x] Smooth scrolling menu navigation
- [x] Hero appointment form UI
- [x] Services and prices sections
- [x] Testimonials block
- [x] Google map embed with provided address
- [x] Sticky bottom call bar
- [x] Resend API endpoint
- [x] `.env.example` for deployment config
- [ ] Replace testimonial placeholder images with provided `D:\\project\\reviews` photos (pending asset availability in this environment)
- [ ] Add real social profile URLs

## Deployment Plan (GitHub + Vercel)
1. Initialize git in project root and commit.
2. Push repository to GitHub.
3. Import GitHub repo into Vercel.
4. Set environment variables in Vercel:
   - `RESEND_API_KEY`
   - `APPOINTMENT_FROM_EMAIL`
   - `APPOINTMENT_TO_EMAIL`
5. Deploy production build.
6. Validate:
   - Form submission email delivery
   - Sticky phone CTA
   - Map rendering
   - Mobile responsiveness
