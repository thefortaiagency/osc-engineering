import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "OSC Engineering terms of use for this website. Engineering services are governed by a separate signed agreement.",
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 prose prose-slate">
      <h1>Terms of Use</h1>
      <p>
        These terms cover use of the OSC Engineering website. Engineering services we
        provide are governed by a separately signed engagement agreement, which takes
        precedence over these terms for any matter related to a project.
      </p>

      <h2>Informational content</h2>
      <p>
        Content on this site — including discussions of FCC rules, RF compliance, and
        worker safety — is provided for general informational purposes. It is not a
        substitute for a site-specific compliance study or a written engineering opinion.
        Decisions about a specific site should be based on a project we&rsquo;ve scoped
        and delivered, not on a website article.
      </p>

      <h2>No engineering opinion via contact form</h2>
      <p>
        Submitting a contact form does not create an engineer-client relationship. We may
        ask follow-up questions, scope the work, and provide a written agreement before
        any project begins.
      </p>

      <h2>External links</h2>
      <p>
        We link to FCC, OSHA, ANSI/IEEE, and other authoritative sources for your
        convenience. We don&rsquo;t control those sites and aren&rsquo;t responsible for
        their content.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        OSC Engineering provides this website &ldquo;as is&rdquo; without warranties of
        any kind. We&rsquo;re not liable for indirect, incidental, or consequential
        damages from your use of the site.
      </p>

      <p className="text-sm text-slate-500 mt-12">Last updated: {new Date().getFullYear()}</p>
    </article>
  );
}
