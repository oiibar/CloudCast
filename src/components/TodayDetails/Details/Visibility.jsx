import React from "react";

const Visibility = ({ visibility, unit }) => {
  const convertVisibility = (visibility, unit) => {
    if (unit === "imperial") {
      return (visibility / 1609.34).toFixed(1); // Convert meters to miles
    }
    return (visibility / 1000).toFixed(1); // Convert meters to kilometers
  };

  return (
    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 justify-center items-center text-center gap-4 px-10 py-4 bg-[#1E213A]">
      <h2 className="text-lg font-semibold">Visibility</h2>
      <p className="text-4xl">
        <span className="text-5xl font-bold">
          {convertVisibility(visibility, unit)}
        </span>{" "}
        {unit === "metric" ? "km" : "miles"}
      </p>
    </div>
  );
};

export default Visibility;
