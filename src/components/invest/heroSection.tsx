import { motion } from "framer-motion";

export function InvestHero() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-32 pb-20 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-black font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl"
      >
        Invest in High-Yield Short-Term Rentals with Just $500!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-8 text-[#444444] text-base sm:text-lg leading-relaxed max-w-xl"
      >
        Earn up to 30% returns in 12 months with Africa's fastest-growing Airbnb
        investment model. We handle everything—you earn passive income
        hassle-free.
      </motion.p>

      <motion.a
        href="#"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        className="mt-10 inline-flex items-center justify-center bg-black text-white text-sm sm:text-base font-bold px-10 py-4 rounded-full hover:bg-neutral-800 transition-colors"
      >
        Start Investing Today
      </motion.a>
    </section>
  );
}
