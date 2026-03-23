import React from "react";
import { useLocation } from "react-router-dom";
import invest_image from "../../assets/invest/invest-image.svg";
import hostMockup from "../../assets/guest/hostMockup.png";

interface StepItem {
  id: number;
  title: string;
  subtitle: string;
  link?: string;
}

const howToHost: StepItem[] = [
  {
    id: 1,
    title: "Accept a booking request",
    subtitle: "The Host app will automatically connect you with guests.",
  },
  {
    id: 2,
    title: "Welcome your guest",
    subtitle:
      "The app will guide you to your guest's location. Once there, welcome them.",
  },
  {
    id: 3,
    title: "Repeat to increase your income",
    subtitle:
      "Continue hosting and earning or go offline — you're always in full control of your hosting schedule.",
  },
];

export const howToInvest: StepItem[] = [
  {
    id: 1,
    title: "Step 1",
    subtitle: "Apply to invest.",
    link: "https://forms.gle/oMTy5GNUyS7k4Ub76",
  },
  {
    id: 2,
    title: "Step 2",
    subtitle: "Fund your investment with as little as $500.",
  },
  {
    id: 3,
    title: "Step 3",
    subtitle:
      "We allocate your investment to a high-performing short-let property.",
  },
  {
    id: 4,
    title: "Step 4",
    subtitle:
      "Relax & earn! You receive quarterly profits, with a potential 30% returns in 12 months.",
  },
];

export const HowToInvest: React.FC = () => {
  const location = useLocation();
  const isInvest = location.pathname.includes("invest");
  const steps = isInvest ? howToInvest : howToHost;

  return (
    <main
      itemScope
      itemType={
        isInvest ? "https://raum.africa/invest" : "https://raum.africa/host"
      }
      className="w-full px-4 sm:px-8 py-16"
    >
      <section className="max-w-6xl mx-auto bg-[#252525] rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Content */}
          <div className="flex flex-col gap-8 p-8 sm:p-10 lg:p-14 lg:w-3/5">
            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h3
                itemProp="title"
                className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight"
              >
                {isInvest
                  ? "How the investment works"
                  : "How the Raum Hosts app works"}
              </h3>
              <p
                itemProp="subtitle"
                className="text-[#aaaaaa] text-sm sm:text-base leading-relaxed"
              >
                {isInvest
                  ? "How Raum Africa's Co-Hosting Investment Works"
                  : "Reliable and user-friendly, with all the essentials for hosting and earning at your convenience."}
              </p>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-7">
              {steps.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  {/* Number badge */}
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0000FF] flex items-center justify-center text-white text-sm font-bold">
                    {item.id}
                  </span>

                  {/* Text */}
                  <div className="flex flex-col gap-1 pt-0.5">
                    <p
                      itemProp="title"
                      className="text-white font-semibold text-sm sm:text-base"
                    >
                      {item.title}
                    </p>
                    <p
                      itemProp="description"
                      className="text-[#aaaaaa] text-sm leading-relaxed"
                    >
                      {item.subtitle}{" "}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-white text-[#252525] text-xs font-semibold px-3 py-1 rounded-full hover:bg-white/90 transition-colors"
                        >
                          Apply here →
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex items-end justify-center lg:w-2/5 px-8 pt-4 pb-0 lg:pt-0">
            <img
              itemProp="image"
              src={isInvest ? invest_image : hostMockup}
              alt="raum app"
              className="w-[240px] sm:w-[280px] lg:w-full max-w-[320px] h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
