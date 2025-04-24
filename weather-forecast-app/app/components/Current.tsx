import { getCurrentDate } from "../utils/currentDate";


const current = ({ data }) => {
    const currentDate = getCurrentDate();
    const weatherIcon = data.weather[0].icon;

  return ( 
    <div className="flex flex-col items-center justify-center h-full">
        <div>
      <h2 className="text-2xl font-bold text-white drop-shadow-md">Today</h2>
        <p className="text-lg text-white/90">{currentDate}</p>
       </div>
            {weatherIcon && (
                <div>
              <img  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
      alt={data.weather[0].description} 
      className="w-[50px] object-cover h-[50px] rounded-full bg-white/20 p-1 shadow-md" 
    />
    <span className="text-xl ">{data.weather[0].description}</span>
             
            </div>
            )}
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-4xl font-bold text-white drop-shadow-md">{Math.round(data.main.temp)}°C</h2>
              <p className="text-lg text-white/90">{data.name}, {data.sys.country}</p>
          </div>
      </div>
  );

}

export default current;