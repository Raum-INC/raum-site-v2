import { motion } from "framer-motion";
import {
  MdOutlineElectricBolt,
  MdFitnessCenter,
  MdKitchen,
  MdLocalParking,
  MdSecurity,
  MdWifi,
  MdPool,
  MdHotTub,
} from "react-icons/md";
import { TbSnowflake } from "react-icons/tb";

const features = [
  { label: "Air Conditioning", icon: TbSnowflake },
  { label: "24/7 Power Supply", icon: MdOutlineElectricBolt },
  { label: "State-of-the-art Gymnasium", icon: MdFitnessCenter },
  { label: "Fully Equipped Kitchen", icon: MdKitchen },
  { label: "Parking", icon: MdLocalParking },
  { label: "Security", icon: MdSecurity },
  { label: "WiFi", icon: MdWifi },
  { label: "Swimming Pool", icon: MdPool },
  { label: "Hot Bath", icon: MdHotTub },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export const ShortletsFeatures = () => {
  return (
    <section className="flex lg:min-h-screen 2xl:min-h-fit flex-col items-center justify-center bg-[#151419] px-8 py-16">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mb-12 text-center font-bold text-[#f0f4ff] text-[clamp(1.6rem,3vw,2.2rem)] tracking-[-0.02em]"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Our Shortlets Features
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid w-full max-w-245 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map(({ label, icon: Icon }) => (
          <motion.div
            key={label}
            variants={cardVariants}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center justify-between rounded-2xl border border-[#0000FF] px-6 py-10"
          >
            <span className="max-w-35 text-lg font-medium leading-[1.35] text-[#c8cfe0]">
              {label}
            </span>

            <Icon className="text-7xl text-[#2563eb]" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
