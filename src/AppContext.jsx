// AppContext.js
import React, { createContext, useState } from "react";

// Create a context
export const unitContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric");

  return (
    <unitContext.Provider value={{ unit, setUnit }}>
      {children}
    </unitContext.Provider>
  );
};
