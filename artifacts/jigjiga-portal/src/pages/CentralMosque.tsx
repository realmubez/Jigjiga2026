import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "landmarks/central-mosque")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Clock, MapPin, Shirt, BookOpen, Quote } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <BookOpen className="w-4 h-4" />, label: "Local Name", value: "Masaajidka Jaamacadda (also Masaajidka Markiska)" },
  { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Central Business District, Jigjiga" },
  { icon: <Clock className="w-4 h-4" />, label: "Best Time", value: "Late afternoon for sunset views; Friday noon for Jumu'ah gathering" },
  { icon: <Shirt className="w-4 h-4" />, label: "Dress Code", value: "Modest clothing — women cover heads; both cover arms and legs" },
];

const architectureFeatures = [
  { emoji: "🕌", title: "The Minarets", description: "The tallest in the city — beautifully illuminated in green at night, visible from kilometers away across the dark skyline." },
  { emoji: "🔵", title: "The Dome", description: "The central dome is a masterpiece of geometric design, symbolizing the heavens and the unity of the Ummah (community)." },
  { emoji: "✨", title: "The Interior", description: "Intricate calligraphy, soft carpets, and vast windows allow natural light to flood the airy prayer hall — serene and reflective." },
  { emoji: "🌿", title: "The Courtyard", description: "A large paved courtyard for quiet reflection. On Fridays, filled with worshippers in colorful traditional Koofiyad and Dirac attire." },
];

const DEFAULT_SECTIONS = [
  {
    title: "A Center of Islamic Learning",
    body: "The history of this mosque is deeply tied to the city's growth. After the fall of Harar in the late 19th century, many Islamic scholars migrated to Jigjiga. This transformed the city — and specifically this mosque — into a leading center for Islamic education and jurisprudence in the Horn of Africa. Today, it continues that legacy, hosting daily lectures, Quranic studies, and community gatherings that preserve the region's religious heritage.",
    image: "https://picsum.photos/seed/mosque-interior-calligraphy/800/500",
    imageAlt: "The intricate interior calligraphy of Jijiga Central Mosque",
  },
  {
    title: "A Landmark for All Visitors",
    body: "Even for non-Muslim visitors, the Central Mosque is a must-see for its architectural beauty and its role as a landmark of peace. It stands as a testament to the city's resilience and its deep-rooted identity as a hub of faith and civilization in East Africa. Whether you are arriving from the airport or walking through the main markets, the mosque's tall minarets serve as a constant compass, guiding people toward the heart of Jigjiga.",
    image: "https://picsum.photos/seed/jigjiga-mosque-courtyard/800/500",
    imageAlt: "The peaceful courtyard of Jijiga Central Mosque filled with worshippers",
  },
];

export default function CentralMosque() {
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

      {/* HERO — dusk with green glow */}
      <section className="relative pt-24 min-h-[80vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImageUrl} alt="Jijiga Central Mosque at dusk with illuminated green minarets" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/55 to-slate-900/10" />
          {/* green glow overlay */}
          <div className="absolute inset-0 bg-emerald-900/20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/landmarks" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Landmarks
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Cultural &amp; Religious Icons</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Religious Icon</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Jijiga Central<br />Mosque</h1>
            <p className="text-xl sm:text-2xl text-emerald-400 font-bold font-script">The Spiritual Anchor of the Capital</p>
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
              <div className="w-10 h-1 bg-emerald-600 rounded-full mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Heart of the Capital</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Located at the bustling center of the city, the Masaajidka Jaamacadda is more than just a place of worship. It is a landmark of unity for the Somali Region. Whether you are arriving from the airport or walking through the main markets, the mosque's tall minarets serve as a constant compass, guiding people toward the heart of Jigjiga. At night, the green illumination of those minarets can be seen from kilometers away — a beacon of peace that defines the city's skyline.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="https://picsum.photos/seed/mosque-minaret-night/800/500" alt="The illuminated minarets of Jijiga Central Mosque at night" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-emerald-600 mb-2">Naqshadeynta iyo Quruxda</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">Architecture &amp; Design</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-xl mx-auto">A beautiful blend of traditional Islamic architecture and modern Somali aesthetics.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {architectureFeatures.map((feat, i) => (
              <motion.div key={feat.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <span className="text-4xl block mb-3">{feat.emoji}</span>
                <h3 className="text-base font-black text-foreground mb-2">{feat.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feat.description}</p>
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
                  <div className="w-10 h-1 bg-emerald-600 rounded-full mb-5" />
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

      {/* FRIDAY SCENE */}
      <section className="py-16 sm:py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://picsum.photos/seed/friday-prayer-jigjiga/1600/800" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-6">
            {pullQuote}
          </blockquote>
          <p className="text-emerald-400 font-bold text-lg">— Jumu'ah at Masaajidka Jaamacadda</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Landmarks</h2>
            <p className="text-white/60 text-lg">The mountains, markets, and monuments that define Jigjiga.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/landmarks" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-black rounded-full hover:bg-primary/90 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Landmarks
            </Link>
            <Link href="/landmarks/karamara-mountains" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-colors">
              Karamara Mountains →
            </Link>
            <Link href="/landmarks/camel-market" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-colors">
              Camel Market →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
