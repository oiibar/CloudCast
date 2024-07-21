import { useState, useEffect } from "react";
import { getWeatherByCity, getForecastByCity } from "../../API/weatherAPI";

const useWeatherData = (city, unit) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weather = await getWeatherByCity(city, unit);
        setWeatherData(weather);
        const forecastData = await getForecastByCity(city, unit);
        setForecast(forecastData);
      } catch (error) {
        console.error("Error fetching weather data", error);
        setError(error);
      }
    };

    if (city) fetchWeatherData();
  }, [city, unit]);

  return { weatherData, forecast, error };
};

export default useWeatherData;
