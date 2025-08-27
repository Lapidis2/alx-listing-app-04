import Filters from "@/components/common/Filters";
import PropertyCard from "@/components/common/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import React from "react";

export default function Home() {

  return (
    <>
    <section
      className="flex flex-col items-center justify-center border-2 border-gray-100 rounded-2xl w-[1440px] h-[500px] mx-auto my-4 bg-hero"
    >
        <h1 className="font-medium text-6xl text-white">
          Hello! Find your favorite place here!
        </h1>
        <p className="text-2xl text-white font-extralight mt-4">
          The best prices for over 2 million properties worldwide.
        </p>
    </section>
    <Filters />

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-screen p-12 gap-4">
                {PROPERTYLISTINGSAMPLE.map((property, index) => (
                    <PropertyCard
                        key={index}
                        name={property.name}
                        image={property.image}
                        price={property.price}
                        rating={property.rating}
                    />
                ))}
    </section>


    <section className="flex flex-col items-center space-y-3 p-12">
      <button arial-label = "button" type="button" className="px-6 py-2 rounded-full bg-gray-600 text-white font-semibold hover:bg-gray-700 mx-auto block mb-4">
        Show more
      </button>
      <p className="text-gray-400">Click to see more listings</p>
    </section>
    </>
  );
}