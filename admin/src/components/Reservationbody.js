import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Reservationbody = () => {
  const [reservations, setreservations] = useState([])

  const fetchreservation = async () => {
    try {
      const response = await axios.get('https://backend-anji.onrender.com/reservations/display')
      if (response) {
        setreservations(response.data.reservation)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const HandleCancel = async (id) => {
    try {
      const response = await axios.delete(`https://backend-anji.onrender.com/reservation/cancel/${id}`)
      if (response) {
        setreservations(reservations.filter((item) => item._id !== id))
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchreservation()
  }, [])

  return (
    <div className="bg-black h-[88.5vh] overflow-y-auto pt-[45px]">
      {reservations && reservations.length > 0 ? reservations.map((item, index) => (
        <div className="bg-white p-4 mb-2 mx-3 rounded-xl flex flex-col gap-2" key={index}>
          <p className="text-lg font-semibold font-mono">Name: {item.name}</p>
          <p className="text-lg font-semibold font-mono">Email: {item.email}</p>
          <p className="text-lg font-semibold font-mono">Mobile Number: {item.number}</p>
          <p className="text-lg font-semibold font-mono">Date and Time: {item.date}</p>
          <button
            onClick={() => HandleCancel(item._id)}
            className="text-lg font-semibold font-mono bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      )) : (
        <p className="text-white text-center">No Reservations</p>
      )}
    </div>
  );
}

export default Reservationbody;
