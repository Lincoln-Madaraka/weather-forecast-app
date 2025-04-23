"use client";
import { FiSearch } from "react-icons/fi";

const Input = () => {
  return (
    <div className="pt-2 flex justify-center items-center mt-0.5 h-screen"> {/* Centering the form */}
      <form className="flex items-center bg-white p-2 rounded-lg shadow-lg w-3/4 md:w-2/4"> {/* Form Container */}
        <input
          type="text"
          placeholder="Enter city name"
          className="w-full p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="ml-0.5">
          <FiSearch /> {/* Search icon */}
        </div>
      </form>
    </div>
  );
};

export default Input