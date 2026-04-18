import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Scale, TreePine, Users, Shield, Quote } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/xeer-system")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Scale className="w-4 h-4" />, label: "Type of Law", value: "Customary / Oral Tradition" },
  { icon: <Shield className="w-4 h-4" />, label: "Primary Goal", value: "Peace, Consensus, and Compensation" },
  { icon: <TreePine className="w-4 h-4" />, label: "Key Venue", value: "Under the Shade of the Acacia Tree" },
  { icon: <Users className="w-4 h-4" />, label: "The Judges", value: "The Odayaal — Council of Elders" },
];

const DEFAULT_SECTIONS = [
  {
    title: "The Foundation of Somali Justice",
    body: "The Xeer (pronounced HAY-er) is one of the oldest polycentric legal systems in the world. Long before modern courts and written constitutions, the Somali people developed this sophisticated system of customary law. It is not written in books; instead, it is passed down through generations in the minds of the elders. It is the \"social contract\" that keeps families, clans, and the entire city of Jigjiga in a state of peace and mutual respect.",
    image: "https://picsum.photos/seed/xeer-justice/800/500",
    imageAlt: "Somali elders gathering for justice",
  },
  {
    title: "The Power of the Great Tree (Geedka Shirka)",
    body: "The Xeer does not take place in a cold, stone building. Traditionally, justice happens under the shade of a large tree, known as the Geedka Shirka. Here, there are no professional lawyers; instead, the elders from different families sit together in a circle. In this space, every man is equal, and the goal is not just to \"punish\" but to reach a consensus that restores balance to the community.",
    image: "https://picsum.photos/seed/geedka-shirka/800/500",
    imageAlt: "A great acacia tree — the traditional court of the Xeer",
  },
  {
    title: "Compensation Over Prison: The \"Diya\" Concept",
    body: "Unlike Western law, which often focuses on jail time, the Xeer focuses on Restorative Justice. One of its most famous pillars is Diya (blood money). If a crime is committed, the offender's family or clan pays compensation to the victim's family. This prevents cycles of revenge and ensures that the victim is supported while the offender is held accountable by their own community.",
    image: "https://picsum.photos/seed/diya-compensation/800/500",
    imageAlt: "Community gathering and reconciliation",
  },
  {
    title: "The Protectors of the Law: The Odayaal (Elders)",
    body: "The judges of the Xeer are the Odayaal — respected elders chosen for their wisdom, knowledge of history, and fair-mindedness. They are the living libraries of the law. When a dispute arises over land, water, or business in Jigjiga, the Odayaal use their deep understanding of the Xeer to negotiate a solution that satisfies both sides, ensuring that no one leaves the \"Tree\" feeling cheated.",
    image: "https://picsum.photos/seed/odayaal-elders/800/500",
    imageAlt: "Respected Somali elders — the Odayaal",
  },
  {
    title: "Xeer in the Modern World",
    body: "In a modern city like Jigjiga, you might think the Xeer is a thing of the past — but it is more alive than ever. Even today, the modern legal system often works alongside the Xeer. Major community issues are frequently settled by the \"Guurti\" (Council of Elders) because the people trust the wisdom of the Xeer to provide lasting peace that a modern courtroom sometimes cannot. It is the heartbeat of Somali stability.",
    image: "https://picsum.photos/seed/modern-jigjiga-city/800/500",
    imageAlt: "Modern Jigjiga city where ancient Xeer still guides justice",
  },
];

export default function XeerSystem() {

  const content = usePageContent(PAGE_META.id, PAGE_META.defaults);
  const heroImageUrl = content.heroImageUrl ?? "";
  const pullQuote = content.pullQuote ?? "";
  const sections = content.sections?.length ? content.sections.map(s => ({ ...s, image: s.imageUrl })) : DEFAULT_SECTIONS;


  const navLinks = [
    { label: "Explore City", href: "/#explore-city" },
    { label: "News", href: "/#news" },
    { label: "Culture", href: "/history-culture" },
    { label: "Tech Hub", href: "/#tech-hub" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── HEADER ── */}
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 15% 50%, rgba(249,115,22,0.15) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(37,99,235,0.22) 0%, transparent 55%)" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 w-full text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6">
            <Link href="/history-culture"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Governance &amp; Heritage</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">
              Customary Law
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              The Xeer System
            </h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">
              The Unwritten Constitution
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK FACTS STRIP ── */}
      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-[#f97316] shrink-0">{fact.icon}</div>
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{fact.label}</p>
                  <p className="text-white text-sm font-semibold leading-snug">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE SECTIONS ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <motion.div variants={fadeUp} className={"text-center lg:text-left " + (i % 2 === 1 ? "lg:col-start-2" : "")}>
                  <div className="w-10 h-1 bg-[#f97316] rounded-full mb-5 mx-auto lg:mx-0" />
                  <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">{sec.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{sec.body}</p>
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className={`overflow-hidden rounded-2xl shadow-lg ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <img src={sec.image} alt={sec.imageAlt}
                    className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOMALI PROVERB ── */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-[#f97316] mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl font-black text-white leading-relaxed mb-4 italic">
            {pullQuote}
          </blockquote>
          <p className="text-white/60 text-base mb-4">
            "Law is tied, and the rope is untied." — Law provides the structure for freedom.
          </p>
          <p className="text-[#f97316] font-bold">— Somali Proverb</p>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More History &amp; Culture</h2>
          <p className="text-white/80 mb-8 text-lg">Discover the traditions and heritage that shaped Jigjiga into the city it is today.</p>
          <Link href="/history-culture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
