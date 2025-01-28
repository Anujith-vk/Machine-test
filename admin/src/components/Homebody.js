import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/b6.jpg'

function Homebody() {
  const navigate = useNavigate();

  const Handleadd = () => {
    navigate('/add');
  };

  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="flex justify-center items-center w-full h-full px-3">
        <div className="max-w-2xl w-full bg-black bg-opacity-70 p-8 rounded-lg">
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-5xl font-oswald font-semibold font-[Oswald]">DEEP NET SOFT</h2>
            <p className="font-kelly-slab text-sm font-semibold text-gray-400 font-[Kellyslab] text-justify">
              Hi Admin, Elevate Deep Net Soft to new heights by introducing fresh and exclusive items to the menu! Adding unique dishes that can’t be found anywhere else will set us apart, keep our guests excited, and create an unforgettable dining experience. Whether it’s a fusion twist, a seasonal special, or a signature dish, every new addition enhances our reputation as a culinary innovator. Your creativity has the power to wow diners and make Deep Net Soft the ultimate destination for food lovers. Let’s keep the magic alive and continue to surprise and delight our guests!
            </p>
            <button
              onClick={Handleadd}
              className="flex items-center justify-center gap-3 max-w-[300px] w-full h-10 bg-black text-white text-sm font-semibold border border-solid hover:border-red-500 cursor-pointer">
              ADD ITEM <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebody;
