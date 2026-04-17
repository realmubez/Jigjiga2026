import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "eat-drink/street-food")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, ShoppingBag, Clock, DollarSign, Shield, Quote, ArrowUpRight } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Shield className="w-4 h-4" />, label: "Safety Tip", value: "Follow the longest queues — the best stalls always sell out the fastest" },
  { icon: <DollarSign className="w-4 h-4" />, label: "Cost", value: "Sambuus & Bajiye cost a few cents; a full plate of pasta is under $2 USD" },
  { icon: <Clock className="w-4 h-4" />, label: "Best Times", value: "4–6 PM for snacks; 8 PM onwards for roasted meats at night grills" },
  { icon: <ShoppingBag className="w-4 h-4" />, label: "The Hub", value: "Taywan Market — where street food, clothing, and cross-border trade meet" },
];

const streetLegends = [
  {
    emoji: "🥟",
    name: "Sambuus",
    subtitle: "The Golden Triangles",
    filling: "Spicy minced beef, green onions, and hot green peppers — or a lighter lentil version.",
    ritual: "Best piping hot in the late afternoon, paired with fresh lime or a dip in Basbaas (chili sauce).",
    image: "https://picsum.photos/seed/sambuus-jigjiga-frying/700/450",
    imageAlt: "Sambuus being lifted golden from hot oil in Jigjiga",
    color: "bg-red-600",
  },
  {
    emoji: "🧆",
    name: "Bajiye",
    subtitle: "The Somali Falafel",
    filling: "Ground black-eyed peas mixed with garlic, onions, and local spices — crunchy outside, soft inside.",
    ritual: "Sold in paper bags at street corners. The ultimate on-the-go snack for students and traders.",
    image: "https://picsum.photos/seed/bajiye-somali-falafel/700/450",
    imageAlt: "Golden Bajiye nuggets in a paper bag at a Jigjiga street corner",
    color: "bg-amber-500",
  },
  {
    emoji: "🍝",
    name: "Suugo iyo Baasto",
    subtitle: "The Italian Legacy",
    filling: "Spaghetti topped with rich, spiced meat sauce (Suugo) at a street-side maqaayo (small eatery).",
    ritual: "Always served with a banana on the side — mixing the sweet banana with savory pasta is the hallmark of a true Jigjiga local.",
    image: "https://picsum.photos/seed/suugo-baasto-jigjiga/700/450",
    imageAlt: "A plate of Somali pasta Suugo iyo Baasto served with a banana",
    color: "bg-emerald-600",
  },
];

const markets = [
  {
    name: "Taywan Market",
    subtitle: "The Trade Hub",
    description: "Named \"Taywan\" because you can find almost anything there. Between stalls of clothing and electronics, women cook fresh Malawah (sweet crepes) and Kaxda (roasted grain snacks). Loud, crowded, and vibrant — the best place to see the hustle of cross-border trade in action.",
    image: "https://picsum.photos/seed/taywan-market-jigjiga/800/500",
    imageAlt: "The vibrant, crowded stalls of Taywan Market in Jigjiga",
    tag: "The Heart of Commerce",
  },
  {
    name: "Suuqa Geela",
    subtitle: "The Camel Market",
    description: "Beyond trading animals, the outskirts of the camel market are home to the freshest Caano Geel (camel milk). Buy it straight from the source, served in traditional wooden vessels. The smoky aroma of the milk combined with the desert breeze makes this an unforgettable sensory experience.",
    image: "https://picsum.photos/seed/camel-market-jigjiga/800/500",
    imageAlt: "Fresh camel milk served in a wooden vessel at Suuqa Geela",
    tag: "Raw & Authentic",
  },
];

const nightGrillDetails = [
  { emoji: "🔥", title: "The Setup", description: "Large pits of charcoal are used to slow-roast goat and sheep as the sun sets over the city." },
  { emoji: "🪓", title: "The Order", description: "You select your cut of meat, and it is chopped on a wooden board right in front of you." },
  { emoji: "🫙", title: "The Condiments", description: "Served with a side of coarse salt, fresh lime wedges, and warm Anjero or fresh bread." },
];

export default function StreetFood() {
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
      <section className="relative pt-24 min-h-[75vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImageUrl} alt="The bustling Taywan Market in Jigjiga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/55 to-slate-900/15" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/eat-drink" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Eat &amp; Drink
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Where to Eat</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Street Food</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Local Street Food<br />&amp; Markets</h1>
            <p className="text-xl sm:text-2xl text-amber-400 font-bold font-script">The Pulse of the City</p>
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
              <div className="w-10 h-1 bg-red-600 rounded-full mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Real Taste of Jigjiga</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                While garden cafes offer peace, the streets of Jigjiga offer excitement. From the sprawling stalls of Taywan Market to the smoky corners of the bus terminals, street food is the fuel that keeps the city moving. In Jigjiga, street food isn't just a quick bite — it's a way to experience the local culture in its most honest form. The smells, the sounds, the chaos, and the community all collide at a street-side stall.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="https://picsum.photos/seed/jigjiga-street-energy/800/500" alt="The raw energy of street food culture in Jigjiga" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STREET LEGENDS */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="font-script text-2xl text-amber-500 mb-2">Cuntada Suuqa</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">The Street Food Legends</motion.h2>
          </motion.div>
          <div className="space-y-16">
            {streetLegends.map((item, i) => (
              <motion.div key={item.name} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <motion.div variants={fadeUp} className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{item.emoji}</span>
                    <span className={`px-3 py-1 ${item.color} text-white text-xs font-black rounded-full uppercase tracking-widest`}>{item.subtitle}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-5">{item.name}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">What's Inside</p>
                      <p className="text-gray-700 text-base leading-relaxed">{item.filling}</p>
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">The Ritual</p>
                      <p className="text-gray-700 text-base leading-relaxed">{item.ritual}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className={`overflow-hidden rounded-2xl shadow-lg ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <img src={item.image} alt={item.imageAlt} className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MARKETS */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="font-script text-2xl text-amber-400 mb-2">Suuqyada Jigjiga</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white">The Market Experience</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {markets.map((market, i) => (
              <motion.div key={market.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-2xl">
                <img src={market.image} alt={market.imageAlt} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-500 text-white text-xs font-black rounded-full uppercase tracking-widest">{market.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-black text-white mb-1">{market.name}</h3>
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">{market.subtitle}</p>
                  <p className="text-white/75 text-sm leading-relaxed">{market.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NIGHT GRILLS */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <div className="w-10 h-1 bg-red-600 rounded-full mb-5" />
              <span className="inline-block px-3 py-1 bg-red-600/10 text-red-600 text-xs font-black rounded-full mb-4 uppercase tracking-widest">After Dark</span>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">Night Markets &amp; Grills</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-8">
                As the sun sets, the aroma of Hilib Dub (roasted meat) begins to float over the city. Large charcoal pits glow in the dark as goat and sheep are slow-roasted to perfection. It is the most primal and satisfying dining experience Jigjiga has to offer.
              </p>
              <div className="space-y-4">
                {nightGrillDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <span className="text-2xl mt-0.5">{detail.emoji}</span>
                    <div>
                      <p className="text-sm font-black text-foreground mb-1">{detail.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="https://picsum.photos/seed/hilib-dub-charcoal-grill-jigjiga/800/500" alt="Hilib Dub — charcoal-roasted meat at a Jigjiga night grill" className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-16 sm:py-20 bg-red-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-white mx-auto mb-6 opacity-60" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-red-200 font-bold text-lg">— The Street Wisdom of Jigjiga</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">The Full Eat &amp; Drink Experience</h2>
            <p className="text-white/60 text-lg">From street corners to garden cafes — Jigjiga's table has it all.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/eat-drink" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f97316] text-white font-black rounded-full hover:bg-[#f97316]/90 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Eat &amp; Drink Hub
            </Link>
            <Link href="/eat-drink/garden-cafes" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-colors">
              Garden Cafes <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/eat-drink/bariis-mindi" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-colors">
              Bariis Mindi <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
