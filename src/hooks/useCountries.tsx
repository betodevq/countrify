// Libraries
import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

// Services
import client from "lib/services/graphqlClient";
import { getCountries } from "lib/services/countries";

// Types
import { CountriesResponse, CountryType } from "lib/types/countries.types";

const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      phones
      code
      continent {
        name
      }
      awsRegion
      currency
      languages {
        code
        name
      }
    }
  }
`;

interface CountryQueryResult {
  country: CountryType;
}

export const useCountries = () => {
  const [countries, setCountries] = useState<CountriesResponse[]>([]);
  const [country, setCountry] = useState<CountryType | null>(null);
  const { loading, error, data, refetch } = useQuery<CountryQueryResult>(
    GET_COUNTRY,
    {
      client,
      skip: true,
    }
  );

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await getCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryClick = async (newCode: string) => {
    if (newCode === country?.code) return;

    const { data } = await refetch({ code: newCode });
    if (data) {
      setCountry(data.country);
    }
  };

  return { countries, country, loading, error, handleCountryClick };
};
