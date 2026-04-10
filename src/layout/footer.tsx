import { RiInstagramFill } from "react-icons/ri";
import logo from "../assets/Logo.svg";
import aws from "../assets/aws.svg";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#151419]">
      {/* Main footer content */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10">
        {/* Left — Logo */}
        <img src={logo} alt="Logo" width={100} height={30} />

        {/* Right — AWS + socials */}
        <div className="flex flex-col items-center sm:items-end gap-5">
          {/* AWS Startup + Find us */}
          <div className="flex flex-row items-start gap-5 text-white text-sm">
            {/* AWS logo text */}
            <img src={aws} alt="aws logo" className="h-7.5 w-12.5" />
            <span className="text-white font-medium">Startup</span>
            <span className="text-[#686767]">|</span>
            <span className="text-white flex flex-row items-center gap-1 font-medium">
              <p>Find us</p>
              <a
                href="#"
                className="text-[#0000FF] font-medium hover:underline"
              >
                here
              </a>
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-8">
            {[
              { icon: MdEmail, href: "hello@raum.africa" },
              {
                icon: RiInstagramFill,
                href: "https://www.instagram.com/raumafrica/",
              },
              { icon: FaSquareXTwitter, href: "https://x.com/raumafrica" },
              {
                icon: BsLinkedin,
                href: "https://www.linkedin.com/company/rauminc",
              },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                className=" text-white hover:border-white transition-all hover:text-white/80 duration-200"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2e2e2e] py-4 px-6 text-center text-[#aaaaaa] text-sm">
        2024 Raum Soulutions Inc.
      </div>
    </footer>
  );
}
