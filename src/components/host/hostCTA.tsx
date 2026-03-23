import React from "react";
import { motion } from "framer-motion";
import { MdAssignment } from "react-icons/md";
import hostMockup from "../../assets/guest/hostMockup.png";

const points = [
  "Gain access to a business account",
  "Create a safe environment for your customers to transact with your business.",
  "Gain access to all the services Raum Africa has to offer you.",
];

const HostCTA: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 py-10 flex flex-col gap-20 bg-[#151419]">
      {/* Card 1 — Register Business */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" as const }}
        className="max-w-5xl mx-auto w-full bg-[#0000FF] rounded-2xl px-8 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
      >
        {/* Left */}
        <div className="flex flex-col gap-3 max-w-xl">
          <h3 className="text-white font-bold text-xl sm:text-2xl leading-snug">
            Not a Registered Business? That won't do!
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Let's get you registered in 10 business working days. Just fill out
            our form and we'll be right with you.
          </p>
          <ul className="flex flex-col gap-2 mt-1">
            {points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-white text-sm leading-relaxed"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <a
          href="#"
          className="flex-shrink-0 flex items-center gap-2 border-2 border-white text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[#0000FF] transition-colors whitespace-nowrap"
        >
          <MdAssignment size={18} />
          Fill the form!
        </a>
      </motion.div>

      {/* Card 2 — Be your own boss */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" as const }}
        className="max-w-5xl mx-auto w-full pt-10 px-10 bg-[#0000FF] rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center"
      >
        {/* Left text */}
        <div className="flex flex-col gap-6 px-8 sm:px-10 py-10 lg:w-1/2">
          <h3 className="text-white font-bold text-2xl sm:text-3xl leading-tight">
            Be your own boss. Start hosting and earning!
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            It takes just 2 minutes to submit your information.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-white text-[#0000FF] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Android
            </a>
            <a
              href="#"
              className="bg-white text-[#0000FF] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Apple
            </a>
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end px-8 pt-4 lg:pt-0">
          <img
            src={hostMockup}
            alt="Raum host app"
            className="w-[240px] sm:w-[280px] lg:w-[320px] h-auto object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HostCTA;
