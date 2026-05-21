// Endless Vitality Email Service - Resend Integration (direct fetch, no SDK)

export const emailConfig = {
  fromEmail: process.env.RESEND_FROM_EMAIL || "noreply@fortwrestling.com",
  fromName: "Endless Vitality",
  replyTo: "jnance@endlessvitality.com",
};

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

export interface EmailAttachment {
  filename: string;
  content: Buffer | string;
  contentType?: string;
}

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  tags?: Array<{ name: string; value: string }>;
  attachments?: EmailAttachment[];
}

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export async function sendEmail(
  options: EmailOptions
): Promise<SendEmailResult> {
  if (!isEmailConfigured()) {
    console.warn(
      "Email service not configured. Email not sent:",
      options.subject
    );
    return { success: false, error: "Email service not configured" };
  }

  try {
    const apiKey = process.env.RESEND_API_KEY!;
    const payload: Record<string, unknown> = {
      from: `${emailConfig.fromName} <${emailConfig.fromEmail}>`,
      to: Array.isArray(options.to) ? options.to : [options.to],
      subject: options.subject,
      html: options.html,
      text: options.text,
      reply_to: options.replyTo || emailConfig.replyTo,
      tags: options.tags,
    };

    if (options.attachments?.length) {
      payload.attachments = options.attachments.map((a) => ({
        filename: a.filename,
        content:
          typeof a.content === "string"
            ? a.content
            : a.content.toString("base64"),
      }));
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, messageId: data.id };
    } else {
      const errorText = await response.text();
      console.error("Email send error:", response.status, errorText);
      return { success: false, error: errorText };
    }
  } catch (error) {
    console.error("Email send exception:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
