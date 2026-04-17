"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

export function AppointmentForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);
    setIsError(false);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setIsError(true);
        setFeedback(payload.message ?? "An error occurred. Please try again.");
        return;
      }

      setFormState(initialState);
      setFeedback(payload.message ?? "Your request was sent successfully.");
    } catch {
      setIsError(true);
      setFeedback("We could not send the form right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="space-y-4 rounded-2xl border border-red-100 bg-white/95 p-6 shadow-xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-red-950">Quick Appointment</h2>
      <p className="text-sm text-red-700">
        Complete the form and we will call you back shortly.
      </p>

      <div className="grid gap-3">
        <input
          required
          type="text"
          placeholder="Full name"
          value={formState.name}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, name: event.target.value }))
          }
          className="w-full rounded-lg border border-red-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
        />
        <input
          required
          type="tel"
          placeholder="Phone"
          value={formState.phone}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, phone: event.target.value }))
          }
          className="w-full rounded-lg border border-red-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, email: event.target.value }))
          }
          className="w-full rounded-lg border border-red-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
        />
        <textarea
          required
          placeholder="Message"
          rows={4}
          value={formState.message}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, message: event.target.value }))
          }
          className="w-full rounded-lg border border-red-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-red-400"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>

      {feedback ? (
        <p className={`text-sm ${isError ? "text-red-700" : "text-emerald-700"}`}>
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
