import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LogoImg = () => (
  <img src="/logo.png" alt="Jigjiga.net logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
);

const desktopLinks = [
  { label: "History & Culture", href: "/history-culture" },
  { label: "Eat & Drink", href: "/eat-drink" },
  { label: "Landmarks", href: "/landmarks" },
  { label: "Tech Hub", href: "/tech-hub" },
];

const mobileNavSections = [
  {
    heading: "Explore",
    links: [
      { label: "History & Culture", href: "/history-culture", emoji: "🏛️" },
      { label: "Eat & Drink", href: "/eat-drink", emoji: "🍖" },
      { label: "Must-See Landmarks", href: "/landmarks", emoji: "📍" },
      { label: "Tech Hub & Business", href: "/tech-hub", emoji: "🚀" },
    ],
  },
  {
    heading: "Arts & Events",
    links: [
      { label: "Festivals", href: "/history-culture/festivals", emoji: "🎉" },
      { label: "Nightlife & Qaaci", href: "/history-culture/qaaci-nightlife", emoji: "🎵" },
    ],
  },
  {
    heading: "Deep Dives",
    links: [
      { label: "Sayid Mohamed Hassan", href: "/history-culture/sayid-hassan", emoji: "⚔️" },
      { label: "Dhaanto Music", href: "/history-culture/dhaanto", emoji: "🥁" },
      { label: "Somali Poetry", href: "/history-culture/somali-poetry", emoji: "📜" },
      { label: "Karamara Mountains", href: "/landmarks/karamara-mountains", emoji: "⛰️" },
      { label: "Shabeeley Resort", href: "/landmarks/shabeeley-resort", emoji: "🏕️" },
      { label: "Jigjiga University", href: "/landmarks/jigjiga-university", emoji: "🎓" },
      { label: "Sheikh Hassan Hospital", href: "/landmarks/sheikh-hassan-hospital", emoji: "🏥" },
    ],
  },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm" : "bg-white/80 backdrop-blur-md py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group outline-none shrink-0">
            <LogoImg />
            <span className="text-base sm:text-lg font-black tracking-tight text-foreground -ml-4">IGJIGA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {desktopLinks.map(item => (
              <Link key={item.label} href={item.href}
                className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors whitespace-nowrap">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a href="https://business.jigjiga.net" target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors">
              Business Services <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-b border-gray-100 lg:hidden overflow-y-auto max-h-[80vh]">
            <div className="px-4 py-4 space-y-4">
              {mobileNavSections.map((section) => (
                <div key={section.heading}>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 px-2 mb-1">
                    {section.heading}
                  </p>
                  <div className="space-y-0.5">
                    {section.links.map((item) => (
                      <Link key={item.label} href={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-lg leading-none">{item.emoji}</span>
                        <span className="font-semibold text-sm text-gray-800 group-hover:text-primary">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-gray-100">
                <a href="https://business.jigjiga.net" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-bold w-full text-sm"
                  onClick={() => setMobileMenuOpen(false)}>
                  Business Services <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
