"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const company = data.get("company") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const role = data.get("role") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Site Assessment Inquiry — ${name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany / Org: ${company}\nRole: ${role}\nPhone: ${phone}\nEmail: ${email}\n\nDescribe the site / question:\n${message}`
    );

    window.location.href = `mailto:craig@oscengineering.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-2xl text-center shadow-sm">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 mb-4">
          <CheckCircle2 className="w-7 h-7 text-sky-600" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-slate-900">Thanks — your message is on its way.</h3>
        <p className="mt-3 text-slate-600">
          Your email client should have opened with the message pre-filled. Hit
          send, and Craig will respond within one business day.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Time-sensitive? Call{" "}
          <a href="tel:858-436-4120" className="text-sky-600 font-semibold">
            (858) 436-4120
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-sm space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="name" label="Your name" required />
        <Field name="company" label="Company / school / jurisdiction" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone" type="tel" />
      </div>
      <Field
        name="role"
        label="Your role"
        placeholder="e.g., Property Owner · Facilities · Legal · Carrier"
      />

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-heading font-semibold text-slate-800 mb-2"
        >
          Describe the site or your question
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Address (or city/state), antenna count if known, what you need — annual study, lease review, dispute, training, etc."
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-colors text-slate-900 placeholder-slate-400"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 bg-sky-500 text-white font-heading font-semibold rounded-lg hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/25"
      >
        Send to Craig
      </button>

      <p className="text-xs text-slate-500">
        Initial intake call is free. Your information stays with OSC Engineering — never shared.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-heading font-semibold text-slate-800 mb-2">
        {label} {required && <span className="text-sky-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-colors text-slate-900 placeholder-slate-400"
      />
    </div>
  );
}
