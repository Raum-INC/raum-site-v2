import React from "react";
import { motion, type Variants } from "framer-motion";
import { MdBolt, MdShield } from "react-icons/md";
import { TbSnowflake } from "react-icons/tb";

interface SDGItem {
  icon: React.ElementType;
  title: string;
  points: string[];
}

const sdgData: SDGItem[] = [
  {
    icon: MdBolt,
    title: "SDG 7. Affordable and clean energy",
    points: [
      "We're committed to promoting affordable and clean energy in the shortlet industry. By connecting shortlet owners with energy-efficient solutions, we're helping to reduce carbon emissions and lower operating costs.",
      "We empower shortlet owners to adopt renewable energy sources, such as solar power, and implement energy-saving measures. By promoting energy efficiency, we're helping to create a more sustainable future.",
    ],
  },
  {
    icon: TbSnowflake,
    title: "SDG 11. Sustainable cities and comunities",
    points: [
      "We're connecting sustainable shortlet owners with eco-conscious travelers. By providing a platform for sustainable listings, we're helping to create a more sustainable tourism industry.",
      "Our platform empowers shortlet owners to implement sustainable practices and reduce their environmental impact. By promoting eco-friendly accommodations, we're contributing to a greener future.",
    ],
  },
  {
    icon: MdShield,
    title: "SDG 17. Partnership for the goals",
    points: [
      "By partnering with different organisations we're committed to reducing environmental impact and promoting social equity through our shortlet program. Together, we're working towards Sustainable Cities and Communities and also affordable and clean environment.",
      "Our shortlet program is more than just achieving SDG Goals. It's a platform for positive change.",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export const SustainableGoals: React.FC = () => {
  return (
    <section className="w-full bg-[#111111] px-4 sm:px-8 lg:px-14 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
            Our sustainable development goals
          </h2>
          <p className="text-[#aaaaaa] text-sm sm:text-base leading-relaxed max-w-4xl">
            RAUM INC is committed to empowering shortlet businesses to become
            sustainable leaders in the hospitality industry. By focusing on
            environmental sustainability, social responsibility, and economic
            viability, we aim to help shortlet businesses:
          </p>
        </motion.div>

        {/* SDG Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col gap-5"
        >
          {sdgData.map((sdg, index) => {
            const Icon = sdg.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-[#1e1e1e] rounded-2xl py-6 lg:py-12 px-6 sm:px-8 flex flex-col gap-5"
              >
                {/* Icon */}
                <Icon size={48} className="text-[#0000FF]" />

                {/* Title */}
                <h3 className="text-white font-bold text-base sm:text-lg md:text-xl leading-snug">
                  {sdg.title}
                </h3>

                {/* Bullet points */}
                <ul className="flex flex-col gap-4 mt-4">
                  {sdg.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#cccccc] text-sm sm:text-base leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#cccccc] shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
