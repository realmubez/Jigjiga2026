import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "landmarks/karamara-mountains")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Mountain, Thermometer, Clock, Quote, ArrowUpRight } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Mountain className="w-4 h-4" />, label: "Elevation", value: "~2,000 meters above sea level" },
  { icon: <ArrowLeft className="w-4 h-4" />, label: "Location", value: "10–15 kilometers west of Jigjiga city center" },
  { icon: <Clock className="w-4 h-4" />, label: "Best for Photos", value: "Sunrise — light turns the eastern rock face into glowing orange-red" },
  { icon: <Thermometer className="w-4 h-4" />, label: "The Air", value: "Noticeably cooler and thinner than in the city — bring a light layer" },
];

const historyItems = [
  {
    emoji: "⚔️",
    title: "The Dervish Resistance",
    description: "Sayid Mohamed Abdullah Hassan and his forces used the rugged terrain and hidden caves of Karamara as a natural fortress to launch campaigns and evade colonial pursuit across the region.",
  },
  {
    emoji: "🪖",
    title: "The 1977 Conflict",
    description: "The mountains saw some of the most intense tank and artillery battles in modern African history. Today, remnants of old fortifications remain as a silent museum of the region's resilience.",
  },
  {
    emoji: "🏰",
    title: "A Natural Fortress",
    description: "Throughout history, every major force that sought to control the region first had to control Karamara — the gateway between the Ethiopian plateau and the vast Somali plains.",
  },
];

const adventureItems = [
  { emoji: "🥾", title: "The Hike", description: "Local herder trails lead to the summits — a challenging but rewarding climb offering fresh air and total silence, far from the city's bajaj horns." },
  { emoji: "🦅", title: "Wildlife", description: "Indigenous birds of prey soar on the thermals. Smaller mountain mammals call these rocky outcrops home. Bring binoculars." },
  { emoji: "🌿", title: "Rainy Season", description: "During Gu (rainy season), the entire range transforms into vibrant, emerald green — a stunning contrast to the dry savannah below." },
];

export default function KararaMountains() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const content = usePageContent(PAGE_META.id, PAGE_META.defaults);
  const heroImageUrl = content.heroImageUrl ?? "";
  const pullQuote = content.pullQuote ?? "";


  const navLinks = [
    { label: "Explore City", href: "/#explore-city" },
    { label: "News", href: "/#news" },
    { label: "Culture", href: "/history-culture" },
    { label: "Tech Hub", href: "/#tech-hub" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm" : "bg-white/80 backdrop-blur-md py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-0 group outline-none shrink-0">
              <LogoImg />
              <span className="text-base sm:text-lg font-black tracking-tight text-foreground -ml-4">IGJIGA</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors whitespace-nowrap">{item.label}</Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="https://business.jigjiga.net" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors">Business Services</a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 mt-3 flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-1.5 text-gray-600">{item.label}</Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO — panoramic mountain road */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 15% 50%, rgba(20,184,166,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(37,99,235,0.2) 0%, transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/landmarks" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Landmarks
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Natural Wonders</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-stone-600 text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Natural Wonder</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Karamara<br />Mountains</h1>
            <p className="text-xl sm:text-2xl text-orange-300 font-bold font-script">The Sentinel of the Plains</p>
          </motion.div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-orange-300 shrink-0">{fact.icon}</div>
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{fact.label}</p>
                  <p className="text-white text-sm font-semibold leading-snug">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <div className="w-10 h-1 bg-stone-500 rounded-full mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Guardian of Jigjiga</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Rising majestically to the west of the city, the Silsiladda Karamara (Karamara Range) is the first thing you see as you approach Jigjiga. These mountains act as a natural gateway between the high Ethiopian plateau and the vast, low-lying Somali plains. For the people of Jigjiga, Karamara is not just a geographical feature — it is a symbol of strength and protection that has watched over the city for centuries. Many local poems and songs mention it as "the mountain of clouds" that brings the rain to the thirsty plains below.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="https://picsum.photos/seed/karamara-jigjiga-view/800/500" alt="The panoramic view of Jigjiga from the Karamara Mountains" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NATURAL BEAUTY */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="https://picsum.photos/seed/karamara-acacia-green/800/500" alt="The acacia-covered slopes of Karamara in the rainy season" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="w-10 h-1 bg-stone-500 rounded-full mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">A Landscape of Natural Beauty</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6">
                Karamara offers a stark and beautiful contrast to the flat savannahs that surround it. The air here is noticeably cooler and thinner than in the city. The slopes are covered in hardy acacia trees and, during the rainy season (Gu), the entire range transforms into a vibrant emerald green. From the highest points of the pass, you can see the entire layout of Jigjiga spreading out like a map — on a clear day, the view stretches for dozens of kilometers across the border toward the horizon of the Horn of Africa.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-orange-300 mb-2">Taariikh & Dagaal</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white">The Fortress of History</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mt-4 max-w-xl mx-auto">Often called the "Stalingrad of the East" — these mountains decided the fate of the region more than once.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {historyItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <span className="text-4xl block mb-4">{item.emoji}</span>
                <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVENTURE */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Safar & Hawlgal</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">Hiking &amp; Adventure</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-xl mx-auto">For the modern visitor, Karamara is the best place for outdoor adventure in the Somali Region.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {adventureItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-slate-50 rounded-2xl p-8 text-center">
                <span className="text-4xl block mb-4">{item.emoji}</span>
                <h3 className="text-lg font-black text-foreground mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/karamara-sunset-silhouette/1600/700" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-orange-300 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-orange-300 font-bold text-lg">— Somali Folklore, Jigjiga</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More of Jigjiga</h2>
            <p className="text-white/60 text-lg">Mosques, markets, history, and food — all connected.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/landmarks" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f97316] text-white font-black rounded-full hover:bg-[#f97316]/90 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Landmarks
            </Link>
            <Link href="/landmarks/central-mosque" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-colors">
              Central Mosque <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/landmarks/camel-market" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-colors">
              Camel Market <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
