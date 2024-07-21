import React from "react";
import { AiOutlineAim } from "react-icons/ai";

const LocationButton = ({ onClick }) => (
  <div
    className="bg-[#6E707A] rounded-full p-2 cursor-pointer"
    onClick={onClick}
  >
    <AiOutlineAim />
  </div>
);

export default LocationButton;
