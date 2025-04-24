import { getCurrentDate } from "../utils/currentDate";


const current = ({ data }) => {
    const currentDate = getCurrentDate();
  return ( 
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold text-white drop-shadow-md">Today</h2>
        <p className="text-lg text-white/90">{currentDate}</p>
    </div>
  );
};

export default current;