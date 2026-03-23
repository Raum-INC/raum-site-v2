import React from "react";
import { motion, type Variants } from "framer-motion";
import hostMockup from "../../assets/guest/hostMockup.png";

interface Step {
  id: number;
  title: string;
  subtitle: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Accept a booking request",
    subtitle: "The Host app will automatically connect you with guests.",
  },
  {
    id: 2,
    title: "Welcome your guest",
    subtitle:
      "The app will guide you to your guest's location. Once there, welcome them.",
  },
  {
    id: 3,
    title: "Repeat to increase your income",
    subtitle:
      "Continue hosting and earning or go offline — you're always in full control of your hosting schedule.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.3 },
  },
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full bg-[#1a1a1a] px-4 sm:px-8 lg:px-14 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto flex p-5 lg:p-10 rounded-2xl bg-[#252525] flex-col lg:flex-row items-start lg:items-center gap-14 lg:gap-10">
        {/* Left — text */}
        <div className="flex flex-col gap-10 lg:w-1/2">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
            className="flex flex-col gap-3"
          >
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
              How the Raum Hosts app works
            </h2>
            <p className="text-[#aaaaaa] text-sm sm:text-base leading-relaxed">
              Reliable and user-friendly, with all the essentials for hosting
              and earning at your convenience.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-8"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="flex items-start gap-5"
              >
                {/* Badge */}
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0000FF] flex items-center justify-center text-white text-sm font-bold">
                  {step.id}
                </span>

                {/* Text */}
                <div className="flex flex-col gap-1.5 pt-0.5">
                  <p className="text-white font-bold text-base sm:text-lg leading-snug">
                    {step.title}
                  </p>
                  <p className="text-[#aaaaaa] text-sm sm:text-base leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right — phone mockup */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end"
        >
          <img
            src={hostMockup}
            alt="Raum host app mockup"
            className="w-[260px] sm:w-[300px] lg:w-[380px] h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
