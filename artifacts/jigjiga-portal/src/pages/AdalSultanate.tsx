import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Globe, Sword, BookOpen, Landmark, Quote, ShieldCheck, Gem, BookMarked, Star } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/adal-sultanate")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.13 } } };

const quickFacts = [
  { icon: <Globe className="w-4 h-4" />, label: "Era", value: "13th – 16th Century" },
  { icon: <Landmark className="w-4 h-4" />, label: "Capital", value: "Zeila (Saylac)" },
  { icon: <Sword className="w-4 h-4" />, label: "Famous Leader", value: "Imam Ahmed ibn Ibrahim al-Ghazi (Gurey)" },
  { icon: <BookOpen className="w-4 h-4" />, label: "Legacy", value: "Islam, Classical Somali Language & Architecture" },
];

const SECTIONS = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    tag: "Medieval Power",
    title: "A Medieval Superpower",
    subtitle: "The Golden Age of the Horn",
    body: [
      "Long before the modern borders of today, the area surrounding Jigjiga was part of the Adal Sultanate — one of the most powerful Islamic empires in African history. Stretching from the shores of Zeila to the highlands of Ethiopia, Adal was a center of trade, religion, and military might that commanded respect across the Red Sea and the Indian Ocean.",
      "The Sultanate rose from the rich trading networks of the Somali coast and grew into an empire that united dozens of clans and peoples under a single, powerful banner. At its height, Adal was the dominant political force in the entire Horn of Africa, and its influence reached as far as the Arabian Peninsula and the Ottoman Empire.",
    ],
  },
  {
    icon: <Gem className="w-8 h-8" />,
    tag: "Trade & Commerce",
    title: "The Hub of Global Trade",
    subtitle: "Where Caravans Met the Sea",
    body: [
      "Jigjiga sat along the vital trade routes that connected the interior of Africa to the coastal ports. During the Adal era, caravans filled with gold, ivory, frankincense, and fine textiles passed through these very lands. The city was not just a waypoint — it was a marketplace, a meeting place of cultures, and a center of commerce that drew merchants from across the known world.",
      "This history of trade is what created the entrepreneurial spirit you still see in the markets of Jigjiga today. The traders of the Adal era built relationships with Arab merchants, Indian traders, and East African coastal communities — a tradition of openness and commerce that is baked into the identity of the city. The modern Taywan Market and the Berbera Corridor are the living descendants of these ancient trade routes.",
    ],
  },
  {
    icon: <Sword className="w-8 h-8" />,
    tag: "Military History",
    title: "The Legend of Ahmed Gurey",
    subtitle: "The Left-Handed Lion of the Horn",
    body: [
      "The most famous leader of the Adal Sultanate was Imam Ahmed ibn Ibrahim al-Ghazi, known throughout history and Somali oral tradition as \"Gurey\" — The Left-Handed. In the 16th century, he led one of the most extraordinary military campaigns in African history, unifying the diverse clans and peoples of the Somali Region under a single purpose.",
      "His bravery and strategic mind are still celebrated in Somali poetry and in the stories told by elders across the Somali Region. He is remembered not as a conqueror, but as a unifier — a man who saw beyond clan lines to a bigger vision of a shared people and a shared faith. His campaigns reshaped the political map of the Horn of Africa in ways that can still be felt today.",
    ],
  },
  {
    icon: <BookMarked className="w-8 h-8" />,
    tag: "Living Heritage",
    title: "The Legacy in Jigjiga",
    subtitle: "When an Empire Lives On",
    body: [
      "While the Sultanate eventually declined under the pressure of Portuguese naval power and internal challenges in the late 16th century, its legacy did not disappear — it was absorbed into the culture, faith, language, and architecture of the people who remained.",
      "Walk through Jigjiga today and you walk through the living legacy of the Adal Sultanate. The scholars in the mosques, the poets in the coffee houses, and the traders in the markets are all heirs to a civilization that once commanded one of the most powerful empires in Africa. The Golden Age of the Horn is not ancient history — it is the foundation upon which modern Jigjiga stands.",
    ],
  },
];

const LEGACY_PILLARS = [
  { icon: "🕌", title: "The Faith", body: "The deep-rooted Islamic traditions and scholars in the city trace directly to the Adal era. The great mosques of Jigjiga are a direct architectural and spiritual inheritance." },
  { icon: "📜", title: "The Language", body: "The classical Somali used in poetry and Islamic law was refined and standardized during the Adal period. The literary tradition of Jigjiga flows from this golden age." },
  { icon: "🏛️", title: "The Architecture", body: "The domes and arches of the city's modern mosques echo the Adal aesthetic. The builders of today are inspired by the craftsmen of the Sultanate." },
];

export default function AdalSultanate() {

  const content = usePageContent(PAGE_META.id, PAGE_META.defaults);
  const pullQuote = content.pullQuote ?? PAGE_META.defaults.pullQuote ?? "";

  const navLinks = [
    { label: "Explore City", href: "/#explore-city" },
    { label: "News", href: "/#news" },
    { label: "Culture", href: "/history-culture" },
    { label: "Tech Hub", href: "/tech-hub" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── HEADER ── */}
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(249,115,22,0.13) 0%, transparent 55%), radial-gradient(ellipse at 75% 15%, rgba(37,99,235,0.25) 0%, transparent 55%)" }} />
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 w-full text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6">
            <Link href="/history-culture"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Kingdoms &amp; Empires</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">
              Islamic Empire
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              The Adal<br />Sultanate
            </h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">
              The Golden Age of the Horn
            </p>
            <p className="text-white/50 text-sm mt-4 font-medium">13th – 16th Century · Zeila to the Ethiopian Highlands</p>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {SECTIONS.map((sec, i) => (
              <motion.div key={sec.title}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
                variants={stagger}
                className="relative">
                {/* Section number line */}
                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-[#f97316] shrink-0 shadow-lg">
                    {sec.icon}
                  </div>
                  <div>
                    <p className="text-[#f97316] text-xs font-black uppercase tracking-widest mb-0.5">{sec.tag}</p>
                    <div className="h-px w-24 bg-gradient-to-r from-[#f97316] to-transparent" />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">
                    {sec.title}
                  </h2>
                  <p className="text-primary font-semibold text-base">{sec.subtitle}</p>
                </motion.div>

                <div className="space-y-5">
                  {sec.body.map((para, pi) => (
                    <motion.p key={pi} variants={fadeUp}
                      className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {para}
                    </motion.p>
                  ))}
                </div>

                {/* Decorative divider between sections (not after last) */}
                {i < SECTIONS.length - 1 && (
                  <motion.div variants={fadeUp} className="mt-20 sm:mt-28 flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-100" />
                    <Star className="w-4 h-4 text-[#f97316]" />
                    <div className="flex-1 h-px bg-gray-100" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEGACY PILLARS ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
              <p className="text-[#f97316] font-black uppercase tracking-widest text-xs mb-3">Living Heritage</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">The Three Pillars of Adal's Legacy</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">The Sultanate is gone, but its three greatest gifts live on in every corner of Jigjiga.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {LEGACY_PILLARS.map((p, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-center">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-lg font-black text-foreground mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-[#f97316] mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-relaxed mb-6">
            {pullQuote}
          </blockquote>
          <p className="text-[#f97316] font-bold text-base">— Somali Oral Tradition</p>
        </div>
      </section>

      {/* ── EXPLORE MORE ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More History &amp; Culture</h2>
          <p className="text-white/80 mb-8 text-lg">Discover the legendary figures and living traditions that the Adal era gave birth to.</p>
          <Link href="/history-culture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
