import React from "react";

const Humidity = ({ humidity }) => {
  return (
    <div className="detailItem">
      <h2 className="text-lg font-semibold">Humidity</h2>
      <p className="text-4xl">
        <span className="text-5xl font-bold">{humidity}</span> %
      </p>
      <div className="mb-6 h-2 rounded-lg w-full bg-[#E7E7EB] dark:bg-neutral-600">
        <div
          className="h-2 rounded-lg bg-[#FFEC65]"
          style={{ width: `${humidity}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Humidity;
