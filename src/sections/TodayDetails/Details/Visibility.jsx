import React from "react";

const Visibility = ({ visibility, unit }) => {
  const convertVisibility = (visibility, unit) =>
    unit === "imperial"
      ? (visibility / 1609.34).toFixed(1) // Convert meters to miles
      : (visibility / 1000).toFixed(1); // Convert meters to kilometers

  return (
    <div className="detailItem">
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

export default React.memo(Visibility);
