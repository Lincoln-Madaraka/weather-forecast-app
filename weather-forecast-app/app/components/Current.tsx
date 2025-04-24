import { getCurrentDate } from "../utils/currentDate";


const current = ({ data }) => {
    const currentDate = getCurrentDate();
    const weatherIcon = data.weather[0].icon;

  return ( 
    <div className="flex flex-col items-center justify-center h-full">
    {/* Top row: Icon + Today + Date */}
    <div className="flex items-center gap-4 mb-4">
      {/* Icon and description */}
      {weatherIcon && (
        <div className="flex flex-col items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt={data.weather[0].description}
            className="w-[60px] object-cover"
          />
          <span className="text-sm text-white/80 capitalize">
            {data.weather[0].description}
          </span>
        </div>
      )}

      {/* Today + Date */}
      <div>
        <h2 className="text-2xl font-bold text-white drop-shadow-md">Today</h2>
        <p className="text-lg text-white/90">{currentDate}</p>
      </div>
    </div>

    {/* Temperature and Location */}
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-4xl font-bold text-white drop-shadow-md">
        {Math.round(data.main.temp)}°C
      </h2>
      <p className="text-lg text-white/90">
        {data.name}, {data.sys.country}
      </p>
    </div>
  </div>
  );

}

export default current;