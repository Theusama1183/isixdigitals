"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm({ email }: { email: string | undefined }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      studio: String(data.get("studio") || "").trim(),
      website: String(data.get("website") || "").trim(),
      interest: String(data.get("interest") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || json?.ok === false) {
        throw new Error(json?.error || "Failed to send inquiry.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <noscript>
        <p className="form-note">
          {email ? (
            <>
              This form needs JavaScript to send your inquiry. You can write to{" "}
              <a href={`mailto:${email}`}>{email}</a> directly instead.
            </>
          ) : (
            <>This form needs JavaScript to send your inquiry.</>
          )}
        </p>
      </noscript>

      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
            maxLength={150}
            disabled={status === "loading"}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@yourstudio.com"
            required
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="studio">Studio name *</label>
          <input
            id="studio"
            name="studio"
            autoComplete="organization"
            placeholder="Your studio"
            required
            maxLength={200}
            disabled={status === "loading"}
          />
        </div>
        <div className="field">
          <label htmlFor="website">Current website</label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://yourstudio.com"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="interest">What can we help with?</label>
        <select id="interest" name="interest" disabled={status === "loading"}>
          <option>Studio website design</option>
          <option>Website redesign</option>
          <option>Inquiry & booking journeys</option>
          <option>Search & measurement</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">A little about your project *</label>
        <textarea
          id="message"
          name="message"
          placeholder="What do you create? What would you like your website to do better?"
          required
          maxLength={5000}
          disabled={status === "loading"}
        />
      </div>

      <p className="form-note">
        {email ? (
          <>
            We&apos;ll reply from <a href={`mailto:${email}`}>{email}</a>. We only use
            your details to respond to this inquiry.
          </>
        ) : (
          <>We&apos;ll use your details only to respond to this inquiry.</>
        )}
      </p>

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send inquiry"}{" "}
        <Send className="ml-1 h-4 w-4" />
      </Button>

      {status === "success" && (
        <div className="success-message" role="status">
          Thanks — your inquiry has been sent. We&apos;ll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="error-message" role="alert">
          {errorMsg}
        </div>
      )}
    </form>
  );
}
