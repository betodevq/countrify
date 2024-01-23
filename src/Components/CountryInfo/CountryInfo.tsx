import { CountryType } from "lib/types/countries.types";

interface CountryProps {
  country: CountryType;
}

export default function CountryInfo({ country }: CountryProps) {
  const phoneLabel =
    country.phones.length === 1 ? "Phone Extension" : "Phone Extensions";
  const phoneNumbers = country.phones.map((phone) => `+${phone}`).join(", ");
  const languages = country.languages
    .map((language) => language.name)
    .join(", ");
  const region = country.awsRegion ? country.awsRegion : "Not Available";

  return (
    <div className="flex flex-col gap-8">
      <h1 className=" text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center dark:text-white">
        {country.name}
      </h1>
      <div className="text-xl flex flex-col gap-4">
        <p>
          <span className=" font-bold">Capital:</span> {country.capital}
        </p>
        <p>
          <span className=" font-bold">Continent:</span>{" "}
          {country.continent.name}
        </p>
        <p>
          <span className=" font-bold">Languages:</span> {languages}
        </p>
        <p>
          <span className=" font-bold">{phoneLabel}: </span> {phoneNumbers}
        </p>
        <p>
          <span className=" font-bold">AWS Region: </span> {region}
        </p>
        <p>
          <span className=" font-bold">Currency:</span> {country.currency}
        </p>
      </div>
    </div>
  );
}
