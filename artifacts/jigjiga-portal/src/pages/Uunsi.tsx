import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Flame, Droplets, Star, Wind, Quote, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
const PAGE_META = PAGE_REGISTRY.find(p => p.id === "history-culture/uunsi")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.13 } } };

const quickFacts = [
  { icon: <Flame className="w-4 h-4" />, label: "Base Resin", value: "Frankincense (Fooh) & Myrrh" },
  { icon: <Droplets className="w-4 h-4" />, label: "Blended With", value: "Attars, Musk & Sandalwood" },
  { icon: <Star className="w-4 h-4" />, label: "Burner", value: "Dabqaad — White Clay Censer" },
  { icon: <Wind className="w-4 h-4" />, label: "Occasions", value: "Guests, Weddings & Eid" },
];

const SECTIONS = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    tag: "The Soul of the Household",
    title: "A Home Isn't Ready Until the Scent Speaks",
    subtitle: "Uunsi — Tradition, Cleanliness & Welcome",
    body: [
      "In Jigjiga, a home isn't fully \"ready\" until the scent of Uunsi fills the air. It does not matter how clean the floors are or how beautifully the rugs are arranged — without that deep, earthy, sweet smoke rising from the corner of the room, something essential is missing. For the families of the Somali Region, Uunsi is not a luxury; it is a necessity, a language that says: you are welcome here.",
      "For Somali women, the art of making Uunsi is a treasured skill passed from mother to daughter across generations. It is more than perfume. It is a symbol of cleanliness, a way of honouring guests, and a powerful bridge to cultural identity. When you smell Uunsi in Jigjiga, you are breathing in centuries of tradition.",
    ],
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    tag: "The Art of the Blend",
    title: "A Handmade Luxury Built on Ancient Ingredients",
    subtitle: "Frankincense, Myrrh & Exotic Oils",
    body: [
      "Unlike the mass-produced incense sticks found in markets worldwide, authentic Uunsi is a handmade luxury — and the difference is immediately apparent to anyone who has experienced both. The process begins by boiling sugar, which acts as the binding base, then combining it with high-quality resins: Frankincense (locally known as Fooh) and Myrrh, both of which have been traded across the Horn of Africa for thousands of years.",
      "Into this base, the maker blends exotic perfume oils — Attars — alongside musk and sandalwood. The exact combination is personal, often a family's own closely guarded recipe. The result is a rich, earthy, and sweet fragrance unlike anything produced by a factory. It is complex. It evolves over time as it burns. And it can linger in a room, in fabric, in hair — for days. This staying power is one reason Uunsi holds such a central place in Somali hospitality: it marks a space as cared-for long after the censer goes cold.",
    ],
  },
  {
    icon: <Flame className="w-8 h-8" />,
    tag: "The Ritual of the Dabqaad",
    title: "The White Clay Censer & Its Sacred Ritual",
    subtitle: "Fire, Smoke & the Language of Welcome",
    body: [
      "The instrument at the heart of the Uunsi ritual is the Dabqaad — a traditional white clay incense burner, typically rounded and low to the ground, often decorated with simple geometric patterns. To release the scent, a small piece of prepared Uunsi resin is placed carefully onto a glowing hot coal within the Dabqaad. Within moments, a thin column of fragrant white smoke begins to curl upward.",
      "This is not a casual act. Lighting the Dabqaad is an intentional gesture, a statement. In the context of hospitality, it is customary to light Uunsi after a large meal has been shared, or the moment a guest arrives — a fragrant handshake that says the host has prepared for you. During weddings and Eid celebrations, the ritual is even more elaborate: the Dabqaad is passed from person to person so that each guest can hold it under their clothing for a moment, letting the fragrant smoke perfume their garments and hair. The result is a \"signature scent\" that ties the memory of the celebration to every person present.",
    ],
  },
];

const RITUAL_OCCASIONS = [
  {
    title: "Guest Arrives",
    description: "The Dabqaad is lit as a guest enters — the scented smoke says \"this home has been prepared for you.\"",
    icon: "🕌",
  },
  {
    title: "After a Large Meal",
    description: "Following communal dining, Uunsi cleanses the air and transitions the gathering from food to conversation.",
    icon: "🍽️",
  },
  {
    title: "Wedding Celebrations",
    description: "The censer is passed among guests who hold it under their garments, carrying the celebration's scent home.",
    icon: "💍",
  },
  {
    title: "Eid Festivities",
    description: "During both Eid celebrations, the ritual perfuming of clothes and hair marks the holiness of the occasion.",
    icon: "🌙",
  },
];

const INGREDIENTS = [
  { name: "Fooh (Frankincense)", role: "Base Resin", desc: "Harvested from Boswellia trees across the Horn of Africa. The ancient resin of trade routes and ceremony." },
  { name: "Myrrh", role: "Base Resin", desc: "A companion to Frankincense for millennia. Rich, balsamic, and deeply earthy." },
  { name: "Attars (Perfume Oils)", role: "Fragrance Oils", desc: "Exotic floral and woody oils that give each family's Uunsi blend its unique character." },
  { name: "Musk & Sandalwood", role: "Depth & Warmth", desc: "The final layer — giving the smoke its lasting, warm base that clings to fabric and memory alike." },
];

export default function Uunsi() {

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
      <section className="relative pt-24 pb-8 overflow-hidden" style={{ background: "linear-gradient(135deg, #3d1a00 0%, #7c3200 35%, #b05a00 65%, #6b2900 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 30% 70%, rgba(255,180,50,0.18) 0%, transparent 55%), radial-gradient(ellipse at 75% 20%, rgba(200,80,0,0.2) 0%, transparent 50%)" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 w-full text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6">
            <Link href="/history-culture"
              className="inline-flex items-center gap-2 text-amber-200/60 hover:text-amber-100 text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> History &amp; Culture
            </Link>
            <span className="text-amber-200/30">/</span>
            <span className="text-amber-200/60 text-sm">Arts &amp; Culture</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">
              Living Tradition
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Uunsi<br />
              <span className="text-amber-400">The Scent of</span><br />
              <span className="text-amber-300">Somali Hospitality</span>
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200/80 font-bold font-script mt-2">
              Fooh, Myrrh & the Dabqaad
            </p>
            <p className="text-amber-200/40 text-sm mt-4 font-medium">Arts & Culture · Traditional Craft · Jigjiga</p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK FACTS ── */}
      <section style={{ background: "#2a1000" }} className="border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <div className="mt-0.5 text-amber-400 shrink-0">{fact.icon}</div>
                <div>
                  <p className="text-amber-200/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{fact.label}</p>
                  <p className="text-amber-100 text-sm font-semibold leading-snug">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE SECTIONS ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-28">
            {SECTIONS.map((sec, i) => (
              <motion.div key={sec.title}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
                variants={stagger} className="relative">
                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 text-white shrink-0 shadow-lg">
                    {sec.icon}
                  </div>
                  <div>
                    <p className="text-amber-700 text-xs font-black uppercase tracking-widest mb-0.5">{sec.tag}</p>
                    <div className="h-px w-24 bg-gradient-to-r from-amber-500 to-transparent" />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">{sec.title}</h2>
                  <p className="text-amber-700 font-semibold text-base">{sec.subtitle}</p>
                </motion.div>

                <div className="space-y-5">
                  {sec.body.map((para, pi) => (
                    <motion.p key={pi} variants={fadeUp}
                      className="text-gray-600 leading-relaxed text-base sm:text-lg">{para}</motion.p>
                  ))}
                </div>

                {i < SECTIONS.length - 1 && (
                  <motion.div variants={fadeUp} className="mt-20 sm:mt-28 flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-100" />
                    <Flame className="w-4 h-4 text-amber-500" />
                    <div className="flex-1 h-px bg-gray-100" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INGREDIENTS ── */}
      <section className="py-16 sm:py-24" style={{ background: "#fdf6ed" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
              <p className="text-amber-700 font-black uppercase tracking-widest text-xs mb-3">What's Inside</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">The Four Pillars of Uunsi</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">Each ingredient in a handcrafted Uunsi blend has a role — and mastering the balance is what separates a good Uunsi from a great one.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {INGREDIENTS.map((item, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg sm:text-xl font-black text-foreground">{item.name}</h3>
                    <span className="shrink-0 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-black rounded-full uppercase tracking-wide whitespace-nowrap">{item.role}</span>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RITUAL OCCASIONS ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
              <p className="text-amber-700 font-black uppercase tracking-widest text-xs mb-3">When the Dabqaad is Lit</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">Four Moments That Call for Uunsi</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RITUAL_OCCASIONS.map((occasion, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{occasion.icon}</div>
                  <h3 className="font-black text-foreground mb-2">{occasion.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{occasion.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #3d1a00 0%, #7c3200 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Quote className="w-10 h-10 text-amber-400 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-relaxed mb-6">
            {pullQuote}
          </blockquote>
          <p className="text-amber-400 font-bold text-base">— Somali Saying</p>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Explore More Arts &amp; Culture</h2>
          <p className="text-white/80 mb-8 text-lg">From Somali poetry to the art of the Aqal — discover the living traditions of Jigjiga.</p>
          <Link href="/history-culture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to History &amp; Culture
          </Link>
        </div>
      </section>
    </div>
  );
}
