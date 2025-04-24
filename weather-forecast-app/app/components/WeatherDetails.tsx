const WeatherDetails = ({data}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-4 bg-white/90 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 drop-shadow-md">Weather Details</h2>
      <div className="flex flex-col items-start mt-4">
        <p className="text-lg text-gray-800">Temperature: {Math.round(data.main.temp)}°C</p>
        <p className="text-lg text-gray-800">Humidity: {data.main.humidity}%</p>
        <p className="text-lg text-gray-800">Wind Speed: {data.wind.speed} m/s</p>
        <p className="text-lg text-gray-800">Pressure: {data.main.pressure} hPa</p>
      </div>
    </div>
  )
}

export default WeatherDetails