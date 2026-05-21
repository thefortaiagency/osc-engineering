import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@aimpactnexus.ai";
const NOTIFY_EMAIL = "craig@oscengineering.com";

interface ContactBody {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  role?: string;
  message?: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, company, email, phone, role, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const html = `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#f1f5f9;margin:0;padding:24px;color:#0f172a;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
    <div style="background:#0ea5e9;color:#fff;padding:20px 24px;">
      <h1 style="margin:0;font-size:20px;font-weight:700;">New site assessment inquiry</h1>
      <p style="margin:4px 0 0;opacity:0.9;font-size:13px;">From osc.fort-solutions.com</p>
    </div>
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;color:#64748b;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(name)}</td></tr>
        ${company ? `<tr><td style="padding:8px 0;color:#64748b;">Company / Org</td><td style="padding:8px 0;">${escapeHtml(company)}</td></tr>` : ""}
        ${role ? `<tr><td style="padding:8px 0;color:#64748b;">Role</td><td style="padding:8px 0;">${escapeHtml(role)}</td></tr>` : ""}
        <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#0ea5e9;">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:8px 0;color:#64748b;">Phone</td><td style="padding:8px 0;"><a href="tel:${escapeHtml(phone)}" style="color:#0ea5e9;">${escapeHtml(phone)}</a></td></tr>` : ""}
      </table>

      <h2 style="margin:24px 0 8px;font-size:14px;text-transform:uppercase;letter-spacing:0.04em;color:#64748b;">Message</h2>
      <div style="background:#f8fafc;padding:16px;border-radius:8px;border-left:3px solid #0ea5e9;white-space:pre-wrap;line-height:1.55;">${escapeHtml(message)}</div>

      <p style="margin-top:24px;font-size:12px;color:#94a3b8;">
        Reply directly to this email to respond to ${escapeHtml(name)}.
      </p>
    </div>
  </div>
</body></html>`;

    const plain = `New site assessment inquiry from osc.fort-solutions.com

Name: ${name}
${company ? `Company / Org: ${company}\n` : ""}${role ? `Role: ${role}\n` : ""}Email: ${email}
${phone ? `Phone: ${phone}\n` : ""}
Message:
${message}

Reply directly to this email to respond to ${name}.`;

    const result = await resend.emails.send({
      from: `OSC Engineering Site <${FROM_EMAIL}>`,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `Site assessment inquiry — ${name}${company ? ` (${company})` : ""}`,
      text: plain,
      html,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
