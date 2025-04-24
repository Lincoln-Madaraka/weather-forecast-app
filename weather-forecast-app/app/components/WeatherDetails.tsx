import { time } from "console";
interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: { icon: string; description: string; main: string }[];
  name: string;
  sys: { country: string; sunrise: number; sunset: number };
  wind: { speed: number; deg: number };
  visibility: number;
  clouds: { all: number };
  dt: number;
  timezone: number;
}


const WeatherDetails = ({ data }: { data: WeatherData }) => {

  const weatherIcon = data.weather[0].icon;

  function getWeatherBg(weatherMain: string): string {
    switch (weatherMain.toLowerCase()) {
      case "clear":
        return "bg-gradient-to-br from-yellow-100 via-blue-100 to-white";
      case "clouds":
        return "bg-gradient-to-br from-gray-100 via-slate-200 to-white";
      case "rain":
      case "drizzle":
        return "bg-gradient-to-br from-blue-100 via-gray-200 to-white";
      case "thunderstorm":
        return "bg-gradient-to-br from-indigo-200 via-gray-300 to-white";
      case "snow":
        return "bg-gradient-to-br from-white via-blue-50 to-gray-100";
      case "mist":
      case "fog":
        return "bg-gradient-to-br from-gray-200 via-gray-100 to-white";
      default:
        return "bg-gradient-to-br from-white via-sky-100 to-blue-100";
    }
  }
  

  return (
    <div
  className={`w-full max-w-3xl mx-auto flex flex-col items-center justify-center px-6 py-6 rounded-2xl shadow-xl ${getWeatherBg(data.weather[0].main)}`}
>
    <h2 className="text-3xl font-bold text-gray-800 drop-shadow mb-6">Weather Details</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 w-full text-gray-800">
      <p><span className="font-semibold">Location:</span>{data.name}, {data.sys.country}</p>
      <p><span className="font-semibold">Date:</span> {new Date(data.dt * 1000).toLocaleDateString()}</p>
      <p><span className="font-semibold">Time:</span> {new Date(data.dt * 1000).toLocaleTimeString()}</p>
      <p><span className="font-semibold">Weather:</span> {data.weather[0].description}</p>
      <p><span className="font-semibold">Feels Like:</span> {Math.round(data.main.feels_like)}°C</p>
      <p><span className="font-semibold">Temperature:</span> {Math.round(data.main.temp)}°C</p>
      <p><span className="font-semibold">Humidity:</span> {data.main.humidity}%</p>
      <p><span className="font-semibold">Visibility:</span> {data.visibility / 1000} km</p>
      <p><span className="font-semibold">Cloudiness:</span> {data.clouds.all}%</p>
      <p><span className="font-semibold">Wind Speed:</span> {data.wind.speed} m/s</p>
      <p><span className="font-semibold">Wind Direction:</span> {data.wind.deg}°</p>
      <p><span className="font-semibold">Pressure:</span> {data.main.pressure} hPa</p>
      <p><span className="font-semibold">Sunrise:</span> {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p><span className="font-semibold">Sunset:</span> {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
      <p><span className="font-semibold">Timezone:</span> UTC+{data.timezone / 3600}</p>
      {weatherIcon && (
      <span>
        <img
          src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
          alt={data.weather[0].main}
          className="w-[50px] h-[50px] object-contain"
        /> Weather Main: {data.weather[0].main} 
      </span>
    )} 
    </div>
  </div>
  )
}

export default WeatherDetails;