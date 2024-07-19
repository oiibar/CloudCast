import React from "react";
import Main from "./components/Main/Main";
import Forecast from "./components/Forecast/ForecastList";

const App = () => {
  return (
    <div className="flex">
      <Main />
      <Forecast />
    </div>
  );
};

export default App;
