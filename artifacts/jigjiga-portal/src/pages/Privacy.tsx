import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Shield } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    body: `We collect information you voluntarily provide when using our contact form, subscribing to updates, or listing a business on Jigjiga.net. This may include your name, email address, and the content of your message. We do not automatically collect personal data simply from browsing the website.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `Information you provide is used solely to respond to your enquiry, send relevant city updates you have opted into, or manage your business listing. We do not sell, trade, or rent your personal data to any third party.`,
  },
  {
    title: "3. Cookies",
    body: `Jigjiga.net uses minimal cookies necessary for the website to function correctly, such as language preference and session identifiers. We do not use advertising or tracking cookies. You may disable cookies in your browser settings without affecting most of our content.`,
  },
  {
    title: "4. Third-Party Services",
    body: `We use trusted third-party services for images (such as placeholder image providers) and map embeds. These services may set their own cookies. We encourage you to review their privacy policies. We do not share your personal data with these services.`,
  },
  {
    title: "5. Data Security",
    body: `We take reasonable technical and administrative precautions to protect your information. However, no method of internet transmission is 100% secure. We encourage you not to share sensitive personal information through web forms.`,
  },
  {
    title: "6. Your Rights",
    body: `You have the right to request access to, correction of, or deletion of any personal data you have provided to us. To make such a request, please contact us at info@jigjiga.net. We will respond within 30 days.`,
  },
  {
    title: "7. Children's Privacy",
    body: `Jigjiga.net does not knowingly collect personal information from children under the age of 13. If you believe a child has provided us with personal data, please contact us immediately so we can remove it.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of the website after changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "9. Contact",
    body: `If you have any questions about this Privacy Policy, please contact us at info@jigjiga.net or visit our Contact page.`,
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-sm font-bold text-primary hover:underline">Jigjiga.net</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-semibold text-gray-500">Privacy Policy</span>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#0f1f4b] to-[#1a3270] py-16 px-4 text-white text-center">
        <Shield className="w-12 h-12 mx-auto mb-4 text-blue-300" />
        <h1 className="text-4xl font-black mb-3">Privacy Policy</h1>
        <p className="text-blue-200 text-sm">Last updated: January 2024</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-10">
          <p className="text-blue-800 text-sm font-semibold leading-relaxed">
            Your privacy is important to us. Jigjiga.net is committed to being transparent about how we collect, use, and protect your information. This policy explains our practices in plain language.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map(({ title, body }) => (
            <div key={title}>
              <h2 className="text-xl font-black text-gray-900 mb-3">{title}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
        </div>
        <p className="text-xs text-gray-300 mt-4">© 2024 Jigjiga.net</p>
      </footer>
    </div>
  );
}
