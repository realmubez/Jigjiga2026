import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, HeartPulse, Users, BookOpen, Globe, Quote, ArrowUpRight, MapPin } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "landmarks/sheikh-hassan-hospital")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <HeartPulse className="w-4 h-4" />, label: "Type", value: "Public referral hospital — the highest tier of public healthcare in the Somali Region" },
  { icon: <Users className="w-4 h-4" />, label: "Patients", value: "Serves millions of patients from across eastern Ethiopia and beyond" },
  { icon: <BookOpen className="w-4 h-4" />, label: "Teaching", value: "Primary clinical training site for Jigjiga University's College of Medicine" },
  { icon: <Globe className="w-4 h-4" />, label: "Catchment", value: "Covers the entire Somali Region and draws patients from neighboring regions" },
];

const serviceFeatures = [
  { emoji: "🏥", title: "Emergency & Trauma", description: "A 24/7 emergency department receiving patients from across the region — the first port of call for serious trauma and life-threatening conditions in the Somali Region." },
  { emoji: "👶", title: "Maternity & Neonatal", description: "One of the highest-volume maternity units in eastern Ethiopia, providing specialist obstetric care to mothers who previously had no access to hospital births." },
  { emoji: "🔬", title: "Diagnostics & Lab", description: "Modern laboratory and diagnostic imaging facilities — X-ray, ultrasound, and laboratory analysis that serve the hospital's own patients and referrals from smaller clinics." },
  { emoji: "🎓", title: "Medical Education", description: "JJU medical and nursing students rotate through all departments as part of their training — making this hospital a living classroom for the next generation of Somali Region doctors." },
];

const DEFAULT_SECTIONS = [
  {
    title: "The Region's Medical Anchor",
    body: "The Sheikh Hassan Yebere Referral Hospital is the largest public healthcare facility in the Somali Region of Ethiopia. Named after a revered regional leader, it sits on a beautifully landscaped campus — a circular fountain at its entrance, wide green grounds spreading outward, and the city of Jigjiga rising behind it in every direction. For much of the population of eastern Ethiopia, this is the highest level of medical care available without travelling to Addis Ababa.",
    image: "/hospital-aerial-wide.jpg",
    imageAlt: "Wide aerial view of Sheikh Hassan Yebere Referral Hospital with circular fountain forecourt and the city of Jigjiga spreading behind it",
  },
  {
    title: "A Teaching Hospital at the Heart of JJU",
    body: "The hospital operates as the primary clinical training ground for students from Jigjiga University's College of Medicine and Health Sciences. This dual role — serving patients while training the next generation of doctors and nurses — is central to its mission. Medical students rotate through its wards, operating theatres, and outpatient departments as part of their degree, creating a cycle where JJU graduates return to serve the very community that trained them.",
    image: "/hospital-aerial-close.jpg",
    imageAlt: "Close aerial view of the hospital's red-tiled roof, main entrance canopy, and landscaped grounds",
  },
  {
    title: "Serving the Broader Region",
    body: "Patients arrive from across the Somali Region — from rural pastoralist communities, from towns without specialist facilities, and from across the border in the diaspora seeking care they trust. The hospital's catchment area extends far beyond Jigjiga city limits, making it a critical piece of infrastructure not just for the capital but for the entire surrounding region and its neighbors.",
    image: "/hospital-aerial-wide.jpg",
    imageAlt: "Aerial view of the hospital campus showing its scale and position at the heart of Jigjiga",
  },
];

const impactStats = [
  { number: "1", label: "Regional Referral Hospital" },
  { number: "Millions", label: "Patients Served" },
  { number: "JJU", label: "Teaching Affiliate" },
  { number: "24/7", label: "Emergency Services" },
];


export default function SheikhHassanHospital() {

  const content = usePageContent(PAGE_META.id, PAGE_META.defaults);
  const pullQuote = content.pullQuote ?? "";
  const sections = content.sections?.length
    ? content.sections.map(s => ({ ...s, image: s.imageUrl }))
    : DEFAULT_SECTIONS;

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* NAV */}
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-24 pb-0 overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(14,165,233,0.18) 0%, transparent 55%), radial-gradient(ellipse at 75% 10%, rgba(99,102,241,0.12) 0%, transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-10 text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-3 mb-6">
            <Link href="/landmarks" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Landmarks
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Modern Jigjiga</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
                <HeartPulse className="w-10 h-10 sm:w-12 sm:h-12 text-sky-300" />
              </div>
            </div>
            <span className="inline-block px-3 py-1 bg-sky-500 text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Healthcare · Referral Hospital</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Sheikh Hassan<br /><span className="text-sky-300">Yebere Hospital</span>
            </h1>
            <p className="text-lg sm:text-xl text-sky-200 font-bold font-script">Isbitaalka Guud ee Jigjiga · Where the Somali Region Heals</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-white/50 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>Jigjiga, Somali Region, Ethiopia · Affiliated with Jigjiga University</span>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="w-full">
          <img src="/hospital-aerial-wide.jpg" alt="Aerial view of Sheikh Hassan Yebere Referral Hospital — red-roofed building, circular fountain, green grounds and Jigjiga city behind it"
            className="w-full h-[50vw] max-h-[560px] object-cover" />
        </motion.div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map(fact => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-sky-400 shrink-0">{fact.icon}</div>
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{fact.label}</p>
                  <p className="text-white text-sm font-semibold leading-snug">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO PAIR */}
      <section className="bg-slate-950 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/hospital-aerial-wide.jpg" alt="Wide aerial of the hospital campus — circular fountain forecourt and city behind" className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="bg-slate-900 px-4 py-3">
                <p className="text-xs font-semibold text-sky-300">Wide aerial — the hospital campus with circular fountain; the city of Jigjiga spreads in every direction behind it</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/hospital-aerial-close.jpg" alt="Close aerial showing the red-tiled roof, main entrance canopy, and lush grounds" className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="bg-slate-900 px-4 py-3">
                <p className="text-xs font-semibold text-sky-300">Closer view — the distinctive red-tiled roof, entrance canopy, and the green grounds; JJU medical students train in every ward</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <div className="w-10 h-1 bg-sky-500 rounded-full mb-5" />
              <p className="text-sky-600 font-black text-xs uppercase tracking-widest mb-2">Public Healthcare · Somali Region</p>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Hospital the Somali Region Depends On</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                For a region that stretches across a vast, largely rural landscape, having a world-class referral hospital at its capital is not a luxury — it is a lifeline. The Sheikh Hassan Yebere Referral Hospital is that lifeline. From its striking red-roofed building to its beautifully landscaped circular forecourt, it stands as both a beacon of healing and one of the most recognizable buildings in the entire Somali Region.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/hospital-aerial-close.jpg" alt="Close aerial of the Sheikh Hassan Yebere Referral Hospital showing the red-tiled roof and main entrance" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-12 bg-sky-600">
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

      {/* SERVICE FEATURES */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-sky-600 mb-2">Daryeelka Caafimaadka</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">Services & Departments</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-xl mx-auto">A full-spectrum referral hospital providing the most advanced public healthcare in the Somali Region.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceFeatures.map((feat, i) => (
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
                <motion.div variants={fadeUp} className={"text-center lg:text-left " + (i % 2 === 1 ? "lg:col-start-2" : "")}>
                  <div className="w-10 h-1 bg-sky-500 rounded-full mb-5" />
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
          <Quote className="w-10 h-10 text-sky-400 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">{pullQuote}</blockquote>
          <p className="text-sky-400 font-bold text-lg">— Jigjiga University, College of Medicine</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-sky-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Landmarks</h2>
            <p className="text-white/80 text-lg">University, mountains, resort — Jigjiga's icons await.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/landmarks" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-sky-700 font-black rounded-full hover:bg-sky-50 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Landmarks
            </Link>
            <Link href="/landmarks/jigjiga-university" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 border border-white/40 text-white font-black rounded-full hover:bg-white/30 transition-colors">
              Jigjiga University <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/landmarks/shabeeley-resort" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 border border-white/40 text-white font-black rounded-full hover:bg-white/30 transition-colors">
              Shabeeley Resort <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
