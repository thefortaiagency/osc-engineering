import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "OSC Engineering privacy policy. How we handle inquiries, project communications, and the information you share with us.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 prose prose-slate">
      <h1>Privacy Policy</h1>
      <p>
        OSC Engineering (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to
        protecting the privacy of the people and organizations that contact us.
      </p>

      <h2>What we collect</h2>
      <p>
        When you submit a contact form, call us, or engage us for a project, we collect the
        information you provide — name, organization, role, contact details, and any
        details about the site or question you describe.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your inquiry and scope a potential engagement.</li>
        <li>To perform the work you&rsquo;ve hired us for, including writing the technical report.</li>
        <li>To send follow-up communications about your project.</li>
      </ul>

      <h2>How we don&rsquo;t use it</h2>
      <ul>
        <li>We don&rsquo;t sell your information to third parties.</li>
        <li>We don&rsquo;t share project details with other clients, carriers, or vendors without your consent.</li>
        <li>We don&rsquo;t add you to marketing lists without permission.</li>
      </ul>

      <h2>Retention</h2>
      <p>
        Project files (reports, measurements, photos, communications) are retained for at
        least seven years to support insurer and regulatory inquiries. General inquiries
        that don&rsquo;t become projects are retained for one year.
      </p>

      <h2>Your rights</h2>
      <p>
        You can request a copy of your information, or ask us to delete it (subject to the
        retention requirements above), by emailing{" "}
        <a href="mailto:info@OSCengineering.com" className="text-red-600 hover:text-red-700">info@OSCengineering.com</a>.
      </p>

      <p className="text-sm text-slate-500 mt-12">Last updated: {new Date().getFullYear()}</p>
    </article>
  );
}
