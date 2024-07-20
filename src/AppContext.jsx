import React, { createContext, useState } from "react";

export const unitContext = createContext();

export const AppProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric"); // Default unit

  return (
    <unitContext.Provider value={{ unit, setUnit }}>
      {children}
    </unitContext.Provider>
  );
};
