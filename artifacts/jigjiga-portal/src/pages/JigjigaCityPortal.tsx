import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
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
  Store,
  Star,
  Search,
  Users,
  Building2,
  Music,
  Moon,
  Quote,
  Globe
} from "lucide-react";

const LogoImg = () => (
  <img
    src="/logo.png"
    alt="Jigjiga.net logo"
    className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
  />
);

export default function JigjigaCityPortal() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Explore City", href: "#explore-city" },
    { label: "News", href: "#news" },
    { label: "Culture", href: "/history-culture" },
    { label: "Tech Hub", href: "#tech-hub" },
  ];

  const newsItems = [
    { id: 1, title: "New Tech Center Opens in Jigjiga", date: "Oct 24, 2024", category: "Technology", image: "https://picsum.photos/seed/techcenter/800/600", featured: true },
    { id: 2, title: "Somali Cultural Festival Next Week", date: "Oct 28, 2024", category: "Culture", image: "https://picsum.photos/seed/culturefest/400/300" },
    { id: 3, title: "Infrastructure Upgrades Announced", date: "Nov 02, 2024", category: "City", image: "https://picsum.photos/seed/infrastructure/400/300" },
    { id: 4, title: "Local Entrepreneurs Win Regional Award", date: "Nov 05, 2024", category: "Business", image: "https://picsum.photos/seed/awardwin/400/300" }
  ];

  const categories = [
    { name: "History & Culture", icon: <Globe className="w-5 h-5" />, image: "https://picsum.photos/seed/history/300/300", href: "/history-culture" },
    { name: "Eat & Drink", icon: <Coffee className="w-5 h-5" />, image: "https://picsum.photos/seed/eatdrink/300/300", href: "/eat-drink" },
    { name: "Must-See Landmarks", icon: <Camera className="w-5 h-5" />, image: "https://picsum.photos/seed/landmarks/300/300", href: "/landmarks" },
    { name: "Business Directory", icon: <Store className="w-5 h-5" />, image: "https://picsum.photos/seed/business/300/300", href: "#" },
    { name: "Festivals", icon: <Music className="w-5 h-5" />, image: "https://picsum.photos/seed/festivals/300/300", href: "#" },
    { name: "Nightlife", icon: <Moon className="w-5 h-5" />, image: "https://picsum.photos/seed/nightlife/300/300", href: "#" }
  ];

  const popularDestinations = [
    { id: 1, title: "Karamara Monument", rating: 4.8, reviews: 124, image: "https://picsum.photos/seed/karamara/600/400", href: "/landmarks/karamara-mountains" },
    { id: 2, title: "Central Market", rating: 4.5, reviews: 342, image: "https://picsum.photos/seed/centralmarket/600/400", href: "/eat-drink/street-food" },
    { id: 3, title: "Jigjiga University", rating: 4.9, reviews: 89, image: "https://picsum.photos/seed/university/600/400", href: "/landmarks/jigjiga-university" }
  ];

  const testimonials = [
    { id: 1, name: "Ahmed Ali", role: "Tourist", text: "The cultural depth of Jigjiga is simply unmatched. A beautiful city with incredibly welcoming people.", avatar: "https://picsum.photos/seed/user1/100/100", rating: 5 },
    { id: 2, name: "Sarah M.", role: "Business Traveler", text: "I was surprised by the fast-growing tech hub here. The infrastructure is developing rapidly.", avatar: "https://picsum.photos/seed/user2/100/100", rating: 4 },
    { id: 3, name: "Dr. Hassan", role: "Local Resident", text: "Jigjiga is the heart of the Somali region. Safe, vibrant, and full of historical landmarks.", avatar: "https://picsum.photos/seed/user3/100/100", rating: 5 }
  ];

  const recentArticles = [
    { id: 1, title: "Top 10 Places to Eat in Jigjiga", date: "Nov 12", tag: "Food", image: "https://picsum.photos/seed/article1/400/300" },
    { id: 2, title: "A Guide to the Somali Regional Museum", date: "Nov 10", tag: "Culture", image: "https://picsum.photos/seed/article2/400/300" },
    { id: 3, title: "How the Tech Hub is Changing Lives", date: "Nov 08", tag: "Tech", image: "https://picsum.photos/seed/article3/400/300" },
    { id: 4, title: "Weekend Getaways Around Jigjiga", date: "Nov 05", tag: "Travel", image: "https://picsum.photos/seed/article4/400/300" }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">

      {/* ── HEADER ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm" : "bg-white/80 backdrop-blur-md py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0 group outline-none shrink-0">
              <LogoImg />
              <span className="text-base sm:text-lg font-black tracking-tight text-foreground -ml-4">
                IGJIGA
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href}
                  className={`text-sm font-semibold transition-colors whitespace-nowrap ${item.label === "Culture" ? "text-primary" : "text-gray-600 hover:text-primary"}`}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Business Services Button */}
            <div className="hidden lg:flex shrink-0">
              <a href="https://business.jigjiga.net" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200">
                Business Services <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-gray-100 py-4 px-4 flex flex-col gap-1 lg:hidden">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href}
                  className={`font-semibold text-base px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors ${item.label === "Culture" ? "text-primary" : "text-gray-800"}`}
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 mt-1 border-t border-gray-100">
                <a href="https://business.jigjiga.net" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-bold w-full">
                  Business Services <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: Text + Search */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="font-script text-primary text-xl sm:text-2xl lg:text-3xl mb-3 block">Welcome to Jigjiga</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.1] mb-5">
                Discover Jigjiga,<br className="hidden sm:block" /> A City Of{" "}
                <span className="text-[#f97316]">Beauty</span>
                <br className="hidden lg:block" /> &amp; Culture
              </h1>
              <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                The official city portal of Jigjiga — your guide to culture, landmarks, food, businesses, and everything our city has to offer.
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-3 w-full max-w-2xl mx-auto lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex items-center px-3 py-2 gap-2 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100">
                    <MapPin className="text-primary w-4 h-4 shrink-0" />
                    <div className="text-left min-w-0">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide block">Location</span>
                      <select className="bg-transparent text-sm font-bold text-gray-800 outline-none w-full appearance-none cursor-pointer">
                        <option>All Locations</option>
                        <option>City Center</option>
                        <option>University Area</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center px-3 py-2 gap-2 flex-1 border-b sm:border-b-0 sm:border-r border-gray-100">
                    <Globe className="text-primary w-4 h-4 shrink-0" />
                    <div className="text-left min-w-0">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide block">Category</span>
                      <select className="bg-transparent text-sm font-bold text-gray-800 outline-none w-full appearance-none cursor-pointer">
                        <option>All Types</option>
                        <option>Culture</option>
                        <option>Food</option>
                        <option>Tech</option>
                      </select>
                    </div>
                  </div>
                  <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md shadow-primary/20 transition-colors flex items-center justify-center gap-2 sm:w-auto w-full">
                    <Search className="w-4 h-4" /> Search
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Photo Card */}
          <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto relative">
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              {/* Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/10 rounded-full blur-3xl -z-10" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border-4 sm:border-8 border-white">
                <img src="https://picsum.photos/seed/jigjigahero/800/1000" alt="Jigjiga City"
                  className="w-full object-cover aspect-[4/5]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Stat: Reviews — bottom left, always inside bounds */}
              <div className="absolute bottom-4 left-4 sm:-bottom-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3"
                style={{ animation: "bounce 4s infinite" }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#f97316] shrink-0">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-semibold">Total Reviews</p>
                  <p className="text-lg sm:text-xl font-black text-gray-900">30k+</p>
                </div>
              </div>

              {/* Stat: Visitors — top right, always inside bounds */}
              <div className="absolute top-4 right-4 sm:-top-2 sm:-right-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3"
                style={{ animation: "bounce 5s infinite", animationDelay: "1s" }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-semibold">Happy Visitors</p>
                  <p className="text-lg sm:text-xl font-black text-gray-900">540k+</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-10 sm:py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { num: "30k+", label: "Happy Visitors" },
              { num: "540k+", label: "Total Reviews" },
              { num: "6,562+", label: "Listed Businesses" },
              { num: "25+", label: "Years of Heritage" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-2 py-4 rounded-2xl hover:bg-gray-50 transition-colors">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-1">{stat.num}</h3>
                <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITY CATEGORIES ── */}
      <section id="explore-city" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="font-script text-primary text-xl sm:text-2xl lg:text-3xl mb-2 block">Explore Around</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">City Categories</h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((cat, i) => (
              <Link key={i} href={cat.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="group cursor-pointer flex flex-col items-center gap-2 sm:gap-3">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl sm:rounded-[2rem] overflow-hidden relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2 transition-all duration-300">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40">
                        {cat.icon}
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800 text-center text-xs sm:text-sm group-hover:text-primary transition-colors leading-tight">{cat.name}</h4>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Popular Destinations */}
          <div className="mt-14 sm:mt-20">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Popular Destinations</h3>
              <Link href="/landmarks" className="text-primary font-semibold hover:text-blue-700 flex items-center gap-1 text-sm">
                See All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
              {popularDestinations.map((dest) => (
                <Link key={dest.id} href={dest.href} className="block bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 relative aspect-[4/3]">
                    <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 text-[#f97316] fill-current" /> {dest.rating}
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{dest.title}</h4>
                  <div className="flex items-center flex-wrap text-xs sm:text-sm text-gray-500 gap-3 mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Jigjiga</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {dest.reviews} Reviews</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/8 text-primary text-xs font-black rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Full Story <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS (BENTO) ── */}
      <section id="news" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="font-script text-[#f97316] text-xl sm:text-2xl lg:text-3xl mb-2 block">What's Happening</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Latest City News</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Featured */}
            <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg">
              <img src={newsItems[0].image} alt={newsItems[0].title}
                className="w-full object-cover min-h-[280px] sm:min-h-[380px] lg:min-h-[480px] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-3">{newsItems[0].category}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">{newsItems[0].title}</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <Calendar className="w-4 h-4" /> {newsItems[0].date}
                </div>
              </div>
            </div>

            {/* Stacked small cards */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {newsItems.slice(1).map((news) => (
                <div key={news.id}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 flex gap-3 sm:gap-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all group cursor-pointer items-center">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden shrink-0">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[#f97316] text-xs font-bold mb-1 block">{news.category}</span>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 leading-snug group-hover:text-primary transition-colors line-clamp-2">{news.title}</h3>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5" /> {news.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH HUB ── */}
      <section id="tech-hub" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1e1b4b] to-[#2563eb] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 relative overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#f97316]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <Rocket className="w-3.5 h-3.5 text-[#f97316]" /> Innovation Center
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight">
                  Empowering the<br className="hidden sm:block" /> Next Generation
                </h2>
                <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                  Join the fastest-growing tech community in the Somali region. Resources, mentorship, and workspace for developers and entrepreneurs.
                </p>
                <button className="bg-white text-[#1e1b4b] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl text-sm sm:text-base">
                  Join the Tech Hub
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-3 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex items-start gap-4 hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Developer Hub</h4>
                    <p className="text-white/70 text-sm leading-relaxed">High-speed internet, coding bootcamps, and monthly hackathons.</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex items-start gap-4 hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Startup Incubator</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Workspace, funding opportunities, and expert mentorship for local founders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="font-script text-[#f97316] text-xl sm:text-2xl lg:text-3xl mb-2 block">What People Say</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Community Reviews</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {testimonials.map((review) => (
              <div key={review.id} className="bg-background rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 relative shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                <Quote className="absolute top-5 right-6 w-10 h-10 text-primary/10" />
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 sm:mb-8 relative z-10 text-base sm:text-lg leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={review.avatar} alt={review.name} className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-md" />
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm sm:text-base">{review.name}</h5>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section id="culture" className="py-16 sm:py-24 bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="font-script text-primary text-xl sm:text-2xl lg:text-3xl mb-2 block">Our Best Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Recent Articles &amp; Posts</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {recentArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl sm:rounded-[2rem] p-2.5 sm:p-3 shadow-md border border-gray-50 group cursor-pointer hover:shadow-xl transition-all">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] mb-3 relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                    {article.tag}
                  </div>
                </div>
                <div className="px-2 pb-2 sm:px-3 sm:pb-3">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">{article.title}</h4>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-500 font-medium">{article.date}</span>
                    <span className="text-primary font-bold">Read →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS CALLOUT ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1e1b4b] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              {/* Text side */}
              <div className="flex-1 p-8 sm:p-12 lg:p-16 text-center lg:text-left">
                <div className="inline-block bg-[#f97316] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                  Jigjiga Business
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                  Looking for <span className="text-[#f97316]">Management</span> Systems?
                </h2>
                <p className="text-white/80 text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
                  Transform your business with our tailored Pharmacy, School, and Hotel software built specifically for local needs.
                </p>
                <a href="https://business.jigjiga.net" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#1e1b4b] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors shadow-xl">
                  Go to Business Portal <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              {/* Visual side */}
              <div className="flex-1 relative min-h-[220px] sm:min-h-[280px] lg:min-h-[420px] bg-primary/20 flex items-center justify-center p-6">
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs sm:max-w-sm">
                  {[
                    { icon: "💊", label: "Pharmacy System" },
                    { icon: "🏫", label: "School System" },
                    { icon: "🏨", label: "Hotel System" },
                    { icon: "📊", label: "Analytics" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 text-center text-white hover:bg-white/20 transition-colors">
                      <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                      <p className="text-xs sm:text-sm font-semibold">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-background pt-12 sm:pt-20 pb-8 sm:pb-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-10 sm:mb-16">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-0 mb-5 outline-none">
                <img src="/logo.png" alt="Jigjiga.net logo" className="w-14 h-14 object-contain" />
                <span className="text-xl font-black tracking-tight text-foreground -ml-4">
                  IGJIGA
                </span>
              </Link>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 max-w-xs">
                The official digital gateway for Jigjiga city — serving visitors, residents, small businesses, and developers across the Somali Region.
              </p>
              <div className="flex gap-3">
                {[Globe, Users, Camera].map((Icon, i) => (
                  <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                ))}
              </div>
            </div>

            {/* Links: Discover */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">Discover</h4>
              <ul className="flex flex-col gap-3 text-gray-500 font-medium text-sm">
                <li><Link href="/history-culture" className="hover:text-primary transition-colors">History & Culture</Link></li>
                <li><Link href="/eat-drink" className="hover:text-primary transition-colors">Eat & Drink</Link></li>
                <li><Link href="/landmarks" className="hover:text-primary transition-colors">Must-See Landmarks</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About Jigjiga.net</Link></li>
              </ul>
            </div>

            {/* Links: Services */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">Services</h4>
              <ul className="flex flex-col gap-3 text-gray-500 font-medium text-sm">
                {[["Business Portal", "https://business.jigjiga.net"], ["Tech Hub", "#tech-hub"], ["Add Listing", "#"], ["Advertise", "#"]].map(([l, h]) => (
                  <li key={l}><a href={h} className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact + Language */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">Contact</h4>
              <ul className="flex flex-col gap-3 text-gray-500 font-medium text-sm mb-6">
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Jigjiga, Somali Region, Ethiopia</li>
                <li className="flex items-center gap-2"><Globe className="w-4 h-4 shrink-0" /> info@jigjiga.net</li>
              </ul>
              <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200 w-max">
                <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-gray-900 shadow-sm">English</button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Soomaali</button>
              </div>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs sm:text-sm font-medium">
            <p>© 2024 Jigjiga.net — The Official City Portal of Jigjiga, Ethiopia.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact Us</Link>
              <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
