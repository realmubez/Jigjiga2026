import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "eat-drink/muqmad")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Package, Clock, Flame, Star, Quote } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Star className="w-4 h-4" />, label: "Other Name", value: "Often called Odkac in certain regions" },
  { icon: <Clock className="w-4 h-4" />, label: "Shelf Life", value: "Up to a year in a traditional airtight container" },
  { icon: <Flame className="w-4 h-4" />, label: "Primary Ingredients", value: "Beef or camel meat, Subag (clarified butter), Xawaash spices" },
  { icon: <Package className="w-4 h-4" />, label: "The Tradition", value: "Prepared for weddings to ensure high-energy food for the couple" },
];

const steps = [
  { num: "01", title: "Selection", description: "Lean cuts of beef or camel meat are sliced into thin, even strips." },
  { num: "02", title: "Drying", description: "The strips are sun-dried or air-dried until they become firm jerky." },
  { num: "03", title: "Dicing", description: "The dried meat is cut into tiny, bite-sized cubes, ready for frying." },
  { num: "04", title: "Deep Frying", description: "Cubes are fried in Subag (clarified butter) with cardamom and cloves until crispy." },
  { num: "05", title: "Preservation", description: "Meat and butter are poured into a Haandey (carved wooden container). As the butter solidifies it creates an airtight seal." },
];

const servingWays = [
  { emoji: "🫓", title: "The Breakfast Duo", description: "Take a piece of Anjero, scoop a few cubes of Muqmad with some solidified butter, and enjoy the perfect bite." },
  { emoji: "🍬", title: "The Sweet & Salty Mix", description: "Sprinkle a little sugar over the Muqmad and Anjero for a unique sweet-savory combination that locals love." },
  { emoji: "🎁", title: "The Gift", description: "Because it lasts so long, Muqmad is the most common gift sent to Somali students or family members living abroad — home in a jar." },
];

const DEFAULT_SECTIONS = [
  {
    title: "The Original Nomadic Innovation",
    body: "Before modern refrigeration and canned goods, Somali nomads needed a way to carry protein across vast, hot deserts without it spoiling. The solution was Muqmad. By dehydrating high-quality meat and sealing it in pure clarified butter, they created a food that remains fresh for months — even in the scorching heat of the Jigjiga plains.",
    image: "https://picsum.photos/seed/muqmad-desert-nomad/800/500",
    imageAlt: "Nomadic cooking tradition — the birthplace of Muqmad",
  },
  {
    title: "The Flavor Profile",
    body: "Muqmad has a unique taste that is both savory and rich. Because it is cooked in clarified butter, it has a deep, nutty aroma. The texture is a delightful contrast — crunchy on the outside but tender on the inside. When you take a bite, the spices release a warm, earthy flavor that defines the Somali breakfast experience.",
    image: "https://picsum.photos/seed/muqmad-close-up/800/500",
    imageAlt: "A close-up of golden Muqmad cubes in clarified butter",
  },
  {
    title: "A Symbol of High Status",
    body: "In Jigjiga, serving Muqmad to a guest is a sign of the highest respect. Because it requires a large amount of meat and expensive clarified butter to produce a small batch, it is considered a premium food. If you are invited to a home and served Muqmad, you know you are a truly valued guest.",
    image: "https://picsum.photos/seed/muqmad-guest-hospitality/800/500",
    imageAlt: "Muqmad served to honored guests in a Jigjiga home",
  },
];

export default function Muqmad() {
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
      <section className="relative pt-24 min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImageUrl} alt="Muqmad preserved in a traditional Haandey container" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/55 to-slate-900/20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/eat-drink" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Eat &amp; Drink
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Nomadic Staples</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Nomadic Staple</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Muqmad</h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">The Legendary Traveler's Food</p>
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

      {/* HOW IT'S MADE */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">A Labor of Love</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">How Muqmad is Made</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-xl mx-auto">A traditional skill passed down from mothers to daughters — the preparation takes days.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <span className="text-3xl font-black text-[#f97316]/20 block mb-2">{step.num}</span>
                <h3 className="text-base font-black text-foreground mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#f97316] font-black text-lg z-10">→</div>
                )}
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

      {/* HOW TO EAT */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Eat it Like a Local</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">Three Ways to Enjoy Muqmad</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {servingWays.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <span className="text-5xl block mb-4">{item.emoji}</span>
                <h3 className="text-lg font-black text-foreground mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
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
          <p className="text-[#f97316] font-bold text-lg">— Jigjiga Saying</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Flavors of Jigjiga</h2>
          <p className="text-white/80 mb-8 text-lg">Discover the dishes, breads, and beverages that define our city.</p>
          <Link href="/eat-drink" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to Eat &amp; Drink
          </Link>
        </div>
      </section>
    </div>
  );
}
