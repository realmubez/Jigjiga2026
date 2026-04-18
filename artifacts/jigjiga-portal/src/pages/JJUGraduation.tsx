import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, GraduationCap, Music, Users, TrendingUp, Quote, Star } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/jju-graduation")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <GraduationCap className="w-4 h-4" />, label: "When", value: "July — Annual JJU Graduation" },
  { icon: <Users className="w-4 h-4" />, label: "Who Attends", value: "Families from the Region & Diaspora Worldwide" },
  { icon: <Music className="w-4 h-4" />, label: "The Dance", value: "Dhaanto on the Campus Grounds" },
  { icon: <TrendingUp className="w-4 h-4" />, label: "Economic Impact", value: "Hotels, Taywan Market & Tailors at Full Capacity" },
];

const SECTIONS = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    tag: "The Hambalyo Season",
    title: "When Graduation Becomes a City Festival",
    subtitle: "Jigjiga University — Founded 2004, Celebrated Every July",
    body: [
      "In Jigjiga, graduation is not just for the students — it is for the whole city. Every July, when Jigjiga University (JJU) confers its latest graduating class, something remarkable happens: the city transforms. Hotels reach full capacity days before the ceremony. Families travel from the most remote corners of the Somali Region. The diaspora flies in from London, Toronto, Minneapolis, and Dubai. The Hambalyo season — \"congratulations season\" — has begun.",
      "Jigjiga University was founded in 2004, at a moment when the Somali Region's investment in higher education was still young and its ambitions still largely unrealised. In the two decades since, JJU has grown into a genuinely significant institution — one that has produced engineers, doctors, lawyers, teachers, and public servants who now shape the region's future. Each July graduation is, implicitly, a reckoning with how far that journey has come.",
      "What is most striking about the JJU graduation, to any outsider witnessing it for the first time, is the scale of collective joy. This is not a private family moment or a campus ceremony that happens to have a large audience. It is a city-wide celebration of education itself — and in a region where access to higher education has historically been hard-won, that joy is real, and it runs deep.",
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    tag: "The Convocation",
    title: "The Ceremony — Where the Mashxarad Rings Out",
    subtitle: "Regional Leaders, Elders & the Call of the Names",
    body: [
      "The formal convocation is held on the university's open grounds or in its senior cafeteria — a vast space that is transformed for the occasion with rows of chairs, banners, and the academic regalia of the graduating class. Regional government leaders attend. Traditional elders take their seats of honour. Faculty process in academic gowns that look strikingly different from the traditional dress of the elders beside them — and entirely at ease in the same frame.",
      "When the names begin to be called, the ceremony changes register. The formality of the opening gives way to something warmer, louder, and more alive. As each graduate crosses the stage, the response from the crowd is immediate and deeply Somali: the high-pitched celebratory ululation of the women — the Mashxarad — rings out across the campus and, on a still July morning, can be heard from streets away.",
      "The Mashxarad is not a polite applause. It is a full-throated announcement that a member of the community has achieved something that matters. Each one says: we raised you, we supported you, we invested in you, and we are proud. For the graduate hearing it as they receive their degree, it is the sound of their whole community standing behind them.",
    ],
  },
  {
    icon: <Music className="w-8 h-8" />,
    tag: "The Real Party",
    title: "The Dhaanto Send-Off",
    subtitle: "Black Gowns, Ancient Steps",
    body: [
      "After the formal ceremony ends, the real party begins. And in Jigjiga, the real party means Dhaanto. Groups of graduates — still in their black gowns and mortarboards, having only just received their degrees — join traditional dancers on the campus greenery. The contrast is visually extraordinary: the formal western symbols of academic achievement alongside the rhythmic, ancient footwork of the Dhaanto dance, performed on the same grass, by the same people, at the same moment.",
      "This is not a concession to tradition made reluctantly at the edges of a modern ceremony. It is the whole point. The message of the Dhaanto send-off is that Jigjiga University's graduates are not choosing between modernity and their heritage — they are carrying both forward together. The gown and the Dhaanto are equally theirs. The celebration insists on this.",
      "The dance circles on JJU graduation day are some of the most joyful in the city's calendar. Graduates still in full academic dress, elders clapping from the sides, younger siblings and cousins watching and learning the steps, parents photographing everything — it goes on for hours after the formal ceremony has ended, in the afternoon heat of the Jigjiga July.",
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    tag: "A City-Wide Economic Pulse",
    title: "The Markets, the Tailors & Taywan",
    subtitle: "When the Whole City Prepares for the Hambalyo",
    body: [
      "The economic ripple of the JJU graduation moves through the city for a full week before the ceremony and several days after. The city's markets — and especially the Taywan market, Jigjiga's famous trading hub — are busier than at almost any other point in the year. Families buy new clothes for the graduate and for themselves. Tailors who specialise in traditional dress work around the clock to complete orders. Gift shops move everything from gold jewellery to beautifully wrapped Somali perfume sets.",
      "The hotels fill with extended family from across the region and the diaspora. Restaurants and teahouses run extended hours to accommodate the influx. The camel market on the city's edge sees increased activity as families slaughter animals for the post-graduation feasts. For many of Jigjiga's small business owners, graduation week rivals Eid as their most profitable period of the year.",
      "What this economic energy reflects is something deeper: in Jigjiga, a university degree is a family investment, not an individual achievement. Every relative who contributed money over the years, every elder who offered advice, every friend who hosted the student during difficult semesters — they are all part of the graduation. The celebration honours all of them. And when the city's markets respond to that, they are simply keeping pace with the scale of what is actually being celebrated.",
    ],
  },
];

export default function JJUGraduation() {
  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
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
      <SiteHeader />

      {/* HERO — purple/gold academic theme */}
      <section className="relative pt-24 pb-10 overflow-hidden" style={{ background: "linear-gradient(145deg, #1e0a3c 0%, #3b0764 40%, #581c87 70%, #2e0547 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ position: "absolute", top: "15%", right: "15%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(250,204,21,0.18) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "10%", left: "10%", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)" }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 pb-4">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-3 mb-6">
            <Link href="/history-culture" className="inline-flex items-center gap-2 text-purple-200/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-purple-200/30">/</span>
            <span className="text-purple-200/60 text-sm">Festivals &amp; Events</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-yellow-400 text-purple-900 text-xs font-black rounded-full mb-5 uppercase tracking-widest">July · Every Year</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              The Graduation<br /><span className="text-yellow-400">Festival</span>
            </h1>
            <p className="text-xl text-purple-200/70 font-bold font-script">Jigjiga University — Hambalyo Season</p>
            <p className="text-purple-200/30 text-sm mt-4 font-medium">Festivals &amp; Events · July · Jigjiga University (JJU)</p>
          </motion.div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section style={{ background: "#0f0220" }} className="border-b border-purple-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map(fact => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-yellow-400 shrink-0">{fact.icon}</div>
                <div>
                  <p className="text-purple-300/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{fact.label}</p>
                  <p className="text-white text-sm font-semibold leading-snug">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {SECTIONS.map((sec, i) => (
            <motion.div key={sec.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-yellow-400 shadow-lg shrink-0" style={{ background: "linear-gradient(135deg, #3b0764, #6b21a8)" }}>{sec.icon}</div>
                <div>
                  <p className="text-purple-600 text-xs font-black uppercase tracking-widest mb-0.5">{sec.tag}</p>
                  <div className="h-px w-20 bg-gradient-to-r from-purple-500 to-transparent" />
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">{sec.title}</h2>
                <p className="text-purple-600 font-semibold">{sec.subtitle}</p>
              </motion.div>
              <div className="space-y-5">
                {sec.body.map((para, pi) => (
                  <motion.p key={pi} variants={fadeUp} className="text-gray-600 leading-relaxed text-base sm:text-lg">{para}</motion.p>
                ))}
              </div>
              {i < SECTIONS.length - 1 && (
                <motion.div variants={fadeUp} className="mt-20 sm:mt-28 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gray-100" />
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <div className="flex-1 h-px bg-gray-100" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #3b0764 100%)" }} className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-yellow-400 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-relaxed mb-6">{pullQuote}</blockquote>
          <p className="text-yellow-400 font-bold">— Jigjiga University, July</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Culture &amp; Events</h2>
          <p className="text-white/80 mb-8 text-lg">From Flag Day to Mother Language Day — discover what makes Jigjiga come alive.</p>
          <Link href="/history-culture" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
