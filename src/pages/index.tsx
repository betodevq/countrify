import React from "react";
import Map from "Components/Map"; // Adjust the import path based on your project structure
import { useCountries } from "hooks/useCountries";
import CountryInfo from "Components/CountryInfo";

export default function Home() {
  const { countries, country, loading, error, handleCountryClick } =
    useCountries();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;

  console.log(country);
  return (
    <div className=" h-screen p-4" id="container">
      <div className="flex flex-col gap-4 mb-8" id="page-title">
        <h1 className=" text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center dark:text-white">
          Countries of the World
        </h1>
      </div>
      <div className="  flex flex-row" id="map-info">
        <Map countries={countries} handleCountryClick={handleCountryClick} />
        <div className="p-8">
          {country && <CountryInfo country={country} />}
          {!country && (
            <p className="text-xl text-center self-center">
              Click on a country to learn more about it!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
