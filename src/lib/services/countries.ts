import baseFetch from "./httpApi";
import { gql, useQuery } from "@apollo/client";
import client from "./graphqlClient";
import { CountriesResponse, Country } from "lib/types/countries.types";

export async function getCountries(): Promise<CountriesResponse[]> {
  try {
    const data = await baseFetch.get<CountriesResponse[]>("/api/countries");
    console.log("data", data);
    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
}
