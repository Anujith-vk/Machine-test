import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bgimg from '../assets/b6.jpg'

const Reservationbody = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: '',
    email: '',
    number: '',
    date: ''
  });
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, number, email, date } = data;
      if (!name || !number || !email || !date) {
        toast.error('Please provide all the fields', { autoClose: 800 });
      } else {
        const response = await axios.post('https://backend-anji.onrender.com/table/reservation', { name, email, number, date });
        if (response) {
          toast.success(response.data.message, { autoClose: 800 });
          setdata({
            name: '',
            number: '',
            email: '',
            date: ''
          });
          setTimeout(() => {
            navigate('/menu');
          }, 1500);
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong', { autoClose: 800 });
    }
  };

  return (
    <div className="px-2 flex justify-center items-center h-screen w-full bg-black" style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover' }}>
      <div className="bg-white p-4 max-w-[400px] w-full rounded-lg">
        <div className="flex justify-center items-center py-2">
          <h3 className="text-3xl font-[Oswald]">Enter Your Details</h3>
        </div>
        <form onSubmit={HandleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={HandleChange}
            placeholder="Enter Your Name"
            className="h-10 rounded-lg pl-5 border border-gray-300 w-full"
          />
          <input
            type="number"
            name="number"
            value={data.number}
            onChange={HandleChange}
            placeholder="Enter Your Mobile Number"
            className="h-10 rounded-lg pl-5 border border-gray-300 w-full"
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={HandleChange}
            placeholder="Enter Your Email Id"
            className="h-10 rounded-lg pl-5 border border-gray-300 w-full"
          />
          <label htmlFor="dateandtime" className="text-sm">Enter Your Date and Time</label>
          <input
            type="datetime-local"
            name="date"
            id="dateandtime"
            value={data.date}
            onChange={HandleChange}
            className="h-10 rounded-lg pl-5 border border-gray-300 w-full"
          />
          <p className="text-xs text-gray-500">Note: If you are not reached by the booked time, after 30 minutes your reservation will be cancelled.</p>
          <button className="w-36 h-12 bg-black text-white text-medium font-oswald rounded-lg cursor-pointer">
            Book
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Reservationbody;
