export interface CountriesResponse {
  Country: string;
  "ISO Code": string;
  Latitude: number;
  Longitude: number;
}
export interface CountryType {
  name: string;
  native: string;
  capital: string;
  emoji: string;
  phones: string[];
  code: string;
  awsRegion: string;
  continent: {
    name: string;
  };
  currency: string;
  languages: {
    code: string;
    name: string;
  }[];
}
