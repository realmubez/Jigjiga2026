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
  Store,
  Star,
  Search,
  Users,
  Building2,
  Music,
  Moon,
  ChevronDown,
  Quote
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

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const newsItems = [
    {
      id: 1,
      title: "New Tech Center Opens in Jigjiga",
      date: "Oct 24, 2024",
      category: "Technology",
      image: "https://picsum.photos/seed/techcenter/800/600",
      featured: true
    },
    {
      id: 2,
      title: "Somali Cultural Festival Next Week",
      date: "Oct 28, 2024",
      category: "Culture",
      image: "https://picsum.photos/seed/culturefest/400/300"
    },
    {
      id: 3,
      title: "Infrastructure Upgrades Announced",
      date: "Nov 02, 2024",
      category: "City",
      image: "https://picsum.photos/seed/infrastructure/400/300"
    },
    {
      id: 4,
      title: "Local Entrepreneurs Win Regional Award",
      date: "Nov 05, 2024",
      category: "Business",
      image: "https://picsum.photos/seed/awardwin/400/300"
    }
  ];

  const categories = [
    { name: "History & Culture", icon: <Globe className="w-5 h-5" />, image: "https://picsum.photos/seed/history/300/300" },
    { name: "Eat & Drink", icon: <Coffee className="w-5 h-5" />, image: "https://picsum.photos/seed/eatdrink/300/300" },
    { name: "Must-See Landmarks", icon: <Camera className="w-5 h-5" />, image: "https://picsum.photos/seed/landmarks/300/300" },
    { name: "Business Directory", icon: <Store className="w-5 h-5" />, image: "https://picsum.photos/seed/business/300/300" },
    { name: "Festivals", icon: <Music className="w-5 h-5" />, image: "https://picsum.photos/seed/festivals/300/300" },
    { name: "Nightlife", icon: <Moon className="w-5 h-5" />, image: "https://picsum.photos/seed/nightlife/300/300" }
  ];

  const popularDestinations = [
    { id: 1, title: "Karamara Monument", rating: 4.8, reviews: 124, image: "https://picsum.photos/seed/karamara/600/400" },
    { id: 2, title: "Central Market", rating: 4.5, reviews: 342, image: "https://picsum.photos/seed/centralmarket/600/400" },
    { id: 3, title: "Jigjiga University Campus", rating: 4.9, reviews: 89, image: "https://picsum.photos/seed/university/600/400" }
  ];

  const testimonials = [
    { id: 1, name: "Ahmed Ali", role: "Tourist", text: "The cultural depth of Jigjiga is simply unmatched. A beautiful city with incredibly welcoming people.", avatar: "https://picsum.photos/seed/user1/100/100", rating: 5 },
    { id: 2, name: "Sarah M.", role: "Business Traveler", text: "I was surprised by the fast-growing tech hub here. The infrastructure is developing rapidly.", avatar: "https://picsum.photos/seed/user2/100/100", rating: 4 },
    { id: 3, name: "Dr. Hassan", role: "Local Resident", text: "Jigjiga is the heart of the Somali region. It's safe, vibrant, and full of historical landmarks.", avatar: "https://picsum.photos/seed/user3/100/100", rating: 5 }
  ];

  const recentArticles = [
    { id: 1, title: "Top 10 Places to Eat in Jigjiga", date: "Nov 12", tag: "Food", image: "https://picsum.photos/seed/article1/400/300" },
    { id: 2, title: "A Guide to the Somali Regional Museum", date: "Nov 10", tag: "Culture", image: "https://picsum.photos/seed/article2/400/300" },
    { id: 3, title: "How the Tech Hub is Changing Lives", date: "Nov 08", tag: "Tech", image: "https://picsum.photos/seed/article3/400/300" },
    { id: 4, title: "Weekend Getaways Around Jigjiga", date: "Nov 05", tag: "Travel", image: "https://picsum.photos/seed/article4/400/300" }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* 1. HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg border-b border-gray-100 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group outline-none">
              <div className={`p-2 rounded-xl transition-colors duration-300 ${isScrolled ? "bg-primary/10 text-primary" : "bg-white/20 backdrop-blur-md text-white"}`}>
                <Globe className="w-6 h-6" />
              </div>
              <span className={`text-xl font-black tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
                JIGJIGA<span className="text-primary">.NET</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {["Destinations", "Activities", "Tech Hub", "News", "About"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`text-sm font-semibold transition-colors hover:text-primary ${
                    isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <button className={`text-sm font-semibold ${isScrolled ? "text-gray-900" : "text-white"}`}>Log In</button>
              <a
                href="https://business.jigjiga.net"
                className="bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                Business Services
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-gray-400 hover:text-gray-900"
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

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-gray-100 py-6 px-6 flex flex-col gap-4 lg:hidden"
            >
              {["Destinations", "Activities", "Tech Hub", "News", "About"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-800 font-semibold text-lg px-4 py-2 hover:bg-gray-50 rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="px-4 pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="https://business.jigjiga.net"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-bold w-full"
                >
                  Business Services
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 w-full z-10 text-center lg:text-left pt-10 lg:pt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
          >
            <span className="font-script text-primary text-2xl lg:text-3xl mb-4 block">Welcome to Jigjiga</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.1] mb-6">
              Discover Jigjiga, <br className="hidden lg:block"/> A City Of <span className="text-secondary-accent text-[#f97316]">Beauty</span> <br className="hidden lg:block"/> & Culture
            </h1>
            <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto lg:mx-0">
              Experience the vibrant heart of the Somali Region. From ancient traditions to modern tech hubs, explore the best of our growing city.
            </p>

            {/* Search Bar Widget */}
            <div className="bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col sm:flex-row items-center gap-3 w-full max-w-3xl mx-auto lg:mx-0">
              <div className="flex-1 flex items-center px-4 py-2 w-full border-b sm:border-b-0 sm:border-r border-gray-100">
                <MapPin className="text-primary w-5 h-5 mr-3" />
                <div className="flex flex-col text-left w-full">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Location</span>
                  <select className="bg-transparent text-sm font-bold text-gray-800 outline-none w-full appearance-none cursor-pointer">
                    <option>All Locations</option>
                    <option>City Center</option>
                    <option>University Area</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 flex items-center px-4 py-2 w-full border-b sm:border-b-0 sm:border-r border-gray-100">
                <Calendar className="text-primary w-5 h-5 mr-3" />
                <div className="flex flex-col text-left w-full">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Date</span>
                  <input type="date" className="bg-transparent text-sm font-bold text-gray-800 outline-none w-full" defaultValue="2024-11-20" />
                </div>
              </div>
              <div className="flex-1 flex items-center px-4 py-2 w-full">
                <Globe className="text-primary w-5 h-5 mr-3" />
                <div className="flex flex-col text-left w-full">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Category</span>
                  <select className="bg-transparent text-sm font-bold text-gray-800 outline-none w-full appearance-none cursor-pointer">
                    <option>All Types</option>
                    <option>Tour</option>
                    <option>Food</option>
                  </select>
                </div>
              </div>
              <button className="bg-primary hover:bg-blue-700 text-white p-4 rounded-xl shadow-lg shadow-primary/20 transition-colors w-full sm:w-auto flex justify-center items-center">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Photo */}
        <div className="flex-1 w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border-8 border-white">
              <img
                src="https://picsum.photos/seed/jigjigahero/800/1000"
                alt="Jigjiga City"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Stat Cards */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#f97316]">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Total Reviews</p>
                <p className="text-xl font-black text-gray-900">30k+</p>
              </div>
            </div>

            <div className="absolute top-10 -right-6 sm:top-20 sm:-right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Happy Visitors</p>
                <p className="text-xl font-black text-gray-900">540k+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. STATS ROW */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {[
              { num: "30k+", label: "Happy Visitors" },
              { num: "540k+", label: "Total Reviews" },
              { num: "6,562+", label: "Listed Businesses" },
              { num: "25+", label: "Years of Heritage" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <h3 className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.num}</h3>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOCAL GUIDES / CATEGORIES */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-script text-primary text-2xl lg:text-3xl mb-2 block">Explore Around</span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">City Categories</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col items-center gap-4"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-[2rem] overflow-hidden relative shadow-lg shadow-indigo-900/5 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40">
                      {cat.icon}
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 text-center text-sm sm:text-base group-hover:text-primary transition-colors">{cat.name}</h4>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <div className="flex justify-between items-end mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Popular Destinations</h3>
              <button className="text-primary font-semibold hover:text-blue-700 flex items-center gap-1">
                See All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularDestinations.map((dest) => (
                <div key={dest.id} className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="rounded-2xl overflow-hidden mb-4 relative aspect-[4/3]">
                    <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 text-[#f97316] fill-current" /> {dest.rating}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{dest.title}</h4>
                  <div className="flex items-center text-sm text-gray-500 gap-4">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Jigjiga</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {dest.reviews} Reviews</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWS / ARTICLES (BENTO GRID) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-script text-[#f97316] text-2xl lg:text-3xl mb-2 block">What's Happening</span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">Latest City News</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Left */}
            <div className="relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg">
              <img src={newsItems[0].image} alt={newsItems[0].title} className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-4 shadow-sm">{newsItems[0].category}</span>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{newsItems[0].title}</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <Calendar className="w-4 h-4" /> {newsItems[0].date}
                </div>
              </div>
            </div>

            {/* Stacked Right */}
            <div className="flex flex-col gap-6">
              {newsItems.slice(1).map((news) => (
                <div key={news.id} className="bg-white rounded-[2rem] p-4 flex gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-all group cursor-pointer items-center">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-[#f97316] text-xs font-bold mb-2 block">{news.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">{news.title}</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                      <Calendar className="w-4 h-4" /> {news.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECH HUB SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1e1b4b] to-[#2563eb] rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl text-white">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f97316]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Rocket className="w-4 h-4 text-[#f97316]" /> Innovation Center
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6">Empowering the <br className="hidden lg:block"/> Next Generation</h2>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                  Join the fastest-growing tech community in the Somali region. We provide resources, mentorship, and workspace for developers and entrepreneurs.
                </p>
                <button className="bg-white text-[#1e1b4b] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl">
                  Join the Tech Hub
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex items-start gap-4 hover:bg-white/15 transition-colors">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Code2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Developer Hub</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Access to high-speed internet, coding bootcamps, and monthly hackathons.</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex items-start gap-4 hover:bg-white/15 transition-colors">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Startup Incubator</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Workspace, funding opportunities, and expert mentorship for local founders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-script text-[#f97316] text-2xl lg:text-3xl mb-2 block">What People Say</span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">Community Reviews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review) => (
              <div key={review.id} className="bg-background rounded-[2rem] p-8 relative shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f97316] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                  <div>
                    <h5 className="font-bold text-gray-900">{review.name}</h5>
                    <p className="text-sm text-gray-500 font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RECENT ARTICLES (2x2 Grid) */}
      <section className="py-24 bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-script text-primary text-2xl lg:text-3xl mb-2 block">Our Best Offer</span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">Recent Articles & Posts</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-[2rem] p-3 shadow-md border border-gray-50 group cursor-pointer hover:shadow-xl transition-all">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                    {article.tag}
                  </div>
                </div>
                <div className="px-3 pb-3">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">{article.title}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">{article.date}</span>
                    <span className="text-primary font-bold">Read More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BUSINESS CALLOUT (SPLIT LAYOUT) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1e1b4b] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center shadow-2xl relative">
            <div className="p-12 lg:p-20 flex-1 relative z-10 text-center lg:text-left">
              <div className="inline-block bg-[#f97316] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Jigjiga Business
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Looking for <span className="text-[#f97316]">Management</span> Systems?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-md mx-auto lg:mx-0">
                Transform your business with our tailored Pharmacy, School, and Hotel software built specifically for local needs.
              </p>
              <a
                href="https://business.jigjiga.net"
                className="inline-flex items-center gap-2 bg-white text-[#1e1b4b] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
              >
                Go to Business Portal <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
            <div className="flex-1 w-full bg-primary/20 relative min-h-[300px] lg:min-h-[500px]">
              {/* Decorative phone/app mockup placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-sm aspect-[9/16] bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-800 relative overflow-hidden transform rotate-6 lg:translate-x-12 translate-y-12">
                  <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-2xl w-1/3 mx-auto"></div>
                  <img src="https://picsum.photos/seed/appmockup/400/800" className="w-full h-full object-cover" alt="App Preview" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PREMIUM FOOTER */}
      <footer className="bg-background pt-20 pb-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Globe className="w-8 h-8 text-primary" />
                <span className="text-2xl font-black tracking-tight text-foreground">
                  JIGJIGA<span className="text-primary">.NET</span>
                </span>
              </Link>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-sm">
                Your premier destination for everything Jigjiga. Discover the culture, stay updated with news, and connect with local businesses.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors cursor-pointer"><Globe className="w-5 h-5" /></div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors cursor-pointer"><Users className="w-5 h-5" /></div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors cursor-pointer"><Camera className="w-5 h-5" /></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg">Discover</h4>
              <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                <li><Link href="#" className="hover:text-primary transition-colors">City Guide</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Popular Destinations</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Local Events</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Food & Drink</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg">Services</h4>
              <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                <li><a href="https://business.jigjiga.net" className="hover:text-primary transition-colors">Business Portal</a></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Tech Hub</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Submit a Listing</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Advertising</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg">Contact Us</h4>
              <ul className="flex flex-col gap-4 text-gray-500 font-medium">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Jigjiga, Somali Region</li>
                <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> info@jigjiga.net</li>
              </ul>
              <div className="mt-6 flex bg-gray-100 p-1 rounded-xl w-max border border-gray-200">
                <button className="px-4 py-2 rounded-lg text-sm font-bold bg-white text-gray-900 shadow-sm">English</button>
                <button className="px-4 py-2 rounded-lg text-sm font-bold text-gray-500 hover:text-gray-900">Soomaali</button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm font-medium">
            <p>© 2024 Jigjiga.net. Developed with pride in Jigjiga, Ethiopia.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
