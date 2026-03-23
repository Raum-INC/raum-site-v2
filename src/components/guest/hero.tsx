import { motion } from "framer-motion";
import desktopHero from "../../assets/guest/hero.png";
// import mobileImage from "../../assets/mobileHero.png";

export default function HeroSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center pt-28 pb-0 px-4 overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-black font-extrabold text-4xl sm:text-6xl lg:text-7xl text-center leading-tight tracking-tight max-w-4xl"
      >
        Book an apartment as seamless as possible
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-[#555555] text-base sm:text-lg text-center mt-6 max-w-xl"
      >
        Explore our exquisite apartments all across Africa
      </motion.p>

      {/* Phone mockups */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        className="mt-16 flex items-end justify-center w-full max-w-4xl"
      >
        <div className="w-full z-0">
          <img
            src={desktopHero}
            alt="Raum app listing view"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
