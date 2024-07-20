import React from "react";
import dir from "../../../assets/dir.svg";
import { formatWindDirection } from "../../../API/utils/formatWindDirection";

const Wind = ({ wind, unit }) => {
  const { speed, deg } = wind;
  const direction = formatWindDirection(deg);

  const convertWindSpeed = (speed, unit) => {
    if (unit === "imperial") {
      return (speed * 2.237).toFixed(1); // Convert from m/s to mph
    }
    return speed.toFixed(1); // m/s
  };

  return (
    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 justify-center items-center text-center gap-4 px-6 py-4 bg-[#1E213A]">
      <h2 className="text-lg font-semibold">Wind Status</h2>
      <p className="text-4xl">
        <span className="text-5xl font-bold">
          {convertWindSpeed(speed, unit)}
        </span>{" "}
        {unit === "metric" ? "m/s" : "mph"}
      </p>
      <div className="flex gap-2 items-center">
        <div className="w-12 h-12 bg-[#FFFFFF] opacity-30 rounded-full flex items-center justify-center">
          <img src={dir} alt="Wind Direction" className="w-6 h-6" />
        </div>
        <p>{direction}</p>
      </div>
    </div>
  );
};

export default Wind;
