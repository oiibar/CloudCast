import React from "react";
import bg from "../../assets/bg.png";
import { AiOutlineAim } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const Main = ({ weatherData, unit, onOpenSearch }) => {
  const temperature = weatherData ? weatherData.main.temp : "--";
  const weatherDescription = weatherData
    ? weatherData.weather[0].description
    : "--";
  const cityName = weatherData ? weatherData.name : "--";
  const iconUrl = weatherData
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    : "";

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
        <div className="bg-[#6E707A] rounded-full p-2 cursor-pointer">
          <AiOutlineAim />
        </div>
      </div>
      <img
        src={iconUrl}
        alt={weatherDescription}
        className={`mx-auto relative z-10 w-60 ${!weatherData ? "hidden" : ""}`}
      />
      <h1 className="text-9xl">
        {Math.round(temperature)}
        <span className="text-4xl text-[#6E707A]">
          °{unit === "metric" ? "C" : "F"}
        </span>
      </h1>
      <h3 className="text-3xl font-semibold text-[#A09FB1]">
        {weatherDescription}
      </h3>
      <div className="text-[#88869D]">
        <div>
          Today <span className="mx-2">•</span>{" "}
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </div>
        <div className="flex justify-center items-center">
          <IoLocationSharp />
          <p className="ml-2">{cityName}</p>
        </div>
      </div>
      {!weatherData && <div className="text-white text-2xl font-bold">--</div>}
    </aside>
  );
};

export default Main;
