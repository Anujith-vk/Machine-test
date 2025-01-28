import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'

const Addbody = () => {
  const[uploading,setuploading]=useState(false)
  const [data, setdata] = useState({
    category: '',
    name: '',
    description: '',
    price: ''
  });

  const Handledata = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setuploading(true)
    try {
      const { category, name, description, price } = data;
      if (!category || !name || !description || !price) {
      } else {
        const response = await axios.post('http://localhost:4000/addproduct', { category, name, description, price });
        if (response) {
          toast.success("Product added Successfully", { autoClose: 1500 })
          setuploading(false)
          setdata({
            category: '',
            name: '',
            description: '',
            price: ''
          });
        }
      }
    } catch (error) {
      console.log(error);
      setuploading(false)
    }
  };

  return (
    <div className="bg-black justify-center pt-10 items-center flex flex-col gap-5 h-screen px-2">
      <div className="text-white text-3xl font-[oswald] ">
        <h2>Enter The Details of Products</h2>
      </div>
      <form onSubmit={HandleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col max-w-xl pr-12">
          <label htmlFor="cat" className="font-[Kellyslab] text-white text-lg">
            Enter Product Category (in BLOCK letters)
          </label>
          <input
            type="text"
            placeholder="Enter The Product Category"
            id="cat"
            name="category"
            value={data.category}
            onChange={Handledata}
            className="w-full h-12 pl-5 border border-white rounded-md"
          />
        </div>
        <div className="flex flex-col max-w-xl pr-12">
          <label htmlFor="prod" className="font-[Kellyslab] text-white text-lg">
            Enter Product Name
          </label>
          <input
            type="text"
            placeholder="Enter The Product Name"
            id="prod"
            name="name"
            value={data.name}
            onChange={Handledata}
            className="w-full h-12 pl-5 border border-white rounded-md"
          />
        </div>
        <div className="flex flex-col max-w-xl pr-12">
          <label htmlFor="desc" className="font-[Kellyslab] text-white text-lg">
            Enter Product Description
          </label>
          <textarea
            placeholder="Enter The Product Description"
            id="desc"
            name="description"
            value={data.description}
            onChange={Handledata}
            className="w-full h-20 p-3 resize-none border border-white rounded-md"
          />
        </div>
        <div className="flex flex-col max-w-xl pr-12">
          <label htmlFor="pr" className="font-[Kellyslab] text-white text-lg">
            Enter Product Price
          </label>
          <input
            type="text"
            placeholder="Enter The Product Price"
            id="pr"
            name="price"
            value={data.price}
            onChange={Handledata}
            className="w-full h-12 pl-5 border border-white rounded-md"
          />
        </div>
        <button
          type="submit"
          className="max-w-[200px] h-12 rounded-lg border border-white text-white text-lg font-semibold bg-black mt-5 hover:border-tomato-500"
        >
          ADD
          {uploading &&
          <p className='mt-[-10px] text-[10px]'>Uploading ... Please Wait</p>
          }
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Addbody;
