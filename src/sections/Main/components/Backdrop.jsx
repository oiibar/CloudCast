import React from "react";

const Backdrop = ({ onClick }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
    onClick={onClick}
  ></div>
);

export default Backdrop;
