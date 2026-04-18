import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Home, Users, Layers, Clock, Quote } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/somali-aqal")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Home className="w-4 h-4" />, label: "Structure", value: "Portable dome-shaped frame" },
  { icon: <Users className="w-4 h-4" />, label: "Primary Builders", value: "Somali Women" },
  { icon: <Layers className="w-4 h-4" />, label: "Materials", value: "Flexible wood, hand-woven mats (Kebbed), and fiber ropes" },
  { icon: <Clock className="w-4 h-4" />, label: "Key Feature", value: "Can be packed onto a single camel in less than two hours" },
];

const interiorItems = [
  { emoji: "🫙", title: "The Haan", description: "Beautifully carved wooden vessels hanging from the frame, used for storing milk and water." },
  { emoji: "🎨", title: "Decoration", description: "Brightly dyed wool and intricate weaving patterns that tell the story of the family's heritage." },
  { emoji: "🪔", title: "The Aroma", description: "The inside is often perfumed with Uunsi (traditional incense), creating a welcoming and peaceful atmosphere." },
];

const DEFAULT_SECTIONS = [
  {
    title: "The Home of the Nomad",
    body: "The Aqal Soomaali is more than just a tent; it is a sophisticated, portable home that has sheltered Somali families for thousands of years. Designed to be built, taken apart, and transported on the back of a camel within hours, the Aqal is the ultimate symbol of the nomadic spirit. It represents a perfect harmony between human ingenuity and the harsh, beautiful environment of the Somali Region.",
    image: "https://picsum.photos/seed/somali-aqal-nomad/800/500",
    imageAlt: "A Somali Aqal standing in the open plains near Jigjiga",
  },
  {
    title: "The Architecture of Women",
    body: "In Somali culture, the Aqal is traditionally the domain and masterpiece of women. It is the women who gather the materials, weave the mats, and engineer the structure. From a young age, girls learn the art of house-building from their mothers, ensuring that this vital skill is passed down through generations. When a woman marries, her family often helps her build her first Aqal as a gift of independence and security.",
    image: "https://picsum.photos/seed/aqal-women-builders/800/500",
    imageAlt: "Somali women weaving mats and building an Aqal",
  },
  {
    title: "How it is Built: Strength and Flexibility",
    body: "The structure of an Aqal is a dome-shaped frame made from flexible wooden branches (Ugaas). These branches are treated with fire and water to bend them into the perfect curve. The frame is tied together using strong handmade ropes made from tree fibers, then covered with Kebbed (heavy hand-woven mats) and Caws (finer decorative mats). These materials are incredible insulators — keeping the interior cool during scorching midday heat and trapping warmth during the chilly desert nights.",
    image: "https://picsum.photos/seed/aqal-construction/800/500",
    imageAlt: "The dome-shaped wooden frame of a Somali Aqal under construction",
  },
  {
    title: "A Symbol of Hospitality",
    body: "The Aqal is where the famous Somali hospitality is born. No matter how little a nomadic family has, a guest is always welcomed into the shade of the Aqal, offered a seat on a woven mat, and served fresh camel milk. Even as many people move into modern stone houses in the center of Jigjiga, the image of the Aqal remains a powerful reminder of our roots — a home that is light enough to carry, but strong enough to survive the desert winds.",
    image: "https://picsum.photos/seed/aqal-hospitality/800/500",
    imageAlt: "Guests welcomed inside a beautifully decorated Aqal",
  },
  {
    title: "Preserving the Tradition",
    body: "Today, you can still see traditional Aqals in the rural areas surrounding Jigjiga. In the city itself, the Aqal is often featured in cultural festivals and tourist centers to show visitors the roots of Somali architecture. It stands as a testament to a lifestyle that values freedom, movement, and deep respect for the natural world.",
    image: "https://picsum.photos/seed/aqal-festival/800/500",
    imageAlt: "A traditional Aqal on display at a Jigjiga cultural festival",
  },
];

export default function SomaliAqal() {

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
            <span className="text-white/60 text-sm">Arts &amp; Lifestyle</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">
              Nomadic Architecture
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
              The Somali Aqal
            </h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">
              A Masterpiece of Nomadic Engineering
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

      {/* ── INTERIOR DETAILS ── */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Life Inside</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">
              A Place of Order &amp; Beauty
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {interiorItems.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <span className="text-5xl block mb-4">{item.emoji}</span>
                <h3 className="text-lg font-black text-foreground mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
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

      {/* ── PULL QUOTE ── */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-[#f97316] mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-[#f97316] font-bold text-lg">— The Aqal Soomaali</p>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More History &amp; Culture</h2>
          <p className="text-white/80 mb-8 text-lg">Discover the legends, governance, and art forms that define Jigjiga.</p>
          <Link href="/history-culture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
