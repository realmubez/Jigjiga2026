import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, MapPin, Calendar, BookOpen, Sword, Quote } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/sayid-hassan")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Calendar className="w-4 h-4" />, label: "Born", value: "1856, Sa'adeed Valley" },
  { icon: <MapPin className="w-4 h-4" />, label: "Died", value: "1921, Imi" },
  { icon: <Sword className="w-4 h-4" />, label: "Title", value: "The Sayid (Lord), Leader of the Daraawiish" },
  { icon: <BookOpen className="w-4 h-4" />, label: "Legacy", value: "Father of Somali Nationalism and Master Poet" },
];

const DEFAULT_SECTIONS = [
  {
    title: "The Early Years: A Scholar in the Making",
    body: "Born in 1856 in the valley of Sa'adeed, Sayid Mohamed was a brilliant student of Islam long before he was a warrior. By the age of 19, he had earned the title of \"Sheikh\" for his mastery of the Quran and Islamic law. His travels to Mecca and the coastal ports like Berbera opened his eyes to the growing influence of foreign colonial powers in the Horn of Africa, sparking his mission to protect his people's faith and land.",
    image: "https://picsum.photos/seed/sayid-young/800/500",
    imageAlt: "The Somali landscape where Sayid Mohamed grew up",
  },
  {
    title: "The Birth of the Dervish Movement (Daraawiish)",
    body: "Upon returning to his homeland, he was disturbed by the cultural and religious changes brought by British, Italian, and Ethiopian expansion. He founded the Dervish Movement, a resistance force dedicated to the independence of the Somali people. He moved his base to the interior regions, specifically the area around Jigjiga, to recruit followers and build a unified front against the invaders.",
    image: "https://picsum.photos/seed/dervish-movement/800/500",
    imageAlt: "The Dervish resistance movement",
  },
  {
    title: "The Legend of the \"Mad Mullah\"",
    body: "The British colonial forces, frustrated by his tactical brilliance and his ability to evade capture, nicknamed him the \"Mad Mullah.\" However, to his people, he was the Sayid (Lord) — a visionary leader who refused to bow to foreign rule. For over 20 years, he led one of the longest and bloodiest anti-colonial wars in African history, earning respect across the continent.",
    image: "https://picsum.photos/seed/sayid-warrior/800/500",
    imageAlt: "Dervish warriors in the field",
  },
  {
    title: "The Master of the Somali Language",
    body: "While he was a general on the battlefield, he was a \"King\" of poetry in the streets. In Somali culture, poetry is more powerful than a sword. The Sayid used his poems (Gabay) to inspire his soldiers, mock his enemies, and record the history of his struggle. Even today, his poems are studied as the highest form of Somali literature, and he is considered the greatest poet in the history of the language.",
    image: "https://picsum.photos/seed/somali-poetry/800/500",
    imageAlt: "Somali oral poetry tradition",
  },
  {
    title: "The Battle of Jigjiga and the Karamara Defense",
    body: "The Sayid's history is permanently tied to the landscape of Jigjiga. He launched major campaigns from the surrounding mountains, using the rugged terrain of the Karamara Range as a natural fortress. His presence in this region forced the imperial powers of the time to build massive stone forts just to defend against his swift cavalry attacks and guerrilla tactics.",
    image: "https://picsum.photos/seed/karamara-mountains/800/500",
    imageAlt: "The Karamara mountain range near Jigjiga",
  },
  {
    title: "The Final Stand and Immortality",
    body: "In 1920, the British used airplanes for the first time in Africa to bomb his stone fortresses in Taleex. Despite the massive technological disadvantage, the Sayid refused to surrender. He retreated toward the Imi region, where he passed away in 1921. Though his physical movement ended, his spirit became the foundation for modern Somali nationalism. Today, his massive bronze statue stands in the center of Jigjiga, reminding every visitor of the city's defiant and proud history.",
    image: "https://picsum.photos/seed/sayid-legacy/800/500",
    imageAlt: "The legacy of the Sayid in Jigjiga",
  },
];

export default function SayidHassan() {
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
      {/* ── HEADER ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm" : "bg-white/80 backdrop-blur-md py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-0 group outline-none shrink-0">
              <LogoImg />
              <span className="text-base sm:text-lg font-black tracking-tight text-foreground -ml-4">IGJIGA</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href}
                  className={`text-sm font-semibold transition-colors whitespace-nowrap ${item.label === "Culture" ? "text-primary" : "text-gray-600 hover:text-primary"}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="https://business.jigjiga.net" target="_blank" rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors">
                Business Services
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 mt-3 flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-1.5 transition-colors ${item.label === "Culture" ? "text-primary" : "text-gray-600"}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 15% 50%, rgba(249,115,22,0.15) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(37,99,235,0.22) 0%, transparent 55%)" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 w-full text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6">
            <Link href="/history-culture"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Legendary Figures</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">
              Legendary Figure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Sayid Mohamed<br />Abdullah Hassan
            </h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">
              The Lion of Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK FACTS SIDEBAR STRIP ── */}
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

      {/* ── ARTICLE SECTIONS ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <motion.div variants={fadeUp} className={"text-center lg:text-left " + (i % 2 === 1 ? "lg:col-start-2" : "")}>
                  <div className="w-10 h-1 bg-[#f97316] rounded-full mb-5 mx-auto lg:mx-0" />
                  <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">{sec.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{sec.body}</p>
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className={`overflow-hidden rounded-2xl shadow-lg ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <img src={sec.image} alt={sec.imageAlt}
                    className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-[#f97316] mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-6">
            "{pullQuote}"
          </blockquote>
          <p className="text-[#f97316] font-bold text-lg">— Sayid Mohamed Abdullah Hassan</p>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More History &amp; Culture</h2>
          <p className="text-white/80 mb-8 text-lg">Discover the other legendary figures and traditions that shaped Jigjiga.</p>
          <Link href="/history-culture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
