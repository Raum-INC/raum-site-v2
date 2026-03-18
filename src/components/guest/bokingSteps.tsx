import reserveSteps from "../../assets/guest/reserveSteps.png";
import { Link } from "react-router-dom";

const earn = [
  {
    id: 0,
    title: `Download the app or use our web listing`,
    description: `Browse, book, and manage your reservations from anywhere. Download our app for a smoother experience on the go, or explore our fully responsive website for quick bookings.`,
  },
  {
    id: 1,
    title: `Set your availability`,
    description: `Tell us your preferred dates, check-in time, and how long you plan to stay. We'll show you only what's available and ready for your timeframe.`,
  },
  {
    id: 2,
    title: `Check in`,
    description: `Once your reservation is confirmed, just show up and settle in. You'll receive full check-in details ahead of time — from directions to access instructions.`,
  },
];

export const StepsToBook = () => {
  return (
    <main className="h-auto w-full px-8 py-0 lg:p-4">
      <section className="my-10 flex h-full w-full flex-col justify-center gap-10 lg:items-center">
        <h2
          itemProp="title"
          className="text-2xl font-semibold md:text-5xl text-white"
        >
          Earn money with Raum Africa
        </h2>
        <section className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
          <div className="w-full lg:h-full lg:w-1/2">
            <img
              itemProp="image"
              src={reserveSteps}
              alt="fine-looking-man-raum"
              className="hidden rounded-3xl object-cover object-center lg:block lg:h-[570px] lg:w-[645px]"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-between gap-5 md:h-[570px] md:w-[645px] lg:py-5">
            <ul className="flex w-full flex-col items-start justify-between gap-5 lg:h-[70%]">
              {earn.map((data, index) => (
                <li itemProp="list" key={index} className="flex w-full gap-12">
                  <div className="w-full space-y-3 border-l-2 border-[#0000ff] pl-5">
                    <p
                      itemProp="subtitle"
                      className="text-sm font-semibold md:text-xl text-white"
                    >
                      {data.title}
                    </p>
                    <p
                      itemProp="description"
                      className="text-xs text-neutral-300 md:text-base"
                    >
                      {data.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              itemProp="hostLink"
              itemScope
              itemType="https://raum.africa/admin-dashboard"
              to="/admin-dashboard"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className="h-[34px] w-[140px] rounded-full border-2 border-[#0000ff] text-base font-bold transition-all duration-300 ease-in-out cursor-pointer text-white md:h-[50px] md:w-[205px]">
                Reserve Now
              </button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
};
