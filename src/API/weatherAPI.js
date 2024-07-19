import axios from "axios";

const API_KEY = "your_api_key";
const BASE_URL = "https://api.weatherapi.com/v1";

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    throw error;
  }
};
