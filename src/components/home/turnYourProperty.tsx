import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import buildingBg from "../../assets/home/turnProperty.jpg";
import { FaArrowTrendUp } from "react-icons/fa6";

// — Variants —
const tagVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay: 0.1 },
  },
};

const bodyVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const buttonsVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.32 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

// — Revenue card sub-data —
const stats = [
  { label: "89% Occ.", width: "89%" },
  { label: "92% Rating", width: "92%" },
];

export const TurnPropertyCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "560px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${buildingBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Dark overlay for legibility */}

      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-black/20 "></div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10, 10, 14, 0.62)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-28">
        {/* Left — copy */}
        <div className="flex max-w-xl flex-col gap-5">
          {/* Tag */}
          <motion.div
            variants={tagVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(0, 51, 255, 0.18)",
                color: "#4d7cff",
                border: "1px solid rgba(0,51,255,0.3)",
              }}
            >
              For Property Owners
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Turn Your Property into a{" "}
            <span style={{ color: "#0033FF" }}>Raum Residence</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={bodyVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-lg w-[70%] leading-relaxed text-white/60 sm:text-base"
          >
            Join our network of premium properties. We handle everything from
            guest management to maintenance, ensuring your investment yields
            maximum returns effortlessly.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={buttonsVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-2 flex flex-wrap gap-3"
          >
            <button
              className="rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ background: "#0033FF" }}
            >
              Partner With Us
            </button>
            <button
              className="rounded-full border px-6 py-3 text-sm font-semibold text-white"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
            >
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Right — Revenue card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full max-w-xs rounded-2xl p-5 sm:p-6 backdrop-blur-lg lg:min-w-[360px] rotate-3 bg-white/5 shadow-xl"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Card header */}
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs text-white/50">Monthly Revenue</p>
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-xs"
              style={{ background: "rgba(0,200,100,0.15)", color: "#00c864" }}
            >
              <FaArrowTrendUp />
            </span>
          </div>

          <p className="mb-5 text-2xl font-bold text-white sm:text-3xl">
            ₦2,450,000
          </p>

          {/* Progress bars */}
          <div className="flex flex-col gap-3">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-row gap-3 items-center">
                <p className="bg-[#0033ff] h-1.5 w-1.5 rounded-full"></p>
                <div
                  className="h-1.5 w-[200px] items-center overflow-hidden rounded-full"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <motion.div
                    className="h-full rounded-full bg-[#0033FF]"
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: s.width } : { width: "0%" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  />
                </div>
                <p className="text-right text-[10px] text-white/40">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Avatars + caption */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#3b5bdb", "#1c7ed6", "#0ca678"].map((c, i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full border-2"
                  style={{
                    background: c,
                    borderColor: "rgba(22,22,30,0.9)",
                  }}
                />
              ))}
            </div>
            <p className="text-xs text-white/40">Trusted by 500+ investors</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
