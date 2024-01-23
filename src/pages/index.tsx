import React from "react";
import Map from "components/Map"; // Adjust the import path based on your project structure
import { useCountries } from "hooks/useCountries";
import CountryInfo from "components/CountryInfo";

export default function Home() {
  const { countries, country, loading, error, handleCountryClick } =
    useCountries();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;

  console.log(country);
  return (
    <div className=" h-screen px-4 py-8" id="container">
      <div className="flex flex-col gap-4" id="page-title">
        <h1 className=" text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center dark:text-white">
          Countries of the World
        </h1>
      </div>
      <section
        className=" h-3/4 flex flex-col lg:flex-row my-8 flex-grow"
        id="map-info"
      >
        <Map
          className="h-1/2 lg:h-full lg:w-[70%]"
          countries={countries}
          handleCountryClick={handleCountryClick}
        />
        <div className="p-8 flex-grow w-1/3">
          {country && <CountryInfo country={country} />}
          {!country && (
            <p className="text-xl text-center self-center">
              Click on a country to learn more about it!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
