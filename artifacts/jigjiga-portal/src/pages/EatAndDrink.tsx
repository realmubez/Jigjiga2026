import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Menu, X, Coffee, UtensilsCrossed, Flame, ShoppingBag } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";
import { PAGE_REGISTRY } from "@/lib/pageDefaults";
import SiteHeader from "@/components/SiteHeader";

const PAGE_META = PAGE_REGISTRY.find(p => p.id === "eat-drink")!;

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.13 } } };


export default function EatAndDrink() {

  const content = usePageContent("eat-drink", PAGE_META.defaults);
  const signatureDishes = content.groups?.find(g => g.id === "signature")?.items || PAGE_META.defaults.groups![0].items;
  const nomadicStaples = content.groups?.find(g => g.id === "nomadic")?.items || PAGE_META.defaults.groups![1].items;
  const beverages = content.groups?.find(g => g.id === "beverages")?.items || PAGE_META.defaults.groups![2].items;
  const diningSpots = content.groups?.find(g => g.id === "dining")?.items || PAGE_META.defaults.groups![3].items;
  const heroImageUrl = content.heroImageUrl || "https://picsum.photos/seed/jigjiga-food-hero/1600/800";

  const navLinks = [
    { label: "Explore City", href: "/#explore-city" },
    { label: "News", href: "/#news" },
    { label: "Culture", href: "/history-culture" },
    { label: "Tech Hub", href: "/#tech-hub" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── HEADER ── */}
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-8 overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 15% 50%, rgba(249,115,22,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(37,99,235,0.18) 0%, transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 w-full text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6">
            <Link href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Eat &amp; Drink</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full mb-4 uppercase tracking-widest">
              Cunnooyinka Jigjiga
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
              Eat &amp; Drink
            </h1>
            <p className="text-xl sm:text-2xl text-[#f97316] font-bold font-script">
              The Flavors of Jigjiga
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
            Jigjiga is a culinary crossroads — where the aromatic spices of the Somali coast meet the rich, complex flavors of the Ethiopian highlands. Whether you seek a traditional nomadic feast of camel meat and rice or a modern cappuccino in a garden cafe, our city delivers.
          </p>
        </div>
      </section>

      {/* ── SIGNATURE DISHES ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mb-12">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <UtensilsCrossed className="w-6 h-6 text-[#f97316]" />
              <p className="font-script text-2xl text-[#f97316]">Cunnooyinka Caanka ah</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">
              Signature Dishes
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {signatureDishes.map((dish, i) => (
              <motion.div key={dish.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-2xl shadow-sm">
                <img src={dish.image} alt={dish.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="text-3xl block mb-3">{dish.icon}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{dish.name}</h3>
                  <p className="text-[#f97316] text-sm font-semibold mb-2">{dish.subtitle}</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{dish.description}</p>
                  {dish.href && (
                    <Link href={dish.href} className="inline-flex items-center gap-2 px-4 py-2 bg-white text-foreground text-xs font-black rounded-full hover:bg-[#f97316] hover:text-white transition-colors">
                      Read Full Story <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOMADIC STAPLES ── */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mb-12">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <Flame className="w-6 h-6 text-[#f97316]" />
              <p className="font-script text-2xl text-[#f97316]">Hiddaha iyo Cuntada</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">
              Nomadic Staples
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {nomadicStaples.map((item, i) => (
              <motion.div key={item.name}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 items-center bg-white rounded-2xl shadow-sm overflow-hidden ${i % 2 === 1 ? "" : ""}`}>
                <img src={item.image} alt={item.name}
                  className="w-full h-56 sm:h-full object-cover" />
                <div className="p-6 sm:p-8">
                  <span className="text-4xl block mb-3">{item.icon}</span>
                  <h3 className="text-xl font-black text-foreground mb-1">{item.name}</h3>
                  <p className="text-[#f97316] text-sm font-semibold mb-3">{item.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  {item.href && (
                    <Link href={item.href} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-black rounded-full hover:bg-primary/90 transition-colors">
                      Read Full Story <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEVERAGES ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mb-12">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <Coffee className="w-6 h-6 text-[#f97316]" />
              <p className="font-script text-2xl text-[#f97316]">Cabitaanka iyo Sheekada</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">
              Beverages &amp; Social Life
            </motion.h2>
          </motion.div>
          <div className="space-y-20 sm:space-y-28">
            {beverages.map((bev, i) => (
              <motion.div key={bev.name}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <motion.div variants={fadeUp} className={"text-center lg:text-left " + (i % 2 === 1 ? "lg:col-start-2" : "")}>
                  <span className="text-5xl block mb-4">{bev.icon}</span>
                  <div className="w-10 h-1 bg-[#f97316] rounded-full mb-5 mx-auto lg:mx-0" />
                  <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-2">{bev.name}</h2>
                  <p className="text-[#f97316] font-semibold text-sm mb-4">{bev.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6">{bev.description}</p>
                  {bev.href && (
                    <Link href={bev.href} className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-black rounded-full hover:bg-primary/90 transition-colors">
                      Read Full Story <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
                <motion.div variants={fadeUp}
                  className={`overflow-hidden rounded-2xl shadow-lg ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <img src={bev.image} alt={bev.name}
                    className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DINING SPOTS ── */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="mb-12">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <ShoppingBag className="w-6 h-6 text-[#f97316]" />
              <p className="font-script text-2xl text-[#f97316]">Halkee Laga Cunaa?</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white">
              Where to Eat
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diningSpots.map((spot, i) => (
              <motion.div key={spot.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-2xl">
                <img src={spot.image} alt={spot.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#f97316] text-white text-xs font-black rounded-full uppercase tracking-widest">
                    {spot.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-black text-white mb-2">{spot.name}</h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">{spot.description}</p>
                  {spot.href && (
                    <Link href={spot.href} className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-foreground text-xs font-black rounded-full hover:bg-[#f97316] hover:text-white transition-colors">
                      Read Full Story <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-14 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to Explore Jigjiga?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Discover the history, culture, and landmarks that complete the Jigjiga experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg">
              <ArrowLeft className="w-5 h-5" /> Back to Home
            </Link>
            <Link href="/history-culture"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white font-black rounded-full hover:bg-white/30 transition-colors text-lg border border-white/40">
              History &amp; Culture <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
