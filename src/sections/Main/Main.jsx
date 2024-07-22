import React, { useCallback } from "react";
import bg from "../../assets/bg.png";
import WeatherInfo from "./components/WeatherInfo";
import LocationButton from "./components/LocationButton";
import { useLocation } from "./hooks/useLocation";

const Main = React.memo(
  ({ weatherData, unit, onOpenSearch, setWeatherData }) => {
    const { locationError, handleLocation } = useLocation(setWeatherData, unit);

    const handleOpenSearch = useCallback(() => {
      onOpenSearch();
    }, [onOpenSearch]);

    return (
      <aside className="main">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className="flex justify-between items-center relative">
          <button className="px-4 py-2 bg-[#6E707A]" onClick={handleOpenSearch}>
            Search for places
          </button>
          <LocationButton onClick={handleLocation} />
        </div>
        <WeatherInfo weatherData={weatherData} unit={unit} />
        {locationError && (
          <div className="text-red-500 text-2xl font-bold">{locationError}</div>
        )}
        {!weatherData && (
          <div className="text-white text-2xl font-bold">--</div>
        )}
      </aside>
    );
  }
);

export default Main;
