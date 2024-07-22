import React from "react";

const Button = ({ selected, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        selected
          ? "text-[#110E3C] bg-[#E7E7EB]"
          : "text-[#E7E7EB] bg-[#585676] hover:text-[#110E3C] hover:bg-[#E7E7EB]"
      } transition-colors duration-300 rounded-full p-2 w-10 h-10 flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
