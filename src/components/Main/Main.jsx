// src/components/Main/Main.jsx
import React, { useContext, useEffect, useState } from "react";
import { unitContext } from "../../AppContext";
import { getWeatherByCity } from "../../API/weatherAPI";
import marker from "../../assets/marker.svg";
import aim from "../../assets/aim.svg";
import bg from "../../assets/Cloud-background.png";

const Main = ({ weatherData = null, unit = "metric" }) => {
  const temperature = weatherData ? weatherData.main.temp : "--";
  const weatherDescription = weatherData
    ? weatherData.weather[0].description
    : "--";
  const cityName = weatherData ? weatherData.name : "--";
  const iconUrl = weatherData
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    : "";

  return (
    <aside className="relative bg-[#1E213A] w-full lg:w-1/3 h-screen text-center p-6 flex flex-col justify-between gap-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 0.05,
        }}
      ></div>
      <div className="flex justify-between items-center relative z-10">
        <button className="text-[#E7E7EB] px-4 py-2 bg-[#6E707A]">
          Search for places
        </button>
        <div className="bg-[#6E707A] rounded-full p-2">
          <img src={aim} alt="Locate" className="w-6 cursor-pointer" />
        </div>
      </div>
      <img
        src={iconUrl}
        alt={weatherDescription}
        className={`mx-auto relative z-10 w-60 ${!weatherData ? "hidden" : ""}`}
      />
      <h1 className="text-9xl font-medium text-white relative z-10">
        {Math.round(temperature)}
        <span className="text-4xl text-[#6E707A]">
          °{unit === "metric" ? "C" : "F"}
        </span>
      </h1>
      <h3 className="text-3xl font-semibold text-[#A09FB1] relative z-10">
        {weatherDescription}
      </h3>
      <div className="relative z-10">
        <div>
          Today <span className="mx-2">•</span>{" "}
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </div>
        <div className="flex justify-center items-center mt-2">
          <img src={marker} alt="Location" className="w-4" />
          <p className="ml-2">{cityName}</p>
        </div>
      </div>
      {!weatherData && <div className="text-white text-2xl font-bold">--</div>}
    </aside>
  );
};

export default Main;
