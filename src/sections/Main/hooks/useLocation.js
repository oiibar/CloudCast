import { useState, useCallback } from "react";
import { getWeatherByLocation } from "../../../API/weatherAPI";

export const useLocation = (setWeatherData, unit) => {
  const [locationError, setLocationError] = useState(null);

  const handleLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const data = await getWeatherByLocation(latitude, longitude, unit);
            setWeatherData(data);
          } catch (error) {
            setLocationError("Failed to fetch weather data for your location.");
          }
        },
        (error) => {
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  }, [setWeatherData, unit]);

  return { locationError, handleLocation };
};
