import { getCurrentDate } from "../utils/currentDate";


const current = ({ data }) => {
    const currentDate = getCurrentDate();
    const weatherIcon = data.weather[0].icon;

  return ( 
    <div className="w-full flex justify-between items-center gap-6">
      {/* Left side: Today and Date */}
      <div>
        <h2 className="text-2xl font-bold text-white drop-shadow-md">Today</h2>
        <p className="text-lg text-white/90">{currentDate}</p>
      </div>

      {/* Right side: Icon, Description, Temp, and Location */}
      <div className="flex items-center gap-4">
        {weatherIcon && (
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt={data.weather[0].description}
            className="w-[60px] object-cover"
          />
        )}
        <div className="flex flex-col items-start text-white">
          <span className="capitalize text-sm text-white/80">
            {data.weather[0].description}
          </span>
          <h2 className="text-3xl font-bold">{Math.round(data.main.temp)}°C</h2>
          <p className="text-sm">
            {data.name}, {data.sys.country}
          </p>
        </div>
      </div>
    </div>
  );

}

export default current;