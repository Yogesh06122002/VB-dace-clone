import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import gas from '../assets/gas.png';
import dish from '../assets/dish.png';
import induction from '../assets/induction.png'
import { FaMinus, FaPlus } from "react-icons/fa6";

import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/cart';


function Productid() {

  const { productid } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const [count, setCount] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {

    window.scrollTo(0, 0);
   axios.get(`http://localhost:5005/api/products/get/${productid}`).
   then((response) => {
    // console.log(response.data);
    setProduct(response.data);
    setLoading(false);
   }).
   catch((error) => {
    console.log(error);
    setLoading(false);
   })
  }, [productid]);

  const show = () => {
    setShowSuccess(true);
    setTimeout(()=>{
      setShowSuccess(false);

    },4000);
    dispatch(addProduct({product, count}));
    
  }

    // Display loading or error state
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    // Ensure product and images exist before accessing them
    if (!product || !product.images || product.images.length === 0) {
      return <div>No product details available.</div>;
    }
  
  return (
    <div className='pt-16 mx-12'>
      {showSuccess && <div className='relative'>
        <div className='absolute right-0 top-[-60px] z-auto border border-green-500 text-xl text-green-700 p-2'> Add to cart successfully ! </div></div>}
      <div className='flex gap-x-5 mb-20'>
        <div className='border border-gray-300 h-[600px] w-[850px] flex justify-center'>
          <img src={product.images[0]} alt="" className='h-full w-[600px]'/>
        </div>
        <div className='w-[375px]'>
          <h1 className='text-[24px] font-medium '>{product.productName}</h1>
          <p className='mt-6'>{product.disc}</p>
          <div className='flex gap-14 mt-7'>
            <div><img src={gas} alt="" className='h-16 w-16 hover:scale-125' />
            <p className='mt-3 text-sm'>Gas Stove</p>
            </div>
            
            
            <div className='text-center'><img src={dish} alt="" className='h-16 w-16 hover:scale-125' />
            <p className='mt-3 text-sm w-16'>Dishwasher Safe</p>
            </div>
            <div><img src={induction} alt="" className='h-16 w-16 hover:scale-125' />
            <p className='mt-3 text-sm'>Induction</p>
            </div>

           

          </div>
          <div className="flex gap-3 mt-14">
              <p className='text-gray-600'>Quantity</p>
              <button className='text-lg' onClick={() => setCount (count > 1 ? count - 1 : 1) }><FaMinus /></button>
              <div className='border border-gray-300 p-2 w-8 h-8 flex items-center justify-center   ' >{count}</div>
              <button className='text-lg' onClick={() => setCount (count + 1)}><FaPlus /></button>

            </div>

          <div className=' font-semibold text-[20px] mt-4 mx-3'>&#8377; {product.price}</div>
          <div className="flex gap-3 mt-4 mb-10">
            <button className=' text-white bg-[#D19E6F] px-10 text-xl shadow-xl py-2'>Buy Now</button>
            <button  className=' text-[#B28566] px-6 border border-[#B28566] text-xl  py-2' onClick={show}>Add to Cart</button>

          </div>
        </div>
      </div>
    </div>  
  )
}

export default Productid