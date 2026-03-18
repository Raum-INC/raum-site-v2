import advanceBooking from "../../assets/guest/advanceBooking.png";

const AdvanceBooking = () => {
  return (
    <main className="my-20 flex h-auto w-full flex-col items-center justify-center gap-10">
      <div className="flex h-auto w-full flex-col items-center justify-center gap-10 p-8">
        <h5 className="text-xl font-semibold xl:text-4xl text-white">
          Book an apartment in Advance
        </h5>
        <p className="w-full text-center text-lg xl:w-2/3 xl:text-2xl text-neutral-200">
          Reserve your next apartment ahead of time and avoid last-minute
          stress. With just a few clicks, you can secure a comfortable,
          well-located space that fits your lifestyle — before someone else gets
          it. Planning ahead has never been this easy.
        </p>
      </div>
      <section className="h-[500px] w-full xl:h-screen">
        <img
          src={advanceBooking}
          alt="Book in Advance with Raum Africa"
          className="h-full w-full object-cover"
        />
      </section>
    </main>
  );
};

export default AdvanceBooking;
