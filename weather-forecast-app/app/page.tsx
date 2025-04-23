"use client";
import Input from "./components/Input";

const Home = () => {
     return (
     <div className="bg-cover bg-gradient-to-r from-blue-100 to-blue-300 h-screen">
      <div className ="bg-white/25 w-full rounded-ig flex flex-col h-full" >
      {/* INPUT AND LOGO */}
          {/* Logo */}
        <div className="flex justify-center items-center pt-4">
          <h1 className="absolute top-4 left-6 text-3xl font-bold text-white">Weather Forecast</h1>
        </div>
           {/* Input Section */}
           
          <Input />
         

      </div>
     </div>
     );
};

export default  Home;