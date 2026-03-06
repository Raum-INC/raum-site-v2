import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoShieldCheck } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { TbCash } from "react-icons/tb";

const standards = [
  {
    title: "Eco-Smart Living",
    description:
      "IoT-enabled climate control, sustainable energy systems, and smart home automation in every unit.",
    icon: <AiOutlineThunderbolt />,
  },
  {
    title: "Verified Quality",
    description:
      "Every property undergoes a rigorous inspection before listing. What you see is exactly what you get.",
    icon: <GoShieldCheck />,
  },
  {
    title: "Prime Locations",
    description:
      "Strategically located properties in the most secure and accessible districts of Lagos and Nairobi.",
    icon: <GrLocation />,
  },
  {
    title: "Seamless Payments",
    description:
      "Secure, instant booking with multiple currency support and transparent pricing with no hidden fees.",
    icon: <TbCash />,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const subTextVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.25,
    rotate: [0, -12, 12, -6, 0],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const cardOverlayVariants: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
};

export const RaumStandard = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <main className="relative flex lg:min-h-screen 2xl:min-h-fit w-full flex-col items-center gap-12 overflow-hidden bg-[#151419] px-4 py-16 sm:gap-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      ></div>

      {/* Header */}
      <div
        ref={sectionRef}
        className="relative z-10 flex flex-col items-center gap-3 text-center"
      >
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl"
        >
          The Raum Standard
        </motion.h1>

        <motion.p
          variants={subTextVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-xs text-sm text-white/70 sm:max-w-md sm:text-base lg:max-w-xl"
        >
          We don't just list properties; we verify, manage, and elevate them to
          ensure a consistent premium experience.
        </motion.p>
      </div>

      {/* Cards grid */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 grid w-full max-w-xs grid-cols-1 gap-4 sm:max-w-2xl sm:grid-cols-2 lg:max-w-6xl lg:grid-cols-4 lg:gap-5"
      >
        {standards.map((standard) => (
          <motion.li
            key={standard.title}
            variants={cardVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/5 bg-[#131217] p-5 sm:p-6"
          >
            {/* Card hover overlay */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl"
              variants={cardOverlayVariants}
            />

            {/* Icon wrapper */}
            <div className="relative mt-3 w-fit">
              <motion.div aria-hidden />
              <motion.span
                variants={iconVariants}
                className="relative block text-2xl text-[#0033FF] sm:text-3xl"
              >
                {standard.icon}
              </motion.span>
            </div>

            <h2 className="mt-4 text-sm font-bold text-white sm:text-base">
              {standard.title}
            </h2>

            <p className="text-xs leading-relaxed text-white/55 sm:text-sm">
              {standard.description}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
};
