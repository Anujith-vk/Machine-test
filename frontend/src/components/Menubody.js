import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/Logo.png';
import phone from '../assets/phone.png';
import email from '../assets/email.png';
import location from '../assets/location.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import Firstimg from '../assets/Firstimg.png';
import Secondimg from '../assets/secondimg.png';
import Thirdimg from '../assets/thirdimg.png';

const Menubody = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://backend-anji.onrender.com/products');
      if (response) {
        const uniqueCategories = new Set(category);
        response.data.products.forEach((item) => uniqueCategories.add(item.category));
        setCategory([...uniqueCategories]);
        setProducts(response.data.products);
      }
    } catch (error) {
      toast.error(error.message, { autoClose: 800 });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [item, setitem] = useState('')
  const handleFilter = (category) => {
    setFilter(category);
    setitem(category)
  };

  const filteredProducts = filter ? products.filter((item) => item.category === filter) : products;

  return (
    <div>
      <div className="h-80 flex flex-col justify-center items-center bg-black text-white bg-cover bg-center" style={{ backgroundImage: `url(${Firstimg})` }}>
        <h2 className="text-[75px] font-[Oswald] font-bold text-white shadow-lg" style={{ textShadow: '3px 3px 5px rgba(255, 0, 0, 0.5)' }}>MENU</h2>

        <p className="max-w-2xl text-center text-gray-400 text-lg p-4 md:text-[18px] sm:text-[16px] font-[Kellyslab] ">Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
      </div>
      <div className="px-6 h-20 w-full flex gap-4 items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Secondimg})` }}>
        {category.length > 0 ? category.map((item, index) => (
          <button key={index} className="w-28 h-12 border border-blue-500 bg-black text-white text-lg font-semibold hover:border-2 hover:border-blue-500 active:bg-blue-500" onClick={() => handleFilter(item)}>
            {item}
          </button>
        )) : <p className="text-white">No Products</p>}
      </div>
      <div className="px-3 flex justify-center items-center bg-cover bg-center py-16" style={{ backgroundImage: `url(${Thirdimg})` }}>
        <div className="border border-white p-6 max-w-5xl w-full">
          <div className="flex justify-center items-center pb-6">
            <hr className="w-16 border-white" />
            <h3 className=" text-center md:text-[50px] sm:text-[30px] font-[Oswald] font-bold text-white shadow-lg" style={{ textShadow: '3px 3px 5px rgba(255, 0, 0, 0.5)' }}>{item ? item : "BRUNCH COCKTAILS"}</h3>
            <hr className="w-16 border-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {filteredProducts.map((item, index) => (
              <div key={index} className="bg-transparent">
                <h4 className="text-white  font-[Oswald] md:text-[26px] sm:text-[16px]  ">{item.name}.....................${item.price}</h4>
                <p className="text-gray-400 text-lg font-[Kellyslab]  text-justify md:text-[18px] sm:text-[14px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center bg-black py-8 px-4">
        <div className="sm:order-2 md:order-1 flex flex-col items-center justify-center gap-4 p-4 border border-gray-300 rounded-lg w-[373px] h-[134px]">
          <h5 className="text-blue-500 text-lg font-semibold font-[Oswald]">CONNECT WITH US</h5>
          <div className="flex gap-2 items-center">
            <img src={phone} alt="phone" className="h-6" />
            <p className="text-gray-500 font-[Oswald]">+91 9567843340</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={email} alt="email" className="h-6" />
            <p className="text-gray-500 font-[Oswald]">info@deepnetsoft.com</p>
          </div>
        </div>
        <div className="md:order-2 flex relative flex-col items-center justify-center gap-4 p-4 border border-gray-300 rounded-lg w-[373px] h-[134px]">
          <img className="h-16 absolute top-[-33px] bg-black" src={logo} alt="logo" />
          <div className="flex gap-2 text-2xl font-bold">
            <p className="text-blue-500 font-[Oswald ]">DEEP</p>
            <p className="text-white font-[Oswald]">NET</p>
            <p className="text-gray-400 font-[Oswald]">SOFT</p>
          </div>
          <div className="flex gap-4">
            <img src={facebook} alt="fb" className="h-6" />
            <img src={twitter} alt="tw" className="h-6" />
            <img src={youtube} alt="youtube" className="h-6" />
            <img src={instagram} alt="insta" className="h-6" />
          </div>
        </div>
        <div className="md:order-3 flex flex-col items-center justify-center gap-4 p-4 border border-gray-300 rounded-lg w-[373px] h-[134px]">
          <h5 className="text-blue-500 text-lg font-semibold font-[Oswald]">FIND US</h5>
          <div className="flex gap-2 items-center">
            <img src={location} alt="location" className="h-6" />
            <p className="text-gray-500 text-center font-[Oswald]">First floor, Geo Infopark, Infopark EXPY, Kakkanad</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Menubody;
