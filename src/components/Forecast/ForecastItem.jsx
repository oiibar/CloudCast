import React from "react";
import { formatDate } from "../../API/utils/formatDate";

const ForecastItem = ({ item, unit }) => {
  const { date, temp, icon } = item;
  const formattedDate = formatDate(date);
  console.log(date, temp, icon);

  return (
    <div className="forecastItem">
      <p>{formattedDate}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="Weather Icon"
        className="w-24"
      />
      <div className="flex justify-between gap-4 text-lg">
        <p className="">
          {Math.round(temp)}°{unit === "metric" ? "C" : "F"}
        </p>
      </div>
    </div>
  );
};

export default ForecastItem;
