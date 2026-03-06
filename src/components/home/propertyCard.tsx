import { motion, type Variants } from "framer-motion";
import { FiHeart, FiMapPin } from "react-icons/fi";

export type Amenity = {
  icon: React.ReactNode;
  label: string;
};

export type Property = {
  id: string;
  name: string;
  location: string;
  price: string;
  currency?: string;
  period: string;
  image: string;
  rating?: number;
  reviews?: number;
  amenities: Amenity[];
};

interface PropertyCardProps {
  property: Property;
  variants?: Variants;
}

export const PropertyCard = ({ property, variants }: PropertyCardProps) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col overflow-hidden rounded-2xl bg-[#111114] border border-white/5"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="h-56 w-full object-cover sm:h-60"
        />

        {/* Managed by Raum badge */}
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            Managed by Raum
          </span>
        </div>

        {/* Favourite */}
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80 hover:text-white transition-colors">
          <FiHeart size={14} />
        </button>

        {/* Rating badge */}
        {property.rating && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs font-medium text-white">
              {property.rating}
            </span>
            {property.reviews && (
              <span className="text-xs text-white/50">({property.reviews})</span>
            )}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Name + price row */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-white">{property.name}</h3>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-white/45">
              <FiMapPin size={11} />
              {property.location}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-base font-bold text-[#0033FF]">{property.price}</p>
            <p className="text-[11px] text-white/40">{property.period}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5" />

        {/* Amenities */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {property.amenities.map((a) => (
            <div key={a.label} className="flex items-center gap-1.5 text-white/50">
              <span className="text-sm">{a.icon}</span>
              <span className="text-xs">{a.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-auto w-full rounded-xl border border-white/10 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5">
          View Details
        </button>
      </div>
    </motion.div>
  );
};