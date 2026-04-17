import Image from "next/image";
import { AppointmentForm } from "@/components/appointment-form";
import { StickyCallBar } from "@/components/sticky-call-bar";

const services = [
  {
    title: "General Consultation",
    description:
      "Complete health checks for dogs, cats, and other pets, including treatment guidance and prevention plans."
  },
  {
    title: "Vaccinations and Prevention",
    description:
      "Personalized vaccination schedules, internal and external deworming, and routine wellness monitoring."
  },
  {
    title: "Testing and Diagnostics",
    description:
      "Fast and accurate diagnostics with clinical evaluation and clear recommendations for next steps."
  },
  {
    title: "Nutritional Counseling",
    description:
      "Balanced nutrition plans based on age, breed, weight, and chronic conditions."
  }
];

const prices = [
  { service: "Initial consultation", price: "150 RON" },
  { service: "Annual vaccination", price: "180 RON" },
  { service: "Deworming package", price: "120 RON" },
  { service: "Basic lab tests", price: "220 RON" },
  { service: "Nutritional counseling", price: "140 RON" }
];

const testimonials = [
  {
    name: "Elena M.",
    text: "The team was very caring with our cat. Clear explanations, effective treatment, and a calm atmosphere.",
    role: "Cat owner",
    image: "/reviews/reviewer-1.svg"
  },
  {
    name: "Andrei P.",
    text: "Booking was quick and the consultation was highly professional. I fully recommend this clinic for pet families.",
    role: "Dog owner",
    image: "/reviews/reviewer-2.svg"
  },
  {
    name: "Diana R.",
    text: "Fair pricing and excellent service. The doctor gave us a clear recovery plan.",
    role: "Rabbit owner",
    image: "/reviews/reviewer-3.svg"
  }
];

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export default function HomePage() {
  return (
    <main className="pb-28">
      <div className="bg-red-950 text-red-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <span>Phone: 0720.123.123</span>
            <span>Strada Maria Rosetti 26A, Bucuresti 020487</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-white">
              Facebook
            </a>
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>
            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-red-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#hero" className="text-xl font-bold tracking-wide text-red-900">
            Rosetti Vet Clinic
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-red-800 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-red-600">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="hero" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-red-900">
            Family Vet Clinic
          </p>
          <h1 className="text-4xl font-bold leading-tight text-red-950 md:text-5xl">
            Professional veterinary care for your whole family.
          </h1>
          <p className="max-w-xl text-base text-red-800 md:text-lg">
            Our clinic combines modern medical services with an elegant, caring approach, so
            every visit feels safe and predictable.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.pexels.com/photos/6816857/pexels-photo-6816857.jpeg"
              alt="Veterinary doctors during consultation"
              width={560}
              height={420}
              className="h-44 w-full rounded-2xl object-cover shadow-md md:h-52"
              priority
            />
            <Image
              src="https://images.pexels.com/photos/6235239/pexels-photo-6235239.jpeg"
              alt="Veterinary pet care"
              width={560}
              height={420}
              className="h-44 w-full rounded-2xl object-cover shadow-md md:h-52"
            />
          </div>
        </div>

        <AppointmentForm />
      </section>

      <section id="services" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-red-950">Services</h2>
          <p className="mt-3 max-w-2xl text-red-700">
            We provide essential services for pet health, with a strong focus on prevention,
            precise diagnosis, and clear communication with owners.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-red-100 bg-red-50/40 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-red-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-red-700">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-red-950">Transparent Pricing</h2>
            <p className="mt-3 text-red-700">
              Clear pricing structure for common services. For personalized treatment plans,
              contact us directly.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm">
              {prices.map((item) => (
                <div
                  key={item.service}
                  className="flex items-center justify-between border-b border-red-100 px-5 py-4 last:border-b-0"
                >
                  <span className="font-medium text-red-900">{item.service}</span>
                  <span className="text-sm font-semibold text-red-700">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="https://images.pexels.com/photos/6235650/pexels-photo-6235650.jpeg"
            alt="Premium veterinary services"
            width={720}
            height={960}
            className="h-full min-h-80 w-full rounded-2xl object-cover shadow-md"
          />
        </div>
      </section>

      <section id="testimonials" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-red-950">What Our Clients Say</h2>
          <p className="mt-3 text-red-700">
            Real feedback from families who trust us with their pets.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-2xl border border-red-100 bg-red-50/40 p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={72}
                    height={72}
                    className="h-16 w-16 rounded-full border border-red-200 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-red-900">{testimonial.name}</h3>
                    <p className="text-xs text-red-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-red-700">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-red-950">Find Us</h2>
            <p className="mt-3 text-red-700">
              Visit our clinic for consultations, preventive care, and personalized treatment
              plans.
            </p>
            <div className="mt-6 space-y-2 text-red-800">
              <p>Strada Maria Rosetti 26A, Bucuresti 020487</p>
              <p>Phone: 0720.123.123</p>
              <p>Monday - Saturday: 09:00 - 20:00</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-red-100 shadow-sm">
            <iframe
              title="Veterinary clinic map"
              src="https://maps.google.com/maps?q=Strada%20Maria%20Rosetti%2026A%2C%20Bucure%C8%99ti%20020487&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-96 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-red-200 bg-red-950 py-8 text-red-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Rosetti Vet Clinic. All rights reserved.</p>
          <p>Elegant design, clear communication, trusted care.</p>
        </div>
      </footer>

      <StickyCallBar />
    </main>
  );
}
