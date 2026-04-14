import { NextResponse } from "next/server";
import { Resend } from "resend";

type AppointmentPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  const body = (await request.json()) as AppointmentPayload;

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { message: "Please complete all form fields." },
      { status: 400 }
    );
  }

  if (!resend) {
    return NextResponse.json(
      { message: "Send requests only after setting the RESEND_API_KEY environment variable." },
      { status: 500 }
    );
  }

  const destinationEmail = process.env.APPOINTMENT_TO_EMAIL;
  const fromEmail = process.env.APPOINTMENT_FROM_EMAIL;

  if (!destinationEmail || !fromEmail) {
    return NextResponse.json(
      {
        message:
          "Missing configuration: set APPOINTMENT_TO_EMAIL and APPOINTMENT_FROM_EMAIL in your environment."
      },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: fromEmail,
      to: destinationEmail,
      subject: `New appointment request - ${name}`,
      replyTo: email,
      text: [
        "New appointment request",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        "",
        "Message:",
        message
      ].join("\n")
    });

    return NextResponse.json(
      { message: "Appointment request sent. We will get back to you shortly." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "We could not send the appointment email right now." },
      { status: 500 }
    );
  }
}
