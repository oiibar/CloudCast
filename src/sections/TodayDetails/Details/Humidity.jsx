import React from "react";

const Humidity = ({ humidity }) => (
  <div className="detailItem">
    <h2 className="text-lg font-semibold">Humidity</h2>
    <p className="text-4xl">
      <span className="text-5xl font-bold">{humidity}</span> %
    </p>
    <div className="relative w-full">
      <div className="flex justify-between text-[#A09FB1]">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className="mb-6 h-2 rounded-lg w-full bg-[#E7E7EB] dark:bg-neutral-600 relative">
        <div
          className="h-2 rounded-lg bg-[#FFEC65]"
          style={{ width: `${humidity}%` }}
        ></div>
        <span className="absolute right-0 bottom-[-1.5rem] text-[#A09FB1]">
          %
        </span>
      </div>
    </div>
  </div>
);

export default React.memo(Humidity);
