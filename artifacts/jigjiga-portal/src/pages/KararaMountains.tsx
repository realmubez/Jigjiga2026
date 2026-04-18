import React, { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Menu, X, Mountain, Eye, Clock, Wind, Quote, ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "landmarks/karamara-mountains")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

/* ── Gallery — 5 real photos ── */
const galleryPhotos = [
  {
    src: "/karamara-sunset-trail.jpg",
    alt: "Golden-hour view from the Karamara ridge — winding mountain trail through green shrubland with haze over the plains below",
    caption: "The winding trail to the Karamara summit at golden hour — the view stretches across the entire Jigjiga plain toward Somalia",
  },
  {
    src: "/karamara-moto-view.jpg",
    alt: "View of Karamara mountain from the road below — rocky peak with telecom towers, lush green slopes, bright blue sky",
    caption: "A classic view from the approach road — the mountain rises sharply from the surrounding lowlands, its peak visible from across the city",
  },
  {
    src: "/karamara-summit-tower.jpg",
    alt: "Close-up of Karamara summit showing telecom transmission towers on green hilltop against blue-grey sky",
    caption: "The summit, now home to telecom towers that broadcast signal across Jigjiga and the Somali Region",
  },
  {
    src: "/karamara-rockface.jpg",
    alt: "Dramatic bare rock face on Karamara mountain flanked by green vegetation on both sides",
    caption: "An exposed rock face on the upper slopes — Karamara's geology tells the story of millions of years of tectonic uplift",
  },
  {
    src: "/karamara-green-slopes.jpg",
    alt: "Wide view of densely green Karamara mountain slopes with twin telecom towers visible at the summit under cloudy sky",
    caption: "The lush green flanks of Karamara after seasonal rains — locals say the mountain is darkest green when the Jilaal rains have been generous",
  },
];

const quickFacts = [
  { icon: <Mountain className="w-4 h-4" />, label: "Elevation", value: "Over 2,000 m above sea level — the highest point visible from Jigjiga city" },
  { icon: <Eye className="w-4 h-4" />, label: "Panorama", value: "On clear days you can see Jigjiga, the plains, and the Somali border from the ridge" },
  { icon: <Clock className="w-4 h-4" />, label: "History", value: "Strategic Dervish stronghold during the 1899–1920 resistance against colonial forces" },
  { icon: <Wind className="w-4 h-4" />, label: "Climate", value: "Creates a rain shadow that gives Jigjiga its cooler, wetter microclimate than the lowlands" },
];

const trailFeatures = [
  { emoji: "🌄", title: "Sunrise Hike", description: "Starting before dawn rewards hikers with Jigjiga lit gold from above — arguably the finest view in the entire Somali Region." },
  { emoji: "🏔️", title: "Rocky Summit", description: "The upper slopes give way to exposed basalt and wind-blasted shrubs. The summit hosts telecom towers that broadcast signal across the region." },
  { emoji: "🌿", title: "Green Slopes", description: "After the Jilaal rains the mountain turns a deep vivid green — a remarkable contrast to the arid plains below, visible from anywhere in the city." },
  { emoji: "🦅", title: "Bird Watching", description: "The highlands attract raptors, larks, and Somali-endemic species that cannot be found in the city below — a paradise for birding enthusiasts." },
];

const DEFAULT_SECTIONS = [
  {
    title: "The Natural Fortress of Jigjiga",
    body: "The Karamara mountain range rises dramatically east of Jigjiga, reaching elevations of over 2,000 metres above sea level. This natural wall has shaped the city's geography, climate, and military history for centuries. The mountains create a rain shadow effect that gives Jigjiga a slightly cooler, wetter microclimate compared to the surrounding lowlands — making the city liveable in ways the open desert is not. From the city streets below, Karamara is always visible on the horizon, a constant presence that Jigjiga's residents grow up looking at.",
    image: "/karamara-green-slopes.jpg",
    imageAlt: "Lush green Karamara slopes with telecom towers visible at the summit",
  },
  {
    title: "The Dervish Connection",
    body: "The Karamara pass was of critical strategic importance during the Dervish resistance led by Sayid Mohamed Abdullah Hassan between 1899 and 1920. His forces used the mountains as a base of operations and a defensive line — launching raids from the high ground and disappearing into the passes before British, Ethiopian, or Italian forces could respond. The rugged terrain made conventional military pursuit nearly impossible, and the mountain gave the Dervishes a tactical advantage that stretched their resistance for over two decades. Stone remnants of Dervish-era structures can still be found in the hills for those who know where to look.",
    image: "/karamara-rockface.jpg",
    imageAlt: "The dramatic bare rock face of Karamara mountain — natural fortress used by Dervish resistance fighters",
  },
  {
    title: "The Panoramic Views",
    body: "For visitors willing to make the hike, the Karamara ridge offers breathtaking panoramic views of Jigjiga and the surrounding plains stretching toward the Somali border. At dawn, the city below is lit gold by the rising sun, and in the cool highland air the full scale of the Somali landscape becomes immediately clear. The winding trail to the top is manageable on foot or by motorbike on the lower slopes — a popular weekend excursion for Jigjiga residents looking to escape the city heat.",
    image: "/karamara-sunset-trail.jpg",
    imageAlt: "Winding trail on the Karamara ridge at golden hour with panoramic view of the plains below",
  },
];

const impactStats = [
  { number: "2,000+", label: "Metres Elevation" },
  { number: "20+", label: "Years of Dervish Resistance" },
  { number: "360°", label: "Panoramic View" },
  { number: "~15 km", label: "Distance from City Centre" },
];


/* ═══════════════════════════════════════════════════════════
   GALLERY
═══════════════════════════════════════════════════════════ */
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
      <div className="relative bg-black overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <AnimatePresence mode="wait">
          <motion.img key={current} src={galleryPhotos[current].src} alt={galleryPhotos[current].alt}
            className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
            onClick={() => setLightbox(current)} />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 sm:px-6 pt-10 pb-4">
          <p className="text-white text-sm sm:text-base font-semibold leading-snug">{galleryPhotos[current].caption}</p>
          <p className="text-white/50 text-xs mt-1">{current + 1} / {total} — tap photo to enlarge</p>
        </div>
        <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"><ChevronLeft className="w-5 h-5" /></button>
        <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"><ChevronRight className="w-5 h-5" /></button>
      </div>

      <div className="flex gap-2 overflow-x-auto py-2 px-1 bg-stone-950">
        {galleryPhotos.map((photo, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`View photo ${i + 1}`}
            className={`shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded overflow-hidden border-2 transition-all ${i === current ? "border-teal-400 opacity-100" : "border-transparent opacity-50 hover:opacity-80"}`}>
            <img src={photo.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 py-3 bg-stone-950">
        {galleryPhotos.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Photo ${i + 1}`}
            className={`transition-all rounded-full ${i === current ? "w-5 h-2 bg-teal-400" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`} />
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center"
            onClick={() => setLightbox(null)}>
            <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2" onClick={() => setLightbox(null)}><X className="w-7 h-7" /></button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
              onClick={e => { e.stopPropagation(); prevLb(); }}><ChevronLeft className="w-6 h-6" /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
              onClick={e => { e.stopPropagation(); nextLb(); }}><ChevronRight className="w-6 h-6" /></button>
            <motion.img key={lightbox} src={galleryPhotos[lightbox].src} alt={galleryPhotos[lightbox].alt}
              className="max-w-[92vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()} />
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

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function KararaMountains() {

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
      <section className="relative pt-24 pb-0 overflow-hidden bg-gradient-to-br from-stone-900 via-teal-950 to-stone-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(20,184,166,0.2) 0%, transparent 55%), radial-gradient(ellipse at 75% 10%, rgba(101,163,13,0.15) 0%, transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-10 text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-3 mb-6">
            <Link href="/landmarks" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Landmarks
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Natural Wonders</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
                <Mountain className="w-10 h-10 sm:w-12 sm:h-12 text-teal-300" />
              </div>
            </div>
            <span className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">Natural Wonder · 2,000 m+</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
              Karamara<br /><span className="text-teal-300">Mountains</span>
            </h1>
            <p className="text-xl sm:text-2xl text-teal-200 font-bold font-script">Silsiladda Karamara · Guardian of Jigjiga</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-white/50 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>~15 km east of Jigjiga city centre · Somali Region, Ethiopia</span>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="w-full">
          <img src="/karamara-sunset-trail.jpg" alt="Panoramic golden-hour view from the Karamara mountain ridge with winding trail and plains of the Somali Region below"
            className="w-full h-[50vw] max-h-[580px] object-cover" />
        </motion.div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-stone-900 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map(fact => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-teal-400 shrink-0">{fact.icon}</div>
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{fact.label}</p>
                  <p className="text-white text-sm font-semibold leading-snug">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-stone-950">
        <div className="max-w-5xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-4 text-center">
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-black rounded-full mb-3 uppercase tracking-widest">{galleryPhotos.length} Photos</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">Photo Gallery</h2>
            <p className="text-white/50 text-sm">Tap any photo to enlarge · use arrows or keyboard to browse</p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <div className="w-10 h-1 bg-teal-500 rounded-full mb-5" />
              <p className="text-teal-600 font-black text-xs uppercase tracking-widest mb-2">Jigjiga's Natural Landmark</p>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Mountain That Defines the City</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                To understand Jigjiga, you must first look up. The Karamara mountain range is the city's constant — always there on the horizon, always defining the eastern edge of the Jigjiga plain. For centuries this range served as a natural border, a military fortress, a weather-maker, and a spiritual landmark for the Somali people of the region. Today, weekenders hike its trails, birders scan its slopes, and residents simply look up at it every morning as a reminder of where they are.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/karamara-moto-view.jpg" alt="View of Karamara mountain from the approach road — lush green slopes and rocky summit with blue sky" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-12 bg-teal-600">
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

      {/* TRAIL FEATURES */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-teal-600 mb-2">Buuraha Karamara</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">What to Expect</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-xl mx-auto">Whether you hike, watch birds, or simply stare from below — Karamara rewards every kind of visitor.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trailFeatures.map((feat, i) => (
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
                  <div className="w-10 h-1 bg-teal-500 rounded-full mb-5" />
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

      {/* SUMMIT COLLAGE */}
      <section className="bg-stone-950 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">The Summit Up Close</h2>
            <p className="text-white/50 text-sm">Three perspectives on the Karamara peak</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg sm:col-span-2">
              <img src="/karamara-green-slopes.jpg" alt="Broad view of Karamara's densely green slopes with twin telecom towers at the summit" className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="bg-stone-900 px-4 py-3"><p className="text-xs font-semibold text-teal-300">The green-carpeted western face of Karamara — the most photographed angle from the Jigjiga–Hartisheikh road</p></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl shadow-lg flex-1">
                <img src="/karamara-summit-tower.jpg" alt="Karamara summit with tall telecom tower against blue-grey sky" className="w-full h-full min-h-[140px] object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg flex-1">
                <img src="/karamara-rockface.jpg" alt="Steep exposed rock face of Karamara flanked by green vegetation" className="w-full h-full min-h-[140px] object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-16 sm:py-20 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-teal-400 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">{pullQuote}</blockquote>
          <p className="text-teal-400 font-bold text-lg">— Local saying, Jigjiga</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 sm:py-20 bg-teal-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Landmarks</h2>
            <p className="text-white/80 text-lg">Universities, resorts, mosques — Jigjiga's icons await.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/landmarks" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-teal-700 font-black rounded-full hover:bg-teal-50 transition-colors">
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
