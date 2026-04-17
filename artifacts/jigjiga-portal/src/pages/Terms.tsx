import React from "react";
import { Link } from "wouter";
import { ArrowLeft, FileText } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing and using Jigjiga.net, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website. These terms apply to all visitors, users, and others who access or use the service.`,
  },
  {
    title: "2. Use of the Website",
    body: `Jigjiga.net is provided for informational, cultural, and community purposes. You may browse, share, and reference content for personal and non-commercial use, provided you give appropriate credit to Jigjiga.net. You may not reproduce large portions of content for commercial purposes without written permission.`,
  },
  {
    title: "3. Content Accuracy",
    body: `We strive to ensure all information on Jigjiga.net is accurate and up to date. However, we make no warranties or guarantees about the completeness, reliability, or accuracy of any content. Historical, cultural, and business information is provided in good faith based on available sources.`,
  },
  {
    title: "4. Business Listings",
    body: `Businesses listed on Jigjiga.net are responsible for ensuring their own information is accurate. Jigjiga.net does not endorse or guarantee the quality of any listed business. Users should exercise their own judgement when making decisions based on business listing information.`,
  },
  {
    title: "5. User-Submitted Content",
    body: `If you submit reviews, comments, or other content, you grant Jigjiga.net a non-exclusive, royalty-free licence to use, display, and distribute that content on the platform. You represent that you own the content or have the right to share it. We reserve the right to remove any content that violates these terms or is deemed inappropriate.`,
  },
  {
    title: "6. Prohibited Activities",
    body: `You may not use Jigjiga.net to: distribute spam or unsolicited messages; attempt to hack, disrupt, or gain unauthorised access to the website or its systems; post content that is defamatory, discriminatory, or illegal; or impersonate any individual or organisation.`,
  },
  {
    title: "7. Links to Third-Party Websites",
    body: `Jigjiga.net may contain links to external websites, such as business.jigjiga.net or social media platforms. We are not responsible for the content or privacy practices of those sites. Accessing external links is at your own risk.`,
  },
  {
    title: "8. Limitation of Liability",
    body: `To the fullest extent permitted by law, Jigjiga.net and its operators shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or reliance on its content. Your use of the site is at your own risk.`,
  },
  {
    title: "9. Intellectual Property",
    body: `All original content on Jigjiga.net — including written articles, design elements, and editorial work — is the intellectual property of Jigjiga.net. The Jigjiga.net name and logo are proprietary. Cultural content is published respectfully with intent to celebrate Somali and Ethiopian heritage.`,
  },
  {
    title: "10. Changes to Terms",
    body: `We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of the website constitutes your acceptance of the revised terms. We encourage you to review this page periodically.`,
  },
  {
    title: "11. Governing Law",
    body: `These Terms of Service are governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia. Any disputes shall be subject to the jurisdiction of the courts of the Somali Regional State.`,
  },
  {
    title: "12. Contact",
    body: `For any questions regarding these Terms of Service, please contact us at info@jigjiga.net.`,
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-sm font-bold text-primary hover:underline">Jigjiga.net</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-semibold text-gray-500">Terms of Service</span>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#0f1f4b] to-[#1a3270] py-16 px-4 text-white text-center">
        <FileText className="w-12 h-12 mx-auto mb-4 text-blue-300" />
        <h1 className="text-4xl font-black mb-3">Terms of Service</h1>
        <p className="text-blue-200 text-sm">Last updated: January 2024</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-10">
          <p className="text-blue-800 text-sm font-semibold leading-relaxed">
            Please read these Terms of Service carefully before using Jigjiga.net. These terms govern your use of the website and all its content and services.
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
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
        </div>
        <p className="text-xs text-gray-300 mt-4">© 2024 Jigjiga.net</p>
      </footer>
    </div>
  );
}
