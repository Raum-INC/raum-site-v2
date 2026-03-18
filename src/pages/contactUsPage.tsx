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

export const ContactUs = () => {
  const containerVariant: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const contactVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="flex flex-col space-y-[-2px] md:space-y-20 text-white">
      <Navbar />
      <section
        itemScope
        itemType="https://raum.africa/contact"
        className="w-full mx-auto h-auto lg:h-screen flex flex-col pt-28 bg-[#151419] lg:flex-row justify-center items-center"
      >
        <div className="w-full lg:w-3/5 h-[650px] lg:h-full">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-4/5 h-full flex flex-col justify-start items-start gap-5 p-8 lg:p-28"
          >
            <h1 itemProp="title" className="text-2xl lg:text-5xl font-bold">
              Contact Raum Africa
            </h1>

            <p
              itemProp="description"
              className="text-base lg:text-lg font-medium text-[#6c6c6c]"
            >
              Do you have questions, comment, or a suggestion for us? Whether
              you need more information about our products or services, we would
              love to hear from you.
            </p>

            <div className="flex gap-3">
              <CiMail className="mt-1" />
              <p
                itemProp="email"
                className="flex flex-col gap-1 text-base lg:text-lg"
              >
                Email <span className="text-[#6c6c6c]">hello@raum.africa</span>
              </p>
            </div>

            <div className="flex gap-3">
              <BsTelephone className="mt-1" />
              <p
                itemProp="phone"
                className="flex flex-col gap-1 text-base lg:text-lg"
              >
                Phone <span className="text-[#6c6c6c]">+234 814 822 8901</span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p>Follow us on social media</p>

              <div className="flex gap-3 justify-start items-center">
                <a itemProp="facebook" href="https://www.facebook.com/raumincc">
                  <BiLogoFacebook size={20} />
                </a>

                <a itemProp="twitter" href="https://twitter.com/rauminc">
                  <BiLogoTwitter size={20} />
                </a>

                <a
                  itemProp="instagram"
                  href="https://www.instagram.com/rauminc.hq/"
                >
                  <BiLogoInstagramAlt size={20} />
                </a>

                <a
                  itemProp="linkedin"
                  href="https://www.linkedin.com/company/rauminc/"
                >
                  <BiLogoLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/5 h-[700px] lg:h-full bg-white lg:relative">
          <motion.div
            variants={contactVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-0 right-0 top-[550px] lg:top-10 lg:left-[-190px] w-11/12 h-[800px] mx-auto lg:w-[600px] lg:h-[90%] bg-white rounded-3xl drop-shadow-about"
          >
            <div className="w-full h-full flex flex-col justify-center items-center">
              <form className="p-8 py-10 w-full flex flex-col lg:grid lg:grid-cols-2 gap-5">
                <label className="flex flex-col gap-3 text-[#121212] font-bold">
                  Name
                  <input
                    type="text"
                    name="FName"
                    placeholder="Full Name"
                    className="font-normal p-4 border border-[#F1F1F1] rounded-full outline-none"
                  />
                </label>

                <label className="flex flex-col gap-3 text-[#121212] font-bold">
                  Email
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    className="font-normal p-4 border border-[#F1F1F1] rounded-full outline-none"
                  />
                </label>

                <label className="flex flex-col gap-3 text-[#121212] font-bold">
                  Phone
                  <input
                    type="tel"
                    name="Phone_Number"
                    placeholder="Phone"
                    className="font-normal p-4 border border-[#F1F1F1] rounded-full outline-none"
                  />
                </label>

                <label className="flex flex-col gap-3 text-[#121212] font-bold">
                  Subject
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    className="font-normal p-4 border border-[#F1F1F1] rounded-full outline-none"
                  />
                </label>

                <label className="col-span-2 flex flex-col gap-2">
                  Leave us a message:
                  <textarea
                    rows={5}
                    className="font-normal w-full p-3 border border-[#F1F1F1] text-black rounded-xl outline-none resize-none"
                  />
                </label>

                <input
                  type="submit"
                  value="Send message"
                  className="col-span-2 p-4 rounded-full bg-[#121212] text-white font-semibold cursor-pointer"
                />
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Visit />
      <Footer />
    </main>
  );
};
