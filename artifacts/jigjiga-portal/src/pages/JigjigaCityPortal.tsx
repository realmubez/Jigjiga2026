import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ArrowUpRight,
  Menu,
  X,
  Code2,
  Rocket,
  MapPin,
  Calendar,
  ChevronRight,
  Coffee,
  Camera,
  Store
} from "lucide-react";

export default function JigjigaCityPortal() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "New Tech Center Opens in Jigjiga",
      excerpt: "State-of-the-art facility brings new opportunities for local developers and entrepreneurs in the Somali region.",
      date: "Oct 24, 2024",
      category: "Technology",
      image: "https://picsum.photos/seed/jig1/600/400"
    },
    {
      id: 2,
      title: "Somali Cultural Festival Next Week",
      excerpt: "Join us in celebrating the rich heritage, traditional arts, and vibrant history of our community.",
      date: "Oct 28, 2024",
      category: "Culture",
      image: "https://picsum.photos/seed/jig2/600/400"
    },
    {
      id: 3,
      title: "Infrastructure Upgrades Announced",
      excerpt: "City council approves major road expansions and modernization projects for the upcoming fiscal year.",
      date: "Nov 02, 2024",
      category: "City Planning",
      image: "https://picsum.photos/seed/jig3/600/400"
    },
    {
      id: 4,
      title: "Local Entrepreneurs Win Regional Award",
      excerpt: "A Jigjiga-based startup has claimed the top prize at the East African innovation summit.",
      date: "Nov 05, 2024",
      category: "Business",
      image: "https://picsum.photos/seed/jig4/600/400"
    }
  ];

  const guideItems = [
    {
      id: "history",
      title: "History & Culture",
      tagline: "Discover our roots",
      icon: <Globe className="w-5 h-5 text-white/80" />,
      image: "https://picsum.photos/seed/guide1/600/800"
    },
    {
      id: "food",
      title: "Eat & Drink",
      tagline: "Local Cuisine",
      icon: <Coffee className="w-5 h-5 text-white/80" />,
      image: "https://picsum.photos/seed/guide2/600/800"
    },
    {
      id: "landmarks",
      title: "Must-See Landmarks",
      tagline: "Iconic city spots",
      icon: <Camera className="w-5 h-5 text-white/80" />,
      image: "https://picsum.photos/seed/guide3/600/800"
    },
    {
      id: "directory",
      title: "Business Directory",
      tagline: "Free Listings",
      icon: <Store className="w-5 h-5 text-white/80" />,
      image: "https://picsum.photos/seed/guide4/600/800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. STICKY HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg border-b border-gray-200 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group outline-none">
              <div className={`p-2 rounded-xl transition-colors duration-300 ${isScrolled ? "bg-primary/10" : "bg-white/20 backdrop-blur-md"}`}>
                <Globe className={`w-6 h-6 ${isScrolled ? "text-primary" : "text-white"}`} />
              </div>
              <span className={`text-xl font-black tracking-tight ${isScrolled ? "text-gray-900" : "text-white"}`}>
                JIGJIGA<span className="text-primary opacity-90">.NET</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {["Explore City", "News", "Culture", "Tech Hub"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right Button */}
            <div className="hidden md:flex items-center">
              <a
                href="https://business.jigjiga.net"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-end hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center gap-2 bg-[#f97316] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all">
                  BUSINESS SERVICES <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <span className={`text-[10px] mt-1 pr-2 font-medium tracking-wide ${isScrolled ? "text-gray-400" : "text-white/70"}`}>
                  business.jigjiga.net
                </span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-gray-100 py-4 px-4 flex flex-col gap-4 md:hidden"
            >
              {["Explore City", "News", "Culture", "Tech Hub"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-800 font-medium text-lg px-4 py-2 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-gray-100">
                <a
                  href="https://business.jigjiga.net"
                  className="flex items-center justify-center gap-2 bg-[#f97316] text-white px-5 py-3 rounded-xl font-bold w-full"
                >
                  BUSINESS SERVICES <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      {/* landscape photo of a city */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/jigjiga-hero-2/1920/1080"
            alt="Jigjiga Cityscape"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-[#0f172a]/20"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col items-center md:items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-8"
          >
            <MapPin className="w-4 h-4 text-primary" />
            Welcome to the Capital of the Somali Region
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight md:leading-[1.1] max-w-5xl"
          >
            JIGJIGA: YOUR CITY, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#f97316]">
              YOUR COMMUNITY.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl font-medium leading-relaxed"
          >
            Explore local news, rich Somali culture, essential guides, and connect with the rising tech hub in the region.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <button className="px-8 py-4 rounded-xl font-bold bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 group">
              EXPLORE CITY GUIDE
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl font-bold bg-[#f97316] text-white hover:bg-[#ea580c] shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
              JOIN THE TECH HUB
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3. LATEST CITY NEWS */}
      <section id="news" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest City News</h2>
              <p className="mt-2 text-gray-600 font-medium">Stay updated with everything happening in Jigjiga.</p>
            </div>
            <button className="text-primary font-semibold hover:text-blue-700 flex items-center gap-1 group">
              View all stories <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-primary shadow-sm">
                    {news.category}
                  </div>
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOCAL GUIDES */}
      <section id="explore-city" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Explore Jigjiga</h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Your comprehensive guide to the city's rich culture, vibrant food scene, and local businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {guideItems.map((guide) => (
              <div
                key={guide.id}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 group-hover:to-black/80 transition-colors"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {guide.icon}
                  </div>
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-orange-400 font-bold text-sm tracking-wider uppercase mb-1 drop-shadow-md">
                      {guide.tagline}
                    </p>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {guide.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECH & INNOVATION HUB */}
      <section id="tech-hub" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Tech & Innovation Hub</h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl">
              Empowering the next generation of builders, thinkers, and founders in the Somali region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Developer Community Hub */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Developer Community Hub</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Connect with local Somali developers, access coding resources, share knowledge, and join our monthly tech meetups and hackathons.
              </p>
              <button className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Join the Discord <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Startup Incubator */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-8 border border-orange-500/30 text-orange-400 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Startup Incubator</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Turning ideas into reality. We provide mentorship, workspace, and funding support for local entrepreneurs launching new ventures in Jigjiga.
              </p>
              <button className="flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                Apply for Cohort 4 <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS CALLOUT */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            LOOKING FOR MANAGEMENT SYSTEMS?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-medium">
            Transform your business with our tailored Pharmacy, School, and Hotel software built specifically for local needs.
          </p>
          <a
            href="https://business.jigjiga.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-black/10 hover:bg-[#ea580c] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            GO TO JIGJIGA BUSINESS <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* 7. BILINGUAL FOOTER */}
      <footer className="bg-[#0f172a] text-gray-400 py-12 md:py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* Left */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <Link href="/" className="flex items-center gap-2 text-white outline-none">
                <Globe className="w-6 h-6 text-primary" />
                <span className="text-xl font-black tracking-tight">
                  JIGJIGA<span className="text-primary">.NET</span>
                </span>
              </Link>
              <p className="text-sm font-medium">
                © 2024 Jigjiga.net — Developed with pride in Jigjiga, Ethiopia.
              </p>
            </div>

            {/* Center Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <Link href="#explore-city" className="hover:text-white transition-colors">Explore City</Link>
              <Link href="#news" className="hover:text-white transition-colors">News</Link>
              <Link href="#culture" className="hover:text-white transition-colors">Culture</Link>
              <Link href="#tech-hub" className="hover:text-white transition-colors">Tech Hub</Link>
              <a href="https://business.jigjiga.net" className="hover:text-white transition-colors">Business</a>
            </div>

            {/* Right Language Toggle */}
            <div className="flex items-center gap-2 bg-gray-800 p-1.5 rounded-xl border border-gray-700">
              <button className="px-4 py-2 rounded-lg text-sm font-bold bg-white text-gray-900 shadow-sm transition-all">
                English
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-bold text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
                Soomaali
              </button>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
