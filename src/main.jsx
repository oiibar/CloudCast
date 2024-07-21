import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./assets/index.css";
import { AppProvider } from "./AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
