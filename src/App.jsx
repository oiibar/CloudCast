// src/App.jsx
import React from "react";
import Main from "./components/Main/Main";
import Forecast from "./components/Forecast/Forecast";
import TodayDetails from "./components/TodayDetails/TodayDetails";
import { AppProvider } from "./AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="flex flex-col lg:flex-row">
        <Main />
        <div className="flex flex-col flex-grow lg:w-2/3 text-[#E7E7EB]">
          <Forecast />
          <TodayDetails />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
