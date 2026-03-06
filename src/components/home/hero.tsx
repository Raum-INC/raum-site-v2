import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import heroImage from "../../assets/home/hero.png";
import logo from "../../assets/Logo.svg";

function useCountUp(
  target: number,
  duration: number = 2000,
  start: boolean = false,
) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-white font-bold text-3xl sm:text-4xl tracking-tight">
        {count}
        <span className="text-white font-light ml-1">{suffix}</span>
      </div>
      <p className="text-[#aaaaaa] text-xs tracking-wide uppercase">{label}</p>
    </div>
  );
}

const navLinks = ["About us", "Contact", "Invest", "Blog"];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.4 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/90" />
      </div>

      {/* NAVBAR — fixed */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full px-6 sm:px-10 py-5 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-black/40 backdrop-blur-md border-b border-white/5" : "bg-transparent border-b border-transparent"}`}
      >
        <img src={logo} alt="raum logo" className="w-30 h-auto" />

        <div className="flex flex-row items-center gap-12">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-sm font-medium hover:text-[#aaaaaa] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden sm:inline-flex bg-[#0000FF] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
            >
              Check listings
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-18 left-0 right-0 z-40 bg-black/95 border-b border-[#2e2e2e] flex flex-col px-6 py-6 gap-5"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-base font-medium border-b border-[#1e1e1e] pb-4 last:border-none"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="bg-[#0000FF] text-white text-sm font-semibold px-5 py-3 rounded-full text-center"
            >
              Check listings
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO CONTENT — pt-24 offsets the fixed navbar */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center pb-10 pt-24 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full"
        >
          <MdVerified size={14} className="text-[#0000FF]" />
          <span className="text-white text-xs tracking-widest uppercase">
            Raum Certified Excellence
          </span>
        </motion.div>

        <div className="flex flex-col items-center gap-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="text-white font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl"
          >
            Redefining Urban Living
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-white font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight"
          >
            in Africa
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-[#cccccc] text-sm sm:text-base max-w-md leading-relaxed"
        >
          Experience short-lets without the uncertainty. Premium, eco-smart
          managed residences in Lagos and Nairobi designed for the modern
          executive.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-2 w-full max-w-2xl"
        >
          <div className="flex items-center gap-2 px-4 py-2 flex-1 border-b sm:border-b-0 sm:border-r border-white/20">
            <IoLocationOutline className="text-white/60 shrink-0" size={16} />
            <div className="flex flex-col">
              <span className="text-white/50 text-[10px] uppercase tracking-widest">
                Location
              </span>
              <div className="flex items-center gap-1">
                <span className="text-white text-sm font-medium">Lagos, N</span>
                <IoIosArrowDown className="text-white/60" size={12} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 flex-1 border-b sm:border-b-0 sm:border-r border-white/20">
            <IoCalendarOutline className="text-white/60 shrink-0" size={16} />
            <div className="flex flex-col">
              <span className="text-white/50 text-[10px] uppercase tracking-widest">
                Dates
              </span>
              <span className="text-white text-sm font-medium">Check in</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 flex-1">
            <IoCalendarOutline className="text-white/60 shrink-0" size={16} />
            <div className="flex flex-col">
              <span className="text-white/50 text-[10px] uppercase tracking-widest">
                Dates
              </span>
              <span className="text-white text-sm font-medium">Check out</span>
            </div>
          </div>

          <button className="bg-[#0000FF] text-white text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors flex-shrink-0">
            Search <IoIosArrowForward size={14} />
          </button>
        </motion.div>
      </div>

      {/* STATS */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="relative z-10 w-full justify-center items-center flex px-6 sm:px-16 pb-12 pt-4"
      >
        <div className="max-w-4xl mx-auto flex flex-row justify-center sm:justify-start items-center gap-10 sm:gap-20 border-t border-white/10 pt-8">
          <StatItem
            value={10}
            suffix="+"
            label="Listed Properties"
            start={statsVisible}
          />
          <StatItem
            value={4}
            suffix="+"
            label="Cities Covered"
            start={statsVisible}
          />
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="text-white font-bold text-3xl sm:text-4xl tracking-tight">
              4.1<span className="text-white font-light">/5</span>
            </div>
            <p className="text-[#aaaaaa] text-xs tracking-wide uppercase">
              Average Rating
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
