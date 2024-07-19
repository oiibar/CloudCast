import React from "react";
import Main from "./components/Main/Main";
import Forecast from "./components/Forecast/Forecast";
import TodayDetails from "./components/TodayDetails/TodayDetails";

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Main />
      <div className="flex flex-col flex-gro lg:w-2/3  text-[#E7E7EB]">
        <Forecast />
        <TodayDetails />
      </div>
    </div>
  );
};

export default App;
