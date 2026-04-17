import React, { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Mail, Globe, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSent(true);
      setSending(false);
    }, 800);
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-sm font-bold text-primary hover:underline">Jigjiga.net</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-semibold text-gray-500">Contact Us</span>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#0f1f4b] via-[#1a3270] to-[#2563eb] py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-blue-300" />
          <h1 className="text-4xl sm:text-5xl font-black mb-3">Contact Us</h1>
          <p className="text-blue-200 text-lg">We'd love to hear from you — residents, visitors, businesses, and developers welcome.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-black text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether you have a question about the city, want to list your business, report an issue, or collaborate with us — we're here.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "info@jigjiga.net" },
                { icon: Globe, label: "Website", value: "jigjiga.net" },
                { icon: MapPin, label: "Location", value: "Jigjiga, Somali Region, Ethiopia" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
              <p className="text-xs font-black text-orange-600 uppercase tracking-wider mb-1">Business Enquiries</p>
              <p className="text-sm text-orange-700 font-medium">
                To list your business or advertise on Jigjiga.net, visit{" "}
                <a href="https://business.jigjiga.net" target="_blank" rel="noopener noreferrer" className="font-bold underline">business.jigjiga.net</a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-primary font-bold text-sm hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input type="text" required placeholder="Your name" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" required placeholder="your@email.com" value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Subject</label>
                  <input type="text" required placeholder="What's this about?" value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea required rows={7} placeholder="Tell us what's on your mind…" value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button type="submit" disabled={sending}
                  className="flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-black text-sm shadow-lg shadow-primary/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:translate-y-0">
                  <Send className="w-4 h-4" />
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
        </div>
        <p className="text-xs text-gray-300 mt-4">© 2024 Jigjiga.net</p>
      </footer>
    </div>
  );
}
