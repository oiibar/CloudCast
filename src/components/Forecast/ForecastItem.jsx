import React from "react";
import Shower from "../../assets/Shower.png";

const ForecastItem = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6 py-4 gap-4 bg-[#1E213A]">
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
