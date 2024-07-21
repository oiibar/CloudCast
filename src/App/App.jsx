import React, { useContext, useState } from "react";
import { unitContext } from "../AppContext";
import useWeatherData from "./hooks/useWeatherData";
import Main from "../sections/Main/Main";
import Forecast from "../sections/Forecast/Forecast";
import TodayDetails from "../sections/TodayDetails/TodayDetails";
import SearchModal from "./components/SearchModal";

const App = () => {
  const { unit, city } = useContext(unitContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { weatherData, forecast, error } = useWeatherData(city, unit);

  const toggleSearchModal = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      {isSearchOpen ? (
        <SearchModal onClose={toggleSearchModal} />
      ) : (
        <>
          <Main
            weatherData={weatherData}
            unit={unit}
            onOpenSearch={toggleSearchModal}
          />
          <section className="flex flex-col flex-grow lg:w-2/3 text-[#E7E7EB]">
            <Forecast forecast={forecast} unit={unit} />
            <TodayDetails weatherData={weatherData} unit={unit} />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
