import React from "react";

const Humidity = ({ humidity }) => {
  return (
    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 justify-center items-center text-center gap-4 px-6 py-4 bg-[#1E213A]">
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
