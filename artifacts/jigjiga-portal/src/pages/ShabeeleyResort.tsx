import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "landmarks/shabeeley-resort")!;
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Menu, X, Leaf, Sun, Camera,
  Quote, ArrowUpRight, Star, MapPin, Clock, Play, ChevronLeft, ChevronRight
} from "lucide-react";

/* ── helpers ── */
const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

/* ── gallery data — all 11 photos ── */
const galleryPhotos = [
  { src: "/shabeeley-domes-day.jpg",         alt: "Shabeeley Resort dome village from above — lush green landscape, day view",            caption: "The iconic dome village — Aqal Soomaali inspired architecture stretching across lush green grounds" },
  { src: "/shabeeley-aerial.jpg",            alt: "Aerial sunset view of Shabeeley Resort, Jigjiga",                                     caption: "Golden hour aerial — the resort's organic curves glow in the setting sun" },
  { src: "/shabeeley-arch-staff.jpg",        alt: "Staff in traditional Somali dress at Shabeeley Resort arched entrance",               caption: "Staff in traditional attire welcome guests beneath the resort's signature arched colonnade" },
  { src: "/shabeeley-leopard-fountain-day.jpg", alt: "Shabeeley Resort Shabeel leopard waterfall fountain at sunset",                   caption: "The Shabeel Fountain — bronze leopard sculptures guard a cascading waterfall at golden hour" },
  { src: "/shabeeley-waterfall-sunset.jpg",  alt: "Close-up of the leopard waterfall at Shabeeley Resort, Jigjiga, at sunrise",         caption: "Water rushing between the bronze leopards — the resort's most photographed feature" },
  { src: "/shabeeley-leopard-fountain-night.jpg", alt: "Shabeeley Resort fountain at night with emerald green lights",                  caption: "After dark: the Shabeel fountain transforms with coloured water and dramatic lighting" },
  { src: "/shabeeley-domes-twilight.jpg",    alt: "Shabeeley Resort dome lodges lit at twilight, blue hour aerial",                     caption: "Blue-hour magic — the dome lodges light up one by one as the sky fades to indigo" },
  { src: "/shabeeley-night-dome-close.jpg",  alt: "Night aerial of Shabeeley Resort dome village with warm amber lights, Jigjiga",      caption: "Warm amber lights trace the paths between dome suites — a galaxy of lanterns on the hillside" },
  { src: "/shabeeley-night-wide.jpg",        alt: "Wide-angle night aerial of Shabeeley Resort with Jigjiga city lights in background",  caption: "Jigjiga city lights shimmer in the distance — the resort feels like its own world" },
  { src: "/shabeeley-amphitheater-night.jpg", alt: "Shabeeley Resort grand amphitheater at night with LED lighting and flags",          caption: "The grand amphitheater — LED-lit tiers and a row of flags against the night sky" },
  { src: "/shabeeley-flags.jpg",             alt: "Shabeeley Resort amphitheater at sunset lined with Ethiopian and Somali Regional flags", caption: "Flags of Ethiopia's regions line the amphitheater at sunset — a proud cultural statement" },
];

/* ── quick facts ── */
const quickFacts = [
  { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Outskirts of Jigjiga — 15–20 min from city centre" },
  { icon: <Leaf className="w-4 h-4" />, label: "Style", value: "Avant-garde Somali vernacular with luxury interiors" },
  { icon: <Clock className="w-4 h-4" />, label: "Best Time", value: "Sunset or after dark — the dome lights are spectacular" },
  { icon: <Sun className="w-4 h-4" />, label: "Heritage", value: "Named for the Leopard (Shabeel) that once roamed this land" },
];

/* ── architecture cards ── */
const architectureItems = [
  { emoji: "🏠", title: "The Aqal Soomaali Domes", description: "The resort's signature dome lodges are a modern engineering tribute to the iconic Aqal Soomaali — the portable geodesic home of the Somali nomad. Earthen-toned and curved, each dome is fully air-conditioned inside while its exterior honours a thousand years of Somali architectural intelligence." },
  { emoji: "🐆", title: "The Shabeel Fountain", description: "At the heart of the grounds stands the resort's most dramatic feature: a monumental cascading waterfall flanked by life-size bronze leopard (Shabeel) sculptures. By day it catches the golden light; by night, coloured jets and lanterns transform it into a glowing centrepiece." },
  { emoji: "🏟️", title: "The Grand Amphitheater", description: "Tiered LED-lit stone seating curves around an open stage. Lined with the flags of all Ethiopian regions and international partners, it hosts cultural performances, summits, and ceremonies — a bold statement that Jigjiga is ready for the world stage." },
];

/* ── experience cards ── */
const experienceItems = [
  { emoji: "📸", title: "Photography Paradise", description: "Eleven distinct shooting locations in one resort — from the golden-hour domes to the midnight blue aerial of amber lights dotting the hillside. Bring a wide lens and a tripod for the night shots." },
  { emoji: "🌿", title: "Lush Green Escape", description: "Irrigated lawns and landscaped gardens create an unlikely oasis in the semi-arid highlands. The contrast between the green grounds and the surrounding savannah is a visual statement." },
  { emoji: "🐆", title: "The Shabeel Legacy", description: "Leopards and elephants once roamed this frontier. Elders recall hunting Bakayle (rabbit) and Sagaaro (deer) here. The resort carries that wild memory in its name and in the bronze leopards that guard the waterfall." },
  { emoji: "🌙", title: "Night Sky & Silence", description: "Away from city light pollution, Shabeeley's nights reveal a full canopy of stars. The amber glow of dome lights below and the Milky Way above create a scene that guests remember for years." },
];

const navLinks = [
  { label: "Explore City", href: "/#explore-city" },
  { label: "News", href: "/#news" },
  { label: "Culture", href: "/history-culture" },
  { label: "Tech Hub", href: "/#tech-hub" },
];

/* ═══════════════════════════════════════════════════════════════════
   GALLERY COMPONENT
═══════════════════════════════════════════════════════════════════ */
function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const totalPhotos = galleryPhotos.length;

  const prev = useCallback(() => setCurrent(i => (i - 1 + totalPhotos) % totalPhotos), [totalPhotos]);
  const next = useCallback(() => setCurrent(i => (i + 1) % totalPhotos), [totalPhotos]);

  const prevLb = useCallback(() => setLightbox(i => i === null ? null : (i - 1 + totalPhotos) % totalPhotos), [totalPhotos]);
  const nextLb = useCallback(() => setLightbox(i => i === null ? null : (i + 1) % totalPhotos), [totalPhotos]);

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
      {/* ── MAIN CAROUSEL ── */}
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
            transition={{ duration: 0.35 }}
            onClick={() => setLightbox(current)}
          />
        </AnimatePresence>

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 sm:px-6 pt-10 pb-4">
          <p className="text-white text-sm sm:text-base font-semibold leading-snug">{galleryPhotos[current].caption}</p>
          <p className="text-white/50 text-xs mt-1">{current + 1} / {totalPhotos} — tap photo to enlarge</p>
        </div>

        {/* Prev / Next buttons */}
        <button onClick={prev} aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ── THUMBNAIL STRIP ── */}
      <div className="flex gap-2 overflow-x-auto py-2 px-1 bg-black scrollbar-hide">
        {galleryPhotos.map((photo, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`View photo ${i + 1}`}
            className={`shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded overflow-hidden border-2 transition-all ${i === current ? "border-amber-400 opacity-100" : "border-transparent opacity-50 hover:opacity-80"}`}>
            <img src={photo.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* ── DOT INDICATOR ── */}
      <div className="flex justify-center gap-1.5 py-3 bg-black">
        {galleryPhotos.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to photo ${i + 1}`}
            className={`transition-all rounded-full ${i === current ? "w-5 h-2 bg-amber-400" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`} />
        ))}
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2" onClick={() => setLightbox(null)} aria-label="Close">
              <X className="w-7 h-7" />
            </button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
              onClick={(e) => { e.stopPropagation(); prevLb(); }} aria-label="Previous">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
              onClick={(e) => { e.stopPropagation(); nextLb(); }} aria-label="Next">
              <ChevronRight className="w-6 h-6" />
            </button>
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
              <p className="text-white/40 text-xs mt-1">{lightbox + 1} / {totalPhotos}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   YOUTUBE EMBED
═══════════════════════════════════════════════════════════════════ */
function YouTubeEmbed({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black" style={{ aspectRatio: "16/9" }}>
      {!playing ? (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Shabeeley Resort official video — click to play"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <button
            onClick={() => setPlaying(true)}
            aria-label="Play Shabeeley Resort video"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
            </div>
          </button>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white font-bold text-sm sm:text-base drop-shadow">Official Shabeeley Resort — الفيديو الرسمي</p>
            <p className="text-white/60 text-xs mt-1">Click to play · Jigjiga, Ethiopia</p>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Shabeeley Resort Jigjiga official video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
export default function ShabeeleyResort() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const content = usePageContent(PAGE_META.id, PAGE_META.defaults);
  const pullQuote = content.pullQuote ?? "";

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* ── NAV ── */}
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

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-0 overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-amber-950">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(16,185,129,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.22) 0%, transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-10 text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-3 mb-6">
            <Link href="/landmarks" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Landmarks
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Luxury Resorts</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">New 2025 · Jigjiga's Premier Resort</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">Shabeeley<br /><span className="text-amber-300">Resort</span></h1>
            <p className="text-xl sm:text-2xl text-emerald-300 font-bold font-script mb-3">Halka Taariikhda iyo Raaxadu Kulmaan</p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Where 10th-Century Somali Heritage Meets Modern Luxury</p>
          </motion.div>
        </div>
        {/* Hero: first dome photo */}
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="w-full">
          <img
            src="/shabeeley-domes-day.jpg"
            alt="Shabeeley Resort dome lodges aerial view with green landscape, Jigjiga"
            className="w-full h-[55vw] max-h-[640px] object-cover"
          />
        </motion.div>
      </section>

      {/* ── QUICK FACTS ── */}
      <section className="bg-emerald-950 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-amber-300 shrink-0">{fact.icon}</div>
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
      <section className="bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-4 text-center">
            <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-black rounded-full mb-3 uppercase tracking-widest">11 Photos</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">Photo Gallery</h2>
            <p className="text-white/50 text-sm">Tap any photo to enlarge — use arrows or keyboard to browse</p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="text-center lg:text-left">
              <div className="w-10 h-1 bg-emerald-500 rounded-full mb-5 mx-auto lg:mx-0" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">An Urban Escape in a Rural Setting</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-5">
                Located on the scenic outskirts of Jigjiga, the newly developed <strong>Shabeeley Resort</strong> is more than just a place to stay — it is a cultural statement. Built with a deep Somali theme at its heart, the resort offers a breathtaking green landscape that feels worlds away from the bustling city centre, yet remains easily accessible.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                It is the first development of its kind in the Somali Region: a premium hospitality experience that deliberately honours ancient Somali architecture while delivering the comfort that international travellers and the diaspora expect.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/shabeeley-arch-staff.jpg"
                alt="Shabeeley Resort staff in traditional Somali dress beneath the arched colonnade"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── OFFICIAL VIDEO ── */}
      <section className="py-14 sm:py-20 bg-emerald-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 text-xs font-black rounded-full mb-4 uppercase tracking-widest">
              <Play className="w-3 h-3 fill-current" /> Official Video
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">See Shabeeley in Motion</h2>
            <p className="text-white/60 max-w-lg mx-auto text-sm">The official resort video — drone footage, traditional performances, and the full beauty of the grounds</p>
          </div>
          <YouTubeEmbed videoId="JeDLf0STSw8" />
        </div>
      </section>

      {/* ── LEGEND OF THE LAND ── */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-xl order-2 lg:order-1">
              <img src="/shabeeley-leopard-fountain-day.jpg" alt="The Shabeel leopard waterfall fountain at Shabeeley Resort at golden hour" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center lg:text-left order-1 lg:order-2">
              <div className="w-10 h-1 bg-amber-500 rounded-full mb-5 mx-auto lg:mx-0" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Legend of the Land</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                The name <em>"Shabeeley"</em> carries the weight of this region's ancient history. In Somali, <strong>Shabeel (شَبَّل)</strong> means Leopard — and this very land was once a wild frontier where leopards and elephants roamed freely across the scrubland.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Local elders recall hunting <strong>Bakayle (rabbit)</strong> and <strong>Sagaaro (deer)</strong> in these very fields. The bronze leopard sculptures on the resort's centrepiece waterfall are a living tribute to that wild spirit — and a promise that it will never be forgotten.
              </p>
              <div className="mt-6 flex items-center gap-3 bg-white border border-amber-200 rounded-xl px-5 py-4 shadow-sm">
                <Star className="w-5 h-5 text-amber-500 fill-amber-400 shrink-0" />
                <p className="text-sm text-gray-700 font-semibold italic">"The leopard left — but his land remains, and we have kept it green."</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <section className="py-16 sm:py-24 bg-emerald-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-amber-300 mb-2">Dhaqanka & Casriga</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white">Traditional Architecture, Modern Comfort</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mt-4 max-w-xl mx-auto">Avant-garde design rooted in a thousand years of Somali building wisdom.</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {architectureItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
                <span className="text-4xl block mb-4">{item.emoji}</span>
                <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NIGHT SPREAD ── */}
      <section className="py-0 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">After Dark</h2>
            <p className="text-white/50 text-sm">Shabeeley at night is a different world entirely</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg sm:col-span-2">
              <img src="/shabeeley-night-dome-close.jpg" alt="Aerial night view of Shabeeley Resort dome village — amber lights glow like a constellation" className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="bg-zinc-900 px-4 py-3"><p className="text-xs font-semibold text-amber-300">Amber dome lights trace the paths between lodges — a constellation on the hillside</p></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl shadow-lg flex-1">
                <img src="/shabeeley-amphitheater-night.jpg" alt="Shabeeley amphitheater at night with LED lighting and flags" className="w-full h-full min-h-[150px] object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg flex-1">
                <img src="/shabeeley-leopard-fountain-night.jpg" alt="Shabeeley fountain at night with coloured green lights" className="w-full h-full min-h-[150px] object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY VISIT ── */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Waxa Aad Ku Heli Doontaa</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">Why Visit Shabeeley</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experienceItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 flex items-start gap-5">
                <span className="text-4xl shrink-0">{item.emoji}</span>
                <div>
                  <h3 className="text-base font-black text-foreground mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/shabeeley-waterfall-sunset.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-emerald-950/85" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-amber-300 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">{pullQuote}</blockquote>
          <p className="text-amber-300 font-bold text-lg">— Shabeeley Resort, Jigjiga</p>
        </div>
      </section>

      {/* ── PLANNING ── */}
      <section className="py-14 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-10 h-1 bg-emerald-500 rounded-full mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4">Planning Your Visit</h2>
              <div className="space-y-4">
                {[
                  { icon: "🚗", title: "Getting There", desc: "15–20 minutes from Jigjiga city centre by car. Bajaj tuk-tuks can reach the entrance road; the grounds are best on foot or by golf cart." },
                  { icon: "📅", title: "Best Season", desc: "Year-round. Gu (April–June) makes the lawns vivid green. Dry season brings cooler evenings and clearer star-filled nights." },
                  { icon: "📞", title: "Reservations", desc: "Contact the resort directly for accommodation, event hire, or day visits. Weekends fill quickly." },
                  { icon: "🎉", title: "Events & Weddings", desc: "The amphitheater and grounds host summits, corporate events, and wedding receptions — a top venue for Jigjiga's elite occasions." },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4 bg-slate-50 rounded-xl p-4">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-black text-sm text-foreground mb-1">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-emerald-950 rounded-2xl p-8 text-white">
                <Camera className="w-8 h-8 text-amber-300 mb-4" />
                <h3 className="text-xl font-black mb-4">Photography Tips</h3>
                <ul className="space-y-3 text-white/70 text-sm">
                  {[
                    "Arrive 30 minutes before sunset for golden-hour dome shots — the sandy tone of the domes glows warm amber",
                    "The Shabeel fountain waterfall is best at dusk: natural light + the first evening lights both active at once",
                    "For night aerials: position yourself on a high point — the dome village resembles a galaxy from above",
                    "The amphitheater LED strips (blue hour) + flags in wind = one of Jigjiga's most striking compositions",
                    "Long-exposure night shots of the fountain's coloured jets require a steady surface or tripod",
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-300 font-bold shrink-0">→</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-emerald-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More of Jigjiga</h2>
            <p className="text-white/60 text-lg">History, mountains, markets, and culture — all connected.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/landmarks" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f97316] text-white font-black rounded-full hover:bg-[#f97316]/90 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Landmarks
            </Link>
            <Link href="/landmarks/karamara-mountains" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-colors">
              Karamara Mountains <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/landmarks/central-mosque" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-colors">
              Central Mosque <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
