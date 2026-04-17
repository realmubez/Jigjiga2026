import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/somali-poetry")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Mic, BookOpen, Music, Star, Quote, Feather, Users, Flame } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.13 } } };

const quickFacts = [
  { icon: <Feather className="w-4 h-4" />, label: "Highest Form", value: "Gabay — The King of Verses" },
  { icon: <BookOpen className="w-4 h-4" />, label: "Tradition", value: "Oral Literature (Centuries Old)" },
  { icon: <Users className="w-4 h-4" />, label: "Role in Society", value: "History, Law, News & Diplomacy" },
  { icon: <Music className="w-4 h-4" />, label: "Modern Scene", value: "Jigjiga University Cultural Festivals" },
];

const SECTIONS = [
  {
    icon: <Mic className="w-8 h-8" />,
    tag: "The Living Tradition",
    title: "The Power of the Spoken Word",
    subtitle: "Maanso — A Nation of Poets",
    body: [
      "Somalis are world-renowned as a \"Nation of Poets.\" In Jigjiga and across the Somali Region, poetry — known as Maanso — is not merely art. It is history, it is law, and it is the daily news of the community. For centuries before written records, poets were the keepers of collective memory, the journalists of their age, and the greatest cultural authorities in the land.",
      "A skilled poet in Jigjiga commands a respect that few other roles can match. When a great Gabay is recited in a gathering, the room falls silent. People lean in, listening not just for beauty but for meaning — because every word carries weight, every line can settle a dispute, inspire a generation, or record an event for eternity. This is a living tradition, not a museum piece.",
    ],
  },
  {
    icon: <Feather className="w-8 h-8" />,
    tag: "The Supreme Art Form",
    title: "Gabay: The King of Verses",
    subtitle: "The Most Complex Form of Somali Poetry",
    body: [
      "Of all the forms of Somali poetry, the Gabay stands at the very top. It is the most complex, the most demanding, and the most respected. A Gabay follows strict rules of alliteration — every major word in the poem must begin with the same letter or sound. This is not a decoration; it is the architecture of the poem, and mastering it takes a lifetime.",
      "A great Gabay poet in Jigjiga is often more respected than a politician. The Sayid himself — Sayid Mohamed Abdullah Hassan — was first and foremost a master of the Gabay before he was a military leader. His poems were his most powerful weapon. They traveled faster than his cavalry, reaching communities hundreds of miles away, inspiring resistance, mocking enemies, and uniting a people through the sheer force of language. This is the power of the Gabay.",
    ],
  },
  {
    icon: <Flame className="w-8 h-8" />,
    tag: "Poetry as Power",
    title: "From the Battlefield to the Negotiating Table",
    subtitle: "When Words Settled Wars",
    body: [
      "In the history of Jigjiga, poetry has served functions that in other cultures were reserved for courts of law, diplomatic missions, and even warfare. Clans would send poets to negotiate peace — and a brilliant poem could end a blood feud more effectively than any treaty. The concept of using a poet as an ambassador is uniquely and powerfully Somali.",
      "Even today, when elders gather for a Shir (council meeting) to resolve a major dispute, the most respected person in the room is often the one who can articulate the community's position in the most powerful verse. The tradition of the \"war poem\" (Hees Dagaal) and the \"peace poem\" (Hees Nabadda) represent a sophisticated understanding that language, wielded masterfully, is the sharpest tool a civilization has.",
    ],
  },
  {
    icon: <Star className="w-8 h-8" />,
    tag: "The Next Generation",
    title: "Poetry in Modern Jigjiga",
    subtitle: "Ancient Roots, Future Voices",
    body: [
      "Today, the tradition of Maanso continues to thrive in the tea shops, community halls, and cultural festivals of Jigjiga. The city's cultural calendar includes regular poetry nights where both elders and young people perform — a beautiful passing of the torch from one generation to the next.",
      "At Jigjiga University, cultural festivals celebrate the poetic tradition with competitions where young poets perform Gabay alongside modern spoken word. What is remarkable is how seamlessly the young poets of Jigjiga blend the ancient rules of alliteration with modern themes: technology, education, diaspora identity, and the future of the region. They are proving that the oldest art form of the Somali people is also the most adaptable — and that in a world of noise, the voice of a true poet still stops a room.",
    ],
  },
];

const POETRY_TYPES = [
  { name: "Gabay", desc: "The most formal and complex form — strict alliteration, long verses, used for politics, history, and epic themes.", level: "Supreme" },
  { name: "Geeraar", desc: "A shorter, faster war poem performed on horseback. Energetic and rhythmic, built for battle and courage.", level: "Martial" },
  { name: "Heello", desc: "The most popular modern form — musical, romantic, and emotional. The heartbeat of Somali pop music today.", level: "Popular" },
  { name: "Buraanbur", desc: "The poetry of women — celebrating births, weddings, and community life. Often performed in a group call-and-response style.", level: "Cultural" },
];

export default function SomaliPoetry() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const content = usePageContent(PAGE_META.id, PAGE_META.defaults);
  const pullQuote = content.pullQuote ?? PAGE_META.defaults.pullQuote ?? "";

  const navLinks = [
    { label: "Explore City", href: "/#explore-city" },
    { label: "News", href: "/#news" },
    { label: "Culture", href: "/history-culture" },
    { label: "Tech Hub", href: "/tech-hub" },
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
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 25% 60%, rgba(249,115,22,0.16) 0%, transparent 55%), radial-gradient(ellipse at 70% 10%, rgba(37,99,235,0.2) 0%, transparent 55%)" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 w-full text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6">
            <Link href="/history-culture"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Arts &amp; Culture</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">
              Living Tradition
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Somali Poetry<br /><span className="text-[#f97316]">Maanso</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 font-bold font-script">
              The Nation of Poets
            </p>
            <p className="text-white/40 text-sm mt-4 font-medium">Arts & Culture · Oral Literature · Jigjiga</p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK FACTS ── */}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {SECTIONS.map((sec, i) => (
              <motion.div key={sec.title}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
                variants={stagger} className="relative">
                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-[#f97316] shrink-0 shadow-lg">
                    {sec.icon}
                  </div>
                  <div>
                    <p className="text-[#f97316] text-xs font-black uppercase tracking-widest mb-0.5">{sec.tag}</p>
                    <div className="h-px w-24 bg-gradient-to-r from-[#f97316] to-transparent" />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">{sec.title}</h2>
                  <p className="text-primary font-semibold text-base">{sec.subtitle}</p>
                </motion.div>

                <div className="space-y-5">
                  {sec.body.map((para, pi) => (
                    <motion.p key={pi} variants={fadeUp}
                      className="text-gray-600 leading-relaxed text-base sm:text-lg">{para}</motion.p>
                  ))}
                </div>

                {i < SECTIONS.length - 1 && (
                  <motion.div variants={fadeUp} className="mt-20 sm:mt-28 flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-100" />
                    <Feather className="w-4 h-4 text-[#f97316]" />
                    <div className="flex-1 h-px bg-gray-100" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POETRY TYPES ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
              <p className="text-[#f97316] font-black uppercase tracking-widest text-xs mb-3">A Rich Tradition</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">The Four Forms of Somali Poetry</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">Each form serves a different purpose in Jigjiga's social fabric — from courts of justice to wedding celebrations.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {POETRY_TYPES.map((type, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-foreground">{type.name}</h3>
                    <span className="shrink-0 px-3 py-1 bg-[#f97316]/10 text-[#f97316] text-xs font-black rounded-full uppercase tracking-wide">{type.level}</span>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{type.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-[#f97316] mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-relaxed mb-6">
            {pullQuote}
          </blockquote>
          <p className="text-[#f97316] font-bold text-base">— Somali Proverb</p>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Arts &amp; Culture</h2>
          <p className="text-white/80 mb-8 text-lg">From Dhaanto dance to the Somali Aqal — discover the living traditions of Jigjiga.</p>
          <Link href="/history-culture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
