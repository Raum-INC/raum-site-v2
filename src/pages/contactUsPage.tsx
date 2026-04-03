import { motion, type Variants } from "framer-motion";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { Visit } from "../components/aboutUs.tsx/visit";
import Footer from "../layout/footer";
import { Navbar } from "../layout/navbar";

const containerVariant: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

const formVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

const inputClass =
  "font-normal p-4 border border-[#e8e8e8] rounded-full outline-none focus:border-[#0000FF] transition-colors text-[#121212] text-sm w-full";

export const ContactUs = () => {
  return (
    <main className="flex flex-col text-white bg-[#151419]">
      <Navbar />

      {/* Hero contact section */}
      <section
        itemScope
        itemType="https://raum.africa/contact"
        className="w-full max-w-6xl mx-auto min-h-screen flex flex-col lg:flex-row items-start lg:items-center gap-12 px-4 sm:px-8 pt-28 pb-20"
      >
        {/* Left — contact info */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-2/5 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-3">
            <h1
              itemProp="title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
            >
              Contact Raum Africa
            </h1>
            <p
              itemProp="description"
              className="text-sm sm:text-base text-[#aaaaaa] leading-relaxed"
            >
              Do you have questions, comment, or a suggestion for us? Whether
              you need more information about our products or services, we would
              love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <CiMail size={20} className="mt-1 flex-shrink-0 text-[#0000FF]" />
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold">Email</p>
                <span itemProp="email" className="text-sm text-[#aaaaaa]">
                  hello@raum.africa
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BsTelephone
                size={18}
                className="mt-1 flex-shrink-0 text-[#0000FF]"
              />
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold">Phone</p>
                <span itemProp="phone" className="text-sm text-[#aaaaaa]">
                  +234 814 822 8901
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold">Follow us on social media</p>
            <div className="flex gap-4 items-center">
              {[
                {
                  icon: BiLogoFacebook,
                  href: "https://www.facebook.com/raumincc",
                  label: "facebook",
                },
                {
                  icon: BiLogoTwitter,
                  href: "https://twitter.com/rauminc",
                  label: "twitter",
                },
                {
                  icon: BiLogoInstagramAlt,
                  href: "https://www.instagram.com/rauminc.hq/",
                  label: "instagram",
                },
                {
                  icon: BiLogoLinkedin,
                  href: "https://www.linkedin.com/company/rauminc/",
                  label: "linkedin",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  itemProp={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#2e2e2e] flex items-center justify-center text-white hover:border-white hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          variants={formVariant}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-3/5 bg-white rounded-3xl shadow-2xl p-6 sm:p-8"
        >
          <form className="w-full flex flex-col gap-5">
            {/* Row 1 — Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2 text-[#121212] font-semibold text-sm">
                Name
                <input
                  type="text"
                  name="FName"
                  placeholder="Full Name"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-2 text-[#121212] font-semibold text-sm">
                Email
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className={inputClass}
                />
              </label>
            </div>

            {/* Row 2 — Phone + Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2 text-[#121212] font-semibold text-sm">
                Phone
                <input
                  type="tel"
                  name="Phone_Number"
                  placeholder="Phone"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-2 text-[#121212] font-semibold text-sm">
                Subject
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  className={inputClass}
                />
              </label>
            </div>

            {/* Row 3 — Message */}
            <label className="flex flex-col gap-2 text-[#121212] font-semibold text-sm">
              Message
              <textarea
                rows={5}
                placeholder="Leave us a message..."
                className="font-normal w-full p-4 border border-[#e8e8e8] text-[#121212] rounded-2xl outline-none resize-none focus:border-[#0000FF] transition-colors text-sm"
              />
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full p-4 rounded-full bg-[#0000FF] text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </section>

      <Visit />
      <Footer />
    </main>
  );
};
