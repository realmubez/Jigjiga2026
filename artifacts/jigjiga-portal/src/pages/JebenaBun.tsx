import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "eat-drink/jebena-bun")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Coffee, Quote } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { emoji: "🏺", label: "The Pot", value: "The Jebena is made of black clay, often decorated with intricate patterns" },
  { emoji: "☕", label: "The Flavor", value: "Deep, smoky, and earthy — served with sugar but never with milk" },
  { emoji: "👃", label: "The Etiquette", value: "It is polite to smell the roasting beans when passed around before grinding" },
  { emoji: "🏠", label: "The Symbolism", value: "A steaming Jebena on a table is a universal sign of \"Welcome\" in the Somali Region" },
];

const ceremonySteps = [
  { num: "01", emoji: "🔥", title: "The Roasting", description: "Green coffee beans are washed and placed on a flat iron pan over a charcoal stove (Buraaj), stirred until dark, oily, and aromatic." },
  { num: "02", emoji: "🌿", title: "The Uunsi", description: "While the beans roast, a piece of Uunsi (frankincense or myrrh) is placed on the coals. Sweet smoke fills the room, signaling to neighbors that coffee is ready." },
  { num: "03", emoji: "🪨", title: "The Grinding", description: "Roasted beans are ground by hand using a mortar and pestle (Madiqa). The rhythmic thump-thump of the grinding is part of the ceremony's music." },
  { num: "04", emoji: "🏺", title: "The Brewing", description: "Ground coffee is added to the Jebena — a handcrafted clay pot. Water is added and the pot is placed back on the coals to slowly boil." },
  { num: "05", emoji: "🫗", title: "The Pouring", description: "Once settled, coffee is poured from a height into tiny Sini cups. The height of the pour creates a light froth — a sign of a master brewer." },
];

const rounds = [
  { name: "Awel", meaning: "First Round", strength: "Strong & Bold", description: "The first and most powerful cup. It is served to the most honored guest first." },
  { name: "Tani", meaning: "Second Round", strength: "Medium", description: "More water is added to the Jebena. A gentler, slightly milder experience." },
  { name: "Baraka", meaning: "Blessing", strength: "Light", description: "The final round — the word means \"blessing.\" It is considered good luck to stay for all three." },
];

const pairings = [
  { emoji: "🍿", name: "Popcorn (Bilis)", description: "The most common companion. Light and salty, the perfect contrast to the dark, earthy coffee." },
  { emoji: "🌾", name: "Koolo", description: "Roasted barley or grains mixed with spices — a rustic, wholesome snack from the nomadic tradition." },
  { emoji: "🥟", name: "Fried Snacks", description: "Sambuus or small sweet fritters add a savory crunch to balance the coffee's bitterness." },
];

export default function JebenaBun() {
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
      <section className="relative pt-24 pb-8 overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 15% 50%, rgba(249,115,22,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(37,99,235,0.18) 0%, transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 w-full text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-3 mb-6">
            <Link href="/eat-drink" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Eat &amp; Drink
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Beverages</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Coffee Ceremony</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Jebena Bun</h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">The Art of the Coffee Ceremony</p>
          </motion.div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <span className="text-xl mt-0.5 shrink-0">{fact.emoji}</span>
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
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <div className="w-10 h-1 bg-[#f97316] rounded-full mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Soul of the Household</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                While tea is the drink of the bustling streets, Jebena Bun is the heart of the home. In Jigjiga, the coffee ceremony is a daily ritual — usually performed in the late afternoon — that brings family, neighbors, and friends together. It is a time to slow down, talk about the day, and honor the guest. It is usually performed by the woman of the house, who takes great pride in the quality of her brew.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="https://picsum.photos/seed/jebena-home-ceremony/800/500" alt="A woman performing the Jebena coffee ceremony at home" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CEREMONY STEPS */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Step by Step</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">The Ritual</motion.h2>
          </motion.div>
          <div className="space-y-4">
            {ceremonySteps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f97316]/10 flex items-center justify-center">
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-black text-[#f97316] tracking-widest">{step.num}</span>
                    <h3 className="text-base font-black text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE ROUNDS */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">The Full Ceremony</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white">The Three Rounds</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mt-4 max-w-xl mx-auto">A true ceremony isn't over after one cup. Stay for all three — it is considered good luck.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {rounds.map((round, i) => (
              <motion.div key={round.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-10 h-10 rounded-full bg-[#f97316]/20 border border-[#f97316]/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#f97316] font-black text-sm">{i + 1}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-1">{round.name}</h3>
                <p className="text-[#f97316] text-xs font-black uppercase tracking-widest mb-1">{round.meaning}</p>
                <p className="text-white/40 text-xs mb-3">{round.strength}</p>
                <p className="text-white/70 text-sm leading-relaxed">{round.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIRINGS */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Never Alone</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">What to Eat with Your Coffee</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pairings.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <span className="text-5xl block mb-4">{p.emoji}</span>
                <h3 className="text-lg font-black text-foreground mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-[#f97316] mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-[#f97316] font-bold text-lg">— Jigjiga Proverb</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Flavors of Jigjiga</h2>
          <p className="text-white/80 mb-8 text-lg">Discover every dish, bread, and tradition that makes our city's table extraordinary.</p>
          <Link href="/eat-drink" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to Eat &amp; Drink
          </Link>
        </div>
      </section>
    </div>
  );
}
