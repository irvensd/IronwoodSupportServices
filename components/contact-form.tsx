"use client";
import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  emptyContact,
  serviceOptions,
  validateContact,
  type ContactData,
  type ContactErrors,
} from "@/lib/contact";
import { company } from "@/lib/site";
export function ContactForm() {
  const [data, setData] = useState<ContactData>(emptyContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [notice, setNotice] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const change = (key: keyof ContactData, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const nextErrors = validateContact(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("idle");
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)
        ?.focus();
      return;
    }
    setStatus("sending");
    setNotice("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.message || "We could not process the form. Please try again.",
        );
      setStatus("success");
      setNotice(result.message);
      setData(emptyContact);
    } catch (error) {
      setStatus("error");
      setNotice(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }
  return (
    <form ref={formRef} onSubmit={submit} noValidate className="contact-form">
      <div className="form-heading">
        <h2>Tell us what you need.</h2>
        <p>Required fields are marked with an asterisk (*).</p>
      </div>
      <div className="form-grid">
        {(
          [
            ["name", "Name", "text", "name"],
            ["organization", "Organization", "text", "organization"],
            ["email", "Email", "email", "email"],
            ["phone", "Phone (optional)", "tel", "tel"],
            ["location", "City / state", "text", "address-level2"],
          ] as const
        ).map(([key, label, type, autoComplete]) => (
          <div className="form-field" key={key}>
            <label htmlFor={key}>
              {label}
              {key !== "phone" && " *"}
            </label>
            <input
              id={key}
              name={key}
              type={type}
              autoComplete={autoComplete}
              required={key !== "phone"}
              maxLength={200}
              value={data[key]}
              onChange={(e) => change(key, e.target.value)}
              aria-invalid={!!errors[key]}
              aria-describedby={errors[key] ? `${key}-error` : undefined}
            />
            {errors[key] && (
              <p className="field-error" id={`${key}-error`}>
                {errors[key]}
              </p>
            )}
          </div>
        ))}
        <div className="form-field">
          <label htmlFor="service">Service needed *</label>
          <select
            name="service"
            id="service"
            required
            value={data.service}
            onChange={(e) => change("service", e.target.value)}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <p className="field-error" id="service-error">
              {errors.service}
            </p>
          )}
        </div>
        <div className="form-field col-span-full">
          <label htmlFor="message">Project details *</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            maxLength={5000}
            placeholder="Site size, desired schedule, scope, or solicitation details…"
            value={data.message}
            onChange={(e) => change("message", e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p className="field-error" id="message-error">
              {errors.message}
            </p>
          )}
        </div>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={(e) => change("website", e.target.value)}
        />
      </div>
      <p className="form-disclosure">
        Your inquiry will be emailed to {company.email}. Please do not include
        sensitive personal information or procurement-sensitive data beyond what
        is needed to discuss the scope.
      </p>
      <button
        className="button button-green"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Submitting…" : "Submit inquiry"}
        <ArrowUpRight size={18} />
      </button>
      <div aria-live="polite" aria-atomic="true">
        {notice && (
          <div className={`form-notice ${status === "error" ? "error" : ""}`}>
            {status === "success" && <CheckCircle2 size={22} />}
            <p>{notice}</p>
          </div>
        )}
      </div>
    </form>
  );
}
