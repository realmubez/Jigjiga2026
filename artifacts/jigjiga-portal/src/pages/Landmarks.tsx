import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, ArrowUpRight, Camera, Compass, ShoppingBag, Building2 } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";

const PAGE_META = PAGE_REGISTRY.find(p => p.id === "landmarks")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const CATEGORY_META = [
  { icon: <Camera className="w-5 h-5" />, title: "Cultural & Religious Icons", subtitle: "Masaajiidka & Sumadaha", groupId: "cultural" },
  { icon: <Compass className="w-5 h-5" />, title: "Natural Wonders", subtitle: "Dabiicadda iyo Muuqaalka", groupId: "natural" },
  { icon: <ShoppingBag className="w-5 h-5" />, title: "Markets & Local Life", subtitle: "Suuqyada & Noloshada", groupId: "markets" },
  { icon: <Building2 className="w-5 h-5" />, title: "Modern Landmarks", subtitle: "Dhismayaasha Casriga", groupId: "modern" },
];

export default function Landmarks() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const content = usePageContent("landmarks", PAGE_META.defaults);
  const heroImageUrl = content.heroImageUrl || "https://picsum.photos/seed/jigjiga-landmarks-skyline/1600/900";
  const categories = CATEGORY_META.map(meta => ({
    ...meta,
    items: content.groups?.find(g => g.id === meta.groupId)?.items || PAGE_META.defaults.groups!.find(g => g.id === meta.groupId)!.items,
  }));

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
      <section className="relative pt-24 min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImageUrl} alt="The iconic skyline and mountains of Jigjiga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/10" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Must-See Landmarks</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">The Icons<br />of Jigjiga</h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script mb-6">Where History Meets the Horizon</p>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">From ancient mountain passes to the gleaming domes of modern mosques — these are the essential stops on your journey through the capital of the Somali Region.</p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {categories.map((cat, ci) => (
        <section key={cat.title} className={`py-16 sm:py-24 ${ci % 2 === 0 ? "bg-background" : "bg-slate-50"}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-12">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
                <div className="text-primary">{cat.icon}</div>
                <p className="font-script text-2xl text-[#f97316]">{cat.subtitle}</p>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">{cat.title}</motion.h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cat.items.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  className="group relative overflow-hidden rounded-2xl shadow-sm">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-black rounded-full uppercase tracking-widest">{item.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-black text-white mb-0.5">{item.name}</h3>
                    <p className="text-[#f97316] text-xs font-bold uppercase tracking-wider mb-2">{item.subtitle}</p>
                    <p className="text-white/75 text-sm leading-relaxed mb-4">{item.description}</p>
                    {item.href !== "#" && (
                      <Link href={item.href} className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-foreground text-xs font-black rounded-full hover:bg-[#f97316] hover:text-white transition-colors">
                        Read Full Story <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Keep Exploring Jigjiga</h2>
          <p className="text-white/80 mb-8 text-lg">Discover the food, history, and culture behind the landmarks.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-black rounded-full hover:bg-blue-50 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <Link href="/history-culture" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 border border-white/40 text-white font-black rounded-full hover:bg-white/30 transition-colors">
              History &amp; Culture <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/eat-drink" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 border border-white/40 text-white font-black rounded-full hover:bg-white/30 transition-colors">
              Eat &amp; Drink <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
