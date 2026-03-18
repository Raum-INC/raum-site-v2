import React from "react";
import { motion, type Variants } from "framer-motion";
import { FiUsers } from "react-icons/fi";
import { LuAward } from "react-icons/lu";
import { FaGlobeAfrica } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ValuesData = [
  {
    id: 1,
    title: "Customer-Centric",
    description: `Our customers are at the heart of everything we do. We strive to exceed their expectations and provide exceptional service while building lasting trust.`,
    icon: <LuAward />,
  },
  {
    id: 2,
    title: "Innovation",
    description: `We embrace cutting-edge technology and creative solutions to constantly redefine and improve the living experience for our customers.`,
    icon: <IoCheckmarkDoneCircleOutline />,
  },
  {
    id: 3,
    title: "Sustainability",
    description: `We are committed to shaping a greener future by prioritizing sustainable and environmentally friendly practices in every aspect of our business.`,
    icon: <LuAward />,
  },
  {
    id: 4,
    title: "Transparency",
    description: `We believe in open and honest communication with our customers, partners, and team members, fostering trust and authenticity.`,
    icon: <IoSearch />,
  },
  {
    id: 5,
    title: "Empowerment",
    description: ` We empower our community to make informed decisions about their living spaces, whether it's booking a short-term rental or finding their dream home, fostering a supportive and inclusive terrain`,
    icon: <FaGlobeAfrica />,
  },
  {
    id: 6,
    title: "Collaboration",
    description: `We value collaboration and partnerships, both internally and externally, to achieve common goals and create mutual success built on trust.`,
    icon: <FiUsers />,
  },
];

export const Values: React.FC = () => {
  const containerVariant: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const valuesVariant: Variants = {
    hidden: {
      opacity: 0,
      translateX: -50,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.4,
      },
    },
  };

  return (
    <motion.main
      itemScope
      itemType="https://raum.africa/about"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full md:max-w-10/12 mx-auto h-auto py-14 md:py-36 md:px-12 flex flex-col justify-center items-center gap-12 bg-white md:bg-transparent"
    >
      <div className="flex flex-col justify-center items-center gap-5 p-8">
        <h3
          itemProp="title"
          className="text-black md:text-white text-center font-bold text-3xl md:text-[44px] md:leading-[52px]"
        >
          The values that drive
          <br className="block md:hidden" /> our work
        </h3>
      </div>

      <motion.div
        variants={valuesVariant}
        initial="hidden"
        whileInView="visible"
        className="w-full mx-auto grid md:grid-cols-3 py-12 justify-center items-center md:gap-7"
      >
        {(ValuesData as ValueItem[]).map((data, index) => {
          return (
            <motion.div
              variants={valuesVariant}
              whileInView="visible"
              viewport={{ once: true }}
              key={index}
              className="w-full aspect-square mx-auto p-8 flex flex-col justify-center items-start gap-5 bg-white text-black border border-[#cbcbcb] rounded-lg"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {data.icon}
              </div>

              <h4
                itemProp="title"
                className="font-bold text-[#121212] text-lg md:text-xl"
              >
                {data.title}
              </h4>

              <p
                itemProp="description"
                className="font-medium text-[#6c6c6c] text-base md:text-lg"
              >
                {data.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.main>
  );
};
