import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "eat-drink/bariis-mindi")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Wheat, Clock, MapPin, Sparkles, Quote } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Wheat className="w-4 h-4" />, label: "Main Ingredients", value: "Basmati rice, Xawaash spices, raisins, onions" },
  { icon: <Sparkles className="w-4 h-4" />, label: "Traditional Pairing", value: "Banana (Moos) and fresh lime juice" },
  { icon: <Clock className="w-4 h-4" />, label: "Best Time to Eat", value: "Friday lunch — the biggest meal of the week" },
  { icon: <MapPin className="w-4 h-4" />, label: "Regional Variation", value: "Jigjiga uses extra cardamom & cinnamon vs. coastal regions" },
];

const trio = [
  { emoji: "🍌", title: "Moos (Banana)", description: "A mandatory tradition — slice it into the grains for a creamy, sweet contrast that balances the savory spices." },
  { emoji: "🌶️", title: "Basbaas (Hot Sauce)", description: "A fresh, spicy green sauce made from chilies, cilantro, and lime. The essential kick alongside every plate." },
  { emoji: "🥗", title: "Salad", description: "A simple mix of finely chopped tomatoes, onions, and lettuce to refresh the palate between bites." },
];

const DEFAULT_SECTIONS = [
  {
    title: "More Than Just Rice",
    body: "Bariis Mindi is the ultimate symbol of hospitality and celebration in Jigjiga. While rice is a staple in many cultures, the Somali version is a culinary masterpiece defined by its aromatic scent, vibrant colors, and the \"Mindi\" — the method of serving it piled high with meat. It is the dish served at every wedding, graduation, and high-level welcoming ceremony in the city.",
    image: "https://picsum.photos/seed/bariis-mindi-feast/800/500",
    imageAlt: "A large communal platter of Bariis Mindi at a celebration",
  },
  {
    title: "The Secret: Xawaash Spices",
    body: "The soul of Bariis Mindi lies in the Xawaash — a hand-ground blend of cumin, coriander, turmeric, cloves, cardamom, and cinnamon toasted and ground together. When the rice is cooking, the smell fills the entire neighborhood. As Somalis say: \"Bariis bilaa xawaash ah waa sidii guri bilaa daaqad ah\" — Rice without spice is like a house without windows.",
    image: "https://picsum.photos/seed/xawaash-spices/800/500",
    imageAlt: "Colorful Xawaash spices ground together in a mortar",
  },
  {
    title: "The Cooking Process",
    body: "High-quality long-grain Basmati rice is first sautéed with onions, garlic, and the Xawaash blend before being simmered in a rich meat broth. To add sweetness and texture, it is topped with sautéed raisins, sliced peppers, and caramelized onions. A touch of organic coloring creates a beautiful multi-color effect of white, yellow, and orange grains across the platter.",
    image: "https://picsum.photos/seed/bariis-cooking/800/500",
    imageAlt: "Bariis Mindi being prepared with fragrant spices and saffron",
  },
  {
    title: "The Star: The Meat (Hilib)",
    body: "A Bariis Mindi is never complete without the meat. In Jigjiga, you have two choices: Hilib Ari (tender slow-roasted goat that falls off the bone) or Hilib Geel (camel meat — the regional favorite, lean with a deep savory flavor that pairs perfectly with the spiced rice). The meat is placed right on top, letting the juices soak deep into the grains.",
    image: "https://picsum.photos/seed/hilib-camel-goat/800/500",
    imageAlt: "Generous pieces of camel and goat meat laid over Bariis Mindi",
  },
  {
    title: "The Tradition of Sharing",
    body: "Bariis Mindi is traditionally served on a large communal platter. Families and friends sit together — often on the floor on a clean mat — and eat with their right hands. This method of eating symbolizes unity, equality, and the strength of the community. In Jigjiga, sharing a plate of Bariis is the fastest way to turn a stranger into a friend.",
    image: "https://picsum.photos/seed/bariis-sharing-community/800/500",
    imageAlt: "A family gathered around a communal platter of Bariis Mindi",
  },
];

export default function BaarisMindi() {
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
          <img src={heroImageUrl} alt="A steaming platter of Bariis Mindi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/40 to-transparent" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/eat-drink" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Eat &amp; Drink
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Signature Dishes</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Signature Dish</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Bariis Mindi</h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">The King of Somali Cuisine</p>
          </motion.div>
        </div>
      </section>

      {/* QUICK FACTS */}
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

      {/* THE TRIO */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Eat it Like a Local</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">The Perfect Trio of Sides</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trio.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <span className="text-5xl block mb-4">{item.emoji}</span>
                <h3 className="text-lg font-black text-foreground mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
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

      {/* PULL QUOTE */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-[#f97316] mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-white/60 text-lg mb-2 italic">Rice without spice is like a house without windows.</p>
          <p className="text-[#f97316] font-bold text-lg">— Somali Proverb</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Flavors of Jigjiga</h2>
          <p className="text-white/80 mb-8 text-lg">Discover the breads, beverages, and nomadic staples that complete the table.</p>
          <Link href="/eat-drink" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to Eat &amp; Drink
          </Link>
        </div>
      </section>
    </div>
  );
}
