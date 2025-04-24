gimport React from 'react'

const WeekForecast = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-7 w-full">
      {data.daily.map((day, index) => {
        const date = new Date(day.dt * 1000).toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
        })
        const icon = day.weather[0].icon
        const tempMax = Math.round(day.temp.max)
        const tempMin = Math.round(day.temp.min)
  
        return (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg flex flex-col items-center">
            <h3 className="text-lg font-bold text-white">{date}</h3>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="w-[50px] h-[50px] object-contain"
            />
            <div className="flex flex-col items-center mt-2">
              <span className="text-xl font-semibold text-white">{tempMax}°C</span>
              <span className="text-sm text-gray-400">{tempMin}°C</span>
            </div>
          </div>
        )
      }
    )}
    </div>
  )
}

export default WeekForecast;