"use client";
import { FiSearch } from "react-icons/fi";


const Input = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter city name"
        className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <div>
        <FiSearch />
        </div>
    </form>
  )
}

export default Input