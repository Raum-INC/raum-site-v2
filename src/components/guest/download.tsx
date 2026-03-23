import React from "react";
import useDownloadStore from "../../store/downloadStore";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import hostMockup from "../../assets/guest/hostMockup.png";
import guestMockup from "../../assets/guest/guestMockup.png";

export function useAttribution() {
  const utm_source = localStorage.getItem("utm_source");
  const utm_medium = localStorage.getItem("utm_medium");
  const utm_campaign = localStorage.getItem("utm_campaign");

  const mt = localStorage.getItem("mt");
  const ct = localStorage.getItem("ct");
  const pt = localStorage.getItem("pt");

  const appleAttribution = `${mt ? `&mt=${mt}` : ""}${ct ? `&ct=${ct}` : ""}${pt ? `&pt=${pt}` : ""}`;
  const androidAttribution = `${utm_source ? `&utm_source=${utm_source}` : ""}${utm_medium ? `&utm_medium=${utm_medium}` : ""}${utm_campaign ? `&utm_campaign=${utm_campaign}` : ""}`;

  return { appleAttribution, androidAttribution };
}

const slideVariant: Variants = {
  hidden: {
    x: -40,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" as const },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeInOut" as const },
  },
};

export const Download: React.FC = () => {
  const { download, toggleGuest, toggleHosts } = useDownloadStore();
  const { appleAttribution, androidAttribution } = useAttribution();

  const isGuests = download === "guests";
  const isHosts = download === "hosts";

  const androidHref = isGuests
    ? `https://play.google.com/store/apps/details?id=com.raumhq.raum${androidAttribution}`
    : `https://play.google.com/store/apps/details?id=com.raumhq.raum_mobile_host${androidAttribution}`;

  const appleHref = isGuests
    ? `https://apps.apple.com/us/app/raum-africa/id6514297891?${appleAttribution}`
    : `https://apps.apple.com/us/app/raum-hosts/id6514303259?${appleAttribution}`;

  return (
    <main
      itemScope
      itemType="https://raum.africa/"
      id="download-section"
      className="w-full px-4 sm:px-8 py-16"
    >
      <section className="w-full max-w-5xl mx-auto flex flex-col gap-10">
        {/* Heading */}
        <h3
          itemProp="title"
          className="font-bold text-2xl text-white sm:text-3xl md:text-4xl text-center tracking-tight"
        >
          Download our Apps
        </h3>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-3">
          {(["guests", "hosts"] as const).map((tab) => (
            <button
              key={tab}
              onClick={tab === "guests" ? toggleGuest : toggleHosts}
              className={`px-6 sm:px-10 py-2.5 text-sm font-semibold rounded-full border-2 border-[#0000FF] capitalize transition-all duration-250 ${
                download === tab
                  ? "bg-[#0000FF] text-white"
                  : "bg-transparent text-neutral-300"
              }`}
            >
              {tab === "guests" ? "Guests" : "Hosts"}
            </button>
          ))}
        </div>

        {/* Card */}
        <AnimatePresence>
          {(isGuests || isHosts) && (
            <motion.div className="w-full bg-[#0000FF] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center lg:items-end min-h-[420px] md:min-h-[500px]">
              {/* Text side */}
              <motion.div
                key={`text-${download}`}
                variants={slideVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                itemScope
                itemType="https://raum.africa/"
                className="w-full lg:w-1/2 flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14"
              >
                <h4 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
                  {isGuests ? "Access to the" : "Showcase your"} best shortlets
                  at your fingertips.
                </h4>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-sm">
                  Scan the QR code with your phone camera to download the Raum
                  app. Available for iOS and Android devices.
                </p>

                <div className="flex items-center gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Download on Android"
                    href={androidHref}
                    className="px-6 py-3 rounded-full bg-white text-[#0000FF] text-sm font-bold hover:bg-white/90 transition-colors"
                  >
                    Android
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Download on Apple"
                    href={appleHref}
                    className="px-6 py-3 rounded-full bg-white text-[#0000FF] text-sm font-bold hover:bg-white/90 transition-colors"
                  >
                    Apple
                  </a>
                </div>
              </motion.div>

              {/* Phone mockup side */}
              <motion.div
                key={`mockup-${download}`}
                variants={slideVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full lg:w-1/2 flex justify-center items-end px-8 pt-4 lg:pt-0"
              >
                <img
                  itemProp="image"
                  src={isGuests ? guestMockup : hostMockup}
                  alt="raum app mockup"
                  className="w-[220px] sm:w-[270px] md:w-[310px] h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
};
