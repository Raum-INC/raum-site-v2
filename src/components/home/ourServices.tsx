import { MdRealEstateAgent } from "react-icons/md";
import service1 from "../../assets/home/service1.png";
import service2 from "../../assets/home/service2.png";
import service3 from "../../assets/home/service3.png";
import service4 from "../../assets/home/service4.png";
import service5 from "../../assets/home/service5.png";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { BsAlarmFill } from "react-icons/bs";
import user1 from "../../assets/home/user1.png";
import user2 from "../../assets/home/user2.png";
import user3 from "../../assets/home/user3.png";
import user4 from "../../assets/home/user4.png";

const avatars = [user1, user2, user3, user4];

export default function OurServices() {
  return (
    <section className="w-full bg-[#151419] px-4 sm:px-12 py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Heading */}
        <h2 className="text-white font-bold text-2xl sm:text-3xl text-center tracking-tight">
          Our Services
        </h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src={service1}
            alt="service"
            className="w-full aspect-4/3 object-cover rounded-2xl"
          />
          <img
            src={service2}
            alt="service"
            className="w-full aspect-4/3 object-cover rounded-2xl"
          />
          <div className="w-full aspect-4/3 bg-[#1e1d23] rounded-2xl p-5 flex flex-col justify-end gap-2">
            <p className="text-[#0000FF]">
              <BiSolidBuildingHouse size={55} />
            </p>
            <h2 className="text-white font-bold mt-3 text-lg leading-snug">
              Verified Shortlets
            </h2>
            <p className="text-[#FBFBFB] text-xs font-normal leading-relaxed line-clamp-4">
              Our all-in-one platform helps property owners manage bookings,
              pricing, and guest communication effortlessly. With built-in
              automation and performance insights, Raum empowers hosts to
              deliver consistent, high-quality stays.
            </p>
            <a href="#" className="text-[#0000FF] text-xs underline">
              More details
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="w-full aspect-4/3 bg-[#1e1d23] rounded-2xl p-5 flex flex-col justify-end gap-2">
            <p className="text-[#0000FF]">
              <BsAlarmFill size={50} />
            </p>
            <h2 className="text-white font-bold mt-3 text-lg leading-snug">
              Eco-Smart Short-Term Rentals
            </h2>
            <p className="text-[#FBFBFB] text-xs font-normal leading-relaxed line-clamp-4">
              Book eco-smart short-term rentals in top cities from Lagos to
              Nairobi and beyond. Our fully furnished serviced apartments are
              equipped with smart-home technology, IoT-enabled climate control,
              and sustainable features. Whether you're traveling for work or
              leisure, enjoy a comfortable, tech-enabled stay with trusted
              support and seamless booking.
            </p>
            <a href="#" className="text-[#0000FF] text-xs underline">
              More details
            </a>
          </div>
          <img
            src={service3}
            alt="service"
            className="w-full aspect-4/3 object-cover rounded-2xl"
          />
          <img
            src={service4}
            alt="service"
            className="w-full aspect-4/3 object-cover rounded-2xl"
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Avatar block */}
          <div className="w-full aspect-4/3 bg-[#1e1d23] rounded-2xl p-5 flex flex-col justify-end gap-3">
            <div className="flex items-center">
              {avatars.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`avatar-${idx}`}
                  className="w-10 h-10 rounded-full border-2 border-[#151419] object-cover -ml-2 first:ml-0"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#151419] bg-[#0000FF] flex items-center justify-center text-white text-[10px] font-bold -ml-2">
                1k+
              </div>
            </div>
            <p className="text-[#aaaaaa] text-xs leading-snug max-w-50">
              People already enjoying our various shortlets across Africa
            </p>
          </div>

          {/* Real Estate text block */}
          <div className="w-full aspect-4/3 bg-[#1e1d23] rounded-2xl p-5 flex flex-col justify-end gap-2">
            <p className="text-[#0000FF]">
              <MdRealEstateAgent size={55} />
            </p>
            <h2 className="text-white font-bold text-lg mt-3 leading-snug">
              Real Estate Acquisition Support
            </h2>
            <p className="text-[#FBFBFB] text-xs font-normal leading-relaxed line-clamp-4">
              Looking to invest in real estate? Raum connects you with vetted
              listings, safer networks, and expert guidance to help you find and
              secure your next income-generating property, locally or across
              emerging markets.
            </p>
            <a href="#" className="text-[#0000FF] text-xs underline">
              More details
            </a>
          </div>

          <img
            src={service5}
            alt="service"
            className="w-full aspect-4/3 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
