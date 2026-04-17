import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/dhaanto")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Music, MapPin, Calendar, Mic2, Quote } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <MapPin className="w-4 h-4" />, label: "Origin", value: "Somali Region (Ogaden), 19th Century" },
  { icon: <Music className="w-4 h-4" />, label: "Style", value: "Rhythmic stomping, clapping, and call-and-response singing" },
  { icon: <Mic2 className="w-4 h-4" />, label: "Instruments", value: "Traditionally vocals & hands only; modernly strings & percussion" },
  { icon: <Calendar className="w-4 h-4" />, label: "Occasions", value: "Weddings, Eids, Independence days, and cultural festivals" },
];

const elements = [
  { emoji: "👏", title: "The Clap", description: "A sharp, rhythmic clapping that sets the tempo for the entire group." },
  { emoji: "🦶", title: "The Step", description: "Synchronized jumping and stomping that requires perfect timing among all dancers." },
  { emoji: "🎤", title: "The Chant", description: "A lead singer starts a verse and the entire group responds in a melodic chorus." },
];

const DEFAULT_SECTIONS = [
  {
    title: "The Soul of Somali Folklore",
    body: "Dhaanto is more than just a dance; it is the ultimate expression of Somali identity, joy, and storytelling. Originating in the Somali Region of Ethiopia, it has evolved from a nomadic celebration into a world-famous art form. In the streets and squares of Jigjiga, the sound of the Dhaanto beat is the signal that a celebration has truly begun.",
    image: "https://picsum.photos/seed/dhaanto-crowd/800/500",
    imageAlt: "A Dhaanto celebration in Jigjiga",
  },
  {
    title: "The Nomadic Roots",
    body: "Historically, Dhaanto was created by nomadic camel herders. After a long day of traveling or during the rainy season (Gu), nomads would gather around a fire to sing and dance. The rhythmic \"thumping\" of the feet and the synchronized clapping were designed to mirror the steady, powerful heartbeat of a camel walking through the desert. It was a way to stay connected, share news, and celebrate life in the wild.",
    image: "https://picsum.photos/seed/nomad-campfire/800/500",
    imageAlt: "Nomads gathering around a fire — the birthplace of Dhaanto",
  },
  {
    title: "Dhaanto as a Political Tool",
    body: "During the era of Sayid Mohamed Abdullah Hassan and the Dervish movement, Dhaanto took on a new meaning. It was used to spread messages of resistance and unity. Poets would hide secret messages in their lyrics to communicate across the region. Even today, many Dhaanto songs are deeply patriotic, praising the beauty of the land and the bravery of the people.",
    image: "https://picsum.photos/seed/dhaanto-political/800/500",
    imageAlt: "Dhaanto as a tool of resistance and unity",
  },
  {
    title: "The Modern Revival",
    body: "Today, Dhaanto has moved from the nomadic campfire to the global stage. Modern artists have added instruments like the guitar, keyboard, and drums, creating a \"Pop-Dhaanto\" style that is popular in clubs and weddings from Jigjiga to London and Minneapolis. However, in the rural areas surrounding Jigjiga, the traditional \"voice and clap\" version remains the most authentic and respected form of the dance.",
    image: "https://picsum.photos/seed/modern-dhaanto/800/500",
    imageAlt: "Modern Dhaanto artists on the global stage",
  },
  {
    title: "Experience it in Jigjiga",
    body: "If you visit Jigjiga during a wedding, a public holiday, or a cultural festival, you will inevitably see a Dhaanto circle. Visitors are often encouraged to join in — as long as you can keep the beat! It is a powerful symbol of the hospitality and high-energy culture that defines our city.",
    image: "https://picsum.photos/seed/dhaanto-festival/800/500",
    imageAlt: "Visitors joining a Dhaanto circle at a Jigjiga festival",
  },
];

export default function Dhaanto() {
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
      <section className="relative pt-24 min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImageUrl} alt="Dhaanto performers in Jigjiga"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/55 to-slate-900/20" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6">
            <Link href="/history-culture"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Arts &amp; Lifestyle</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">
              Folk Dance &amp; Music
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
              Dhaanto
            </h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">
              The Heartbeat of the Somali Region
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

      {/* ── ART OF THE MOVE ── */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">The Three Elements</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">
              The Art of the Move
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {elements.map((el, i) => (
              <motion.div key={el.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <span className="text-5xl block mb-4">{el.emoji}</span>
                <h3 className="text-lg font-black text-foreground mb-2">{el.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{el.description}</p>
              </motion.div>
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
          <p className="text-[#f97316] font-bold text-lg">— Jigjiga Saying</p>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More History &amp; Culture</h2>
          <p className="text-white/80 mb-8 text-lg">Discover the crafts, landmarks, and legends that make Jigjiga one of a kind.</p>
          <Link href="/history-culture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
