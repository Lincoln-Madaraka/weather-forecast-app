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


let content;
if (Object.keys(data).length === 0 && error === "") { 
  content = (
    <div>
      <h2 className="text-2xl font-bold">Welcome to Weather Forecast</h2>
      <p className="text-lg">Enter a city name</p>
    </div>
  );
} else if (error !== "") { 
  content = (
    <div className="flex flex-col items-center justify-center h-full">  
      <h2 className="text-2xl font-bold text-red-500">{error}</h2>
      <p className="text-lg">Please try again</p>
      <p className="text-lg">Enter a Valid city name</p>
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
         {data.main ? <div className="flex flex-col items-center justify-center h-full">{data.main.temp}°C</div> : null}

      </div>
     </div>
     );
};

export default  Home;