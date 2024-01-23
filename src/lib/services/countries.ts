import baseFetch from "./httpApi";

import { CountriesResponse } from "lib/types/countries.types";

export async function getCountries(): Promise<CountriesResponse[]> {
  try {
    const data = await baseFetch.get<CountriesResponse[]>("/api/countries");
    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
}
