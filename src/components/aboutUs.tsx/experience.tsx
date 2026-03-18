import React from "react";
import apartmentbuilding from "../../assets/aboutUs/apartmentbuild.png";
import { motion, type Variants } from "framer-motion";

interface ExperienceItem {
  id: number;
  title: string;
  description: string;
}

const experienceData = [
  {
    id: 0,
    title: "Our Vision",
    description: `Our vision is to revolutionize the real estate industry by helping individuals, businesses and societies attain their realty goals, objectives and dreams.
      `,
  },
  {
    id: 1,
    title: "Our Mission",
    description: `We commit to providing sustainable real estate  solutions geared at reducing the burden of housing and property issues encountered by over 80% of the population down by 50% by 2030. Ultimately, our success will translate to fostering lifelong real estate acquisition, one building at a time!`,
  },
];

const Experience: React.FC = () => {
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

  const experienceVariant: Variants = {
    hidden: {
      translateY: -50,
    },
    visible: {
      translateY: 0,
      transition: {
        duration: 0.5,
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
      className="w-full h-212.5 lg:h-auto bg-[#f8f8f8] text-[#121212] flex flex-col justify-end items-center relative"
    >
      <div className="p-8 md:p-28">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16">
          <div className="w-full flex justify-start items-center">
            <motion.img
              itemProp="image"
              variants={experienceVariant}
              src={apartmentbuilding}
              alt="apartment-building"
              className="md:w-full w-11/12 mx-auto rounded-3xl absolute md:static top-62.5 left-0 right-0"
            />
          </div>

          <div className="w-full md:p-8 py-8 flex flex-col gap-5">
            {(experienceData as ExperienceItem[]).map((data) => (
              <motion.div
                variants={experienceVariant}
                key={data.id}
                className="flex flex-col justify-center items-start gap-5 py-3 border-b-2 border-[#cbcbcb]"
              >
                <h1
                  itemProp="title"
                  className="text-3xl md:text-4xl font-bold text-[#121212]"
                >
                  {data.title}
                </h1>

                <p itemProp="description" className="text-lg text-[#6c6c6c]">
                  {data.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Experience;
