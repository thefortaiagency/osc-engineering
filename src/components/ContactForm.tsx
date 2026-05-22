"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      role: String(data.get("role") || ""),
      message: String(data.get("message") || ""),
    };

    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Something went wrong. Please call (858) 436-4120.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage("Connection failed. Please call (858) 436-4120 or email craig@oscengineering.com directly.");
    }
  }

  if (status === "ok") {
    return (
      <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-2xl text-center shadow-sm">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-100 mb-4">
          <CheckCircle2 className="w-7 h-7 text-red-600" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-slate-900">Got it — Craig will be in touch.</h3>
        <p className="mt-3 text-slate-600">
          Your message went straight to craig@oscengineering.com. He responds within one business day.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Time-sensitive? Call{" "}
          <a href="tel:858-436-4120" className="text-red-600 font-semibold">
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
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-colors text-slate-900 placeholder-slate-400"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-red-500 text-white font-heading font-semibold rounded-lg hover:bg-red-400 transition-colors shadow-lg shadow-red-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send to Craig"
        )}
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
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-colors text-slate-900 placeholder-slate-400"
      />
    </div>
  );
}
