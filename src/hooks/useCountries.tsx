// Libraries
import { useState, useEffect } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { NetworkStatus } from "@apollo/client";

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
  const [getCountry, { error, loading }] = useLazyQuery<CountryQueryResult>(
    GET_COUNTRY,
    {
      client,
      onError: () => {
        setCountry(null);
      },
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
    try {
      const { data } = await getCountry({ variables: { code: newCode } });
      if (data) {
        setCountry(data.country);
      }
    } catch (error) {
      console.error("Error refetching country:", error);
    }
    console.log("!!!!!!!!!!!!!!!!!!!! error", error);
  };

  return { countries, country, error, loading, handleCountryClick };
};
