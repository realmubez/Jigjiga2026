import React, { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Menu, X, BookOpen, Users, FlaskConical, Heart, Quote, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "landmarks/jigjiga-university")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

/* ── Gallery data — 5 real photos ── */
const galleryPhotos = [
  { src: "/jju-campus-aerial.jpg",     alt: "Aerial view of Jigjiga University campus — the iconic rotunda building and sprawling green grounds", caption: "Aerial view of the JJU campus — the signature circular building at the heart of the Somali Region's largest university" },
  { src: "/jju-gate-night-wide.jpg",   alt: "Jigjiga University new entrance gate at night — illuminated sign and landscaped forecourt",            caption: "The newly completed entrance gate, lit up at night — a landmark in its own right on the main road into Jigjiga" },
  { src: "/jju-gate-night-dance.jpg",  alt: "Jigjiga University gate at night showing traditional dancer silhouette mural",                         caption: "The gate's side wall features a backlit silhouette mural of traditional Somali Dhaanto dancers — art meets academia" },
  { src: "/jju-gate-night-closeup.jpg", alt: "Close-up of Jigjiga University illuminated gate pillars at night with gold detailing",                caption: "Gold geometric detailing on the gate pillars — the design motif is drawn from traditional Somali textile patterns" },
];

const quickFacts = [
  { icon: <BookOpen className="w-4 h-4" />, label: "Established", value: "2007 — the year the Somali Region's ambition took institutional form" },
  { icon: <Users className="w-4 h-4" />, label: "Students", value: "Over 20,000 enrolled from across Ethiopia and the diaspora" },
  { icon: <FlaskConical className="w-4 h-4" />, label: "Key Faculties", value: "Medicine, Engineering, Agriculture, Law, Social Sciences" },
  { icon: <Heart className="w-4 h-4" />, label: "Hospital", value: "Sheikh Hassan Yebere Referral Hospital — serves the entire region" },
];

const campusFeatures = [
  { emoji: "🏛️", title: "The Iconic Entrance Gate", description: "The newly completed gate is a landmark in its own right — illuminated at night with gold geometric patterns and a Dhaanto dancer mural, it announces the university from the main road into the city." },
  { emoji: "🔬", title: "State-of-the-Art Labs", description: "Cutting-edge laboratories for Medicine, Engineering, and Agricultural research — the most modern facilities in the Somali Region, producing graduates ready for global careers." },
  { emoji: "📚", title: "The Central Library", description: "A massive central library housing hundreds of thousands of volumes, open to students and community members alike — the intellectual heart of the campus." },
  { emoji: "🏥", title: "The Referral Hospital", description: "The Sheikh Hassan Yebere Referral Hospital — a critical health center for the entire region, staffed by JJU medical faculty and students in active clinical training." },
];

const DEFAULT_SECTIONS = [
  {
    title: "Research & Innovation",
    body: "JJU is particularly renowned for focusing on the unique needs of the region. The Pastoralist Research Centre is a leading hub for studying dryland agriculture and nomadic lifestyles — finding modern solutions for water management and livestock health. The IT and Engineering departments are producing the developers and entrepreneurs who are digitizing the Somali Region, making JJU the primary talent pipeline for the city's rising tech sector.",
    image: "/jju-campus-aerial.jpg",
    imageAlt: "Aerial view of Jigjiga University's modern campus buildings and green grounds",
  },
  {
    title: "A Center for Cultural Exchange",
    body: "Beyond academics, JJU plays a vital role in preserving Somali culture. It frequently hosts cultural weeks, Somali literature symposiums, and Dhaanto competitions — ensuring that as students learn about the future, they remain deeply connected to their roots. The new gate's Dhaanto silhouette mural is a permanent reminder that the arts and sciences are inseparable in Jigjiga.",
    image: "/jju-gate-night-dance.jpg",
    imageAlt: "Jigjiga University gate with traditional Dhaanto dancer silhouette mural lit at night",
  },
  {
    title: "Community Impact",
    body: "The university's reach extends far beyond its walls. Through its legal aid clinics, agricultural outreach programs, and the Sheikh Hassan Yebere Referral Hospital, JJU provides essential services to the people of Jigjiga and the surrounding Somali Region. It is the intellectual engine of the city — where the most pressing social and economic challenges of the region are studied, debated, and solved.",
    image: "/hospital-aerial-wide.jpg",
    imageAlt: "Aerial view of Sheikh Hassan Yebere Referral Hospital — the JJU teaching hospital that serves the entire Somali Region",
  },
];

const impactStats = [
  { number: "2007", label: "Founded" },
  { number: "20,000+", label: "Students Enrolled" },
  { number: "5+", label: "Major Faculties" },
  { number: "1", label: "Regional Referral Hospital" },
];


/* ═══════════════════════════════════════════════════════════════════
   GALLERY COMPONENT
═══════════════════════════════════════════════════════════════════ */
function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const total = galleryPhotos.length;

  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent(i => (i + 1) % total), [total]);
  const prevLb = useCallback(() => setLightbox(i => i === null ? null : (i - 1 + total) % total), [total]);
  const nextLb = useCallback(() => setLightbox(i => i === null ? null : (i + 1) % total), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === "ArrowLeft") prevLb();
        if (e.key === "ArrowRight") nextLb();
        if (e.key === "Escape") setLightbox(null);
      } else {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next, prevLb, nextLb]);

  return (
    <>
      {/* Main carousel */}
      <div className="relative bg-black overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={galleryPhotos[current].src}
            alt={galleryPhotos[current].alt}
            className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(current)}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 sm:px-6 pt-10 pb-4">
          <p className="text-white text-sm sm:text-base font-semibold leading-snug">{galleryPhotos[current].caption}</p>
          <p className="text-white/50 text-xs mt-1">{current + 1} / {total} — tap photo to enlarge</p>
        </div>
        <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 overflow-x-auto py-2 px-1 bg-slate-950">
        {galleryPhotos.map((photo, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`View photo ${i + 1}`}
            className={`shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded overflow-hidden border-2 transition-all ${i === current ? "border-blue-400 opacity-100" : "border-transparent opacity-50 hover:opacity-80"}`}>
            <img src={photo.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 py-3 bg-slate-950">
        {galleryPhotos.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Photo ${i + 1}`}
            className={`transition-all rounded-full ${i === current ? "w-5 h-2 bg-blue-400" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`} />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center"
            onClick={() => setLightbox(null)}>
            <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2" onClick={() => setLightbox(null)}><X className="w-7 h-7" /></button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
              onClick={(e) => { e.stopPropagation(); prevLb(); }}><ChevronLeft className="w-6 h-6" /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
              onClick={(e) => { e.stopPropagation(); nextLb(); }}><ChevronRight className="w-6 h-6" /></button>
            <motion.img
              key={lightbox}
              src={galleryPhotos[lightbox].src}
              alt={galleryPhotos[lightbox].alt}
              className="max-w-[92vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center px-6">
              <p className="text-white text-sm sm:text-base font-semibold">{galleryPhotos[lightbox].caption}</p>
              <p className="text-white/40 text-xs mt-1">{lightbox + 1} / {total}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
export default function JigjigaUniversity() {

  const content = usePageContent(PAGE_META.id, PAGE_META.defaults);
  const pullQuote = content.pullQuote ?? "";
  const sections = content.sections?.length ? content.sections.map(s => ({ ...s, image: s.imageUrl })) : DEFAULT_SECTIONS;

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* ── NAV ── */}
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-0 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 15% 50%, rgba(37,99,235,0.2) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(20,184,166,0.15) 0%, transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-10 text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-3 mb-6">
            <Link href="/landmarks" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Landmarks
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Modern Landmarks</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            {/* University crest */}
            <div className="flex justify-center mb-6">
              <img src="/jju-logo.png" alt="Jigjiga University official crest" className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-2xl" />
            </div>
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Education · Est. 2007</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Jigjiga<br /><span className="text-blue-300">University</span></h1>
            <p className="text-xl sm:text-2xl text-blue-300 font-bold font-script">Jaamacadda Jigjiga · Gateway to Knowledge</p>
          </motion.div>
        </div>
        {/* Hero photo — gate at night */}
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="w-full">
          <img
            src="/jju-gate-night-wide.jpg"
            alt="The illuminated entrance gate of Jigjiga University at night"
            className="w-full h-[50vw] max-h-[580px] object-cover"
          />
        </motion.div>
      </section>

      {/* ── QUICK FACTS ── */}
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

      {/* ── PHOTO GALLERY ── */}
      <section className="bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-4 text-center">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-black rounded-full mb-3 uppercase tracking-widest">{galleryPhotos.length} Photos</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">Photo Gallery</h2>
            <p className="text-white/50 text-sm">Tap any photo to enlarge · use arrows or keyboard to browse</p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <div className="w-10 h-1 bg-primary rounded-full mb-5" />
              <p className="text-primary font-black text-xs uppercase tracking-widest mb-2">Motto: "A University for the Community"</p>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">A Beacon of Education in the Horn of Africa</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Founded in 2007, Jigjiga University (JJU) is one of the fastest-growing and most significant higher education institutions in Ethiopia. It is not just a place for students — it is a landmark of progress that represents the city's transition into a modern knowledge hub. Located on the main road leading into the city, its sprawling campus and its striking new entrance gate serve as a symbol of hope and opportunity for the youth of the Somali Region.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/jju-campus-aerial.jpg" alt="Aerial view of Jigjiga University campus — the iconic rotunda building and green grounds" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
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

      {/* ── CAMPUS FEATURES ── */}
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

      {/* ── ARTICLE SECTIONS ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {sections.map((sec, i) => (
              <motion.div key={sec.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <motion.div variants={fadeUp} className={"text-center lg:text-left " + (i % 2 === 1 ? "lg:col-start-2" : "")}>
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

      {/* ── THE NEW GATE — feature spotlight ── */}
      <section className="py-0 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">The New Entrance Gate</h2>
            <p className="text-white/50 text-sm">A landmark that announces Jigjiga's ambition from the main road</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg sm:col-span-2">
              <img src="/jju-gate-night-wide.jpg" alt="Wide shot of the new illuminated Jigjiga University entrance gate at night with signage and landscaped forecourt" className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="bg-slate-900 px-4 py-3"><p className="text-xs font-semibold text-blue-300">The new gate lit up at night — "JIGJIGA UNIVERSITY" in bold letters, gold-patterned pillars, and the university motto projected on the wall</p></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl shadow-lg flex-1">
                <img src="/jju-gate-night-closeup.jpg" alt="Close-up of the gold geometric detailing on Jigjiga University gate pillars at night" className="w-full h-full min-h-[148px] object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg flex-1">
                <img src="/jju-gate-night-dance.jpg" alt="Jigjiga University gate with backlit traditional dancer mural at night" className="w-full h-full min-h-[148px] object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REFERRAL HOSPITAL SHOWCASE ── */}
      <section className="bg-slate-950 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-black rounded-full mb-3 uppercase tracking-widest">Healthcare</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Sheikh Hassan Yebere Referral Hospital</h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto">JJU's affiliated teaching hospital — the largest and most advanced public hospital in the Somali Region, serving millions of patients from across eastern Ethiopia</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/hospital-aerial-wide.jpg" alt="Wide aerial view of Sheikh Hassan Yebere Referral Hospital — red-roofed building, circular fountain forecourt, and green grounds with Jigjiga city in the background"
                className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="bg-slate-900 px-4 py-3">
                <p className="text-xs font-semibold text-blue-300">Wide aerial — the hospital campus with its circular fountain, the city spreading in all directions behind it</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/hospital-aerial-close.jpg" alt="Close aerial view of Sheikh Hassan Yebere Referral Hospital — distinctive red-tiled roof, main entrance canopy, and lush landscaped grounds"
                className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="bg-slate-900 px-4 py-3">
                <p className="text-xs font-semibold text-blue-300">Close aerial — the distinctive red-tiled roof and main entrance canopy; JJU medical students complete their clinical training here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-blue-400 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">{pullQuote}</blockquote>
          <p className="text-blue-400 font-bold text-lg">— Student, JJU Class of 2023</p>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Landmarks</h2>
            <p className="text-white/80 text-lg">Mosques, mountains, resorts — Jigjiga's icons await.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/landmarks" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-black rounded-full hover:bg-blue-50 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Landmarks
            </Link>
            <Link href="/landmarks/shabeeley-resort" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 border border-white/40 text-white font-black rounded-full hover:bg-white/30 transition-colors">
              Shabeeley Resort <ArrowUpRight className="w-4 h-4" />
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
