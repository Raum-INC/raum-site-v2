import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import logoBlack from "../assets/LogoBlack.png";

const navLinks = [
  { label: "Our Listings", to: "/listings" },
  { label: "Guest", to: "/guest" },
  { label: "Host", to: "/host" },
  { label: "Invest", to: "/invest" },
  { label: "About us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "#" },
];

type NavTheme = "dark" | "light";

interface NavbarProps {
  theme?: NavTheme;
}

export const Navbar = ({ theme = "dark" }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isLight = theme === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase = isLight
    ? "text-black text-sm font-medium hover:text-[#0000FF] transition-colors"
    : "text-white text-sm font-medium hover:text-[#aaaaaa] transition-colors";

  const disabledLink = isLight
    ? "text-black/30 text-sm font-medium cursor-not-allowed"
    : "text-white/40 text-sm font-medium cursor-not-allowed";

  const scrolledBg = isLight
    ? "bg-white/80 backdrop-blur-md border-b border-black/5"
    : "bg-black/40 backdrop-blur-md border-b border-white/5";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full px-6 sm:px-10 py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? scrolledBg : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo — swap based on theme */}
        <Link to="/">
          <img
            src={isLight ? logoBlack : logo}
            alt="raum logo"
            className="w-25 lg:w-30 h-auto"
          />
        </Link>

        <div className="flex flex-row items-center gap-12">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) =>
              to === "#" ? (
                <span key={label} className={disabledLink}>
                  {label}
                </span>
              ) : (
                <Link key={label} to={to} className={linkBase}>
                  {label}
                </Link>
              ),
            )}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/listings"
              className="hidden sm:inline-flex bg-[#0000FF] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
            >
              Earn More
            </Link>
            <button
              className={`md:hidden ${isLight ? "text-black" : "text-white"}`}
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
            className={`fixed top-18 left-0 right-0 z-40 border-b flex flex-col px-6 py-6 gap-5 ${
              isLight
                ? "bg-white/95 border-[#e5e5e5]"
                : "bg-black/95 border-[#2e2e2e]"
            }`}
          >
            {navLinks.map(({ label, to }) =>
              to === "#" ? (
                <span
                  key={label}
                  className={`text-base font-medium border-b pb-4 last:border-none ${
                    isLight
                      ? "text-black/30 border-[#f0f0f0]"
                      : "text-white/40 border-[#1e1e1e]"
                  }`}
                >
                  {label}
                </span>
              ) : (
                <Link
                  key={label}
                  to={to}
                  className={`text-base font-medium border-b pb-4 last:border-none ${
                    isLight
                      ? "text-black border-[#f0f0f0] hover:text-[#0000FF]"
                      : "text-white border-[#1e1e1e]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ),
            )}
            <Link
              to="/listings"
              className="bg-[#0000FF] text-white text-sm font-semibold px-5 py-3 rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Earn More
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
