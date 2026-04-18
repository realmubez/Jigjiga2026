import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Moon, Flag, GraduationCap, Music, Mic2, Quote, Star, Calendar } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/festivals")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const quickFacts = [
  { icon: <Moon className="w-4 h-4" />, label: "Biggest Events", value: "Eid-ul-Fitr & Eid-ul-Adha" },
  { icon: <Flag className="w-4 h-4" />, label: "Flag Day", value: "October 12th — Maalinta Calanka" },
  { icon: <GraduationCap className="w-4 h-4" />, label: "Graduation Season", value: "July — Jigjiga University (JJU)" },
  { icon: <Music className="w-4 h-4" />, label: "Music Scene", value: "Qaaci Nights & Wedding Season" },
];

const FESTIVALS = [
  {
    id: "eid",
    icon: <Moon className="w-8 h-8" />,
    tag: "Religious Unity",
    number: "01",
    title: "The Two Eids",
    subtitle: "When the Whole City Becomes One Family",
    accent: "#16a34a",
    accentLight: "#dcfce7",
    body: [
      "In Jigjiga, Eid-ul-Fitr and Eid-ul-Adha are not just religious observances — they are the two great pillars of the city's entire calendar. Everything else in Jigjiga's year is measured in relation to them. The weeks before each Eid see the markets transformed: fabrics, perfumes, new shoes for the children, and the unmistakable scent of Uunsi rising from every household.",
      "Celebrations begin at dawn at the Jijiga Stadium, where tens of thousands gather for the massive communal prayer. The sight of an entire city kneeling together on the open ground is one of the most powerful things a visitor to Jigjiga can witness. This is the city at its most unified.",
      "After prayer, the spirit of \"Is-cafin\" (forgiveness) takes over. Old disputes are settled. Relatives visit relatives. Every street in the city feels like a giant family gathering where strangers are welcomed as guests, where tea and food are pressed upon anyone who walks through the door, and where generosity — \"Zakat\" — is not charity but a joy. The city breathes together on Eid morning.",
    ],
    highlights: [
      { label: "The Gathering", detail: "Jigjiga Stadium — communal prayer at dawn" },
      { label: "Is-cafin", detail: "The ritual of forgiveness and reconciliation" },
      { label: "Zakat", detail: "Charity given as celebration, not obligation" },
    ],
  },
  {
    id: "flagday",
    icon: <Flag className="w-8 h-8" />,
    tag: "Patriotic Pride",
    number: "02",
    title: "Flag Day (Maalinta Calanka)",
    subtitle: "October 12th — The City in its Colours",
    accent: "#2563eb",
    accentLight: "#dbeafe",
    body: [
      "October 12th belongs to Jigjiga in a way that few dates belong to any city. On Flag Day — Maalinta Calanka — the Somali Region capital is draped from end to end in the blue, green, and red of the Somali Region flag alongside the Ethiopian national flag. There is barely a building, vehicle, or school gate that goes undecorated. The city announces itself.",
      "The centerpiece of the day is the grand parade through the main city square toward the Sayid Statue — the monument to Sayid Mohamed Abdullah Hassan that stands as the city's most powerful symbol. You will see the local police in their dress uniforms, hundreds of students marching in formation, and cultural troupes performing traditional dances as they move through the streets. The energy is electric.",
      "Flag Day is ultimately a festival of identity. It is a celebration of what makes the Somali Region distinct — its language, its culture, its people — while also affirming its place within the Ethiopian federation. For a city with Jigjiga's history, the act of raising those flags is not ceremonial. It is a statement.",
    ],
    highlights: [
      { label: "Date", detail: "October 12th every year" },
      { label: "The Parade", detail: "Police, students & cultural troupes to the Sayid Statue" },
      { label: "Meaning", detail: "Autonomy, identity & heritage of the Somali people" },
    ],
  },
  {
    id: "graduation",
    icon: <GraduationCap className="w-8 h-8" />,
    tag: "The Future Celebrates",
    number: "03",
    title: "The Graduation Festival",
    subtitle: "July at Jigjiga University — When the City Celebrates Its Scholars",
    accent: "#9333ea",
    accentLight: "#f3e8ff",
    body: [
      "In July, when Jigjiga University (JJU) releases its latest graduating class, something remarkable happens: the entire city celebrates alongside them. In most places, a university graduation is a campus event. In Jigjiga, it is a city-wide festival. It fills the hotels, packs the restaurants, and brings families streaming in from across the Somali Region and the global diaspora.",
      "The campus grounds become a stage. Students in their caps and gowns are met with traditional songs, Dhaanto dancing, and the jubilant cry of \"Hambalyo!\" — congratulations — from friends, relatives, and even strangers passing by. It is entirely normal for a graduating student's procession to stop in the middle of the campus while an impromptu circle of dancers forms around them.",
      "The Graduation Festival carries a meaning that goes beyond celebration. Jigjiga University, founded in 2004, represents the Somali Region's investment in its own future. Every graduating class is proof that the city is building something. When the families of those students travel from across the world to be here for that moment — when the music plays and the gowns catch the Jigjiga sun — the whole city feels the weight and the joy of what is being built.",
    ],
    highlights: [
      { label: "When", detail: "July — annual JJU graduation" },
      { label: "The Atmosphere", detail: "Dhaanto, Hambalyo & families from across the world" },
      { label: "The Symbol", detail: "The region's investment in its own future" },
    ],
  },
  {
    id: "weddings",
    icon: <Music className="w-8 h-8" />,
    tag: "The Sound of Jigjiga",
    number: "04",
    title: "Singer Shows & Wedding Season",
    subtitle: "When the Music Never Sleeps",
    accent: "#ea580c",
    accentLight: "#ffedd5",
    body: [
      "Jigjiga is a city that loves its voices. During the summer months and the peak wedding season, the city is alive with musical energy at a level that surprises every visitor. It is not uncommon to walk down a main street in Jigjiga on a summer evening and hear music from three different directions simultaneously — each one a different wedding, each one its own entire world for the night.",
      "Famous singers and artists from across the Somali-speaking world — from the diaspora cities of Minnesota to Toronto, from Mogadishu to Hargeisa — fly into Jigjiga specifically for concerts and hotel ballroom shows. These are not small events. Massive outdoor stages are erected. Hotel ballrooms are packed. The appetite for live performance in Jigjiga is genuine and serious.",
      "The wedding night itself deserves its own chapter. If you hear music in the air after dark in Jigjiga, it is almost certainly a wedding. These are high-energy festivals of dance: the Dhaanto circles form, the music shifts between traditional and modern, and the celebration goes until the early hours of the morning. Being invited — or simply passing by and hearing the sound drift over a wall — is one of the great pleasures of being in this city.",
    ],
    highlights: [
      { label: "Singer Shows", detail: "International Somali artists performing live in Jigjiga" },
      { label: "When", detail: "Summer months — the peak wedding & concert season" },
      { label: "The Dance", detail: "Dhaanto circles that last until the early morning" },
    ],
  },
  {
    id: "qaaci",
    icon: <Mic2 className="w-8 h-8" />,
    tag: "The Soul of Somali Music",
    number: "05",
    title: "Qaaci Nights",
    subtitle: "The Classic, Smoky Sound — Live at Jigjiga's Hotels",
    accent: "#0e7490",
    accentLight: "#cffafe",
    body: [
      "Among the initiated, no single word captures an evening in Jigjiga quite like \"Qaaci.\" It refers to the classic — almost smoky — sound of traditional Somali music: the rich, resonant tones of the Oud (called the Kaban in Somali), the steady pulse of the drums, and the kind of vocals that feel like they come from somewhere ancient, somewhere true.",
      "Modern hotels in Jigjiga — places like the Sky Hotel and the Nogob — host special Qaaci Nights. These are sophisticated, intimate evenings. People arrive dressed well, find their seats, order tea, and simply listen. There is no rush, no pressure to perform. The atmosphere is unhurried and warm, the conversation low, the music in the foreground. It is the antithesis of a loud concert and all the more powerful for it.",
      "\"Qaaci\" as a concept carries a specific feeling — the sense of a cozy, intimate gathering where music does the talking. The songs tell stories of love, of the land, of historical moments, of the beauty of the Somali Region. For visitors to Jigjiga, a Qaaci Night at one of the city's hotels is not an optional extra. It is essential. It is where you understand what the city sounds like when it is at peace with itself.",
    ],
    highlights: [
      { label: "Sound", detail: "Kaban (Oud), drums & classical Somali vocals" },
      { label: "Venues", detail: "Sky Hotel, Nogob & Jigjiga's leading hotels" },
      { label: "The Vibe", detail: "Intimate, sophisticated — tea, conversation & music" },
    ],
  },
];

export default function JigjigaFestivals() {

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
      {/* ── HEADER ── */}
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-10 overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ position: "absolute", top: "15%", left: "10%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "8%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4 text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6">
            <Link href="/history-culture"
              className="inline-flex items-center gap-2 text-emerald-200/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-emerald-200/30">/</span>
            <span className="text-emerald-200/60 text-sm">Arts &amp; Culture</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="inline-block px-3 py-1 bg-amber-400 text-emerald-900 text-xs font-black rounded-full uppercase tracking-widest">Local Expert Guide</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              The Ultimate Guide<br />
              <span className="text-amber-400">to Festivals</span><br />
              <span className="text-emerald-300">in Jigjiga</span>
            </h1>
            <p className="text-xl text-emerald-100/70 font-bold font-script mt-2">Eid · Flag Day · Qaaci Nights · Wedding Season</p>
            <p className="text-emerald-200/40 text-sm mt-4 font-medium">Arts &amp; Culture · Local Events · Jigjiga</p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK FACTS ── */}
      <section className="bg-emerald-950 border-b border-emerald-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-amber-400 shrink-0">{fact.icon}</div>
                <div>
                  <p className="text-emerald-300/50 text-xs font-semibold uppercase tracking-wider mb-0.5">{fact.label}</p>
                  <p className="text-white text-sm font-semibold leading-snug">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FESTIVAL SECTIONS ── */}
      <div className="divide-y divide-gray-100">
        {FESTIVALS.map((festival, i) => (
          <section key={festival.id} className={`py-16 sm:py-24 ${i % 2 === 1 ? "bg-gray-50" : "bg-background"}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>

                {/* Section header */}
                <motion.div variants={fadeUp} className="flex items-start gap-5 mb-10">
                  <div className="shrink-0 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg text-white"
                      style={{ background: `linear-gradient(135deg, ${festival.accent} 0%, ${festival.accent}cc 100%)` }}>
                      {festival.icon}
                    </div>
                    <span className="text-3xl font-black text-gray-200 leading-none">{festival.number}</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: festival.accent }}>{festival.tag}</p>
                    <div className="h-px w-16 mb-3" style={{ background: `linear-gradient(to right, ${festival.accent}, transparent)` }} />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight">{festival.title}</h2>
                    <p className="font-semibold mt-1" style={{ color: festival.accent }}>{festival.subtitle}</p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                  {/* Article body */}
                  <div className="lg:col-span-2 space-y-5">
                    {festival.body.map((para, pi) => (
                      <motion.p key={pi} variants={fadeUp} className="text-gray-600 leading-relaxed text-base sm:text-lg">{para}</motion.p>
                    ))}
                  </div>

                  {/* Highlights sidebar */}
                  <motion.div variants={fadeUp}
                    className="rounded-2xl p-6 border space-y-4"
                    style={{ background: festival.accentLight, borderColor: `${festival.accent}30` }}>
                    <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: festival.accent }}>
                      <Calendar className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                      At a Glance
                    </p>
                    {festival.highlights.map((h) => (
                      <div key={h.label} className="border-b last:border-b-0 pb-3 last:pb-0" style={{ borderColor: `${festival.accent}20` }}>
                        <p className="text-xs font-black uppercase tracking-wide text-gray-500 mb-0.5">{h.label}</p>
                        <p className="text-sm font-semibold text-gray-800">{h.detail}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* ── PULL QUOTE ── */}
      <section className="py-16 sm:py-20 bg-emerald-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-amber-400 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-relaxed mb-6">
            {pullQuote}
          </blockquote>
          <p className="text-amber-400 font-bold text-base">— Jigjiga</p>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Arts &amp; Culture</h2>
          <p className="text-white/80 mb-8 text-lg">From Uunsi to Somali poetry — discover the living traditions of Jigjiga.</p>
          <Link href="/history-culture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
