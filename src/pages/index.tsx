// Libraries
import React from "react";
import Map from "components/Map"; // Adjust the import path based on your project structure

// Components
import CountryInfo from "components/CountryInfo";
import Loader from "components/Loader";

// Hooks
import { useCountries } from "hooks/useCountries";

export default function Home() {
  const { countries, country, loading, error, handleCountryClick } =
    useCountries();

  return (
    <div className=" h-screen px-4 py-8 bg-black text-white" id="container">
      <div className="flex flex-col gap-4" id="page-title">
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center">
          Countries of the World
        </h1>
      </div>
      <section
        className="h-full lg:h-3/4 flex flex-col lg:flex-row my-8 flex-grow"
        id="map-info"
      >
        <Map
          className="h-1/2 lg:h-full lg:w-[70%]"
          countries={countries}
          handleCountryClick={handleCountryClick}
        />
        <div className="w-full p-8 flex-grow lg:w-1/3">
          {error && (
            <p className="text-xl text-center self-center text-red-500">
              <p>Something went wrong...</p>
              <p>Please try again!</p>
            </p>
          )}
          {!loading && !error && (
            <>
              {country && <CountryInfo country={country} />}
              {!country && (
                <p className="text-xl text-center self-center">
                  Click on a country to learn more about it!
                </p>
              )}
            </>
          )}
          {loading && <Loader />}
        </div>
      </section>
    </div>
  );
}
