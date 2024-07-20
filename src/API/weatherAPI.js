import axios from "axios";
import { API_KEY, BASE_URL, FORECAST_URL, REQUEST_TIMEOUT } from "./config";

export const getWeatherByCity = async (city, units = "metric") => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        q: city,
        appid: API_KEY,
        units: units,
      },
      timeout: REQUEST_TIMEOUT,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    throw error;
  }
};

export const getForecastByCity = async (city, units = "metric") => {
  try {
    const response = await axios.get(`${FORECAST_URL}`, {
      params: {
        q: city,
        appid: API_KEY,
        units: units,
      },
      timeout: REQUEST_TIMEOUT,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast data", error);
    throw error;
  }
};

export const getWeatherByLocation = async (lat, lon, units = "metric") => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: units,
      },
      timeout: REQUEST_TIMEOUT,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data by location", error);
    throw error;
  }
};
