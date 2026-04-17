import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/qaaci-nightlife")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Music2, Star, Mic, Heart, Quote, Users, Sparkles } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Music2 className="w-4 h-4" />, label: "The Sound", value: "Kaban (Oud) — Qaraami Classics" },
  { icon: <Star className="w-4 h-4" />, label: "Top Venues", value: "Sky Hotel & Nogob Hotel" },
  { icon: <Mic className="w-4 h-4" />, label: "Concert Season", value: "July–August & Eid Holidays" },
  { icon: <Heart className="w-4 h-4" />, label: "Wedding Season", value: "June–September — The Aroos" },
];

const SECTIONS = [
  {
    id: "qaaci",
    icon: <Music2 className="w-8 h-8" />,
    number: "01",
    tag: "The Unplugged Somali Classic",
    title: "Qaaci Nights",
    subtitle: "Where the Kaban Takes Centre Stage",
    accent: "#d97706",
    accentBg: "rgba(217,119,6,0.12)",
    body: [
      "If you want to understand the true heart of a local from Jigjiga, you have to attend a Qaaci night. There is nothing quite like it. Unlike the loud energy of a concert or the performative atmosphere of a club, Qaaci is intimate, soulful, and deeply rooted in who the Somali people are. It is music as memory. It is music as conversation.",
      "These nights are usually held in the lush hotel gardens or upscale lounges of venues like the Sky Hotel or the Nogob Hotel — places that have the space and the ambiance to let the music breathe. The Kaban (the Somali Oud) takes centre stage: its warm, resonant tones carrying the weight of the Qaraami repertoire — the Somali classics. These are slow, poetic songs of love, of the land, of history. Songs that the older generation know by heart and that the younger generation are rediscovering.",
      "Imagine this: you are sitting in the cool mountain breeze that rolls off the Karamara hills into Jigjiga after dark. Your tea — Shaah Rinjiga, spiced with ginger and cardamom — is still warm in your hands. The smell of Uunsi drifts through the garden from a burner near the entrance. And then the Kaban begins. This is not just a show. It is a shared emotional experience, and the fact that everyone in the room feels it together is what makes Qaaci one of the most unique social rituals in the Horn of Africa.",
      "There is also a practical dimension that visitors often discover by accident: Qaaci Nights are enormously popular with the Somali diaspora returning home. They are, quietly, some of the best networking events in the city. Sitting beside you at a Qaaci night may be a businessman from London or a professor from Toronto who grew up in Jigjiga and comes back every summer for exactly this. It is the perfect place to listen, to connect, and to understand what the city means to the people who love it most.",
    ],
    highlights: [
      { label: "The Sound", detail: "Kaban (Oud) + drums + Qaraami classical vocals" },
      { label: "Best Venues", detail: "Sky Hotel, Nogob Hotel — gardens & lounges" },
      { label: "The Drink", detail: "Shaah Rinjiga — ginger & cardamom spiced tea" },
      { label: "The Scent", detail: "Uunsi incense drifting through the night air" },
      { label: "Pro Tip", detail: "Diaspora return season — prime networking with city leaders" },
    ],
  },
  {
    id: "shows",
    icon: <Mic className="w-8 h-8" />,
    number: "02",
    tag: "Superstars in the Capital",
    title: "Singer Shows",
    subtitle: "When the City Stops for Its Stars",
    accent: "#7c3aed",
    accentBg: "rgba(124,58,237,0.12)",
    body: [
      "Jigjiga is a major tour stop for the biggest names in Somali music, and when a superstar comes to town, the city feels it. The excitement builds days before the show: social media lights up, the tickets sell fast, and by the evening of the performance, the streets around the venue are buzzing with anticipation. These are not small events.",
      "Artists of the calibre of Suldaan Seeraar, Kiin Jaamac, and Ugbaad Aragsan have each drawn thousands of fans to massive ballrooms and outdoor stages — at venues like the Jigjiga Cultural Center and the regional stadiums. The energy at these shows is electric in a way that is almost impossible to describe to someone who hasn't experienced it. When the music drops and the crowd recognizes a favourite song, the response is immediate: people rise, the Dhaanto circles form spontaneously in the aisles, and for a few minutes the distinction between performer and audience dissolves completely.",
      "Timing your visit to catch a show requires a little local knowledge. The peak season is July and August — the summer months when the diaspora returns and the city's social calendar is at its most active. Eid holidays are also major show periods. The key detail every visitor needs to know: shows in Jigjiga are often announced only a week or even a few days in advance. Follow local Jigjiga accounts on social media and keep your ears open. Word travels fast in this city, and the best nights are the ones you find out about from someone who actually lives here.",
    ],
    highlights: [
      { label: "Top Artists", detail: "Suldaan Seeraar, Kiin Jaamac, Ugbaad Aragsan" },
      { label: "Venues", detail: "Jigjiga Cultural Center & regional stadiums" },
      { label: "Peak Season", detail: "July–August & Eid holidays" },
      { label: "How to Find Out", detail: "Follow local Jigjiga social media — announced days in advance" },
    ],
  },
  {
    id: "weddings",
    icon: <Heart className="w-8 h-8" />,
    number: "03",
    tag: "Jigjiga's Biggest Party",
    title: "The Wedding Season",
    subtitle: "June–September — The City in Aroos Mode",
    accent: "#db2777",
    accentBg: "rgba(219,39,119,0.1)",
    body: [
      "Between June and September, Jigjiga enters what locals call \"Aroos Mode\" — and if you visit during these months you will understand the phrase immediately. A Somali wedding (Aroos) is not a private party. It is a community festival, and in Jigjiga, that community extends to the entire neighbourhood. You may hear music from three different wedding celebrations simultaneously from a single street corner on a summer night. It is one of the sounds that defines the city.",
      "The Aroos spectacle begins long before the celebration itself. The bridal motorcade — the Galbis — winds through the main streets of the city: cars decorated in ribbons and flowers, music blaring from speakers mounted on trucks, and people lining the roads to wave, cheer, and take videos. It is a procession that announces the wedding to the whole city, and it is entirely intentional. In Jigjiga, a wedding is something you share.",
      "At the celebration itself, while modern Jigjiga weddings feature DJs and contemporary music, the heart of every Jigjiga wedding remains the Dhaanto. At some point in the night — usually when the crowd is at its most energized — the Dhaanto circle forms. Guests compete to see who has the best footwork, the sharpest timing, the most expressive movement. Elders dance alongside young people. Men and women perform in their own circles. The energy is joyful, inclusive, and completely alive.",
      "Perhaps the most remarkable thing about Jigjiga weddings is the concept of Is-caawin — mutual support. While the dinner itself is for invited guests, the outdoor dancing and the celebrations are often entirely open. Neighbours drift in. Passersby stop to watch and then find themselves joining. If you are a visitor to Jigjiga and you hear a wedding in the distance, walking toward the music is not rude — it is, in many ways, exactly what the spirit of the occasion intends.",
    ],
    highlights: [
      { label: "Season", detail: "June–September — peak wedding months" },
      { label: "The Galbis", detail: "Bridal motorcade through the main streets" },
      { label: "The Dance", detail: "Dhaanto circles — the heart of every Aroos" },
      { label: "Is-caawin", detail: "Mutual support — outdoor celebrations are open to all" },
    ],
  },
];

const VENUES = [
  { name: "Sky Hotel", type: "Qaaci Nights", desc: "Garden setting with mountain breeze — the premium Qaaci experience in Jigjiga." },
  { name: "Nogob Hotel", type: "Qaaci Nights", desc: "Elegant lounge atmosphere, known for hosting the city's most intimate musical evenings." },
  { name: "Jigjiga Cultural Center", type: "Singer Shows", desc: "The main stage for major concerts — ballroom and outdoor spaces for thousands." },
  { name: "Regional Stadiums", type: "Singer Shows & Events", desc: "Open-air venue for the city's largest performances during summer and Eid seasons." },
];

export default function QaaciNightlife() {
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
        isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm" : "bg-transparent py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-0 group outline-none shrink-0">
              <LogoImg />
              <span className={`text-base sm:text-lg font-black tracking-tight -ml-4 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
                IGJIGA
              </span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href}
                  className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                    item.label === "Culture"
                      ? isScrolled ? "text-primary" : "text-amber-300"
                      : isScrolled ? "text-gray-600 hover:text-primary" : "text-white/70 hover:text-white"
                  }`}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="https://business.jigjiga.net" target="_blank" rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 text-white text-sm font-bold rounded-full hover:bg-amber-400 transition-colors">
                Business Services
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white/80 hover:bg-white/10"}`}>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className={`lg:hidden py-4 border-t mt-3 flex flex-col gap-3 ${isScrolled ? "border-gray-100" : "border-white/20"}`}>
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-1.5 transition-colors ${isScrolled ? "text-gray-600" : "text-white/80"}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden" style={{ background: "linear-gradient(145deg, #050a18 0%, #0d1535 40%, #1a0a2e 70%, #0a1020 100%)" }}>
        {/* stars / orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(28)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{ width: Math.random() * 2 + 1, height: Math.random() * 2 + 1, top: `${Math.random() * 70}%`, left: `${Math.random() * 100}%`, opacity: Math.random() * 0.5 + 0.15 }} />
          ))}
          <div style={{ position: "absolute", top: "20%", left: "15%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", top: "10%", right: "10%", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "0%", left: "40%", width: 400, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(219,39,119,0.12) 0%, transparent 70%)" }} />
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-8">
            <Link href="/history-culture"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/40 text-sm">Arts &amp; Culture</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}>
            <span className="inline-block px-3 py-1 bg-amber-500 text-black text-xs font-black rounded-full mb-5 uppercase tracking-widest">
              Local Expert Guide
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              The Soul of<br />
              <span className="text-amber-400">Jigjiga Nights</span>
            </h1>
            <p className="text-xl text-white/60 font-bold font-script">Qaaci · Singer Shows · The Aroos</p>
            <p className="text-white/25 text-sm mt-4 font-medium">Arts & Culture · Nightlife & Music · Jigjiga</p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK FACTS ── */}
      <section style={{ background: "#07091a" }} className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-amber-400 shrink-0">{fact.icon}</div>
                <div>
                  <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-0.5">{fact.label}</p>
                  <p className="text-white text-sm font-semibold leading-snug">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN SECTIONS ── */}
      <div>
        {SECTIONS.map((sec, i) => (
          <section key={sec.id} className={`py-16 sm:py-24 ${i % 2 === 1 ? "bg-gray-50" : "bg-background"}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={stagger}>

                {/* Section number + heading */}
                <motion.div variants={fadeUp} className="flex items-start gap-5 mb-10">
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg text-white"
                      style={{ background: `linear-gradient(135deg, ${sec.accent}ee 0%, ${sec.accent}99 100%)` }}>
                      {sec.icon}
                    </div>
                    <span className="text-3xl font-black text-gray-200 leading-none">{sec.number}</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: sec.accent }}>{sec.tag}</p>
                    <div className="h-px w-16 mb-3" style={{ background: `linear-gradient(to right, ${sec.accent}, transparent)` }} />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight">{sec.title}</h2>
                    <p className="font-semibold mt-1" style={{ color: sec.accent }}>{sec.subtitle}</p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                  {/* Article body */}
                  <div className="lg:col-span-2 space-y-5">
                    {sec.body.map((para, pi) => (
                      <motion.p key={pi} variants={fadeUp} className="text-gray-600 leading-relaxed text-base sm:text-lg">{para}</motion.p>
                    ))}
                  </div>

                  {/* Sidebar */}
                  <motion.div variants={fadeUp}
                    className="rounded-2xl p-6 border space-y-4"
                    style={{ background: sec.accentBg, borderColor: `${sec.accent}30` }}>
                    <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: sec.accent }}>
                      <Sparkles className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                      At a Glance
                    </p>
                    {sec.highlights.map((h) => (
                      <div key={h.label} className="border-b last:border-b-0 pb-3 last:pb-0" style={{ borderColor: `${sec.accent}20` }}>
                        <p className="text-xs font-black uppercase tracking-wide text-gray-400 mb-0.5">{h.label}</p>
                        <p className="text-sm font-semibold text-gray-800">{h.detail}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* ── VENUES ── */}
      <section className="py-16 sm:py-24" style={{ background: "#07091a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
              <p className="text-amber-400 font-black uppercase tracking-widest text-xs mb-3">Where the Music Lives</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">Jigjiga's Premier Music Venues</h2>
              <p className="text-white/40 mt-3 max-w-xl mx-auto">From intimate Qaaci gardens to stadium-scale concerts — these are the spaces that define Jigjiga's sound.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {VENUES.map((venue, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-500/40 transition-colors"
                  style={{ background: "rgba(255,255,255,0.04)" }}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg sm:text-xl font-black text-white">{venue.name}</h3>
                    <span className="shrink-0 px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-black rounded-full uppercase tracking-wide whitespace-nowrap">{venue.type}</span>
                  </div>
                  <p className="text-white/50 text-sm sm:text-base leading-relaxed">{venue.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #050a18 0%, #1a0a2e 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-amber-400 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-relaxed mb-6">
            {pullQuote}
          </blockquote>
          <p className="text-amber-400 font-bold text-base">— Jigjiga</p>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Culture &amp; Events</h2>
          <p className="text-white/80 mb-8 text-lg">From the Festivals Guide to Somali poetry — discover what makes Jigjiga come alive.</p>
          <Link href="/history-culture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
