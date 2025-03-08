import axios from "axios";

const API_KEY = "4nVemzdiLjKCBlGYBt1kLnWQwyTOpFPDgtw5j5gP";

const defaultAPIUrl = `https://api.eia.gov/v2/electricity/rto/fuel-type-data/data/?api_key=${API_KEY}&frequency=hourly&data[0]=value&facets[fueltype][]=NUC&sort[0][column]=period&sort[0][direction]=desc&sort[1][column]=value&sort[1][direction]=desc&offset=0&length=1000`;

export const fetchEIAData = async (apiUrl = defaultAPIUrl) => {
  try {
    const response = await axios.get(apiUrl);

    // Extract the correct data array
    if (!response.data.response || !Array.isArray(response.data.response.data)) {
      console.error("Unexpected API response format:", response.data);
      return []; // Return an empty array to prevent crashes
    }

    console.log("from the source", response.data.response.data);
    return response.data.response.data; // Extract and return the correct data array
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
};
