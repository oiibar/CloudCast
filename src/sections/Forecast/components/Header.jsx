import React, { useContext } from "react";
import { unitContext } from "../../../AppContext";
import Button from "./Button";

const Header = () => {
  const { unit, setUnit } = useContext(unitContext);

  const handleToggle = (selectedUnit) => {
    setUnit(selectedUnit === "C" ? "metric" : "imperial");
  };

  return (
    <header className="font-bold text-md flex justify-end mb-6 gap-2">
      <Button selected={unit === "metric"} onClick={() => handleToggle("C")}>
        °C
      </Button>
      <Button selected={unit === "imperial"} onClick={() => handleToggle("F")}>
        °F
      </Button>
    </header>
  );
};

export default React.memo(Header);
