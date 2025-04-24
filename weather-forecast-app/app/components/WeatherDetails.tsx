const WeatherDetails = ({data}) => {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center px-6 py-6 bg-white/90 rounded-2xl shadow-xl">
    <h2 className="text-3xl font-bold text-gray-800 drop-shadow mb-6">Weather Details</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 w-full text-gray-800">
      <p><span className="font-semibold">Location:</span> {data.name}, {data.sys.country}</p>
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
      <p><span className="font-semibold">Weather Icon:</span> {data.weather[0].icon}</p>
      <p><span className="font-semibold">Weather Main:</span> {data.weather[0].main}</p>
    </div>
  </div>
  )
}

export default WeatherDetails;