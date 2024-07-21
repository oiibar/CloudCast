import React, { createContext, useState } from "react";

export const unitContext = createContext();

export const AppProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric");
  const [city, setCity] = useState("Oskemen");

  return (
    <unitContext.Provider value={{ unit, city, setUnit, setCity }}>
      {children}
    </unitContext.Provider>
  );
};
