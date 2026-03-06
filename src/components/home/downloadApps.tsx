import { useState } from "react";
import { motion } from "framer-motion";
import PhoneImage from "../../assets/home/iPhoneMockup.png";

const tabs = ["Guests", "Hosts"] as const;
type Tab = (typeof tabs)[number];

export default function DownloadApps() {
  const [active, setActive] = useState<Tab>("Guests");

  return (
    <section className="bg-[#151419] px-4 py-18 flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="text-white text-2xl sm:text-3xl font-bold text-center mb-8 tracking-tight"
      >
        Download our Apps
      </motion.h2>

      {/* Guests / Hosts toggle */}
      <div className="flex items-center gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium border transition-colors duration-200 ${
              active === tab
                ? "bg-[#0000FF] border-[#0000FF] text-white"
                : "bg-transparent border-[#0000FF] text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Blue card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" as const }}
        className="w-full max-w-5xl bg-[#0000FF] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 sm:px-16 pt-12 md:pt-16 gap-8"
      >
        {/* Left text */}
        <div className="flex flex-col items-start max-w-sm pb-0 md:pb-16">
          <h3 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight mb-4">
            Access to the best shortlets at your fingertips.
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-8">
            Scan the QR code with your phone camera <br /> to download the Raum
            app. <br /> Available for iOS and Android devices.
          </p>
          <button className="bg-white/20 cursor-pointer hover:bg-white/30 transition-colors duration-200 text-white text-sm font-medium px-6 py-3 rounded-full">
            Get the app
          </button>
        </div>

        {/* Phone mockup */}
        <div className="shrink-0 w-55 sm:w-65 md:w-75">
          <img
            src={PhoneImage}
            alt="Raum app screenshot"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
