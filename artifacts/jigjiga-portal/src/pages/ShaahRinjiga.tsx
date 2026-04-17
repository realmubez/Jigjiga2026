import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "eat-drink/shaah-rinjiga")!;
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
  { emoji: "🌶️", label: "The Secret Ingredient", value: "Many tea makers add a tiny pinch of black pepper for an extra kick!" },
  { emoji: "🫖", label: "Social Etiquette", value: "It is polite to finish at least two small glasses when visiting someone's home" },
  { emoji: "🧠", label: "The Mood", value: "Tea is considered a \"brain-opener\" — popular during business negotiations" },
  { emoji: "🕐", label: "Best Time", value: "Late afternoons — when the city slows down for Sheeko (conversation)" },
];

const spices = [
  { name: "Xail", english: "Cardamom", emoji: "🌿", note: "The floral backbone of the blend" },
  { name: "Qaranfuul", english: "Cloves", emoji: "🌰", note: "Adds a deep, woody warmth" },
  { name: "Qorfe", english: "Cinnamon", emoji: "🍂", note: "Sweet and slightly spicy" },
  { name: "Sinjibiil", english: "Ginger", emoji: "🫚", note: "The bold heat that defines Rinjiga" },
];

const variations = [
  { emoji: "🥛", name: "Shaah Caanays", subtitle: "Milk Tea", description: "The same spiced tea brewed with generous fresh milk — often goat or camel milk. Creamy, rich, and feels like a meal in a cup." },
  { emoji: "🌾", name: "Shaah iyo Qaxwa", subtitle: "Tea & Coffee Husks", description: "A unique mix of tea and coffee husks, popular among those who want a lighter, more herbal and fragrant experience." },
];

const pairings = [
  { emoji: "🥟", name: "Sambuus", description: "Spicy meat or vegetable triangles — the most classic afternoon pairing." },
  { emoji: "🫘", name: "Bajiye", description: "Deep-fried bean cakes similar to falafel, golden and crispy." },
  { emoji: "🥞", name: "Malawah", description: "A sweet, greasy Somali pancake — rich and satisfying with a hot glass of tea." },
];

const DEFAULT_SECTIONS = [
  {
    title: "More Than Just Tea",
    body: "If Bariis Mindi is the king of the table, then Shaah Rinjiga is the king of the street. In every corner of Jigjiga — from humble roadside stalls to high-end garden cafes — you will hear the clinking of spoons against glass. \"Rinjiga\" means \"color\" or \"dye,\" referring to the deep, beautiful crimson hue of this highly spiced Somali tea.",
    image: "https://picsum.photos/seed/shaah-street-cafe/800/500",
    imageAlt: "A roadside tea stall in Jigjiga pouring Shaah Rinjiga",
  },
  {
    title: "The Ritual of Sheeko",
    body: "In Jigjiga, you don't just \"grab a tea\" and leave. Shaah Rinjiga is the facilitator of Sheeko — the art of conversation. Men gather in the late afternoons, women meet in their homes, and students cluster in the Tech Hub areas — all with a glass of tea in hand. It is the drink of poets, traders, and thinkers. If there is a problem to be solved or a story to be told, it happens over a glass of Shaah.",
    image: "https://picsum.photos/seed/sheeko-conversation-jigjiga/800/500",
    imageAlt: "Men gathering over Shaah Rinjiga for afternoon Sheeko",
  },
];

export default function ShaahRinjiga() {
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
  const sections = content.sections?.length ? content.sections.map(s => ({ ...s, image: s.imageUrl })) : DEFAULT_SECTIONS;


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
      <section className="relative pt-24 min-h-[70vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImageUrl} alt="A glass of deep crimson Shaah Rinjiga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/40 to-transparent" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/eat-drink" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Eat &amp; Drink
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Beverages</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Beverage</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Shaah Rinjiga</h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">The Spiced Soul of Jigjiga</p>
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

      {/* SPICE BLEND */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Xawaashka Shaaha</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">The Alchemy of Spices</motion.h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {spices.map((spice, i) => (
              <motion.div key={spice.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <span className="text-4xl block mb-3">{spice.emoji}</span>
                <p className="font-black text-foreground text-base mb-0.5">{spice.name}</p>
                <p className="text-[#f97316] text-xs font-semibold mb-2">{spice.english}</p>
                <p className="text-gray-400 text-xs">{spice.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE SECTIONS */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {sections.map((sec, i) => (
              <motion.div key={sec.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <motion.div variants={fadeUp} className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-10 h-1 bg-[#f97316] rounded-full mb-5" />
                  <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">{sec.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{sec.body}</p>
                </motion.div>
                <motion.div variants={fadeUp} className={`overflow-hidden rounded-2xl shadow-lg ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <img src={sec.image} alt={sec.imageAlt} className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VARIATIONS */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">City Favourites</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">Variations You'll Find</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {variations.map((v, i) => (
              <motion.div key={v.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <span className="text-4xl block mb-3">{v.emoji}</span>
                <h3 className="text-lg font-black text-foreground mb-0.5">{v.name}</h3>
                <p className="text-[#f97316] text-sm font-semibold mb-3">{v.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIRINGS */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">The Perfect Match</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white">Afternoon Pairings</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pairings.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center">
                <span className="text-4xl block mb-3">{p.emoji}</span>
                <h3 className="text-base font-black text-white mb-2">{p.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-16 sm:py-20 bg-[#f97316]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Coffee className="w-10 h-10 text-white mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-white/80 font-bold text-lg">— The Street Wisdom of Jigjiga</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Flavors of Jigjiga</h2>
          <p className="text-white/60 mb-8 text-lg">Discover the dishes and ceremonies that complete the Jigjiga table.</p>
          <Link href="/eat-drink" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white font-black rounded-full hover:bg-[#f97316]/90 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to Eat &amp; Drink
          </Link>
        </div>
      </section>
    </div>
  );
}
