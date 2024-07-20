import React from "react";
import Shower from "../../assets/Shower.png";

const ForecastItem = () => {
  return (
    <div className="forecastItem">
      <p>Sun, 7 June</p>
      <img src={Shower} alt="Shower" className="w-12" />
      <div className="flex justify-between gap-4 text-lg">
        <p className="">16°C</p>
        <p className="text-[#A09FB1]">11°C</p>
      </div>
    </div>
  );
};

export default ForecastItem;
