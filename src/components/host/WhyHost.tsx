import React from "react";
import { motion, type Variants } from "framer-motion";
import { BsCalendar2WeekFill, BsFillWalletFill } from "react-icons/bs";
import { MdPayments, MdAssignment, MdUploadFile, MdHome } from "react-icons/md";

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

const raumHost: FeatureItem[] = [
  {
    icon: BsCalendar2WeekFill,
    title: "Host and earn at your convenience",
    subtitle:
      "Maximize your income during evenings and weekends, or increase your earnings by hosting more frequently. The choice is yours.",
  },
  {
    icon: BsFillWalletFill,
    title: "A dependable stream of earnings",
    subtitle:
      "You'll receive booking requests from our extensive network of guests whenever your space is available.",
  },
  {
    icon: MdPayments,
    title: "Receive payouts in minutes",
    subtitle:
      "You will receive your earnings within an hour of receiving the notification of a booking payment confirmation. No need to wait around for payday.",
  },
];

const getStarted: FeatureItem[] = [
  {
    icon: MdAssignment,
    title: "Sign up",
    subtitle:
      "Inform us about the city where you want to host and the type of property you have. We'll send you an email with the subsequent instructions.",
  },
  {
    icon: MdUploadFile,
    title: "Upload your documents",
    subtitle:
      "The requirements for hosting on Raum Africa can vary based on your location.",
  },
  {
    icon: MdHome,
    title: "List your property",
    subtitle:
      "If you own a property and want to list it, we can guide you through the process to showcase your space to potential guests.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

interface GridSectionProps {
  items: FeatureItem[];
}

const GridSection: React.FC<GridSectionProps> = ({ items }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16"
  >
    {items.map((item, index) => {
      const Icon = item.icon;
      return (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex flex-col gap-5"
        >
          <div className="w-12 h-12 bg-[#0000FF] rounded-lg flex items-center justify-center shrink-0">
            <Icon size={22} className="text-white" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
              {item.title}
            </h3>
            <p className="text-[#aaaaaa] text-sm leading-relaxed">
              {item.subtitle}
            </p>
          </div>
        </motion.div>
      );
    })}
  </motion.div>
);

export const WhyRaumHost: React.FC = () => {
  return (
    <section className="w-full bg-[#111111] px-4 sm:px-8 lg:px-14 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
            Why become a Raum Host?
          </h2>
          <p className="text-[#aaaaaa] text-sm sm:text-base leading-relaxed">
            Whether you want to host for a few days occasionally or want to earn
            money more frequently, with Raum Africa you can fit hosting around
            your schedule.
          </p>
        </motion.div>

        <GridSection items={raumHost} />

        <div className="border-t border-[#2e2e2e]" />

        {/* Get Started */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight"
        >
          Get Started
        </motion.h2>

        <GridSection items={getStarted} />
      </div>
    </section>
  );
};
