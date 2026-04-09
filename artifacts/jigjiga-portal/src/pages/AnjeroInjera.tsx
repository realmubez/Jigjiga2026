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
  { feature: "Size", anjero: "Small (plate-sized)", injera: "Large (platter-sized)" },
  { feature: "Taste", anjero: "Mild, sweet, slightly sour", injera: "Distinctly sour and tangy" },
  { feature: "Main Grain", anjero: "Corn, Sorghum, or Wheat", injera: "Teff (Ancient Grain)" },
  { feature: "Best For", anjero: "Breakfast with spiced tea", injera: "Lunch/Dinner with stews" },
];

const sections = [
  {
    title: "Somali Anjero — The Taste of Home",
    body: "Anjero (Canjeero) is the backbone of the Somali morning. Unlike its larger cousin, the Anjero is smaller, thinner, and has a mild, slightly sweet fermented taste. It is smooth on the bottom and covered in tiny \"eyes\" (holes) on the top — perfect for soaking up sauces and oils. Serve it drizzled with Subag (clarified butter) and sugar for the classic breakfast, or with Suugo (meat sauce) for a heartier start. Always paired with a steaming cup of Shaah Rinjiga.",
    image: "https://picsum.photos/seed/somali-anjero-breakfast/800/500",
    imageAlt: "Somali Anjero served with clarified butter and spiced tea",
  },
  {
    title: "Ethiopian Injera — The National Icon",
    body: "Injera is the famous sourdough flatbread of Ethiopia — much larger than Anjero, often the size of a large pizza — with a distinct sharp sour taste from Teff, a tiny ancient grain from the Ethiopian highlands. It is thick, spongy, and incredibly absorbent. In a traditional meal, the Injera acts as both the plate and the spoon. Tear off a piece, wrap it around spicy lentils or Shiro chickpea stew, and enjoy the perfect bite.",
    image: "https://picsum.photos/seed/ethiopian-injera-stew/800/500",
    imageAlt: "Ethiopian Injera topped with colorful Beyaynetu stews",
  },
  {
    title: "The Jigjiga Fusion: Firfir",
    body: "Jigjiga has created its own way of enjoying these breads — Firfir. Injera or Anjero is torn into small pieces and stir-fried with spices, onions, and berbere (a hot spice blend). It is the ultimate comfort food and a favorite for those who want a spicy, filling start to their day. Firfir is the dish that truly captures the spirit of Jigjiga: two great traditions fused into something uniquely its own.",
    image: "https://picsum.photos/seed/firfir-jigjiga/800/500",
    imageAlt: "A pan of Firfir — the Jigjiga bread fusion dish",
  },
];

export default function AnjeroInjera() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
      <section className="relative pt-24 min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/anjero-injera-hero/1600/800" alt="Anjero and Injera side by side" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/55 to-slate-900/20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/eat-drink" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Eat &amp; Drink
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Signature Dishes</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Signature Dish</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Anjero &amp; Injera</h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">The Twin Breads of Jigjiga</p>
          </motion.div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
            In Jigjiga, breakfast is a tale of two breads. While they may look similar — both fermented, spongy, and flat — they carry very different histories, tastes, and textures. Understanding the difference between Somali Anjero and Ethiopian Injera is the first step to becoming a true local.
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

      {/* COMPARISON TABLE */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Side by Side</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">Comparison at a Glance</motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-widest">Feature</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-widest text-[#f97316]">Somali Anjero</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-widest text-blue-400">Ethiopian Injera</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-4 px-5 font-bold text-gray-700">{row.feature}</td>
                    <td className="py-4 px-5 text-gray-600">{row.anjero}</td>
                    <td className="py-4 px-5 text-gray-600">{row.injera}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <div className="mt-6 space-y-3">
            <p className="text-sm text-gray-500 bg-orange-50 border border-orange-100 rounded-xl px-5 py-3">
              <span className="font-black text-[#f97316]">Did You Know?</span> A Somali mother's skill is often judged by how perfectly circular and thin her Anjero is!
            </p>
            <p className="text-sm text-gray-500 bg-blue-50 border border-blue-100 rounded-xl px-5 py-3">
              <span className="font-black text-primary">Pro Tip:</span> If the Injera is too sour for you, try it with Yogurt (Garoor) to balance the heat and the tang.
            </p>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-[#f97316] mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            "Two breads, two traditions — one table, one Jigjiga."
          </blockquote>
          <p className="text-[#f97316] font-bold text-lg">— The Spirit of Jigjiga's Kitchen</p>
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
