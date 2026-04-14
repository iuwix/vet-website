import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rosetti Family Vet Clinic",
  description:
    "Professional family veterinary clinic in Bucuresti with clear services, prices and easy appointment requests."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
