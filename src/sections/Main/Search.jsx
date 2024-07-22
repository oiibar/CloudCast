import React, { useState, useContext, useCallback } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
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

  const handleInputChange = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    setCity(searchInput);
    onSearch();
    setSearchInput("");
    onClose();
  }, [searchInput, setCity, onSearch, onClose]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  const handleCityClick = useCallback(
    (cityName) => {
      setCity(cityName);
      onSearch();
      onClose();
    },
    [setCity, onSearch, onClose]
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <aside className="inset-0 bg-[#1E213A] w-full lg:w-1/3 h-screen text-center flex flex-col py-6 px-6 gap-8 overflow-hidden relative transition-transform transform translate-x-0">
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
              <CiSearch />
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
          {cities.map((city, index) => (
            <button
              className="search"
              key={index}
              onClick={() => handleCityClick(city)}
            >
              <span>{city}</span>
              <IoIosArrowForward />
            </button>
          ))}
        </section>
      </aside>
    </>
  );
};

export default Search;
