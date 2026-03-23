import avatar1 from "../../assets/invest/avatar1.svg";
import amara from "../../assets/invest/amara.png";
import avatar3 from "../../assets/invest/avatar3.svg";
export const testimonialsData = [
  {
    img: avatar1,
    name: "Henry Udu",
    test: `Investing with Raum Africa has been a game-changer for me! The returns are consistent, and I love how they handle things.`,
  },
  {
    img: amara,
    name: "Amara Uche",
    test: `Raum Africa's transparency is unmatched. The yearly performance reports keep me informed.`,
  },
  {
    img: avatar3,
    name: "Adebolawale Lara",
    test: `I was hesitant at first, but Raum  made the process so simple and returns have exceeded my expectations.`,
  },
];

export const Testimonials = () => {
  return (
    <main
      itemScope
      itemType={`https://raum.africa/testimonials`}
      className="mx-auto flex h-auto w-full max-w-6xl flex-col gap-16 p-10"
    >
      <h4
        itemProp="title"
        className="text-center text-xl font-semibold md:text-4xl text-white"
      >
        Testimonials from our investors
      </h4>

      <section className="grid h-auto w-full grid-cols-1 items-center justify-center gap-10 md:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <div
            className="flex h-full w-fit flex-col items-center justify-start gap-5"
            key={index}
          >
            <div className="flex h-[120px] w-[120px] items-center justify-start">
              <img
                itemProp={`Testimonial: ${testimonial.name}`}
                src={testimonial.img}
                alt={testimonial.name}
                className="aspect-square w-[120px] rounded-full"
              />
            </div>
            <div className="flex h-[170px] flex-col items-start justify-between rounded-lg bg-[#25242A] p-5">
              <p className="line-clamp-4 text-neutral-100">
                {testimonial.test}
              </p>
              <p
                itemProp={`Testimonial: ${testimonial.name}`}
                className="font-semibold text-neutral-400"
              >
                {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
