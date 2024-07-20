import React, { useContext, useEffect, useState } from "react";
import { unitContext } from "./AppContext";
import { getForecastByCity, getWeatherByCity } from "./API/weatherAPI";
import Main from "./components/Main/Main";
import Forecast from "./components/Forecast/Forecast";
import TodayDetails from "./components/TodayDetails/TodayDetails";

const App = () => {
  const { unit } = useContext(unitContext); // This will be `undefined` if not wrapped by `AppProvider`
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const city = "Astana"; // Replace with the default city name you want to fetch

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherByCity(city, unit);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    const fetchForecast = async () => {
      try {
        const data = await getForecastByCity(city, unit);
        setForecast(data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
    fetchForecast();
  }, [unit]);

  return (
    <div className="flex flex-col lg:flex-row">
      <Main weatherData={weatherData} unit={unit} />
      <div className="flex flex-col flex-grow lg:w-2/3 text-[#E7E7EB]">
        <Forecast forecast={forecast} unit={unit} />
        <TodayDetails weatherData={weatherData} unit={unit} />
      </div>
    </div>
  );
};

export default App;
