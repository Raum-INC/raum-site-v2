import React from "react";
import popular_location_1 from "../../assets/guest/popular_locations_1.png";
import popular_location_2 from "../../assets/guest/popular_locations_1.png";
import popular_location_3 from "../../assets/guest/popular_locations_1.png";
import popular_location_4 from "../../assets/guest/popular_locations_1.png";

type Location = {
  name: string;
  image: string;
  properties: string;
};

const PopularLocations: React.FC = () => {
  const locations: Location[] = [
    {
      name: "Lekki, Lagos",
      image: popular_location_1,
      properties: "120+",
    },
    {
      name: "Ikeja, Lagos",
      image: popular_location_2,
      properties: "120+",
    },
    {
      name: "Ikoyi, Lagos",
      image: popular_location_3,
      properties: "120+",
    },
    {
      name: "Victoria Island, Lagos",
      image: popular_location_4,
      properties: "120+",
    },
  ];

  return (
    <main className="flex h-auto w-full flex-col items-center justify-center gap-10 p-4">
      <h3 className="text-xl font-semibold xl:text-4xl text-white">
        Popular locations
      </h3>

      <p className="text-center text-lg xl:text-2xl text-white">
        Explore the most sought-after neighborhoods with the highest demand and
        <br />
        best investment potential.
      </p>

      <section className="mx-auto grid h-auto w-full max-w-7xl grid-cols-1 gap-10 p-4 xl:grid-cols-2">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex h-[500px] w-full flex-col rounded-xl border border-[rgb(58,58,58)]"
          >
            <div className="h-4/5 w-full">
              <img
                src={location.image}
                alt={location.name}
                className="h-full w-full rounded-t-xl object-cover"
              />
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-4 p-5">
              <p className="text-lg font-medium xl:text-2xl text-white">
                {location.name}
              </p>

              <p className="flex w-full items-center justify-between text-base text-[#acacac]">
                Properties{" "}
                <span className="text-white">{location.properties}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PopularLocations;
