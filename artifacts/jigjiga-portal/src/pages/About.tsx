import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Globe, Heart, Building2, Users, Code2, ShoppingBag, MapPin, Mail } from "lucide-react";

const pillars = [
  { icon: Users, title: "For Visitors & Tourists", desc: "Discover Jigjiga's landmarks, culture, cuisine, and heritage through rich, locally curated content — your complete travel companion.", color: "bg-blue-50 text-blue-600" },
  { icon: ShoppingBag, title: "For Small Businesses", desc: "List your business, reach more customers, and access tools that help you grow in Jigjiga's fast-moving economy.", color: "bg-orange-50 text-orange-500" },
  { icon: Code2, title: "For Developers", desc: "We are building the digital infrastructure of a modern city. Developers can contribute, integrate, and innovate on top of Jigjiga.net.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Building2, title: "For the Community", desc: "Stay informed with official city news, local events, and public services. We serve every resident of the Somali Region.", color: "bg-purple-50 text-purple-600" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-sm font-bold text-primary hover:underline">Jigjiga.net</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-semibold text-gray-500">About</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f4b] via-[#1a3270] to-[#2563eb] py-20 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/20">
            <Globe className="w-4 h-4" /> Official City Portal
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">About Jigjiga.net</h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-xl mx-auto">
            The official digital gateway for Jigjiga — the heart of the Somali Region of Ethiopia.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Jigjiga.net is the <strong>official digital home of Jigjiga city</strong> — a platform built to connect residents, empower businesses, celebrate culture, and welcome the world to one of Ethiopia's most vibrant and fast-growing cities.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are not just a website. We are a living digital city — a place where ancient Somali heritage meets modern ambition, and where every resident, visitor, entrepreneur, and developer can find something valuable.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From the breathtaking Karamara Mountains to the bustling Jigjiga camel market, from traditional Dhaanto music to cutting-edge tech startups — we tell the full story of Jigjiga.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">Who We Serve</h2>
          <p className="text-gray-500 text-center mb-10">Jigjiga.net is built for everyone</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City quote */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <blockquote className="border-l-4 border-[#f97316] pl-6 py-2">
          <p className="text-2xl font-black text-gray-900 italic leading-relaxed">
            "Jigjiga is a city of courage, community, and culture. This portal is our way of sharing that story with the world."
          </p>
          <cite className="text-gray-400 text-sm font-semibold mt-3 block">— Jigjiga.net Editorial Team</cite>
        </blockquote>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-br from-[#0f1f4b] to-[#2563eb] py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-10 h-10 mx-auto mb-4 text-orange-400" />
          <h2 className="text-3xl font-black mb-4">Get in Touch</h2>
          <p className="text-blue-200 mb-8">Have a question, want to collaborate, or want to add your business? We'd love to hear from you.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-3.5 rounded-full font-black hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
            <Mail className="w-4 h-4" /> Contact Us
          </Link>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="border-t border-gray-100 py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
        </div>
        <p className="text-xs text-gray-300 mt-4">© 2024 Jigjiga.net</p>
      </footer>
    </div>
  );
}
