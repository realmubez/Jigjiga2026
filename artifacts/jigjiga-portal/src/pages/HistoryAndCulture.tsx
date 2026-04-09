import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, Globe, ArrowUpRight } from "lucide-react";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function HistoryAndCulture() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = ["Explore City", "News", "Culture", "Tech Hub"];

  const legendaryFigures = [
    {
      name: "Sayid Mohamed Abdullah Hassan",
      title: "The Visionary Warrior",
      description:
        'Known as the "Father of Somali Nationalism," the Sayid led the Dervish resistance for over 20 years. He was a master of both the sword and the pen, using his famous poetry to unite the people against colonial rule. His legacy remains a symbol of defiance and pride in Jigjiga.',
      image: "https://picsum.photos/seed/sayid-hassan/800/500",
      tag: "Dervish Era",
      href: "/history-culture/sayid-hassan",
    },
    {
      name: "Garad Wiil-Waal",
      title: "The Wise Sultan",
      description:
        "A legendary 16th-century ruler of the Jigjiga plains. Garad Wiil-Waal was famous for his intelligence and his use of riddles to test the wisdom of his people. He represents the ideal of a leader who rules through wit, justice, and bravery.",
      image: "https://picsum.photos/seed/garad-waal/800/500",
      tag: "16th Century",
      href: "/history-culture/garad-wiil-waal",
    },
  ];

  const governance = [
    {
      name: "The Xeer System",
      subtitle: "Customary Law",
      description:
        "Long before modern legal systems, the Somali people governed themselves through Xeer. This is a traditional constitution where elders gather under the shade of a tree to settle disputes and ensure peace through consensus and shared values.",
      image: "https://picsum.photos/seed/xeer-elders/600/400",
      icon: "⚖️",
      href: "/history-culture/xeer-system",
    },
    {
      name: "Traditional Leadership",
      subtitle: "The Ugaas & Garad",
      description:
        'The social fabric of Jigjiga is held together by traditional leaders. Through the sacred "Caleemo-Saar" ceremony, these leaders are appointed to protect the culture, manage resources, and serve as the ultimate guardians of the community.',
      image: "https://picsum.photos/seed/ugaas-leader/600/400",
      icon: "👑",
      href: null,
    },
  ];

  const arts = [
    {
      name: "Dhaanto",
      subtitle: "The Pulse of the People",
      description:
        "Dhaanto is the iconic folk dance of the Somali Region. With its rhythmic clapping and synchronized footwork, it tells the story of nomadic life and celebration. It is the heartbeat of every festival in Jigjiga.",
      image: "https://picsum.photos/seed/dhaanto-dance/600/400",
      icon: "🎶",
    },
    {
      name: "Nomadic Craftsmanship",
      subtitle: "The Somali Aqal",
      description:
        'The "Aqal" is a masterpiece of nomadic engineering — a portable, beautiful home designed for the Somali landscape. Alongside hand-woven mats and the "Haan" (milk vessels), these crafts showcase the artistic skill of our ancestors.',
      image: "https://picsum.photos/seed/somali-aqal/600/400",
      icon: "🏠",
    },
  ];

  const landmarks = [
    {
      name: "The Karamara Pass",
      description:
        "More than just a mountain range, Karamara is a natural fortress. It has stood witness to the city's most important historical battles and remains a breathtaking landmark that defines the horizon of Jigjiga.",
      image: "https://picsum.photos/seed/karamara-pass/900/500",
    },
    {
      name: "The Ancient Wells",
      description:
        "Jigjiga's growth started at its water sources. These historic wells made the city a vital stop for trade caravans traveling between the coast and the highlands, turning a desert outpost into a thriving capital.",
      image: "https://picsum.photos/seed/ancient-wells/900/500",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── HEADER ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm" : "bg-white/80 backdrop-blur-md py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-0 group outline-none shrink-0">
              <LogoImg />
              <span className="text-base sm:text-lg font-black tracking-tight text-foreground -ml-4">
                IGJIGA
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={item === "Culture" ? "/history-culture" : `/#${item.toLowerCase().replace(/ /g, "-")}`}
                  className={`text-sm font-semibold transition-colors ${
                    item === "Culture" ? "text-primary" : "text-gray-600 hover:text-foreground"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://business.jigjiga.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
              >
                Business Services
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 mt-3 flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={item === "Culture" ? "/history-culture" : `/#${item.toLowerCase().replace(/ /g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-1.5 transition-colors ${
                    item === "Culture" ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {item}
                </Link>
              ))}
              <a
                href="https://business.jigjiga.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-full text-center"
              >
                Business Services
              </a>
            </div>
          )}
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://picsum.photos/seed/jigjiga-hero-culture/1600/700')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-950/70 to-slate-900/80" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-script text-3xl sm:text-4xl text-[#f97316] mb-3"
          >
            Taariikhda iyo Dhaqanka
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            History &<br />
            <span className="text-[#f97316]">Culture</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the soul of the Somali Region. Jigjiga is a city built on stories of legendary leaders, ancient traditions, and a resilient spirit that connects the past to the future.
          </motion.p>
        </div>
      </section>

      {/* ── SECTION 1: LEGENDARY FIGURES ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">
              Halyeyyada Taariikhda
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-foreground">
              Legendary Figures
            </motion.h2>
          </motion.div>

          <div className="space-y-16">
            {legendaryFigures.map((figure, i) => (
              <motion.div
                key={figure.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <motion.div variants={fadeUp} className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <span className="inline-block px-3 py-1 bg-[#f97316]/10 text-[#f97316] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                    {figure.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-1">{figure.name}</h3>
                  <p className="text-primary font-semibold mb-4">{figure.title}</p>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6">{figure.description}</p>
                  {figure.href && (
                    <Link href={figure.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-white text-sm font-bold rounded-full hover:bg-primary transition-colors group">
                      Read Full Story <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                </motion.div>
                <motion.div variants={fadeUp} className={`overflow-hidden rounded-2xl shadow-lg ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  {figure.href ? (
                    <Link href={figure.href} className="block group relative">
                      <img src={figure.image} alt={figure.name}
                        className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-2xl flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                          Read Full Story →
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <img src={figure.image} alt={figure.name}
                      className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-500" />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: GOVERNANCE & HERITAGE ── */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">
              Hoggaanka iyo Hiddaha
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-foreground">
              Governance &amp; Heritage
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governance.map((item) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="overflow-hidden relative group">
                  {item.href ? (
                    <Link href={item.href} className="block">
                      <img src={item.image} alt={item.name}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                          Read More →
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <img src={item.image} alt={item.name}
                      className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
                <div className="p-6 sm:p-8">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-black text-foreground mb-1">{item.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-3">{item.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-5">{item.description}</p>
                  {item.href && (
                    <Link href={item.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-white text-sm font-bold rounded-full hover:bg-primary transition-colors group">
                      Read Full Story <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ARTS & LIFESTYLE ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">
              Farshaxanka iyo Hab-nololeedka
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-foreground">
              Arts &amp; Lifestyle
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {arts.map((item) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{item.name}</h3>
                  <p className="text-[#f97316] text-sm font-semibold mb-2">{item.subtitle}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HISTORICAL LANDMARKS ── */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="font-script text-2xl text-[#f97316] mb-2">
              Goobaha Taariikhiga ah
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white">
              Historical Landmarks
            </motion.h2>
          </motion.div>

          <div className="space-y-12">
            {landmarks.map((lm, i) => (
              <motion.div
                key={lm.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <motion.div variants={fadeUp} className={`lg:col-span-3 overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:col-start-3" : ""}`}>
                  <img
                    src={lm.image}
                    alt={lm.name}
                    className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div variants={fadeUp} className={`lg:col-span-2 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="w-12 h-1 bg-[#f97316] rounded-full mb-5" />
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">{lm.name}</h3>
                  <p className="text-white/70 leading-relaxed text-base sm:text-lg">{lm.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-16 sm:py-20 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-white mb-4"
          >
            Explore More of Jigjiga
          </motion.h2>
          <p className="text-white/80 mb-8 text-lg">
            Discover events, news, businesses, and everything this great city has to offer.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f97316] font-black rounded-full hover:bg-orange-50 transition-colors text-lg"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
