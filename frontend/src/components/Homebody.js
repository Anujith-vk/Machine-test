import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/b6.jpg'

function Homebody() {
  const navigate = useNavigate();
  const Handlemenu = () => {
    navigate('/menu');
  };

  return (
    <div className="bg-cover bg-center w-full h-screen flex justify-center items-center px-2" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="max-w-2xl w-full bg-black bg-opacity-50 rounded-lg p-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-2xl font-bold font-[Oswald] text-[28px]">DEEP NET SOFT</h2>
          <p className="text-gray-400 font-semibold text-sm font-[Kellyslab] text-[18px]">
            Welcome to Deep Net Soft, where every meal is a masterpiece of flavor and passion. Indulge in a wide variety of dishes, from savory delights to sweet indulgences, crafted to tantalize your taste buds and leave you craving more. Whether you’re seeking classic favorites or unique culinary creations, our menu offers something for everyone, paired with an inviting ambiance that makes every visit special. Explore our menu to discover the magic of culinary artistry!
          </p>
          <button className="flex items-center justify-center gap-4 max-w-48 w-full h-10 border border-white text-white font-semibold bg-black hover:border-red-500 transition-all duration-300 font-[Oswald]" onClick={Handlemenu}>
            Go To Menu <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homebody;
