"use client";
import Input from "./components/Input";

const Home = () => {
     return (
     <div className="bg-cover bg-gradient-to-r from-blue-100 to-blue-300 h-screen">
      <div className ="bg-white/25 w-full rounded-ig flex flex-col h-full" >
      {/* INPUT AND LOGO */}
        <div>
          <Input />
          <h1 className="text-3xl font-bold text-center">Weather Forecast</h1>
        </div>
      </div>
     </div>
     );
};

export default  Home;