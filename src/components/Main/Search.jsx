import React from "react";
import search from "../../assets/search.svg";
import arrow from "../../assets/arrow.svg";

const Search = ({ onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <aside
        className="fixed inset-0 bg-[#1E213A] w-full lg:w-1/3 h-screen text-center flex flex-col py-6 px-6 gap-8 overflow-hidden relative transition-transform transform translate-x-0"
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
              className="border border-[#E7E7EB] placeholder-[#616475] bg-transparent pl-10 pr-12 py-2 rounded-md w-full"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={search} alt="Search" className="w-4" />
            </div>
          </div>
          <button className="bg-[#3C47E9] text-white px-4 py-2 rounded-lg">
            Search
          </button>
        </section>

        {/* Location Buttons */}
        <section className="flex flex-col gap-4">
          <button className="search">
            <span>Astana</span>
            <img src={arrow} alt="Arrow" className="w-4" />
          </button>
          <button className="search">
            <span>Almaty</span>
            <img src={arrow} alt="Arrow" className="w-4" />
          </button>
          <button className="search">
            <span>Oskemen</span>
            <img src={arrow} alt="Arrow" className="w-4" />
          </button>
        </section>
      </aside>
    </>
  );
};

export default Search;
