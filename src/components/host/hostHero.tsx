import { motion } from "framer-motion";

export default function HostHero() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-36 pb-20 min-h-[80vh]">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="text-black font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight max-w-5xl"
      >
        Make money hosting with Raum Africa in Nigeria
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
        className="mt-8 text-[#444444] text-base sm:text-lg leading-relaxed max-w-xl"
      >
        Whether you're searching for your next vacation home or looking to list
        your short-term rental apartment for business purposes, we're here to
        make your journey seamless and stress-free.
      </motion.p>
    </section>
  );
}
