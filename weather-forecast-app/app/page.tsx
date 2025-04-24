"use client";
import React, { useState } from "react";

import Input from "./components/Input";
import  Current from "./components/current";
import WeatherDetails from "./components/WeatherDetails";


function Home() {
  interface WeatherData {
    main: {
      temp: number;
    };
    weather: { icon: string; description: string }[];
    name: string;
    sys: { country: string };
  }
  
  const [data, setData] = useState<WeatherData>({} as WeatherData);
  const [location, setLocation] = useState(" ")
  const [error , setError] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=30ed468091ceccdee5c3b95df2dc07ba&units=metric`;

  const handleSearch = async (e: React. KeyboardEvent<HTMLInputElement>  | React.MouseEvent<HTMLButtonElement>) => { 
      if ("key"  in e && e.key !== "Enter") 
        return;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error();
        const weatherData = await response.json();
        setData(weatherData);
        setError("");
        setLocation("");
      } catch {
        setError("City not found");
        setData({ } as WeatherData);
      }
};


let content;
if (Object.keys(data).length === 0 && error === "") { 
  content = (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold text-white drop-shadow-md mb-2"> Hey there, sky watcher! Ready for today’s forecast?</h2>
      <p className="text-1g text-white/90">Enter a city name to explore the skies...</p>
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
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-6xl shadow-lg flex flex-col gap-6">
  {/* Top Section: Current and Details side by side on large screens */}
  <div className="flex flex-col lg:flex-row gap-6">
    {/* Left: Current weather */}
    <div className="flex-1 flex justify-center items-center">
      <Current data={data} />
    </div>

    {/* Right: Weather Details */}
    <div className="flex-[2] flex flex-col gap-6 justify-center">
      <WeatherDetails />
    </div>
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
          <h1 className="absolute top-5 left-8 text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">API Weather</h1>
        </div>
           {/* Input Section */}
          <Input handleSearch={handleSearch} 
          setLocation={setLocation} />
         
            <div className="flex flex-col items-center justify-center h-full">
              {content}
            </div>
             
        </div>
      </div>
     );
};

export default Home;