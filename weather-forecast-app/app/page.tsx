"use client";
import React, { useState } from "react";

import Input from "./components/Input";
import Current from "./components/current";
import WeekForecast  from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";


const Home = () => {
  interface WeatherData {
    main?: {
      temp: number;
    };
  }
  
  const [data, setData] = useState<WeatherData>({});
  const [location, setLocation] = useState(" ")
  const [error , setError] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=30ed468091ceccdee5c3b95df2dc07ba&units=metric`;

  const handleSearch = async (e: React. KeyboardEvent<HTMLInputElement>) => { 
      if (e.key === "Enter") {
        e.preventDefault()
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error()
          }
          const data = await response.json();
          setData(data)
          setLocation("")
          setError("")
        } catch (error) {
          setError("City not found")
          setData({})
        }
  }
};


let content;
if (Object.keys(data).length === 0 && error === "") { 
  content = (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold text-white drop-shadow-md">Welcome to Weather Forecast</h2>
      <p className="text-lg text-white/90">Enter a city name</p>
    </div>
  );
} else if (error !== "") { 
  content = (
    <div className="flex flex-col items-center justify-center h-full">  
      <h2 className="text-2xl font-bold text-red-500">{error}</h2>
      <p className="text-lg text-gray-400">Please try again</p>
      <p className="text-lg text-gray-400">Enter a Valid city name</p>
    </div>
  );
}  else if (data.main?.temp) {
  // If data is available, show the weather details
  content = (
    <div>
      <div className="flex flex-col items-center justify-center h-full">
        <Current />
        <WeatherDetails />
        </div>
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-bold text-white drop-shadow-md">7-Day Forecast</h2>
        <WeekForecast /> 
      </div>
    </div>
  );
}


     return (
     <div className="bg-cover bg-gradient-to-r from-sky-200 via-gray-300 to-white h-screen">
      <div className ="bg-white/25 w-full rounded-ig flex flex-col h-full" >
      {/* INPUT AND LOGO */}
          {/* Logo */}
        <div className="flex justify-center items-center pt-4">
          <h1 className="absolute top-4 left-6 text-3xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent drop-shadow-md">Weather Forecast</h1>
        </div>
           {/* Input Section */}
          <Input handleSearch={handleSearch} 
          setLocation={setLocation} />
         
            <div className="flex flex-col items-center justify-center h-full">
              {content}
            </div>
             
        </div>
        {/* Footer */}
        <div className="flex justify-center items-center h-16 bg-white/25 rounded-b-lg">
          <p className="text-sm text-gray-600">© 2023 Weather Forecast. All rights reserved.</p>
        </div>
      </div>
     );
};

export default  Home;