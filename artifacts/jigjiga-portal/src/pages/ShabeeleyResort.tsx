import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "landmarks/shabeeley-resort")!;
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Leaf, Sun, Camera, Quote, ArrowUpRight, Star, MapPin, Clock } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Scenic outskirts of Jigjiga — 15–20 min from city centre" },
  { icon: <Leaf className="w-4 h-4" />, label: "Style", value: "Avant-garde Somali vernacular architecture with luxury interiors" },
  { icon: <Clock className="w-4 h-4" />, label: "Best Time to Visit", value: "Sunset — when the amber light turns the green lawns golden" },
  { icon: <Sun className="w-4 h-4" />, label: "Heritage Link", value: "Site once roamed by leopards (Shabeel) and elephants — 10th century" },
];

const architectureItems = [
  {
    emoji: "🏠",
    title: "The Aqal Soomaali",
    description: "The iconic portable dwelling of the Somali nomad — a geodesic masterwork of bent branches, woven mats, and hand-stitched covers. Shabeeley's architects have elevated this ancient form into modern resort lodges that maintain authentic silhouettes while delivering air conditioning and Wi-Fi within.",
  },
  {
    emoji: "🏡",
    title: "The Gombis & Mudul",
    description: "Fixed traditional dwellings that trace their form back to the early settlement culture of the 10th century. The Mudul's conical thatched roof and the Gombi's low, thick walls are engineering marvels born from centuries of trial in the heat of the Somali plains — now reimagined as boutique resort suites.",
  },
  {
    emoji: "🏟️",
    title: "The Grand Amphitheater",
    description: "Tiered stone seating curves around an open performance stage — a space for cultural events, flag ceremonies, and live music under the open sky. Lined with the flags of Ethiopia's regions and international guests, it is both a landmark and a cultural statement.",
  },
];

const experienceItems = [
  { emoji: "📸", title: "Photography Paradise", description: "The contrast of traditional thatched domes against the wide open sunset sky is unlike anything else in the Horn of Africa. Every corner of the resort is a frame-worthy shot — from the bridge walkway to the amphitheater." },
  { emoji: "🌿", title: "The Lush Green Escape", description: "Rare in this region — meticulously irrigated lawns and gardens create a resort feel more reminiscent of East African safari lodges than an Ethiopian city edge. A stunning contrast to the surrounding semi-arid landscape." },
  { emoji: "🦁", title: "The Shabeel Legacy", description: "The land carries memory. This area was once a frontier where leopards (Shabeel in Somali) and elephants roamed freely. Local elders recall hunting rabbit (Bakayle) and deer (Sagaaro) in these very fields. That wild spirit still breathes through the landscape." },
  { emoji: "🌙", title: "Stargazing & Night Quiet", description: "Away from the city's light pollution, Shabeeley's nights offer a star-filled sky that is impossible to find in town. The quiet of the surrounding plains, broken only by the call to prayer, makes for an unmatchable evening experience." },
];

const navLinks = [
  { label: "Explore City", href: "/#explore-city" },
  { label: "News", href: "/#news" },
  { label: "Culture", href: "/history-culture" },
  { label: "Tech Hub", href: "/#tech-hub" },
];

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

        {/* Hero photo — full width, bleeds to edge */}
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="w-full">
          <img
            src="/shabeeley-aerial.jpg"
            alt="Aerial view of Shabeeley Resort at sunset — lush green lawns and traditional dome architecture on the outskirts of Jigjiga"
            className="w-full h-[55vw] max-h-[640px] object-cover"
          />
        </motion.div>
      </section>

      {/* ── QUICK FACTS BAR ── */}
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

      {/* ── INTRO ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="text-center lg:text-left">
              <div className="w-10 h-1 bg-emerald-500 rounded-full mb-5 mx-auto lg:mx-0" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">An Urban Escape in a Rural Setting</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-5">
                Located on the scenic outskirts of Jigjiga, the newly developed <strong>Shabeeley Resort</strong> is more than just a place to stay — it is a cultural statement. Built with a deep Somali theme at its heart, the resort offers a breathtaking green landscape that feels worlds away from the bustling city centre, yet remains easily accessible for a weekend escape.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                It is the first development of its kind in the Somali Region: a premium hospitality experience that deliberately honours ancient Somali architecture and land heritage while delivering the comfort that international travellers and the diaspora expect.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/shabeeley-flags.jpg"
                alt="The Shabeeley Resort amphitheater at sunset, lined with Ethiopian and Somali Regional flags"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── LEGEND OF THE LAND ── */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl shadow-xl order-2 lg:order-1">
              <img
                src="/shabeeley-aerial.jpg"
                alt="Green gardens and dome architecture at Shabeeley Resort, Jigjiga"
                className="w-full h-72 object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center lg:text-left order-1 lg:order-2">
              <div className="w-10 h-1 bg-amber-500 rounded-full mb-5 mx-auto lg:mx-0" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-tight">The Legend of the Land</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                The name <em>"Shabeeley"</em> carries the weight of the region's ancient history. In Somali, <strong>Shabeel (شَبَّل)</strong> means Leopard — and long ago, this very land was a wild frontier where leopards and elephants roamed freely across the scrubland.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Local elders still recall the days of hunting <strong>Bakayle (rabbit)</strong> and <strong>Sagaaro (deer)</strong> in these fields. That wild, free spirit is what the resort seeks to preserve — not in a museum, but in living green gardens, open skies, and the silence of the land itself.
              </p>
              <div className="mt-6 flex items-center gap-3 bg-white border border-amber-200 rounded-xl px-5 py-4 shadow-sm">
                <Star className="w-5 h-5 text-amber-500 fill-amber-400 shrink-0" />
                <p className="text-sm text-gray-700 font-semibold italic">"The leopard left — but his land remains, and we have kept it green."</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRADITIONAL ARCHITECTURE ── */}
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

      {/* ── WHAT TO EXPERIENCE ── */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">Waxa Aad Ku Heli Doontaa</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">Why Visit Shabeeley</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-4 max-w-xl mx-auto">Four reasons Shabeeley Resort belongs on every Jigjiga itinerary.</motion.p>
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

      {/* ── FULL PHOTO SPREAD ── */}
      <section className="py-0 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/shabeeley-aerial.jpg" alt="Aerial view of Shabeeley Resort green gardens at sunset" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="bg-emerald-50 px-5 py-3">
                <p className="text-xs font-semibold text-emerald-800">Aerial view at sunset — the resort's lush green gardens and dome architecture</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src="/shabeeley-flags.jpg" alt="Shabeeley Resort amphitheater with Ethiopian and regional flags at sunset" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="bg-amber-50 px-5 py-3">
                <p className="text-xs font-semibold text-amber-800">The grand amphitheater lined with the flags of all Ethiopian regions and international partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/shabeeley-flags.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-emerald-950/85" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-amber-300 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-black text-white leading-relaxed mb-4">
            {pullQuote}
          </blockquote>
          <p className="text-amber-300 font-bold text-lg">— Shabeeley Resort, Jigjiga</p>
        </div>
      </section>

      {/* ── HOW TO GET THERE ── */}
      <section className="py-14 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-10 h-1 bg-emerald-500 rounded-full mb-5" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4">Planning Your Visit</h2>
              <div className="space-y-4">
                {[
                  { icon: "🚗", title: "Getting There", desc: "Located 15–20 minutes from Jigjiga city centre by car. Bajaj tuk-tuks can reach the entrance road; the resort grounds are best explored on foot or by golf cart." },
                  { icon: "📅", title: "Best Season", desc: "Year-round. During the Gu (long rains, April–June) the grounds are at their most vivid green. The dry season offers cooler evenings and clearer stars." },
                  { icon: "📞", title: "Reservations", desc: "Contact the resort directly for accommodation bookings, event hire, or day visits. Weekend reservations fill quickly due to high local demand." },
                  { icon: "🎉", title: "Events & Weddings", desc: "The amphitheater and garden grounds host corporate events, regional summits, and wedding receptions — a growing venue for Jigjiga's elite occasions." },
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
            <div className="text-center lg:text-left">
              <div className="bg-emerald-950 rounded-2xl p-8 text-white">
                <Camera className="w-8 h-8 text-amber-300 mb-4" />
                <h3 className="text-xl font-black mb-3">Photography Tips</h3>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-amber-300 font-bold shrink-0">→</span> Arrive 30 minutes before sunset for the best golden-hour light on the dome architecture</li>
                  <li className="flex items-start gap-2"><span className="text-amber-300 font-bold shrink-0">→</span> The amphitheater flags at sunset create a stunning patriotic composition — climb the upper tiers for a wide shot</li>
                  <li className="flex items-start gap-2"><span className="text-amber-300 font-bold shrink-0">→</span> The curved walkway bridge above the gardens is the best spot for an aerial-style ground-level shot</li>
                  <li className="flex items-start gap-2"><span className="text-amber-300 font-bold shrink-0">→</span> After dark, the dome lights reflect perfectly in the garden pool — long-exposure magic</li>
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
