import { getCurrentDate } from "../utils/currentDate";


const current = ({ data }) => {
    const currentDate = getCurrentDate();
    const weatherIcon = data.weather[0].icon;

  return ( 
    <div className="w-full flex justify-between items-center px-4">
    {/* Left section: Text details */}
    <div className="flex flex-col justify-center text-white">
      <h2 className="text-2xl font-bold drop-shadow-md">Today</h2>
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
      <p className="text-lg text-white/90">{currentDate}</p>
      <h2 className="text-4xl font-bold mt-4">{Math.round(data.main.temp)}°C</h2>

      <span className="capitalize text-base text-white/80 mt-2">
        {data.weather[0].description}
      </span>

      <p className="text-md mt-2">
        {data.name}, {data.sys.country}
      </p>
    </div>

    
  </div>
  );

}

export default current;