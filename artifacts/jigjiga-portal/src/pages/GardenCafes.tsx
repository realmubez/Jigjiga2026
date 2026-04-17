import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "eat-drink/garden-cafes")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Wifi, Clock, DollarSign, Quote, ArrowUpRight } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <DollarSign className="w-4 h-4" />, label: "Typical Cost", value: "$1.50–$2.00 for a juice or espresso; $5–$10 for a full meal" },
  { icon: <Clock className="w-4 h-4" />, label: "Peak Hours", value: "4:00 PM – 6:00 PM is the daily social hour — arrive early for a seat" },
  { icon: <Wifi className="w-4 h-4" />, label: "Connectivity", value: "Most modern lounges offer free Wi-Fi, doubling as co-working spaces" },
  { icon: <span className="text-base leading-none">☕</span>, label: "Must-Try", value: "Iced coffee with ginger & cinnamon at La Luna Cafe" },
];

const cafes = [
  {
    name: "Heebaan Garden",
    badge: "Serene Oasis",
    badgeColor: "bg-emerald-500",
    vibe: "Lush greenery, open-air seating, and a quiet retreat from the city's noise.",
    menu: "A mix of Somali favorites — Bariis Mindi and Suqaar — alongside Ethiopian staples like Doro Wat. Also a popular spot for the traditional Ethiopian Coffee Ceremony.",
    bestFor: "Family gatherings, business lunches, and romantic evening dinners.",
    image: "https://picsum.photos/seed/heebaan-garden-jigjiga/800/500",
    imageAlt: "Lush outdoor seating at Heebaan Garden, Jigjiga",
    emoji: "🌿",
  },
  {
    name: "La Luna Cafe",
    badge: "Trendy & Modern",
    badgeColor: "bg-primary",
    vibe: "Fast-paced, modern, and often filled with the sound of lively conversation — a favorite for the city's younger, tech-savvy generation.",
    menu: "Famous for what many consider the best Cappuccino and Espresso in the city. Their iced coffee with hints of ginger and cinnamon is a local favourite.",
    bestFor: "Quick coffee meetings, study sessions, and people-watching on the main thoroughfare.",
    image: "https://picsum.photos/seed/la-luna-cafe-jigjiga/800/500",
    imageAlt: "The modern, energetic interior of La Luna Cafe",
    emoji: "🌙",
  },
  {
    name: "Hiil Cafe",
    badge: "Hidden Gem",
    badgeColor: "bg-[#f97316]",
    vibe: "Intimate and trendy. Dual-level design — cozy downstairs coffee shop and an upscale upstairs restaurant tucked in a quiet alley.",
    menu: "High-quality fresh juices and keto-friendly meal options, catering to the health-conscious crowd. Everything is made fresh.",
    bestFor: "Diaspora community connection — the perfect place to hear stories of the city's history and future over a cold-pressed juice.",
    image: "https://picsum.photos/seed/hiil-cafe-jigjiga/800/500",
    imageAlt: "The intimate two-level design of Hiil Cafe in Jigjiga",
    emoji: "💎",
  },
];

const rooftopFeatures = [
  { emoji: "🏔️", title: "Karamara Views", description: "Rooftop spots atop new hotels offer breathtaking sunset views of the Karamara Mountains." },
  { emoji: "🫖", title: "Shaah at Sunset", description: "Sip a glass of Shaah Rinjiga as the city lights begin to twinkle below you — the perfect Jigjiga evening." },
  { emoji: "🏢", title: "Urban Skyline", description: "Watch Jigjiga's rising skyline emerge — a powerful symbol of the city's transformation." },
];

export default function GardenCafes() {
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
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 15% 50%, rgba(249,115,22,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(37,99,235,0.18) 0%, transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/eat-drink" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Eat &amp; Drink
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Where to Eat</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Where to Eat</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Garden Cafes<br />&amp; Modern Lounges</h1>
            <p className="text-xl sm:text-2xl text-emerald-400 font-bold font-script">The Social Heart of the City</p>
          </motion.div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-emerald-400 shrink-0">{fact.icon}</div>
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
              <div className="w-10 h-1 bg-emerald-500 rounded-full mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Urban Bloom</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Jigjiga has seen a massive transformation recently, moving from a dusty garrison town to a bustling capital with a vibrant social scene. Modern lounges and garden restaurants have become the "third space" for the city's residents — a place between home and work where ideas are exchanged over a cappuccino or a fresh fruit juice. These spots offer a serene escape from the busy paved streets and the rising skyline of the capital, and are increasingly the unofficial headquarters for Jigjiga's growing startup and freelancer community.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="https://picsum.photos/seed/jigjiga-urban-bloom-cafe/800/500" alt="The new modern cafe culture of Jigjiga" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE CAFES */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="font-script text-2xl text-emerald-600 mb-2">The Best Spots</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">Jigjiga's Signature Cafes</motion.h2>
          </motion.div>
          <div className="space-y-20">
            {cafes.map((cafe, i) => (
              <motion.div key={cafe.name} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <motion.div variants={fadeUp} className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{cafe.emoji}</span>
                    <span className={`px-3 py-1 ${cafe.badgeColor} text-white text-xs font-black rounded-full uppercase tracking-widest`}>{cafe.badge}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-5">{cafe.name}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">The Vibe</p>
                      <p className="text-gray-700 text-base leading-relaxed">{cafe.vibe}</p>
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">The Menu</p>
                      <p className="text-gray-700 text-base leading-relaxed">{cafe.menu}</p>
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Best For</p>
                      <p className="text-gray-700 text-base leading-relaxed">{cafe.bestFor}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className={`overflow-hidden rounded-2xl shadow-lg ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <img src={cafe.image} alt={cafe.imageAlt} className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOFTOP CULTURE */}
      <section className="py-16 sm:py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/jigjiga-rooftop-night/1600/800" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="font-script text-2xl text-emerald-400 mb-2">The New Trend</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white">The Rooftop Culture</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              A new trend is rising across Jigjiga — rooftop lounges atop the city's new hotels and shopping centers. These spots offer an experience unlike anywhere else in the Somali Region.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {rooftopFeatures.map((feat, i) => (
              <motion.div key={feat.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                <span className="text-4xl block mb-4">{feat.emoji}</span>
                <h3 className="text-lg font-black text-white mb-3">{feat.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-16 sm:py-20 bg-emerald-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-white mx-auto mb-6 opacity-60" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-white/70 font-bold text-lg">— The New Urban Spirit of Jigjiga</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Keep Exploring</h2>
            <p className="text-white/60 text-lg">There is much more to discover on Jigjiga's table.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/eat-drink" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f97316] text-white font-black rounded-full hover:bg-[#f97316]/90 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Eat &amp; Drink Hub
            </Link>
            <Link href="/eat-drink/shaah-rinjiga" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-colors">
              Shaah Rinjiga <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/eat-drink/jebena-bun" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-colors">
              Jebena Bun <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
