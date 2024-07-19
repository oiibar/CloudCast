import React, { useState } from "react";

const Header = () => {
  const [unit, setUnit] = useState("C");

  const handleToggle = (selectedUnit) => {
    setUnit(selectedUnit);
  };
  return (
    <header className="font-bold text-md flex justify-end mb-6 gap-2">
      <button
        onClick={() => handleToggle("C")}
        className={`${
          unit === "C"
            ? "text-[#110E3C] bg-[#E7E7EB]"
            : "text-[#E7E7EB] bg-[#585676] hover:text-[#110E3C] hover:bg-[#E7E7EB]"
        } transition-colors duration-300 rounded-full p-2 w-10 h-10 flex items-center justify-center`}
      >
        °C
      </button>
      <button
        onClick={() => handleToggle("F")}
        className={`${
          unit === "F"
            ? "text-[#110E3C] bg-[#E7E7EB]"
            : "text-[#E7E7EB] bg-[#585676] hover:text-[#110E3C] hover:bg-[#E7E7EB]"
        } transition-colors duration-300 rounded-full p-2 w-10 h-10 flex items-center justify-center`}
      >
        °F
      </button>
    </header>
  );
};

export default Header;
