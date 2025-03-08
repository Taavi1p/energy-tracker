import { fetchEIAData } from "./api";

const API_KEY = "4nVemzdiLjKCBlGYBt1kLnWQwyTOpFPDgtw5j5gP";
const customAPIUrl = `https://api.eia.gov/v2/electricity/rto/fuel-type-data/data/?api_key=${API_KEY}&frequency=hourly&data[0]=value&facets[fueltype][]=SUN&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=1000`;

export const fetchSolarData = async () => {
  const data = await fetchEIAData(customAPIUrl);
  console.log("Fetched data:", data);
  return data;
};