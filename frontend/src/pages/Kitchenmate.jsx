import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Kitchenmate() {

  const [dropDown, setDropDown] = useState(false);
  const [allProducts, setAllProducts] = useState();
  const [mates, setMates] = useState();

  useEffect(() => {
    axios.get("http://localhost:5005/api/products/get").then((response) => {
    // console.log(response.data);
      setAllProducts(response.data);
      // console.log(allProducts);

    
    })
    
  }, []);
  return (
    <div>
    <div className='bg-[#F3EDDF]'>
    <div className='lg:mx-16 mx-4 text-base font-normal pt-16'>
      <div><Link to ='/' className='mr-3 hover:underline'>Home</Link>     /   <Link to ='/products' className='mx-3 hover:underline'>All Products</Link>   / <span className='mx-3'>Kitchen Mate</span></div>
      <div className='mt-3 pb-10 lg:pb-20'>
        <h1 className=' text-3xl lg:text-4xl'>Kitchen Mate</h1>
        <p className='mt-4'>Shop Kitchen Mate exclusively designed by Venkatesh <br className='hidden lg:block'/>Bhat.</p>
      </div>
    </div>
    </div>
    <div className='mt-10 mx-4 lg:mx-16 '>
      <div className='relative'>
        <button className='w-36 font-medium    flex justify-between items-center' onClick={() => setDropDown(!dropDown)} onMouseLeave={()=> setDropDown(false)}><p>SORT BY</p><MdOutlineKeyboardArrowDown className='text-xl'/>
        {dropDown && (
          <div className='absolute z-10 w-36 bg-white text-black border border-black mt-24 font-normal'><ul><li className='hover:bg-blue-500 hover:text-white p-1'>Price High to Low</li>
          <li className='hover:bg-blue-500 p-1 hover:text-white'>Price Low to High</li></ul></div>
        )}
        </button>
      </div>
      <div className=" grid lg:grid-cols-4 grid-cols-2 mt-5 gap-6 lg:gap-10 gap-y-14 lg:gap-y-14 pb-20 lg:pb-28">

        {allProducts && allProducts.filter (product =>  product.category === 'kitchenmate').map(product => (
          <Link to={`/product/${product._id}`}>
          <div key={product._id} className='lg:w-[280px] h-48 lg:h-[320px]'>
            <div className='relative ' onMouseEnter={()=>setMates(product._id)} onMouseLeave={()=>{setMates()}}>
              <img src={mates === product._id ? product.images[1] : product.images[0]} alt=""  className='w-full lg:h-[300px] h-44 object-cover bg-[#F5F5F5] p-4 '/>
              <div className='absolute left-2 mt-[-26px] text-[15px] bg-white text-black p-[2px] px-2'>&#8377; {product.price}</div>
             
              <div> 
                <p className='text-sm font-medium mt-2'>{product.productName}</p> </div>
            </div>

          </div>
          </Link>
        )

        )
          
        }

      </div>

  </div>


</div>
  )
}

export default Kitchenmate