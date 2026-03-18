import React from "react";
import apartmentbuilding from "../../assets/aboutUs/apartmentbuild.png";
import { motion, type Variants } from "framer-motion";

interface ExperienceItem {
  id: number;
  title: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 0,
    title: "Our Vision",
    description:
      "Our vision is to revolutionize the real estate industry by helping individuals, businesses and societies attain their realty goals, objectives and dreams.",
  },
  {
    id: 1,
    title: "Our Mission",
    description:
      "We commit to providing sustainable real estate solutions geared at reducing the burden of housing and property issues encountered by over 80% of the population down by 50% by 2030. Ultimately, our success will translate to fostering lifelong real estate acquisition, one building at a time!",
  },
];

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" as const, delay: 0.3 },
  },
};

const Experience: React.FC = () => {
  return (
    <motion.section
      itemScope
      itemType="https://raum.africa/about"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="w-full bg-[#f8f8f8] text-[#121212] px-5 sm:px-8 md:px-14 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image */}
        <motion.div
          variants={slideUp}
          className="w-full md:w-1/2 flex-shrink-0"
        >
          <img
            itemProp="image"
            src={apartmentbuilding}
            alt="apartment building"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </motion.div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {experienceData.map((data) => (
            <motion.div
              variants={slideUp}
              key={data.id}
              className="flex flex-col gap-3 py-6 border-b-2 border-[#e0e0e0] last:border-none"
            >
              <h2
                itemProp="title"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212]"
              >
                {data.title}
              </h2>
              <p
                itemProp="description"
                className="text-sm sm:text-base text-[#6c6c6c] leading-relaxed"
              >
                {data.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
