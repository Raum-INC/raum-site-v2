import React, { type JSX } from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaHome, FaUserCircle } from "react-icons/fa";
import map from "../../assets/home/worldMap.png";

const aboutData = [
  {
    icon: <FaHome size={32} />,
    title: "Over 200",
    info: "Listed Properties",
  },
  {
    icon: <FaEarthAfrica size={32} />,
    title: "23",
    info: "Nigerian States",
  },
  {
    icon: <FaUserCircle size={32} />,
    title: "25,000+",
    info: "Active Users & Hosts",
  },
];

export const AboutRaum: React.FC = (): JSX.Element => {
  return (
    <main
      itemScope
      itemType="https://raum.africa/"
      className="w-full bg-[#151419] px-6 py-20"
    >
      <section className="max-w-5xl mx-auto flex flex-col items-center gap-16">
        {/* Heading + description */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <span className="text-[#0000FF] text-xs font-semibold uppercase tracking-widest">
            Who we are
          </span>
          <h3
            itemProp="title"
            className="text-white font-bold text-3xl sm:text-4xl leading-tight"
          >
            About Raum Africa
          </h3>
          <p
            itemProp="description"
            className="text-[#aaaaaa] text-sm sm:text-lg leading-relaxed"
          >
            Raum Africa is an infrastructure for urban living, redefining the
            short-term rental serviced apartment market across Lagos and
            Nairobi, through technology-driven approach. destinations.
          </p>
        </div>

        {/* Map */}
        <div className="w-full">
          <img
            itemProp="image"
            src={map}
            alt="raum-world"
            className="w-full h-auto object-contain opacity-90"
          />
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#2e2e2e] rounded-2xl overflow-hidden">
          {aboutData.map(({ icon, title, info }, index) => (
            <div
              key={index}
              className="bg-[#151419] flex flex-col items-center justify-center gap-3 py-10 px-6 text-center"
            >
              <span className="text-[#0000FF]">{icon}</span>
              <h2
                itemProp="itemTitle"
                className="text-white font-extrabold text-3xl mt-5 sm:text-4xl tracking-tight"
              >
                {title}
              </h2>
              <span
                itemProp="itemSubtitle"
                className="text-[#aaaaaa] text-sm font-medium uppercase tracking-wider"
              >
                {info}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
