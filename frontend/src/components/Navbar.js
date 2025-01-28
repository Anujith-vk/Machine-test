import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
  const handleReservation = () => navigate('/reservation');
  const handleHome = () => navigate('/');
  const handleMenu = () => navigate('/menu');
  return (
    <div className="flex justify-between items-center relative bg-black sm:h-[40px] md:h-[100px] w-full md:px-8">
      <div className="flex items-center sm:justify-center md:space-x-5 sm:w-full md:w-0">
        <img className="md:w-[86px] md:h-[76px] sm:mt-9 md:mt-0 md:ml-0 sm:ml-9 md:absolute md:top-[60px] md:left-[168px] sm:w-[50px] sm:h-[44px] " src={logo} alt="Logo" />
        <div className=" hidden md:flex flex flex-col justify-center text-white absolute left-[250px] top-[67px]">
          <div className="flex gap-1 text-2xl font-oswald">
            <p className="text-blue-500 font-[Oswald] text-[35px]">DEEP</p><p className='font-[Oswald] text-[35px]'>NET</p>
          </div>
          <p className="text-white font-[Oswald] text-[35px] text-[#857878]">SOFT</p>
        </div>
      </div>
      <div className="hidden md:flex space-x-12 text-white text-sm mt-12">
        <ul className="flex gap-12">
          <li onClick={handleHome} className="cursor-pointer font-[Oswald] text-[16px] text-[#F5F5F5]">HOME</li>
          <li onClick={handleMenu} className="cursor-pointer font-[Oswald] text-[16px] text-[#F5F5F5]">MENU</li>
          <li onClick={handleReservation} className="cursor-pointer font-[Oswald] text-[16px] text-[#F5F5F5]">MAKE A RESERVATION</li>
          <li className="cursor-pointer font-[Oswald] text-[16px] text-[#F5F5F5]">CONTACT US</li>
        </ul>
      </div>

      <svg onClick={handleSidebar} className=" fill-[#857878] md:hidden pr-4 cursor-pointer text-gray-400" xmlns="http://www.w3.org/2000/svg" height="40" width="50" viewBox="0 -960 960 960">
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>

      <div className={`fixed top-0 right-0 h-full bg-black transition-all ${sidebar ? 'w-3/5 opacity-100' : 'w-0 opacity-0'} md:hidden`}>
        <div className="flex justify-end pt-6 pr-6">
          <AiOutlineClose onClick={handleSidebar} className="cursor-pointer text-xl text-gray-700" />
        </div>
        <ul className="flex flex-col gap-10 text-center p-12 text-lg font-oswald">
          <li onClick={handleHome} className="cursor-pointer font-[Oswald] text-[16px] text-[#F5F5F5]">HOME</li>
          <li onClick={handleMenu} className="cursor-pointer font-[Oswald] text-[16px] text-[#F5F5F5]">MENU</li>
          <li onClick={handleReservation} className="cursor-pointer font-[Oswald] text-[16px] text-[#F5F5F5]">MAKE A RESERVATION</li>
          <li className="cursor-pointer font-[Oswald] text-[16px] text-[#F5F5F5]">CONTACT US</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
