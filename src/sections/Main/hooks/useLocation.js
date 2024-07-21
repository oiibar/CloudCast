import { useState } from "react";
import { getWeatherByLocation } from "../../../API/weatherAPI";

export const useLocation = (setWeatherData, unit) => {
  const [locationError, setLocationError] = useState(null);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Latitude:", latitude, "Longitude:", longitude);
          try {
            const data = await getWeatherByLocation(latitude, longitude, unit);
            console.log("Weather data by location:", data);
            setWeatherData(data);
          } catch (error) {
            console.error("Error fetching weather data by location:", error);
            setLocationError("Failed to fetch weather data for your location.");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  };

  return { locationError, handleLocation };
};
