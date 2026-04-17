import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, Menu, X, Rocket, Globe, Cpu, TrendingUp,
  Building2, Truck, ShoppingBag, Leaf, Wifi, Users,
  MapPin, ChevronRight, ArrowUpRight, Zap, BarChart3,
} from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.13 } } };

const SECTORS = [
  {
    id: "innovation",
    label: "Innovation",
    icon: <Cpu className="w-5 h-5" />,
    title: "The Innovation Ecosystem",
    subtitle: "Tignoolajiyada",
    color: "from-cyan-500 to-blue-600",
    items: [
      {
        icon: <Wifi className="w-6 h-6" />,
        name: "Jigjiga Tech Hub: Where Ideas Ignite",
        description:
          "The Jigjiga Tech Hub is the city's premier space for innovation. It provides local developers, designers, and entrepreneurs with high-speed internet, co-working spaces, and mentorship. A community of Digital Nomads building software solutions for local problems — from livestock tracking apps to e-commerce platforms.",
        tags: ["Software Dev", "Tech Training", "Incubation"],
      },
      {
        icon: <Zap className="w-6 h-6" />,
        name: "Digital Finance: The Cashless Revolution",
        description:
          "Jigjiga is leading the way in mobile banking. With the rise of platforms like Sahay and HelloCash, the city is moving toward a cashless economy. Traders in the smallest markets can now receive payments from across the globe on their mobile phones.",
        tags: ["Mobile Banking", "Sahay", "HelloCash"],
      },
    ],
  },
  {
    id: "trade",
    label: "Trade & Logistics",
    icon: <Truck className="w-5 h-5" />,
    title: "Trade & Logistics",
    subtitle: "Ganacsiga",
    color: "from-blue-600 to-indigo-700",
    items: [
      {
        icon: <Globe className="w-6 h-6" />,
        name: "The Berbera Corridor: A Gateway to the World",
        description:
          "Jigjiga sits on the most important trade route in the region. This strategic highway connects the Port of Berbera to the heart of Ethiopia, making Jigjiga the primary logistics hub for goods entering the country — a goldmine for import-export businesses.",
        tags: ["Port of Berbera", "Import/Export", "Logistics"],
      },
      {
        icon: <ShoppingBag className="w-6 h-6" />,
        name: "Cross-Border Commerce",
        description:
          "The city is a bustling marketplace for textiles, electronics, and essential commodities. The Taywan Market and other commercial districts are the engines of the region's economy, where traditional trading meets modern logistics.",
        tags: ["Taywan Market", "Textiles", "Electronics"],
      },
    ],
  },
  {
    id: "sectors",
    label: "Business Sectors",
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Key Business Sectors",
    subtitle: "Qaybaha Ganacsiga",
    color: "from-indigo-600 to-violet-700",
    items: [
      {
        icon: <Building2 className="w-6 h-6" />,
        name: "Real Estate & Infrastructure",
        description:
          "Look at the skyline! Jigjiga is experiencing a construction boom. Modern malls, luxury hotels, and high-rise apartments are being built at a record pace — offering massive opportunities for investors looking to shape the face of a rising capital.",
        tags: ["Luxury Hotels", "Modern Malls", "High-Rise"],
      },
      {
        icon: <Leaf className="w-6 h-6" />,
        name: "Livestock & Agribusiness",
        description:
          "Building on our heritage, the business of livestock is being modernized. From chilled meat exports to industrial-scale milk processing, the White Gold (camels) and Green Gold (agriculture) of the region are being transformed into global commodities.",
        tags: ["Meat Exports", "Dairy", "Agribusiness"],
      },
    ],
  },
];

const INVEST_REASONS = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Strategic Location",
    body: "The main link between the coast and the highlands — a natural crossroads for trade between Africa and the Gulf.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Young Workforce",
    body: "A huge population of university-educated, bilingual youth ready to power the next generation of businesses.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Pro-Business Climate",
    body: "Rapidly improving infrastructure and government support for startups, making Jigjiga one of the fastest-growing cities in the Horn.",
  },
];

export default function TechHub() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("innovation");

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "History & Culture", href: "/history-culture" },
    { label: "Eat & Drink", href: "/eat-drink" },
    { label: "Landmarks", href: "/landmarks" },
  ];

  const activeData = SECTORS.find(s => s.id === activeTab)!;

  return (
    <div className="min-h-screen bg-[#060d1f] font-sans">
      {/* ── HEADER ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#060d1f]/95 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg" : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-0 group outline-none shrink-0">
              <LogoImg />
              <span className="text-base sm:text-lg font-black tracking-tight text-white -ml-4">IGJIGA</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm font-semibold text-white/70 hover:text-white transition-colors whitespace-nowrap">{item.label}</Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="mailto:invest@jigjiga.net" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-500 text-white text-sm font-bold rounded-full hover:bg-cyan-400 transition-colors">
                Invest in Jigjiga <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg text-white/80 hover:bg-white/10 transition-colors">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/10 mt-3 flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-1.5 text-white/70">{item.label}</Link>
              ))}
              <a href="mailto:invest@jigjiga.net" className="mt-2 inline-flex items-center gap-1.5 px-4 py-2.5 bg-cyan-500 text-white text-sm font-bold rounded-full w-max">
                Invest in Jigjiga <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060d1f] via-[#0c1a3a] to-[#060d1f]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6,182,212,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(37,99,235,0.15) 0%, transparent 60%)" }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full text-xs font-bold mb-8 tracking-widest uppercase">
              <Rocket className="w-3.5 h-3.5" /> Silicon Valley of the Horn
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Tech Hub{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                & Business
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Jigjiga is no longer just a center for trade — it is becoming the <span className="text-cyan-400 font-semibold">digital heartbeat</span> of the Somali Region. Welcome to the future of Jigjiga.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:invest@jigjiga.net" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-cyan-500/20 text-sm sm:text-base">
                <Rocket className="w-4 h-4" /> Invest in Jigjiga
              </a>
              <a href="#sectors" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/15 transition-colors text-sm sm:text-base">
                Explore Sectors <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Stat bar */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "540k+", label: "City Population" },
              { num: "40%", label: "Youth Under 25" },
              { num: "#1", label: "Trade Hub in Region" },
              { num: "24/7", label: "Cross-Border Activity" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm">
                <p className="text-2xl sm:text-3xl font-black text-cyan-400 mb-1">{s.num}</p>
                <p className="text-white/50 text-xs sm:text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span>Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── LEADING THE FRONTIER intro ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="max-w-3xl mx-auto text-center">
            <motion.p variants={fadeUp} className="font-semibold text-cyan-600 uppercase tracking-widest text-xs mb-4">Leading the Digital Frontier</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              A Young, Tech-Savvy City on the Rise
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-base sm:text-lg leading-relaxed">
              With a young, tech-savvy population and a strategic location as a cross-border trade hub, Jigjiga is transforming into a vibrant ecosystem for startups, entrepreneurs, and global investors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── TABBED SECTORS ── */}
      <section id="sectors" className="bg-[#f8fafc] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-10 sm:mb-14">
            <motion.p variants={fadeUp} className="font-semibold text-cyan-600 uppercase tracking-widest text-xs mb-3 text-center">Explore the Economy</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-8">The Three Pillars of Jigjiga Business</motion.h2>

            {/* Tabs */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {SECTORS.map(s => (
                <button key={s.id} onClick={() => setActiveTab(s.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === s.id ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20" : "bg-white border border-gray-200 text-gray-600 hover:border-cyan-300"}`}>
                  {s.icon} {s.label}
                </button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="mb-8 text-center">
              <p className="text-cyan-600 font-semibold text-sm tracking-widest uppercase mb-1">{activeData.subtitle}</p>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900">{activeData.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeData.items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${activeData.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-3">{item.name}</h4>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY INVEST ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-semibold text-cyan-600 uppercase tracking-widest text-xs mb-3 text-center">Why Jigjiga?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-12">Three Reasons to Invest Now</motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {INVEST_REASONS.map((r, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="relative bg-gradient-to-br from-[#060d1f] to-[#0c1a3a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 mb-5">
                      {r.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-black mb-3">{r.title}</h4>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed">{r.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#060d1f] py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(6,182,212,0.12) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full text-xs font-bold mb-8 tracking-widest uppercase">
              <Rocket className="w-3.5 h-3.5" /> Join the Movement
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Be Part of the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Jigjiga Story</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you are a developer, investor, or entrepreneur — Jigjiga's doors are open. The Silicon Valley of the Horn is being built right now.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:invest@jigjiga.net"
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-cyan-500/20 text-base sm:text-lg">
                <Rocket className="w-5 h-5" /> Invest in Jigjiga
              </a>
              <a href="mailto:info@jigjiga.net"
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/15 transition-colors text-base sm:text-lg">
                Join the Tech Hub <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SIMPLE FOOTER ── */}
      <div className="bg-[#030a15] py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
          <Link href="/" className="flex items-center gap-2 hover:text-white/60 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Jigjiga.net
          </Link>
          <p>© 2024 Jigjiga.net — The Official City Portal</p>
        </div>
      </div>
    </div>
  );
}
