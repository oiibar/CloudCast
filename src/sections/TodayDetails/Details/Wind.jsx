import React from "react";
import dir from "../../../assets/dir.svg";
import { formatWindDirection } from "../../../API/utils/formatWindDirection";

const Wind = ({ wind, unit }) => {
  const { speed = 0, deg = 0 } = wind; // Set default values
  const direction = formatWindDirection(deg);

  const convertWindSpeed = (speed, unit) => {
    if (typeof speed !== "number") return "--";
    if (unit === "imperial") {
      return (speed * 2.237).toFixed(1); // Convert from m/s to mph
    }
    return speed.toFixed(1); // m/s
  };

  return (
    <div className="detailItem">
      <h2 className="text-lg font-semibold">Wind Status</h2>
      <p className="text-4xl">
        <span className="text-5xl font-bold">
          {convertWindSpeed(speed, unit)}
        </span>{" "}
        {unit === "metric" ? "m/s" : "mph"}
      </p>
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 bg-[#FFFFFF] opacity-30 rounded-full flex items-center justify-center">
          <img
            src={dir}
            alt="Wind Direction"
            className="w-4 h-4"
            style={{ transform: `rotate(${deg}deg)` }}
          />
        </div>
        <p>{direction}</p>
      </div>
    </div>
  );
};

export default Wind;
