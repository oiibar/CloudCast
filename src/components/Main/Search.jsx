import React, { useState, useContext } from "react";
import search from "../../assets/search.svg";
import arrow from "../../assets/arrow.svg";
import { unitContext } from "../../AppContext";

const cities = [
  "Astana",
  "Almaty",
  "Oskemen",
  "Shymkent",
  "Semey",
  "Aktobe",
  "Aktau",
];

const Search = ({ onClose, onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const { setCity } = useContext(unitContext);

  // Handler function to update searchInput state
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Handler function for the search button
  const handleSearch = () => {
    setCity(searchInput); // Update city context
    onSearch(); // Call the search function passed from App
    setSearchInput("");
    onClose(); // Close the search component when search button is clicked
  };

  // Handler function for key down events
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search when Enter is pressed
    }
  };

  // Handler function for city buttons
  const handleCityClick = (cityName) => {
    setCity(cityName); // Update city context
    onSearch(); // Call the search function passed from App
    onClose(); // Close the search component when city button is clicked
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <aside
        className="inset-0 bg-[#1E213A] w-full lg:w-1/3 h-screen text-center flex flex-col py-6 px-6 gap-8 overflow-hidden relative transition-transform transform translate-x-0"
        style={{
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Close Button */}
        <section className="flex justify-end p-4">
          <button className="text-white text-2xl" onClick={onClose}>
            X
          </button>
        </section>

        {/* Search Section */}
        <section className="flex gap-4 items-center">
          <div className="relative w-full">
            <input
              placeholder="Search location"
              type="text"
              value={searchInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Attach the key down handler
              className="border border-[#E7E7EB] placeholder-[#616475] bg-transparent pl-10 pr-12 py-2 rounded-md w-full"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={search} alt="Search" className="w-4" />
            </div>
          </div>
          <button
            className="bg-[#3C47E9] text-white px-4 py-2 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </section>

        {/* Location Buttons */}
        <section className="flex flex-col gap-4">
          {cities.map((city) => (
            <button className="search" onClick={() => handleCityClick(city)}>
              <span>{city}</span>
              <img src={arrow} alt="Arrow" className="w-4" />
            </button>
          ))}
        </section>
      </aside>
    </>
  );
};

export default Search;
