import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/flag-day")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Flag, Star, Users, Mic2, Quote, Calendar } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Calendar className="w-4 h-4" />, label: "Date", value: "October 12th — Every Year" },
  { icon: <Flag className="w-4 h-4" />, label: "The Flag", value: "Blue field · White Five-Pointed Star" },
  { icon: <Users className="w-4 h-4" />, label: "The Parade Route", value: "Regional President's Office → Sayid Statue" },
  { icon: <Mic2 className="w-4 h-4" />, label: "Evening Events", value: "Poetry & Cultural Night — Jigjiga Cultural Center" },
];

const SECTIONS = [
  {
    icon: <Flag className="w-8 h-8" />,
    tag: "A Date With History",
    title: "The 12th of October",
    subtitle: "When the Sky and the Streets Turn Blue",
    body: [
      "Every October 12th, the streets of Jigjiga turn into a sea of blue and white. Flag Day — Maalinta Calanka — is more than just a ceremony. It is an annual reaffirmation of Somali identity, pride, and the long journey toward recognition and dignity for a people whose story spans centuries and continents. While the day commemorates the creation of the Somali flag in 1954, in Jigjiga it carries a meaning that is both historical and deeply personal.",
      "The flag itself — a sky-blue field with a single white five-pointed star — is one of the most recognisable symbols in the Horn of Africa. Each point of the star represents one of the five territories that were once home to Somali-speaking people. In Jigjiga, the city that serves as the capital of the Somali Region of Ethiopia, that symbolism is not abstract. It is a daily reality, felt in the language spoken on every street corner, in the poetry recited in the tea shops, and in the pride that fills the stadium on Eid morning.",
      "Flag Day is the one day of the year when all of that pride becomes fully visible, fully public, and impossible to miss.",
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    tag: "The Parade of Unity",
    title: "How Jigjiga Celebrates",
    subtitle: "From the President's Office to the Sayid Statue",
    body: [
      "The celebrations begin with the Parade of Unity — a procession that starts at the Regional President's Office and moves through the heart of the city toward the Sayid Mohamed Abdullah Hassan Statue. The parade is one of the most visually striking events on Jigjiga's calendar. School children in uniform march alongside traditional dancers in full dress. Elders walk with the quiet dignity of people who remember what came before. Police and cultural troupes lead the way, and flags — hundreds of them — are carried, waved, and raised at every step of the route.",
      "What makes the parade feel alive rather than ceremonial is the community that lines the streets to watch it. This is the spirit of \"Bulsho\" — community — at its most visible. Families claim their spots early. Young people turn up wearing \"flag outfits\": dresses, shirts, and head wraps tailored specifically to mirror the blue field and the white five-pointed star. It is a fashion statement and a political statement in one, and it is entirely grassroots — no one organises the flag clothing. People simply show up wearing it.",
      "The parade routes through neighbourhoods that in any other week might feel routine. On October 12th, they feel transformed. The sound of drums, singing, and cheering follows the procession from start to finish. When it reaches the Sayid Statue, the crowd gathers around the monument of the man who once embodied defiant Somali pride more than any other, and the moment carries the weight of everything the flag represents.",
    ],
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    tag: "Poetry & the Star of Unity",
    title: "The Cultural Night at Jigjiga Cultural Center",
    subtitle: "When the Poets Speak, the City Listens",
    body: [
      "As the sun sets on Flag Day, the celebration moves indoors — or rather, into the grand setting of the Jigjiga Cultural Center, where the evening's cultural program begins. This is the intellectual and artistic heart of the day's events, and it draws a different crowd: educators, poets, students, government officials, and community elders who come not to march but to listen.",
      "The centerpiece of the cultural night is the poetry. On Flag Day, the Somali Gabay comes into its own as a political and historical art form. Poets recite verses about freedom, about the Star of Unity, about the meaning of the flag for a generation that did not experience the struggle firsthand but carries its legacy. These performances are not rehearsed speeches — they are live, competitive, and charged with the kind of collective emotion that a flag raised for the first time by a people asserting their identity carries with it.",
      "The evening also features traditional music and dance performances, historical presentations, and displays of Somali cultural dress and crafts. For a visitor attending Flag Day in Jigjiga, the cultural night at the Center is not optional. It is where the day arrives at its deepest meaning — where history, language, music, and the living community of the Somali Region come together in one room.",
    ],
  },
];

const FLAG_FACTS = [
  { label: "Adopted", value: "1954", desc: "The year the Somali flag was officially created." },
  { label: "Colour", value: "Light Blue", desc: "Representing the sky and the sea — the Somali horizon." },
  { label: "The Star", value: "Five Points", desc: "Each point represents one of the five Somali-speaking territories." },
  { label: "In Jigjiga", value: "Maalinta Calanka", desc: "\"Flag Day\" — celebrated with the region's full pride every October 12th." },
];

export default function FlagDay() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm" : "bg-white/80 backdrop-blur-md py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-0 outline-none shrink-0">
            <LogoImg /><span className="text-base sm:text-lg font-black tracking-tight text-foreground -ml-4">IGJIGA</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(item => (
              <Link key={item.label} href={item.href} className={`text-sm font-semibold transition-colors whitespace-nowrap ${item.label === "Culture" ? "text-primary" : "text-gray-600 hover:text-primary"}`}>{item.label}</Link>
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
          <div className="lg:hidden max-w-7xl mx-auto px-4 py-4 border-t border-gray-100 mt-3 flex flex-col gap-3">
            {navLinks.map(item => <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-1.5 text-gray-600">{item.label}</Link>)}
          </div>
        )}
      </header>

      {/* HERO — deep blue with white star motif */}
      <section className="relative pt-24 pb-10 overflow-hidden" style={{ background: "linear-gradient(150deg, #0a1a4a 0%, #003399 40%, #0044cc 70%, #0033aa 100%)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)" }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 pb-4">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-3 mb-6">
            <Link href="/history-culture" className="inline-flex items-center gap-2 text-blue-200/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-blue-200/30">/</span>
            <span className="text-blue-200/60 text-sm">Festivals &amp; Events</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="inline-block px-3 py-1 bg-white text-blue-900 text-xs font-black rounded-full uppercase tracking-widest">October 12th</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Flag Day<br /><span className="text-blue-300">Maalinta Calanka</span>
            </h1>
            <p className="text-xl text-blue-100/70 font-bold font-script mt-2">A Blue Sky Over Jigjiga</p>
            <p className="text-blue-200/40 text-sm mt-4 font-medium">Festivals &amp; Events · October 12th · Jigjiga</p>
          </motion.div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section style={{ background: "#020c2e" }} className="border-b border-blue-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map(fact => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-blue-400 shrink-0">{fact.icon}</div>
                <div>
                  <p className="text-blue-300/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{fact.label}</p>
                  <p className="text-white text-sm font-semibold leading-snug">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE SECTIONS */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {SECTIONS.map((sec, i) => (
            <motion.div key={sec.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0" style={{ background: "linear-gradient(135deg, #003399, #0055ff)" }}>
                  {sec.icon}
                </div>
                <div>
                  <p className="text-blue-600 text-xs font-black uppercase tracking-widest mb-0.5">{sec.tag}</p>
                  <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent" />
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">{sec.title}</h2>
                <p className="text-blue-600 font-semibold">{sec.subtitle}</p>
              </motion.div>
              <div className="space-y-5">
                {sec.body.map((para, pi) => (
                  <motion.p key={pi} variants={fadeUp} className="text-gray-600 leading-relaxed text-base sm:text-lg">{para}</motion.p>
                ))}
              </div>
              {i < SECTIONS.length - 1 && (
                <motion.div variants={fadeUp} className="mt-20 sm:mt-28 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gray-100" />
                  <Star className="w-4 h-4 text-blue-400" />
                  <div className="flex-1 h-px bg-gray-100" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FLAG FACTS */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
              <p className="text-blue-600 font-black uppercase tracking-widest text-xs mb-3">Know the Symbol</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">The Somali Flag — Four Things to Know</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FLAG_FACTS.map((fact, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all">
                  <p className="text-3xl font-black text-blue-700 mb-2">{fact.value}</p>
                  <p className="font-black text-foreground mb-2 text-sm uppercase tracking-wide">{fact.label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{fact.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ background: "linear-gradient(135deg, #0a1a4a 0%, #003399 100%)" }} className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-blue-300 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-relaxed mb-6">{pullQuote}</blockquote>
          <p className="text-blue-300 font-bold">— Jigjiga, October 12th</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Culture &amp; Events</h2>
          <p className="text-white/80 mb-8 text-lg">From Qaaci Nights to the University Graduation — discover what makes Jigjiga come alive.</p>
          <Link href="/history-culture" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
