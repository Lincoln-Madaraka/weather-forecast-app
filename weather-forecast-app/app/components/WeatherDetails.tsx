const WeatherDetails = ({data}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-4 bg-white/90 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 drop-shadow-md">Weather Details</h2>
      <div className="flex flex-col items-start mt-4"> 
        <p className="text-lg text-gray-800">Location:{data.name}, {data.sys.country}</p>
        <p className="text-lg text-gray-800">Weather:{data.weather[0].description}</p>
        <p className="text-lg text-gray-800">Feels Like:{Math.round(data.main.feels_like)}°C</p>
        <p className="text-lg text-gray-800">Visibility:{data.visibility / 1000} km</p>
        <p className="text-lg text-gray-800">Cloudiness:{data.clouds.all}%</p>
        <p className="text-lg text-gray-800">Sunrise:{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p className="text-lg text-gray-800">Sunset:{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
        <p className="text-lg text-gray-800">Temperature:{Math.round(data.main.temp)}°C</p>
        <p className="text-lg text-gray-800">Humidity:{data.main.humidity}%</p>
        <p className="text-lg text-gray-800">Wind Speed:{data.wind.speed} m/s</p>
        <p className="text-lg text-gray-800">Pressure:{data.main.pressure} hPa</p>
        <p className="text-lg text-gray-800">Wind Direction:{data.wind.deg}°</p>
        <p className="text-lg text-gray-800">Timezone:{data.timezone / 3600} hours</p>
        <p className="text-lg text-gray-800">Weather Icon:{data.weather[0].icon}</p>
        <p className="text-lg text-gray-800">Weather Main:{data.weather[0].main}</p>

      </div>
    </div>
  )
}

export default WeatherDetails;