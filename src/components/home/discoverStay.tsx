import { useState, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  FiWifi,
  FiZap,
  FiLock,
  FiDroplet,
  FiTruck,
  FiShield,
  FiCoffee,
} from "react-icons/fi";
import { MdFitnessCenter } from "react-icons/md";
import {
  PropertyCard,
  type Property,
} from "../../components/home/propertyCard";
import collection1 from "../../assets/home/collection1.png";
import collection2 from "../../assets/home/collection2.png";
import collection3 from "../../assets/home/collection3.png";

const FILTERS = ["All", "Lagos", "Nairobi", "Executive Studio", "Penthouse"];

const PROPERTIES: (Property & { tags: string[] })[] = [
  {
    id: "avengers-tower",
    name: "Avengers Tower",
    location: "Ikeja, Lagos",
    price: "₦125,000",
    period: "per night",
    image: collection1,
    amenities: [
      { icon: <FiWifi />, label: "Fast Wifi" },
      { icon: <FiZap />, label: "24/7 Power" },
      { icon: <FiLock />, label: "Smart Lock" },
    ],
    tags: ["All", "Lagos"],
  },
  {
    id: "zuma-basil",
    name: "Zuma Basil",
    location: "Lekki, Lagos",
    price: "₦180,000",
    period: "per night",
    image: collection2,
    rating: 4.8,
    reviews: 85,
    amenities: [
      { icon: <FiDroplet />, label: "Pool" },
      { icon: <FiZap />, label: "24/7 Power" },
      { icon: <FiTruck />, label: "Parking" },
    ],
    tags: ["All", "Lagos", "Executive Studio"],
  },
  {
    id: "onyx-suite",
    name: "The Onyx Suite",
    location: "Westlands, Nairobi",
    price: "$150",
    period: "per night",
    image: collection3,
    amenities: [
      { icon: <MdFitnessCenter />, label: "Gym" },
      { icon: <FiCoffee />, label: "Kitchen" },
      { icon: <FiShield />, label: "Security" },
    ],
    tags: ["All", "Nairobi", "Penthouse"],
  },
];

const sectionVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const DiscoverStay = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const filtered = PROPERTIES.filter((p) => p.tags.includes(activeFilter));

  return (
    <section
      ref={ref}
      className="w-full bg-[#151419] px-4 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header row */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          {/* Title */}
          <div className="flex flex-col gap-1">
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-semibold uppercase tracking-widest text-[#0033FF]"
            >
              Curated Collection
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Discover Your Stay
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-2"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={[
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  activeFilter === f
                    ? "bg-[#0033FF] text-white"
                    : "text-white/60 hover:text-white",
                ].join(" ")}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              variants={cardVariants}
            />
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 flex justify-center"
        >
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-medium text-[#0033FF] hover:underline"
          >
            View All Properties
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
