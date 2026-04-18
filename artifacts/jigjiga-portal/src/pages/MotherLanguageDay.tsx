import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, BookOpen, Star, Users, Feather, Quote, Globe } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/mother-language-day")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Globe className="w-4 h-4" />, label: "Date", value: "February 21st — International Mother Language Day" },
  { icon: <BookOpen className="w-4 h-4" />, label: "The Event", value: "Literacy Fair — Authors & Poets in the City Center" },
  { icon: <Star className="w-4 h-4" />, label: "Competition", value: "Maahmaah (Proverb) Contest for Students" },
  { icon: <Feather className="w-4 h-4" />, label: "The Language", value: "Af-Soomaali — Jigjiga's Living Tongue" },
];

const SECTIONS = [
  {
    icon: <Globe className="w-8 h-8" />,
    tag: "The Intellectual Capital",
    title: "Jigjiga: Guardian of the Somali Tongue",
    subtitle: "February 21st — When a City Honours Its Language",
    body: [
      "Every February 21st, the world marks International Mother Language Day — a UNESCO-recognised occasion that calls on communities to celebrate, protect, and invest in the languages that carry their identity. In Jigjiga, the day carries exceptional weight. As the capital of the Somali Region and the largest Somali-speaking urban centre in Ethiopia, Jigjiga is in many ways the intellectual guardian of the Af-Soomaali language in this part of the continent.",
      "The Somali language is one of the most widely spoken in Africa. It has a rich oral literary tradition that stretches back centuries, a complex grammatical structure that linguists find remarkable, and — since the adoption of the official Somali Latin script in 1972 — a growing body of written literature, academic work, and digital content. Jigjiga sits at the centre of all of this for the Somali Region: its university, its media institutions, its schools, and its public culture all conduct their lives primarily in Af-Soomaali.",
      "When Jigjiga celebrates Mother Language Day, it is not performing a UNESCO obligation. It is celebrating something that is genuinely, daily, practically alive in every street, every classroom, every tea shop, and every family home in the city.",
    ],
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    tag: "The Literacy Fair",
    title: "Books, Poets & Authors in the City Center",
    subtitle: "When the Streets Become a Literary Market",
    body: [
      "The centerpiece of Jigjiga's Mother Language Day celebration is the Literacy Fair. Local authors, poets, academics, and publishers set up stalls across the city center, transforming the streets into an open-air literary market unlike anything in the city's regular calendar. Books in Af-Soomaali sit alongside poetry collections, academic journals, children's books illustrated with Somali folk tales, and recordings of oral literature.",
      "The fair is not an elite academic event kept behind institutional walls. It spills into the open, accessible to anyone passing by — and in Jigjiga's busy city center, that means everyone. Families stop to browse. School groups arrive on organised visits. Elderly community members who remember a time when Af-Soomaali had no official written form look at the printed books with a particular kind of wonder that younger visitors cannot quite access.",
      "The authors and poets who man the stalls are not celebrities in the usual sense — they are teachers, university lecturers, and community intellectuals who have dedicated years to producing work in Af-Soomaali. On Mother Language Day, they occupy the most visible spot in the city. That visibility matters. It tells the next generation of potential writers that their language is a language worth writing in.",
    ],
  },
  {
    icon: <Star className="w-8 h-8" />,
    tag: "The Maahmaah Contest",
    title: "The Proverb Competition — Wisdom Under Pressure",
    subtitle: "When Young Students Carry the Wisdom of the Elders",
    body: [
      "If the Literacy Fair is the heart of Jigjiga's Mother Language Day, the Maahmaah (Proverb) Contest is its soul. \"Maahmaah\" refers to the traditional Somali proverbs — short, dense, often poetic sayings that carry centuries of accumulated wisdom in a single sentence. The Somali proverb tradition is extraordinarily rich: there are Maahmaah for leadership, for patience, for hospitality, for conflict resolution, for love, for loss, for the relationship between humans and nature. There are proverbs that have been in circulation for longer than anyone can trace.",
      "The contest challenges young students to do two things: first, to correctly cite and explain a given Maahmaah — including its context, its historical usage, and its meaning today; and second, to apply it to a contemporary situation, demonstrating that the wisdom is not merely preserved but living. This second requirement is what makes the competition genuinely demanding and genuinely exciting. A student who can explain why a proverb about the dangers of misplaced trust in ancient clan relations applies equally well to navigating social media in 2025 is demonstrating something rare: the ability to think across time.",
      "The Maahmaah Contest is partly a celebration and partly a strategic act of cultural preservation. In a world where young people in Jigjiga are equally at home on TikTok and in the tea shop, the risk that traditional oral knowledge becomes inaccessible to the next generation is real. The contest addresses that risk directly — and does so not through preservation in a museum, but through the joyful, competitive, live transmission of knowledge from one generation to the next.",
    ],
  },
  {
    icon: <Feather className="w-8 h-8" />,
    tag: "Language & Identity",
    title: "Why This Day Matters in Jigjiga",
    subtitle: "A Language Is More Than Words",
    body: [
      "For Jigjiga, the significance of Mother Language Day goes beyond celebrating a communication tool. The Somali language is the container of Somali identity — the medium through which history is remembered, through which poetry expresses what prose cannot, through which a community understands itself. To protect the language is to protect everything that travels within it.",
      "Jigjiga is at an interesting moment in that story. The city's young generation is genuinely bilingual and often trilingual — moving comfortably between Af-Soomaali, Amharic, and English in a single conversation. Digital technology has created entirely new spaces for the Somali language: Somali-language podcasts, YouTube channels, social media communities, and online news outlets have given Af-Soomaali a presence in the digital world that would have been unimaginable a generation ago.",
      "Mother Language Day in Jigjiga celebrates both sides of this story: the ancient depth of the language and its living adaptation. The fair, the contest, the poets, the school groups — all of it says the same thing. Af-Soomaali is not a language that belongs only to the past. It is a language with a future, and Jigjiga is the city that is most directly responsible for building it.",
    ],
  },
];

const MAAHMAAH = [
  { proverb: "Nin aan adigu garanayn, adna kama garanto.", meaning: "A man you do not know yourself — do not trust to know you.", theme: "Wisdom" },
  { proverb: "Aqoon la'aani waa iftiin la'aan.", meaning: "Lack of knowledge is lack of light.", theme: "Education" },
  { proverb: "Guri aan Uunsi lahayn, guri aan martida u diyaarsanayn.", meaning: "A home without Uunsi is a home not prepared for its guest.", theme: "Hospitality" },
  { proverb: "Haddaad dhimasho ka cabsato, ha ku dhimin gabaygaaga.", meaning: "If you fear death, do not let your poetry die.", theme: "Legacy" },
];

export default function MotherLanguageDay() {
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

      {/* HERO — warm terracotta/gold language theme */}
      <section className="relative pt-24 pb-10 overflow-hidden" style={{ background: "linear-gradient(145deg, #2c0a00 0%, #7c2d12 40%, #92400e 70%, #451a03 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "25px 25px" }} />
          <div style={{ position: "absolute", top: "20%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "5%", left: "5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,186,116,0.15) 0%, transparent 70%)" }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 pb-4">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-3 mb-6">
            <Link href="/history-culture" className="inline-flex items-center gap-2 text-orange-200/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-orange-200/30">/</span>
            <span className="text-orange-200/60 text-sm">Festivals &amp; Events</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-yellow-400 text-orange-900 text-xs font-black rounded-full mb-5 uppercase tracking-widest">February 21st</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              International<br /><span className="text-yellow-400">Mother Language Day</span>
            </h1>
            <p className="text-xl text-orange-100/70 font-bold font-script">Jigjiga — Guardian of the Somali Tongue</p>
            <p className="text-orange-200/30 text-sm mt-4 font-medium">Festivals &amp; Events · February 21st · Af-Soomaali</p>
          </motion.div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section style={{ background: "#1a0500" }} className="border-b border-orange-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map(fact => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-yellow-400 shrink-0">{fact.icon}</div>
                <div>
                  <p className="text-orange-300/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{fact.label}</p>
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
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-yellow-400 shadow-lg shrink-0" style={{ background: "linear-gradient(135deg, #7c2d12, #c2410c)" }}>{sec.icon}</div>
                <div>
                  <p className="text-orange-700 text-xs font-black uppercase tracking-widest mb-0.5">{sec.tag}</p>
                  <div className="h-px w-20 bg-gradient-to-r from-orange-500 to-transparent" />
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">{sec.title}</h2>
                <p className="text-orange-700 font-semibold">{sec.subtitle}</p>
              </motion.div>
              <div className="space-y-5">
                {sec.body.map((para, pi) => (
                  <motion.p key={pi} variants={fadeUp} className="text-gray-600 leading-relaxed text-base sm:text-lg">{para}</motion.p>
                ))}
              </div>
              {i < SECTIONS.length - 1 && (
                <motion.div variants={fadeUp} className="mt-20 sm:mt-28 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gray-100" />
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <div className="flex-1 h-px bg-gray-100" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* MAAHMAAH SECTION */}
      <section className="py-16 sm:py-24" style={{ background: "#fdf5ec" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
              <p className="text-orange-700 font-black uppercase tracking-widest text-xs mb-3">Living Wisdom</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">Four Somali Maahmaah — Proverbs That Last</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">These proverbs competed in Jigjiga's classrooms and tea shops long before they appeared in any book. They still do.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {MAAHMAAH.map((m, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-6 sm:p-8 border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <span className="inline-block px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-black rounded uppercase tracking-wide mb-4">{m.theme}</span>
                  <p className="text-foreground font-black text-base sm:text-lg italic leading-snug mb-3">"{m.proverb}"</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.meaning}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ background: "linear-gradient(135deg, #2c0a00 0%, #7c2d12 100%)" }} className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-yellow-400 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-relaxed mb-6">{pullQuote}</blockquote>
          <p className="text-yellow-400 font-bold">— February 21st, Jigjiga</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Culture &amp; Events</h2>
          <p className="text-white/80 mb-8 text-lg">From Flag Day to Somali poetry — discover every dimension of Jigjiga's cultural life.</p>
          <Link href="/history-culture" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
