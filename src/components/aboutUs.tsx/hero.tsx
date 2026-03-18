import React from "react";
import { motion, type Variants } from "framer-motion";
import meetingRoom1 from "../../assets/aboutUs/meetingroom.png";
import meetingRoom2 from "../../assets/aboutUs/meetingroom2.png";

const heroVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

const imgLeftVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" as const, delay: 0.4 },
  },
};

const imgRightVariant: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" as const, delay: 0.6 },
  },
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.2 },
  },
};

export const Hero: React.FC = () => {
  return (
    <motion.main
      itemScope
      itemType="https://raum.africa/about"
      variants={heroVariant}
      initial="hidden"
      animate="visible"
      className="w-full text-white px-5 sm:px-8 md:px-14 pt-28 pb-16 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
        {/* Text */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 max-w-2xl"
        >
          <span className="text-[#0000FF] text-xs font-semibold uppercase tracking-widest">
            Who we are
          </span>
          <h1
            itemProp="title"
            className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight"
          >
            About Raum Africa
          </h1>
          <p
            itemProp="description"
            className="text-[#aaaaaa] text-sm sm:text-base leading-relaxed max-w-xl"
          >
            We are revolutionizing staycations by providing an all-in-one
            platform for booking short-term and long stays, along with dream
            properties, using AI, VR tours, smart home tech, and prioritize
            sustainability.
          </p>
        </motion.div>

        {/* Images */}
        <div className="w-full relative flex flex-col sm:flex-row items-start gap-4">
          {/* Left image */}
          <motion.div
            variants={imgLeftVariant}
            initial="hidden"
            animate="visible"
            className="w-full sm:w-[58%] md:w-[60%] flex-shrink-0"
          >
            <img
              itemProp="image"
              src={meetingRoom1}
              alt="Raum meeting room"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
          </motion.div>

          {/* Right image — offset down on sm, absolute overflow on md+ */}
          <motion.div
            variants={imgRightVariant}
            initial="hidden"
            animate="visible"
            className="w-full sm:w-[50%] flex-shrink-0 sm:mt-16 md:absolute md:right-[-60px] md:top-[120px] md:w-[55%]"
          >
            <img
              itemProp="image"
              src={meetingRoom2}
              alt="Raum meeting room"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Invisible spacer to hold container height on md when right image is absolute */}
          <div className="hidden md:block md:w-[45%] md:h-[400px] flex-shrink-0 pointer-events-none select-none" />
        </div>
      </div>
    </motion.main>
  );
};
