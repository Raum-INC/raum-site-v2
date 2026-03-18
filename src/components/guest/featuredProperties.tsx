import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const properties = [
  {
    id: 1,
    name: "Avengers tower",
    price: "₦125,000",
    location: "Ikeja, Lagos",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Avengers tower",
    price: "₦125,000",
    location: "Ikeja, Lagos",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Avengers tower",
    price: "₦125,000",
    location: "Ikeja, Lagos",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Avengers tower",
    price: "₦125,000",
    location: "Ikeja, Lagos",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Avengers tower",
    price: "₦125,000",
    location: "Ikeja, Lagos",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  },
];

function PropertyCard({ property }: { property: (typeof properties)[0] }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col gap-3 min-w-[220px]">
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        {/* Rating badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
          <FaStar size={11} className="text-yellow-400" />
          <span className="text-white text-xs font-semibold">
            {property.rating}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <p className="text-white font-semibold text-sm">{property.name}</p>
        <div className="flex items-center justify-between">
          <p className="text-white font-bold text-base">{property.price}</p>
          <button
            onClick={() => setLiked(!liked)}
            className="text-red-500 hover:scale-110 transition-transform"
          >
            {liked ? <MdFavorite size={18} /> : <MdFavoriteBorder size={18} />}
          </button>
        </div>
        <div className="flex items-center gap-1 text-[#aaaaaa]">
          <IoLocationOutline size={13} />
          <span className="text-xs">{property.location}</span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-26">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white font-bold text-2xl sm:text-3xl">
            Featured properties
          </h2>
          <a
            href="#"
            className="text-[#0000FF] text-sm font-semibold hover:underline"
          >
            See all
          </a>
        </div>

        {/* Cards — horizontal scroll on mobile, grid on lg */}
        <div className="flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible scrollbar-hide">
          {properties.map((property) => (
            <div
              key={property.id}
              className="w-[220px] flex-shrink-0 lg:w-auto lg:flex-shrink"
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
