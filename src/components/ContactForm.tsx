"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s\-()]{6,18}$/;

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone.trim() && !phonePattern.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number, or leave this empty.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please tell us a little more — at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const nextValues = { ...values, [field]: event.target.value };
    setValues(nextValues);
    // Re-validate fields the visitor has already been told about.
    if (touched[field]) {
      setErrors(validate(nextValues));
    }
  };

  const handleBlur = (field: keyof ContactFormValues) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      // Move focus to the first field that needs attention.
      const firstError = (["name", "email", "phone", "message"] as const).find(
        (field) => nextErrors[field],
      );
      if (firstError) {
        document.getElementById(`contact-${firstError}`)?.focus();
      }
      return;
    }

    // No backend in this build — a real client project would post to an API
    // route or a reservation service here.
    setSubmitted(true);
  };

  const fieldClass = (hasError: boolean) =>
    `w-full border bg-transparent px-4 py-3.5 text-[0.95rem] text-cream placeholder:text-sand/50 transition-colors duration-300 focus:outline-none ${
      hasError ? "border-red-400/70" : "border-line hover:border-sand/50 focus:border-copper"
    }`;

  return (
    <div className="relative">
      {/* Conditional swap with a keyed CSS animation for the entrance. */}
      {submitted ? (
          <div
            key="success"
            role="status"
            className="fade-up border border-line bg-raised px-8 py-14 text-center sm:px-12"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-copper text-copper">
              <Check size={20} strokeWidth={1.5} aria-hidden />
            </span>
            <h3 className="mt-6 font-display text-2xl font-light">
              Message received.
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-sand">
              Thank you, {values.name.trim().split(" ")[0]}. Our team will reply
              within a day. For same-evening requests, please call us directly.
            </p>
          </div>
        ) : (
          <form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-6">
              <div>
                <label htmlFor="contact-name" className="eyebrow block">
                  Name <span aria-hidden className="text-copper">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={handleChange("name")}
                  onBlur={handleBlur("name")}
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby={touched.name && errors.name ? "contact-name-error" : undefined}
                  placeholder="Your full name"
                  className={`mt-3 ${fieldClass(Boolean(touched.name && errors.name))}`}
                />
                {touched.name && errors.name && (
                  <p id="contact-name-error" role="alert" className="mt-2 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="eyebrow block">
                  Email <span aria-hidden className="text-copper">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby={touched.email && errors.email ? "contact-email-error" : undefined}
                  placeholder="you@example.com"
                  className={`mt-3 ${fieldClass(Boolean(touched.email && errors.email))}`}
                />
                {touched.email && errors.email && (
                  <p id="contact-email-error" role="alert" className="mt-2 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-7">
              <label htmlFor="contact-phone" className="eyebrow block">
                Phone <span className="text-sand/60 normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={handleChange("phone")}
                onBlur={handleBlur("phone")}
                aria-invalid={Boolean(touched.phone && errors.phone)}
                aria-describedby={touched.phone && errors.phone ? "contact-phone-error" : undefined}
                placeholder="+91 98XXX XXXXX"
                className={`mt-3 ${fieldClass(Boolean(touched.phone && errors.phone))}`}
              />
              {touched.phone && errors.phone && (
                <p id="contact-phone-error" role="alert" className="mt-2 text-xs text-red-400">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="mt-7">
              <label htmlFor="contact-message" className="eyebrow block">
                Message <span aria-hidden className="text-copper">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={values.message}
                onChange={handleChange("message")}
                onBlur={handleBlur("message")}
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby={touched.message && errors.message ? "contact-message-error" : undefined}
                placeholder="Occasion, party size, preferred date — whatever helps us prepare."
                className={`mt-3 resize-y ${fieldClass(Boolean(touched.message && errors.message))}`}
              />
              {touched.message && errors.message && (
                <p id="contact-message-error" role="alert" className="mt-2 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-10 w-full bg-cream px-7 py-4 text-[0.8rem] font-medium tracking-[0.18em] text-ink uppercase transition-colors duration-300 hover:bg-copper sm:w-auto"
            >
              Send Message
            </button>
          </form>
        )}
    </div>
  );
}
