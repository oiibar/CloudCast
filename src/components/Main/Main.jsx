import React from "react";
import shower from "../../assets/Shower.png";
import marker from "../../assets/marker.svg";
import aim from "../../assets/aim.svg";
import bg from "../../assets/Cloud-background.png";

const Main = () => {
  return (
    <aside className="relative bg-[#1E213A] w-1/3 h-screen text-center p-6 flex flex-col justify-between gap-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 0.05,
        }}
      ></div>
      <div className="flex justify-between items-center relative z-10">
        <button className="text-[#E7E7EB] px-4 py-2 bg-[#6E707A]">
          Search for places
        </button>
        <div className="bg-[#6E707A] rounded-full p-2">
          <img src={aim} alt="Locate" className="w-6 cursor-pointer" />
        </div>
      </div>
      <img src={shower} alt="Shower" className="mx-auto relative z-10" />
      <h1 className="text-9xl font-medium text-white relative z-10">
        <span className="text-[#E7E7EB]">15</span>{" "}
        <span className="text-4xl text-[#6E707A]">°C</span>
      </h1>
      <h3 className="text-3xl font-semibold text-[#A09FB1] relative z-10">
        Shower
      </h3>
      <div className="relative z-10">
        <div>
          Today <span className="mx-2">•</span> Fri, 5 June
        </div>
        <div className="flex justify-center items-center mt-2">
          <img src={marker} alt="Location: " className="w-4" />
          <p className="ml-2">Helsinki</p>
        </div>
      </div>
    </aside>
  );
};

export default Main;
