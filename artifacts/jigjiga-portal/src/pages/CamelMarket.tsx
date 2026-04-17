import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "landmarks/camel-market")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Clock, MapPin, Camera, Quote } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Outskirts of the city — a short bajaj (auto-rickshaw) ride away" },
  { icon: <Clock className="w-4 h-4" />, label: "Best Time", value: "7:00 AM – 10:00 AM when trading is most intense and temperature is cool" },
  { icon: <Camera className="w-4 h-4" />, label: "Photography", value: "Camels welcome — ask permission before close-up shots of the traders" },
  { icon: <span className="text-base leading-none">🥛</span>, label: "The Milk Test", value: "Try fresh Caano Geel (camel milk) on the outskirts — Jigjiga's true energy drink" },
];

const tradeDetails = [
  { emoji: "🤝", title: "The Handshake Deal", description: "Traders negotiate through coded hand signals under a cloth to keep the price secret from competitors — a centuries-old tradition." },
  { emoji: "👁️", title: "The Judgment", description: "Buyers assess the size of the hump (fat storage = health indicator), the strength of the legs, and the texture of the coat." },
  { emoji: "🔥", title: "The Branding (Sumad)", description: "Each camel is marked with a unique tribal or family brand burned into its skin, telling the story of its origin and lineage." },
];

const camelSignificance = [
  { num: "01", title: "Wealth", description: "A family's status and respect in the community is often measured by the number of camels they own." },
  { num: "02", title: "Survival", description: "In the semi-arid landscape surrounding Jigjiga, the camel is the only animal that provides milk and transport through long droughts." },
  { num: "03", title: "Culture", description: "The camel is the subject of the most famous Somali poems and songs — a symbol of nobility, patience, and endurance." },
];

const sensoryExperience = [
  { emoji: "👁️", label: "The Sight", description: "A horizon filled with hundreds of camels, dusty plains, and traders in colorful Macawiis (sarongs) and turbans." },
  { emoji: "👂", label: "The Sound", description: "The deep grumbling of camels mixed with loud, rhythmic chanting of traders as they call out prices." },
  { emoji: "👅", label: "The Taste", description: "Fresh Caano Geel (camel milk) served in traditional smoked wooden vessels on the outskirts — unlike anything you've tasted." },
];

const beyondCamels = [
  { emoji: "🔔", name: "Traditional Gear", description: "Hand-carved wooden bells (Koor), intricate ropes, and woven camel saddles — tools of the nomadic trade." },
  { emoji: "👡", name: "Nomadic Fashion", description: "High-quality leather sandals and traditional Bakoorad sticks used by herders across the region." },
  { emoji: "🐑", name: "Full Livestock", description: "Thousands of goats, sheep, and cattle trade alongside the camels — one of the Horn's largest livestock hubs." },
];

export default function CamelMarket() {
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

      {/* HERO */}
      <section className="relative pt-24 min-h-[78vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImageUrl} alt="Hundreds of camels at the Jigjiga Camel Market at sunrise" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/55 to-slate-900/10" />
          <div className="absolute inset-0 bg-amber-900/20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/landmarks" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Landmarks
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Markets &amp; Local Life</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-amber-600 text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Market &amp; Landmark</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Jigjiga<br />Camel Market</h1>
            <p className="text-xl sm:text-2xl text-amber-400 font-bold font-script">The Pulse of the Desert</p>
          </motion.div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-amber-400 shrink-0">{fact.icon}</div>
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
              <div className="w-10 h-1 bg-amber-500 rounded-full mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Largest Livestock Hub in the Horn</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Jigjiga's camel market is legendary. As one of the largest livestock trading centers in East Africa, it serves as a massive crossroads for traders coming from across the Somali Region, Somaliland, and deeper into the Ethiopian highlands. On any given day, thousands of camels are brought here, creating a sea of humps and a symphony of sounds you won't find anywhere else on Earth. It is not just a marketplace — it is a living museum of nomadic civilization.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="https://picsum.photos/seed/camel-herd-jigjiga/800/500" alt="A sea of camels at the Jigjiga market" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ART OF THE TRADE */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-amber-500 mb-2">Farshaxanka Ganacsiga</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">The Art of the Trade</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-xl mx-auto">Watching a deal happen at the camel market is like watching a masterclass in negotiation.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tradeDetails.map((detail, i) => (
              <motion.div key={detail.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <span className="text-4xl block mb-4">{detail.emoji}</span>
                <h3 className="text-lg font-black text-foreground mb-3">{detail.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{detail.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE GOLD */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-amber-400 mb-2">Dahab Cad</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white">Why the Camel is "White Gold"</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mt-4 max-w-xl mx-auto">To understand this landmark, you must understand the animal.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {camelSignificance.map((item, i) => (
              <motion.div key={item.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <span className="text-4xl font-black text-amber-400/30 block mb-2">{item.num}</span>
                <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SENSORY EXPERIENCE */}
      <section className="py-16 sm:py-20 bg-amber-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-white/80 mb-2">Dareen Buuxa</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white">The Sensory Experience</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sensoryExperience.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white/15 border border-white/20 rounded-2xl p-8 text-center backdrop-blur-sm">
                <span className="text-4xl block mb-3">{s.emoji}</span>
                <h3 className="text-lg font-black text-white mb-3">{s.label}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND CAMELS */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <div className="w-10 h-1 bg-amber-500 rounded-full mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Market Beyond Camels</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-8">While camels are the stars, the market also hosts thousands of goats, sheep, and cattle. Surrounding the livestock area is a secondary market where you can buy the tools and fashion of the nomadic trade.</p>
              <div className="space-y-4">
                {beyondCamels.map((item) => (
                  <div key={item.name} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-black text-foreground mb-0.5">{item.name}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="https://picsum.photos/seed/nomadic-gear-market/800/500" alt="Traditional nomadic gear and tools at the Jigjiga market" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-amber-400 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-amber-400 font-bold text-lg">— Suuqa Geela, Jigjiga</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Landmarks</h2>
          <p className="text-white/80 mb-8 text-lg">Mosques, mountains, and markets — Jigjiga's icons await.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/landmarks" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-amber-700 font-black rounded-full hover:bg-amber-50 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Landmarks
            </Link>
            <Link href="/landmarks/karamara-mountains" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 border border-white/40 text-white font-black rounded-full hover:bg-white/30 transition-colors">
              Karamara Mountains →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
