"use client";

import { useState, type FormEvent } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm({ email }: { email: string | undefined }) {
  const [prepared, setPrepared] = useState(false);

  function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const sendTo = email ? ` Email it to ${email} to start the conversation.` : "";
    const brief = `iSixDigitals — Studio project brief\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nStudio: ${data.get("studio")}\nWebsite: ${data.get("website") || "Not provided"}\nInterest: ${data.get("interest")}\n\nProject details:\n${data.get("message")}\n\nThis brief has not been sent.${sendTo}`;
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "isixdigitals-project-brief.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setPrepared(true);
  }

  return (
    <form className="contact-form" onSubmit={prepare}>
      <noscript>
        <p className="form-note">
          {email ? (
            <>
              This form needs JavaScript to prepare the brief. You can write to{" "}
              <a href={`mailto:${email}`}>{email}</a> directly instead.
            </>
          ) : (
            <>This form needs JavaScript to prepare the brief.</>
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
          />
        </div>
        <div className="field">
          <label htmlFor="website">Current website</label>
          <input id="website" name="website" type="url" placeholder="https://" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="interest">What can we help with?</label>
        <select id="interest" name="interest">
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
        />
      </div>
      <p className="form-note">
        {email ? (
          <>
            This form prepares a brief you can download and email to{" "}
            <a href={`mailto:${email}`}>{email}</a>. Nothing is submitted or stored here.
          </>
        ) : (
          <>
            This form prepares a downloadable brief, so you keep a copy of everything you write.
            Nothing is submitted or stored here.
          </>
        )}
      </p>
      <Button type="submit" size="lg">
        Prepare project brief <Download />
      </Button>
      {prepared && (
        <div className="success-message" role="status">
          {email
            ? `Your brief has been downloaded. Attach it to an email to ${email} whenever you are ready — nothing has been sent yet.`
            : "Your brief has been downloaded. Nothing has been sent or stored."}
        </div>
      )}
    </form>
  );
}
