"use client";
import React, { useState } from "react";

import Input from "./components/Input";

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
     return (
     <div className="bg-cover bg-gradient-to-r from-gray-300 via-gray-100 to-white h-screen">
      <div className ="bg-white/25 w-full rounded-ig flex flex-col h-full" >
      {/* INPUT AND LOGO */}
          {/* Logo */}
        <div className="flex justify-center items-center pt-4">
          <h1 className="absolute top-4 left-6 text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-md">Weather Forecast</h1>
        </div>
           {/* Input Section */}
          <Input handleSearch={handleSearch} 
          setLocation={setLocation} />
         {data.main ? <div className="flex flex-col items-center justify-center h-full">{data.main.temp}°C</div> : null}

      </div>
     </div>
     );
};

export default  Home;