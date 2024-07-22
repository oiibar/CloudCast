import React from "react";
import { formatDate } from "../../API/utils/formatDate";

const ForecastItem = ({ item, unit }) => {
  const { date, temp, icon } = item;
  const formattedDate = formatDate(date);
  const temperature = Math.round(temp);

  return (
    <div className="forecastItem">
      <p>{formattedDate}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="Weather Icon"
        className="w-16"
      />
      <div className="flex justify-between gap-4 text-lg">
        <p>
          {temperature}°{unit === "metric" ? "C" : "F"}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ForecastItem);
