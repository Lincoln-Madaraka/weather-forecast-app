"use client";
import { FiSearch } from "react-icons/fi";

interface InputProps {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({handleSearch, setLocation}:InputProps ) => {
  return (
    <div className="pt-10 flex justify-center "> {/* Centering the form */}
      <form className="flex items-center bg-white p-2 rounded-lg shadow-lg w-3/4 md:w-2/4"
        onSubmit={(e) => 
          e.preventDefault()
        }
      > {/* Form Container */}
        <input
          type="text"
          placeholder="Enter city name"
          className="w-full p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
         onKeyDown={handleSearch} // Trigger search on Enter key
         onChange={(e) => setLocation(e.target.value)} // Update location state on input change
        /> 
        <button
        type="button"
        className="bg-blue-500 text-white p-2 rounded-lg ml-2 flex items-center justify-center hover:bg-blue-600 transition duration-200" // Button styling
        onClick={() => handleSearch({ key: "Enter" } as React.KeyboardEvent<HTMLInputElement>)} // Trigger search on button click
        >
          <FiSearch className="w-5 h-5" /> {/* Search Icon */}
        </button>
      </form>
    </div>
  );
};

export default Input;