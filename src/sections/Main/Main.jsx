import React from "react";
import bg from "../../assets/bg.png";
import WeatherInfo from "./components/WeatherInfo";
import LocationButton from "./components/LocationButton";
import { useLocation } from "./hooks/useLocation";

const Main = ({ weatherData, unit, onOpenSearch, setWeatherData }) => {
  const { locationError, handleLocation } = useLocation(setWeatherData, unit);

  return (
    <aside className="main">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 0.05,
        }}
      ></div>
      <div className="flex justify-between items-center relative">
        <button className="px-4 py-2 bg-[#6E707A]" onClick={onOpenSearch}>
          Search for places
        </button>
        <LocationButton onClick={handleLocation} />
      </div>
      <WeatherInfo weatherData={weatherData} unit={unit} />
      {locationError && (
        <div className="text-red-500 text-2xl font-bold">{locationError}</div>
      )}
      {!weatherData && <div className="text-white text-2xl font-bold">--</div>}
    </aside>
  );
};

export default Main;
