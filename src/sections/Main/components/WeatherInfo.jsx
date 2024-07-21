import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const WeatherInfo = ({ weatherData, unit }) => {
  if (!weatherData) return null;

  const { temp } = weatherData.main;
  const { description, icon } = weatherData.weather[0];
  const cityName = weatherData.name;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <>
      <img
        src={iconUrl}
        alt={description}
        className={`mx-auto relative z-10 w-60 ${!weatherData ? "hidden" : ""}`}
      />
      <h1 className="text-9xl">
        {Math.round(temp)}
        <span className="text-4xl text-[#6E707A]">
          °{unit === "metric" ? "C" : "F"}
        </span>
      </h1>
      <h3 className="text-3xl font-semibold text-[#A09FB1]">{description}</h3>
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
    </>
  );
};

export default WeatherInfo;
