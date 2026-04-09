import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, BookOpen, Users, FlaskConical, Heart, Quote, ArrowUpRight } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <BookOpen className="w-4 h-4" />, label: "Established", value: "2007" },
  { icon: <Users className="w-4 h-4" />, label: "Students", value: "Over 20,000 from diverse backgrounds across Ethiopia" },
  { icon: <FlaskConical className="w-4 h-4" />, label: "Key Faculties", value: "Medicine, Engineering, Agriculture, Social Sciences" },
  { icon: <Heart className="w-4 h-4" />, label: "Hospital", value: "Sheikh Hassan Yebere Referral Hospital — serves the entire region" },
];

const campusFeatures = [
  { emoji: "🏛️", title: "The Entrance Gate", description: "A well-known local landmark leading into a campus of green spaces, wide walkways, and modern faculty buildings." },
  { emoji: "🔬", title: "State-of-the-Art Labs", description: "Cutting-edge laboratories for Medicine, Engineering, and Agricultural research — the most modern facilities in the Somali Region." },
  { emoji: "📚", title: "The Central Library", description: "A massive central library housing hundreds of thousands of volumes, open to students and community members alike." },
  { emoji: "🏥", title: "The Referral Hospital", description: "The Jigjiga University Sheikh Hassan Yebere Referral Hospital — a critical health center for the entire surrounding region." },
];

const sections = [
  {
    title: "Research & Innovation",
    body: "Jigjiga University is particularly renowned for its focus on the unique needs of the region. The Pastoralist Research Centre is a leading hub for studying dryland agriculture and nomadic lifestyles — finding modern solutions for water management and livestock health. The IT and Engineering departments are producing the developers and entrepreneurs who are digitizing the Somali Region, making JJU the primary talent pipeline for the city's rising tech sector.",
    image: "https://picsum.photos/seed/jju-research-lab/800/500",
    imageAlt: "Researchers working in a Jigjiga University laboratory",
  },
  {
    title: "A Center for Cultural Exchange",
    body: "Beyond academics, JJU plays a vital role in preserving Somali culture. It frequently hosts cultural weeks, Somali literature symposiums, and Dhaanto competitions, ensuring that as students learn about the future, they remain deeply connected to their roots. It is common to see traditional Somali elders and modern scholars walking the same halls, sharing wisdom across generations.",
    image: "https://picsum.photos/seed/jju-cultural-week/800/500",
    imageAlt: "A cultural week celebration at Jigjiga University campus",
  },
  {
    title: "Community Impact",
    body: "The university's reach extends far beyond its walls. Through its legal aid clinics, agricultural outreach programs, and the Sheikh Hassan Yebere Referral Hospital, it provides essential services to the people of Jigjiga and the surrounding Somali Region. It is the intellectual engine of the city — where the most pressing social and economic challenges of the region are studied, debated, and solved.",
    image: "https://picsum.photos/seed/jju-community-outreach/800/500",
    imageAlt: "Jigjiga University students doing community outreach work",
  },
];

const impactStats = [
  { number: "2007", label: "Founded" },
  { number: "20,000+", label: "Students Enrolled" },
  { number: "4", label: "Major Faculties" },
  { number: "1", label: "Regional Referral Hospital" },
];

export default function JigjigaUniversity() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

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

      {/* HERO */}
      <section className="relative pt-24 min-h-[78vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/jigjiga-university-gate/1600/900" alt="The main entrance gate of Jigjiga University" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/55 to-slate-900/10" />
          <div className="absolute inset-0 bg-primary/15" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
            <Link href="/landmarks" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Landmarks
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Modern Landmarks</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Education</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Jigjiga<br />University</h1>
            <p className="text-xl sm:text-2xl text-blue-300 font-bold font-script">Gateway to Knowledge</p>
          </motion.div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-blue-400 shrink-0">{fact.icon}</div>
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
              <div className="w-10 h-1 bg-primary rounded-full mb-5" />
              <p className="text-primary font-black text-xs uppercase tracking-widest mb-2">Motto: "A University for the Community"</p>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">A Beacon of Education in the Horn</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Founded in 2007, Jigjiga University (JJU) is one of the fastest-growing and most significant higher education institutions in Ethiopia. It is not just a place for students — it is a landmark of progress that represents the city's transition into a modern Tech Hub. Located on the main road leading into the city, its sprawling campus serves as a symbol of hope and opportunity for the youth of the Somali Region.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="https://picsum.photos/seed/jju-campus-aerial/800/500" alt="The sprawling campus of Jigjiga University" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-12 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {impactStats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.number}</p>
                <p className="text-white/70 text-sm font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS FEATURES */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-primary mb-2">Xarunta Cilmiga</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">The Campus</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-xl mx-auto">Known for its impressive architecture, beautiful landscaping, and the most modern facilities in the Somali Region.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {campusFeatures.map((feat, i) => (
              <motion.div key={feat.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <span className="text-4xl block mb-3">{feat.emoji}</span>
                <h3 className="text-sm font-black text-foreground mb-2">{feat.title}</h3>
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
                  <div className="w-10 h-1 bg-primary rounded-full mb-5" />
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

      {/* PULL QUOTE */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-blue-400 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            "Here, the elder's wisdom and the engineer's code meet in the same hallway — that is Jigjiga University."
          </blockquote>
          <p className="text-blue-400 font-bold text-lg">— Student, JJU Class of 2023</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Landmarks</h2>
            <p className="text-white/80 text-lg">Mosques, mountains, markets — Jigjiga's icons await.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/landmarks" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-black rounded-full hover:bg-blue-50 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Landmarks
            </Link>
            <Link href="/landmarks/central-mosque" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 border border-white/40 text-white font-black rounded-full hover:bg-white/30 transition-colors">
              Central Mosque <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/landmarks/karamara-mountains" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 border border-white/40 text-white font-black rounded-full hover:bg-white/30 transition-colors">
              Karamara Mountains <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
