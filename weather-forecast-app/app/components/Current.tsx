import { getCurrentDate } from "../utils/currentDate";
import { IoLocationSharp } from "react-icons/io5";


const current = ({ data }) => {
    const currentDate = getCurrentDate();
    const weatherIcon = data.weather[0].icon;

  return ( 
    <div className="w-full flex justify-between items-center px-4">
    {/* Left section: Text details */}
    <div className="flex flex-col justify-center text-gray-800">
      <h1 className="text-2xl font-bold text-gray-800 drop-shadow-md">Today</h1>
      <p className="text-lg text-gray-800">{currentDate}</p>
       {/* Right section: Weather icon */}
    {weatherIcon && (
      <span>
        <img
          src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
          alt={data.weather[0].description}
          className="w-[100px] h-[100px] object-contain"
        />
      </span>
    )}
      
      <h2 className="text-4xl font-bold mt-4">{Math.round(data.main.temp)}°C</h2>

      <span className="capitalize text-base text-blue-300 mt-2">
        {data.weather[0].description}
      </span>
      <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl shadow-lg">
      <IoLocationSharp />
      <h2 className="text-md mt-2">
        {data.name}, {data.sys.country}
      </h2>
      </div>
    </div>
  </div>
  );

}

export default current;