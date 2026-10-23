import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";
import { contact } from "@/lib/contact";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  studio: z.string().min(1, "Studio name is required"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  interest: z.string().min(1, "Please select an option"),
  message: z.string().min(1, "Project details are required"),
});

export async function POST(req: Request) {
  try {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Email sending is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const data = schema.parse(body);

    const to = contact.email || "hello@isixdigitals.com";
    const from =
      process.env["RESEND_FROM_EMAIL"] ||
      "New Message for iSixDigitals <notifications@isixdigitals.com>";

    const websiteLine = data.website ? `Website: ${data.website}\n` : "";

    const text = `iSixDigitals — New studio inquiry

Name: ${data.name}
Email: ${data.email}
Studio: ${data.studio}
${websiteLine}Interest: ${data.interest}

Project details:
${data.message}

Reply directly to this email to continue the conversation.`;

    const html = `
      <div style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #151412;">
        <h2 style="margin: 0 0 16px;">iSixDigitals — New studio inquiry</h2>
        <p style="margin: 0 0 12px;"><strong>Name:</strong> ${data.name}<br/>
        <strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a><br/>
        <strong>Studio:</strong> ${data.studio}<br/>
        ${data.website ? `<strong>Website:</strong> <a href="${data.website}">${data.website}</a><br/>` : ""}
        <strong>Interest:</strong> ${data.interest}</p>
        <h3 style="margin: 24px 0 12px;">Project details</h3>
        <p style="white-space: pre-wrap; margin: 0;">${data.message.replace(/\n/g, "<br/>")}</p>
        <hr style="border: none; border-top: 1px solid #e7e5e4; margin: 32px 0 16px;"/>
        <p style="font-size: 14px; color: #6b645c;">Reply directly to this email to continue the conversation.</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New inquiry — ${data.studio}`,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send inquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: err.errors[0]?.message || "Invalid form data." },
        { status: 400 }
      );
    }

    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
