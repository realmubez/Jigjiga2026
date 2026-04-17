import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/traditional-leadership")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Crown, Users, Leaf, Globe2, Quote } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Crown className="w-4 h-4" />, label: "Key Titles", value: "Ugaas, Garad, Sultan, Wabar" },
  { icon: <Users className="w-4 h-4" />, label: "Selection Process", value: "Hereditary, confirmed by council of elders" },
  { icon: <Globe2 className="w-4 h-4" />, label: "Main Responsibility", value: "Peacekeeping, conflict resolution, cultural preservation" },
  { icon: <Leaf className="w-4 h-4" />, label: "The Ceremony", value: "Caleemo-Saar — a public blessing and celebration" },
];

const DEFAULT_SECTIONS = [
  {
    title: "The Guardians of the People",
    body: "Traditional leadership in Jigjiga is a sacred and ancient system that predates modern government. These leaders, known as the Ugaas, Garad, or Sultan, serve as the moral compass of the community. They are not just political figures; they are the ultimate mediators, the keepers of history, and the symbols of unity for their respective clans.",
    image: "https://picsum.photos/seed/traditional-leaders/800/500",
    imageAlt: "Traditional Somali leaders gathering",
  },
  {
    title: "The Ugaas: The Supreme Mediator",
    body: "The title of Ugaas is one of the most respected in Somali culture. An Ugaas is often seen as a father figure to his people. His primary role is to maintain peace. When conflicts arise between different groups, the Ugaas steps in as a neutral judge. His word carries immense weight because he is expected to rule with absolute fairness, putting the safety of the community above his own interests.",
    image: "https://picsum.photos/seed/ugaas-mediator/800/500",
    imageAlt: "An Ugaas mediating between community members",
  },
  {
    title: "The Garad: The Leader of the Plains",
    body: "The title Garad has deep historical roots in the Jigjiga and Harar regions. Historically, a Garad was a leader who managed the affairs of the people, from trade routes to the defense of the land. Famous leaders like Garad Wiil-Waal used this title to represent their authority over the vast plains. Today, a Garad remains a vital leader who ensures that the traditions of his people are preserved in an ever-changing modern world.",
    image: "https://picsum.photos/seed/garad-plains/800/500",
    imageAlt: "The vast plains of Jigjiga historically led by the Garad",
  },
  {
    title: "The Sultan: Spiritual and Political Authority",
    body: "The title of Sultan became prominent during the era of the Great Sultanates, like the Adal Sultanate. A Sultan often represents a blend of political leadership and spiritual guidance. They are responsible for overseeing the welfare of their people, ensuring that Islamic values and Somali traditions are balanced. In Jigjiga, a Sultan is a key figure in major public events and community decision-making.",
    image: "https://picsum.photos/seed/adal-sultan/800/500",
    imageAlt: "The historical era of the Somali Sultanates",
  },
  {
    title: "Caleemo-Saar: The Sacred Coronation",
    body: "A leader is not simply born; they must be accepted by the people. The Caleemo-Saar (The Putting on of Leaves) is the traditional coronation ceremony. During this festival, fresh green leaves are placed on the new leader, symbolizing growth, life, and peace. It is a day of massive celebration in Jigjiga, filled with Dhaanto dancing, poetry, and feasts, as the community pledges its loyalty to their new guardian.",
    image: "https://picsum.photos/seed/caleemo-saar/800/500",
    imageAlt: "The Caleemo-Saar coronation ceremony",
  },
  {
    title: "Leadership in the 21st Century",
    body: "While Jigjiga grows into a modern Tech Hub, the role of the Ugaas and Garad remains essential. They act as a bridge between the government and the people. When the modern legal system needs help understanding local sensitivities, or when a community crisis occurs, these traditional leaders are the first to be consulted. They are the reason Jigjiga remains one of the most stable and culturally rich cities in the Horn of Africa.",
    image: "https://picsum.photos/seed/jigjiga-modern-city/800/500",
    imageAlt: "Modern Jigjiga where tradition and progress coexist",
  },
];

export default function TraditionalLeadership() {
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
      <section className="relative pt-24 min-h-[70vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImageUrl} alt="Traditional Somali leadership ceremony"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/40 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6">
            <Link href="/history-culture"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Governance &amp; Heritage</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">
              Heritage &amp; Governance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Traditional<br />Leadership
            </h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">
              The Ugaas, Garad, and Sultan
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
                <motion.div variants={fadeUp} className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-10 h-1 bg-[#f97316] rounded-full mb-5" />
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
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-[#f97316] font-bold text-lg">— Somali Proverb</p>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More History &amp; Culture</h2>
          <p className="text-white/80 mb-8 text-lg">Discover the arts, landmarks, and traditions that make Jigjiga unique.</p>
          <Link href="/history-culture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
