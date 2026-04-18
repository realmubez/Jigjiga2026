import React, { useState, useCallback, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Users, Heart, Globe, Star, Quote, ChevronLeft,
  ChevronRight, X, MapPin, Calendar, ArrowUpRight, Play,
} from "lucide-react";
import YouTube from "react-youtube";
import type { YouTubeEvent } from "react-youtube";
import SiteHeader from "@/components/SiteHeader";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Calendar className="w-4 h-4" />, label: "When", value: "Ramadan 2026 — Annual Event" },
  { icon: <Users className="w-4 h-4" />, label: "Attendance", value: "Thousands of Residents & Visitors" },
  { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Main Boulevard, City Centre, Jigjiga" },
  { icon: <Heart className="w-4 h-4" />, label: "Spirit", value: "Is-caawin — Mutual Support & Community Giving" },
];

const photos = [
  { src: "/iftar-drone-setup.jpg", caption: "Aerial view of the Grand Iftar setup — green carpets line the full length of the boulevard as guests begin to gather." },
  { src: "/iftar-drone-dusk.jpg", caption: "Drone perspective at golden hour — thousands of places set, the city boulevard transformed into a single table." },
  { src: "/iftar-drone-night.jpg", caption: "After sunset — aerial view of the event at night, city lights illuminating the gathering as the feast concludes." },
  { src: "/iftar-street-mosque-view.jpg", caption: "Ground-level view down the boulevard — the Central Mosque's minarets rising above the crowd against the evening sky." },
  { src: "/iftar-street-wide-mosque.jpg", caption: "The crowd fills both sides of the street, with the mosque and Jigjiga's modern high-rises forming a striking backdrop." },
  { src: "/iftar-corridor-view.jpg", caption: "The \"Infinite Table\" — looking down the corridor of the Iftar, stretching as far as the eye can see." },
  { src: "/iftar-sunset-dusk.jpg", caption: "Sunset silhouette — guests wait patiently as the light fades behind the city skyline before the call to break the fast." },
  { src: "/iftar-ground-level.jpg", caption: "Community in close focus — elders, youth, families and workers seated side by side on the same carpet." },
];

const SECTIONS = [
  {
    icon: <Globe className="w-8 h-8" />,
    tag: "Afur Wadareed",
    title: "A Symphony of Unity on the City Boulevard",
    subtitle: "Jigjiga, Somali Region — Ramadan 2026",
    body: [
      "This year, the capital of the Somali Region hosted one of the most significant communal events in its modern history — the Grand Street Iftar, known in Somali as the Afur Wadareed. As the sun dipped below the Karamara Mountains, thousands of residents and visitors gathered in the heart of the city to break their Ramadan fast in a breathtaking display of communal solidarity.",
      "The event transformed Jigjiga's main boulevard into something the city has never seen at this scale: a single, unbroken dining table stretching the full length of the street, flanked by the city's new high-rise buildings and the elegant minarets of the Central Mosque. From the air, the drone photographs reveal the true ambition of what was organised — an act of collective hospitality on a civic scale.",
      "For those who attended, and for those who watched the images spread across social media, the Afur Wadareed was not simply a religious observance. It was a statement: about who Jigjiga is, what its people value, and where the city is headed.",
    ],
  },
  {
    icon: <Heart className="w-8 h-8" />,
    tag: "Iftar Diplomacy",
    title: "More Than a Meal — A Message of Peace",
    subtitle: "Unity Across Every Layer of Society",
    body: [
      "What made the 2026 Grand Iftar remarkable was not just its scale, but its inclusivity. On the same long carpet — the gogol — you could find the regional government's senior officials seated beside traditional elders, university students beside elderly men on crutches, workers in everyday clothes beside families who had dressed formally for the occasion. The Iftar drew no distinctions.",
      "This deliberate inclusivity is what observers have called \"Iftar Diplomacy.\" In a region that has known its share of political tension, seeing thousands of people gather peacefully in a major public street — sharing food, sharing space, sharing a moment — sends a clear and intentional message to the world about the stability and safety of Jigjiga and the Somali Region. Ramadan's communal spirit became a diplomatic act.",
      "The spirit behind the event is rooted in the Somali concept of Is-caawin — mutual support, the idea that a community's strength lies in what its members give to each other freely, without transaction. Large communal iftars like this one are funded by local businesses and community contributions, making them living expressions of the very values they celebrate. To understand Is-caawin, read more about the <a href='/history-culture/xeer-system' class='text-primary font-semibold underline underline-offset-2'>Xeer system</a> — the ancient social contract that has guided Somali communities for centuries.",
    ],
  },
  {
    icon: <Star className="w-8 h-8" />,
    tag: "Minarets & Modernity",
    title: "Where Tradition Meets the New Skyline",
    subtitle: "A City Transforming Before Your Eyes",
    body: [
      "The aerial photographs from the Grand Iftar tell a second, parallel story: the story of Jigjiga's rapid urban transformation. In the drone shots, you can see the Central Mosque's minarets standing alongside glass-fronted apartment towers and buildings mid-construction, their scaffolding lit by the last light of the Ramadan evening. It is a skyline that did not exist a decade ago.",
      "This is the Jigjiga that the Grand Iftar inhabits — a city that is simultaneously ancient and new. The gogol dining mats spread on modern asphalt. The Adhan echoing between steel-and-concrete towers. The scent of spices rising through streets that are, year by year, becoming more cosmopolitan. The Afur Wadareed is a tradition of community sharing that goes back generations; the setting in which it now takes place is unmistakably 21st-century.",
      "The contrast is not a tension — it is the point. Jigjiga's residents do not experience their faith and their modernity as opposites. The Grand Iftar is proof of that: a deeply traditional act of communal generosity, performed at scale, in the heart of a rapidly developing regional capital, captured by drone and shared around the world.",
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    tag: "A Living Culture",
    title: "The Ultimate Cultural Experience for Visitors",
    subtitle: "For the Diaspora and International Travellers",
    body: [
      "For the Somali diaspora returning to Jigjiga, and for international travellers discovering the city for the first time, the Grand Street Iftar is the kind of experience that stays with you permanently. The atmosphere — the scent of spiced rice, maraq broth, and fresh dates; the sound of the Maghrib Adhan reverberating between city walls; the sight of thousands of welcoming faces turning toward each other at the moment of breaking fast — is something you simply cannot find anywhere else in the world.",
      "The evening speaks directly to the values that define Jigjiga's character: faith, community, generosity, and an instinctive warmth toward the stranger. These are the same values that you find in Somali art forms like <a href='/history-culture/dhaanto' class='text-primary font-semibold underline underline-offset-2'>Dhaanto music</a>, in the oral poetry tradition that has preserved the community's history for centuries, and in the hospitality that any visitor to Jigjiga experiences from the first moment they arrive.",
      "If you can time a visit to Jigjiga during Ramadan, the Grand Street Iftar should be at the top of your itinerary. It is free, it is open to all, and it is the city at its most itself — generous, communal, and alive.",
    ],
  },
];

function YouTubeEmbed({ videoId }: { videoId: string }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);

  const playVideo = () => playerRef.current?.playVideo();
  const onReady = (e: YouTubeEvent) => { playerRef.current = e.target; setPlayerReady(true); };
  const onStateChange = (e: YouTubeEvent<number>) => { if (e.data === 1) setHasStarted(true); };

  const opts = {
    width: "100%", height: "100%",
    playerVars: {
      controls: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3,
      disablekb: 1,
      fs: 0,
      playsinline: 1,
      color: "white" as const,
    },
  };

  return (
    <div className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden" style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} onStateChange={onStateChange}
        style={{ position: "absolute", top: "-80px", left: 0, width: "100%", height: "calc(100% + 160px)", zIndex: 1 }}
        iframeClassName="w-full h-full" />

      {!playerReady && (
        <div style={{ position: "absolute", inset: 0, zIndex: 6 }}
          className="bg-[#1e1b4b] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#f97316] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {playerReady && !hasStarted && (
        <div onClick={playVideo} style={{ position: "absolute", inset: 0, zIndex: 10, cursor: "pointer" }}
          className="flex flex-col items-center justify-center group">
          <img src="/iftar-drone-night.jpg" alt="Grand Street Iftar 2026"
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f97316] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
            </div>
            <div>
              <p className="text-white font-black text-base sm:text-xl drop-shadow">Afur Wadareed 2026 — Grand Street Iftar</p>
              <p className="text-white/70 text-xs sm:text-sm mt-1">Jigjiga, Somali Region · Ramadan 2026</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GrandStreetIftar() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox(i => (i === null ? 0 : (i - 1 + photos.length) % photos.length)), []);
  const next = useCallback(() => setLightbox(i => (i === null ? 0 : (i + 1) % photos.length)), []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <SiteHeader />

      {/* ── HERO ── */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="/iftar-drone-night.jpg"
          alt="Aerial view of the 2026 Grand Street Iftar in Jigjiga, Ethiopia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        {/* Breadcrumb */}
        <div className="absolute top-20 sm:top-24 left-4 sm:left-8">
          <Link href="/#news"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <ArrowLeft className="w-4 h-4" /> Latest City News
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 pb-12 sm:pb-20 w-full">
          <span className="inline-flex items-center gap-2 bg-[#f97316] text-white text-xs sm:text-sm font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" /> Ramadan 2026 · City News
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-3">
            The Grand Street Iftar
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-[#f97316] italic mb-4">
            Afur Wadareed — A Symphony of Unity in Jigjiga
          </p>
          <div className="flex items-center gap-3 text-white/70 text-sm font-medium">
            <Calendar className="w-4 h-4" /> April 2026 &nbsp;·&nbsp;
            <MapPin className="w-4 h-4" /> Main Boulevard, Jigjiga &nbsp;·&nbsp;
            <Users className="w-4 h-4" /> Thousands in Attendance
          </div>
        </motion.div>
      </div>

      {/* ── QUICK FACTS ── */}
      <div className="bg-[#1e1b4b] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {quickFacts.map((f) => (
            <div key={f.label} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#f97316] font-bold text-xs uppercase tracking-widest">
                {f.icon} {f.label}
              </div>
              <p className="text-white font-semibold text-sm leading-snug">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── VIDEO ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#f97316]">Watch the Event</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
        <YouTubeEmbed videoId="5jQufhnhkbc" />
        <p className="text-xs text-gray-400 text-center mt-3 italic">
          Aerial footage of the Afur Wadareed 2026 — Grand Street Iftar, Jigjiga · Credit: Yool Media
        </p>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-16 sm:space-y-24">
          {SECTIONS.map((s, i) => (
            <motion.section key={i} variants={fadeUp} className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {s.icon}
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#f97316]">{s.tag}</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-foreground leading-tight mt-0.5">{s.title}</h2>
                  <p className="text-sm font-semibold text-gray-500 mt-1 italic">{s.subtitle}</p>
                </div>
              </div>
              <div className="space-y-4 pl-0 sm:pl-[4.5rem]">
                {s.body.map((para, j) => (
                  <p key={j}
                    className="text-base sm:text-lg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>

              {/* Gallery after section 1 */}
              {i === 0 && (
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {photos.slice(0, 6).map((ph, idx) => (
                    <button key={idx} onClick={() => openLightbox(idx)}
                      className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] group">
                      <img src={ph.src} alt={ph.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </button>
                  ))}
                </div>
              )}

              {/* Second photo row after section 3 */}
              {i === 2 && (
                <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3">
                  {photos.slice(6).map((ph, idx) => (
                    <button key={idx} onClick={() => openLightbox(6 + idx)}
                      className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video group">
                      <img src={ph.src} alt={ph.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </button>
                  ))}
                </div>
              )}
            </motion.section>
          ))}
        </motion.div>

        {/* ── PULL QUOTE ── */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-16 sm:mt-20 bg-gradient-to-br from-[#1e1b4b] to-[#2563eb] rounded-3xl p-8 sm:p-12 text-white text-center">
          <Quote className="w-10 h-10 mx-auto mb-4 text-white/40" />
          <blockquote className="text-xl sm:text-2xl font-black leading-snug mb-4">
            "The Afur Wadareed is not just a Ramadan event — it is Jigjiga's annual reminder of who its people are."
          </blockquote>
          <p className="text-white/60 text-sm font-semibold">Jigjiga City Community — Ramadan 2026</p>
        </motion.div>

        {/* ── SEO KEYWORDS section ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-10 flex flex-wrap gap-2">
          {["Jigjiga Grand Street Iftar 2026","Ramadan Somali Region Ethiopia","Communal Iftar Unity","Somali Hospitality Culture","Afur Wadareed Jigjiga","Is-caawin Community"].map(k => (
            <span key={k} className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">{k}</span>
          ))}
        </motion.div>

        {/* ── RELATED ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-12 sm:mt-16 border-t border-gray-100 pt-10">
          <h3 className="text-lg font-black text-foreground mb-5">Continue Exploring Jigjiga</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Dhaanto Music", href: "/history-culture/dhaanto", img: "/shabeeley-flags.jpg", tag: "Arts & Culture" },
              { label: "Xeer Social System", href: "/history-culture/xeer-system", img: "/garad-wiil-waal-portrait.jpg", tag: "Heritage" },
              { label: "Jigjiga Festivals", href: "/history-culture/festivals", img: "/karamara-summit-tower.jpg", tag: "Events" },
            ].map(r => (
              <Link key={r.href} href={r.href}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                <div className="h-36 overflow-hidden">
                  <img src={r.img} alt={r.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="text-[#f97316] text-xs font-black uppercase tracking-wide">{r.tag}</span>
                  <p className="font-bold text-gray-900 mt-0.5 group-hover:text-primary transition-colors">{r.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Back */}
        <div className="mt-12 text-center">
          <Link href="/#news"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to City News
          </Link>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}>
            <button onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 bg-white/10 rounded-full p-2">
              <X className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 text-white/70 hover:text-white z-10 bg-white/10 rounded-full p-3">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <img src={photos[lightbox].src} alt={photos[lightbox].caption}
                className="w-full max-h-[75vh] object-contain rounded-2xl" />
              <p className="text-white/60 text-sm text-center mt-4 px-8">{photos[lightbox].caption}</p>
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-white/70 hover:text-white z-10 bg-white/10 rounded-full p-3">
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1e1b4b] text-white py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-black text-xl tracking-tight">J<span className="text-[#f97316]">IGJIGA</span>.NET</Link>
          <p className="text-white/50 text-center">© 2026 Jigjiga City Portal · The Heartbeat of the Somali Region</p>
          <a href="https://business.jigjiga.net" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-primary/90 transition-colors">
            Business Services <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </footer>
    </div>
  );
}
