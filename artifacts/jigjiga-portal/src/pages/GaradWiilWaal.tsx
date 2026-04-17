import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/garad-wiil-waal")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, MapPin, Calendar, Lightbulb, Plane, Quote } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Calendar className="w-4 h-4" />, label: "Era", value: "16th Century" },
  { icon: <MapPin className="w-4 h-4" />, label: "Region", value: "Jigjiga & Adal Sultanate" },
  { icon: <Lightbulb className="w-4 h-4" />, label: "Known For", value: "Wisdom, Riddles, and Horseback Warfare" },
  { icon: <Plane className="w-4 h-4" />, label: "Modern Tribute", value: "Garad Wiil-Waal International Airport" },
];

const DEFAULT_SECTIONS = [
  {
    title: "The Ruler of the Adal Spirit",
    body: "Garad Wiil-Waal was a legendary 16th-century Sultan who ruled over the Jigjiga region and parts of the ancient Adal Sultanate. Unlike many leaders who were known only for their physical strength, Wiil-Waal became a legend because of his philosophy. He believed that a true leader must be a protector, a judge, and the most observant person in his kingdom.",
    image: "https://picsum.photos/seed/adal-sultanate/800/500",
    imageAlt: "The ancient Adal Sultanate landscape",
  },
  {
    title: "The Legend of the Riddles",
    body: "One of the most famous stories told to every child in Jigjiga is how Wiil-Waal tested his advisors with riddles to ensure they were fit to lead. He once famously ordered the men of the city to \"bring me the part of the sheep that represents both the best and the worst of humanity.\" While others brought expensive cuts of meat, one wise person brought the tongue. Wiil-Waal agreed, noting that the tongue can start wars or create peace, depending on how it is used.",
    image: "https://picsum.photos/seed/wiilwaal-riddle/800/500",
    imageAlt: "A gathering of elders and advisors",
  },
  {
    title: "The Protector of Jigjiga's Plains",
    body: "Historically, he is credited with unifying the various clans in the Somali Region to defend the fertile lands of Jigjiga. He was a master of horse-mounted warfare, and under his rule, the city became a major center for trade between the highlands of Ethiopia and the coastal ports of the Horn of Africa. He turned the Jigjiga plains into a stronghold of Somali identity.",
    image: "https://picsum.photos/seed/jigjiga-plains/800/500",
    imageAlt: "The fertile plains of Jigjiga",
  },
  {
    title: "A Legacy in the Clouds: Garad Wiil-Waal Airport",
    body: "His name is so important to the identity of the city that the Jigjiga International Airport was named in his honor. It serves as a symbolic \"gateway,\" welcoming the world to the land he once ruled. Whenever a traveler lands in Jigjiga, the first name they see is a tribute to this legendary Sultan, bridging the gap between ancient history and modern travel.",
    image: "https://picsum.photos/seed/jigjiga-airport/800/500",
    imageAlt: "Garad Wiil-Waal International Airport",
  },
  {
    title: "The Symbol of Somali Masculinity",
    body: "In Somali culture, the name \"Wiil-Waal\" itself carries weight. It roughly translates to \"The Brave Youth\" or \"The Spirited One.\" He remains a symbol of the ideal leader: someone who is courageous in battle but uses his mind and his heart to solve the problems of his people. His stories are still used today to teach young people about justice, patience, and sharp thinking.",
    image: "https://picsum.photos/seed/somali-youth-culture/800/500",
    imageAlt: "Somali cultural heritage and youth",
  },
];

export default function GaradWiilWaal() {
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
              Garad<br />Wiil-Waal
            </h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">
              The Sovereign of Wisdom
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK FACTS STRIP ── */}
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
            {pullQuote}
          </blockquote>
          <p className="text-[#f97316] font-bold text-lg">— Garad Wiil-Waal</p>
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
