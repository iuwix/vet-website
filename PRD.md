# Product Requirements Document (PRD)

## Product
Rosetti Family Vet Clinic Landing Page

## Objective
Create a professional, elegant, blue-and-white website for a family veterinary clinic that presents services, prices, social/contact details, testimonials, map location, and a lead form for appointments.

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
   - Links scroll to specific page sections.

3. **Hero Section**
   - Professional headline and intro copy.
   - Appointment form with fields: Name, Phone, Email, Message.

4. **Services Section**
   - Clear clinic offerings with short descriptions.

5. **Pricing Section**
   - Transparent pricing list for key services.

6. **Testimonials Section**
   - Three testimonial cards with reviewer image, name, role, and quote.

7. **Map + Contact Section**
   - Embedded Google map for `Strada Maria Rosetti 26A, Bucuresti 020487`.

8. **Sticky Bottom Bar**
   - Fixed bottom CTA: `Call to make an appointment`
   - Click-to-call number: `0720.123.123`

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

## Deployment Plan (GitHub + Vercel)
1. Push repository to GitHub.
2. Import GitHub repo into Vercel.
3. Set environment variables in Vercel:
   - `RESEND_API_KEY`
   - `APPOINTMENT_FROM_EMAIL`
   - `APPOINTMENT_TO_EMAIL`
4. Deploy production build.
