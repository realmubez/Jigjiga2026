import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "eat-drink/camel-meat-milk")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Quote } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const comparison = [
  { feature: "Fat Content", camel: "Very Low (Lean)", cow: "Higher" },
  { feature: "Vitamin C", camel: "High (3× more than cow)", cow: "Low" },
  { feature: "Sustainability", camel: "High (Needs little water)", cow: "Low (Needs lots of water)" },
  { feature: "Cultural Status", camel: "High (Symbol of Nobility)", cow: "Standard" },
];

const milkBenefits = [
  { emoji: "💊", title: "3× Vitamin C", description: "Contains three times more Vitamin C than cow's milk, making it a natural immune booster." },
  { emoji: "🧬", title: "Unsaturated Fats", description: "Rich in unsaturated fatty acids and B vitamins that support heart health and energy." },
  { emoji: "🥛", title: "Lactose-Friendly", description: "Does not curdle easily and is naturally easier for many people to digest than cow's milk." },
];

const DEFAULT_SECTIONS = [
  {
    title: "The Lifeblood of the Nomad",
    body: "In the semi-arid landscape of the Somali Region, the camel is the most respected creature. It provides transport, clothing, and most importantly, the most nutrient-dense food source available. In Jigjiga, eating camel meat and drinking its milk is a cultural rite of passage and a sign of vitality.",
    image: "https://picsum.photos/seed/camel-nomad-desert/800/500",
    imageAlt: "A camel standing tall in the Somali Region landscape",
  },
  {
    title: "Hilib Geel — The Lean Delicacy",
    body: "Camel meat is the preferred protein for the people of Jigjiga. Unlike beef or lamb, it is remarkably lean and high in protein, with a flavor profile that is deeper and more savory than beef, with a slightly sweet undertone and a firm texture. When cooked correctly — slow-roasted or simmered — it becomes incredibly tender. It is famously low in cholesterol and high in iron, making it the healthy choice for the local population.",
    image: "https://picsum.photos/seed/hilib-geel-roasted/800/500",
    imageAlt: "Slow-roasted camel meat served on Bariis Mindi",
  },
  {
    title: "How Camel Meat is Served",
    body: "The versatility of Hilib Geel is remarkable. It is roasted in large chunks and laid over Bariis Mindi, letting its juices soak deep into the spiced rice. It is minced into Suugo Geel — a rich, spicy tomato sauce served over pasta. And it is preserved as Odkac (Muqmad) — small cubes dried and slow-cooked in clarified butter, the ultimate nomadic high-energy snack that lasts for months.",
    image: "https://picsum.photos/seed/camel-suugo-pasta/800/500",
    imageAlt: "Suugo Geel — camel meat sauce over pasta",
  },
  {
    title: "The Jigjiga Camel Market",
    body: "To truly understand the importance of this food, visit the Jigjiga Camel Market — one of the largest in Africa. Here, thousands of camels are traded daily. The health of the camel is judged by the size of its hump: the larger the hump, the better the quality of the meat and milk it will produce. It is a living testament to the deep relationship between the people of Jigjiga and their most prized animal.",
    image: "https://picsum.photos/seed/jigjiga-camel-market/800/500",
    imageAlt: "The vast Jigjiga Camel Market — one of the largest in Africa",
  },
];

export default function CamelMeatMilk() {
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
      <section className="relative pt-24 pb-8 overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 15% 50%, rgba(249,115,22,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(37,99,235,0.18) 0%, transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 w-full text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-3 mb-6">
            <Link href="/eat-drink" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Eat &amp; Drink
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Nomadic Staples</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Nomadic Staple</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Camel Meat &amp; Milk</h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">The Desert Powerhouse</p>
          </motion.div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
            For the people of Jigjiga, the camel is more than an animal — it is a symbol of wealth, health, and survival. Eating camel meat and drinking its milk is a cultural rite of passage and a sign of vitality in the Somali Region.
          </p>
        </div>
      </section>

      {/* ARTICLE SECTIONS */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {sections.map((sec, i) => (
              <motion.div key={sec.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <motion.div variants={fadeUp} className={"text-center lg:text-left " + (i % 2 === 1 ? "lg:col-start-2" : "")}>
                  <div className="w-10 h-1 bg-[#f97316] rounded-full mb-5 mx-auto lg:mx-0" />
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

      {/* CAANO GEEL / WHITE GOLD */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Caano Geel</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">White Gold 🐪🥛</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Camel milk is found in every household in Jigjiga — from nomadic huts in the countryside to modern city apartments. Served fresh in a hand-carved wooden Haan vessel, often smoked with special branches that give the milk a beautiful, smoky aroma.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {milkBenefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <span className="text-5xl block mb-4">{b.emoji}</span>
                <h3 className="text-lg font-black text-foreground mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 space-y-3 max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 bg-orange-50 border border-orange-100 rounded-xl px-5 py-3">
              <span className="font-black text-[#f97316]">Did You Know?</span> Camel milk stays fresh longer than other types of milk — perfect for long nomadic treks across the desert.
            </p>
            <p className="text-sm text-gray-500 bg-blue-50 border border-blue-100 rounded-xl px-5 py-3">
              <span className="font-black text-primary">Local Tip:</span> If you are new to camel milk, start with a small glass! It is very powerful and highly "cleansing" for the digestive system.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Why Camel is King</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">Camel vs. Cow</motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-widest">Feature</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-widest text-[#f97316]">🐪 Camel</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-widest text-blue-400">🐄 Cow</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-4 px-5 font-bold text-gray-700">{row.feature}</td>
                    <td className="py-4 px-5 text-gray-600">{row.camel}</td>
                    <td className="py-4 px-5 text-gray-600">{row.cow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-[#f97316] mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-[#f97316] font-bold text-lg">— Somali Nomadic Wisdom</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Flavors of Jigjiga</h2>
          <p className="text-white/80 mb-8 text-lg">Discover the dishes, beverages, and dining spots that define our city.</p>
          <Link href="/eat-drink" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to Eat &amp; Drink
          </Link>
        </div>
      </section>
    </div>
  );
}
