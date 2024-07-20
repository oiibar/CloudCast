import { getWeatherByCity } from "../api/weatherAPI";

export const fetchCityWeather = async (city = "Astana") => {
  try {
    const weatherData = await getWeatherByCity(city);
    return weatherData;
  } catch (error) {
    throw error;
  }
};
