import React from "react";
import { motion, type Variants } from "framer-motion";
import { MdSecurity, MdPeopleAlt } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsGlobeEuropeAfrica } from "react-icons/bs";

type TrustItem = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const trustData: TrustItem[] = [
  {
    icon: MdSecurity,
    title: "Verified listings",
    desc: "All properties verified and updated daily",
  },
  {
    icon: FaClock,
    title: "24/7 Support",
    desc: "Get help whenever you need it",
  },
  {
    icon: MdPeopleAlt,
    title: "2k+ Happy Clients",
    desc: "Trusted by homebuyers nationwide",
  },
  {
    icon: IoMdLock,
    title: "Secure platform",
    desc: "Your data is protected and private",
  },
  {
    icon: IoCheckmarkCircle,
    title: "No Hidden Fees",
    desc: "Transparent pricing, no surprises",
  },
  {
    icon: BsGlobeEuropeAfrica,
    title: "Multi-region Availability",
    desc: "We are available in multiple countries",
  },
];

const TrustRaum: React.FC = () => {
  return (
    <motion.section
      className="w-full py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl text-center"
      >
        Why trust Raum
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-[#aaaaaa] text-sm sm:text-base text-center max-w-xl leading-relaxed"
      >
        We're committed to providing a secure, transparent, and reliable
        platform for all your real estate needs.
      </motion.p>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        className="mt-8 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10"
      >
        {trustData.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              {/* Icon box */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#2C2B30] flex items-center justify-center">
                <Icon size={20} className="text-[#B6B0CD]" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <p className="text-white text-sm sm:text-base font-semibold">
                  {item.title}
                </p>
                <span className="text-[#aaaaaa] text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default TrustRaum;
