import React from "react";

const Pressure = ({ pressure }) => {
  return (
    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 justify-center items-center text-center gap-4 px-6 py-4 bg-[#1E213A]">
      <h2 className="text-lg font-semibold">Air Pressure</h2>
      <p className="text-4xl">
        <span className="text-5xl font-bold">{pressure}</span> hPa
      </p>
    </div>
  );
};

export default Pressure;
