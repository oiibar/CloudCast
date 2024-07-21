import React from "react";

const Pressure = ({ pressure }) => {
  return (
    <div className="detailItem">
      <h2 className="text-lg font-semibold">Air Pressure</h2>
      <p className="text-4xl">
        <span className="text-5xl font-bold">{pressure}</span> hPa
      </p>
    </div>
  );
};

export default Pressure;
