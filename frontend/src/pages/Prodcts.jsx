import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState} from 'react';
import axios from 'axios';



function Prodcts() {

  const [dropDown, setDropDown] = useState(false);
  const [allProducts, setAllProducts] = useState();
  
  
  useEffect(() => {
    axios.get("http://localhost:5005/api/products/get").then((response) => {
    // console.log(response.data);
      setAllProducts(response.data);
      console.log(allProducts);

    
    })
    
  }, []);



return (

  
 <div>
      <div className='bg-[#F3EDDF]'>
        <div className='mx-16 text-base font-normal pt-16'>
          <div><Link className='mr-3 hover:underline'>Home</Link>     /   <Link className='mx-3 hover:underline'>All Products</Link>   / <span className='mx-3'>Products</span></div>
          <div className='mt-3 pb-20'>
            <h1 className=' text-4xl'>Products</h1>
            <p className='mt-4'>Shop Products exclusively designed by Venkatesh <br />Bhat.</p>
          </div>
        </div>


      </div>
        <div className='mt-10 mx-16 '>
          <div className='relative'>
            <button className='w-36 font-medium    flex justify-between items-center' onClick={() => setDropDown(!dropDown)}><p>SORT BY</p><MdOutlineKeyboardArrowDown className='text-xl'/>
            {dropDown && (
              <div className='absolute z-10 w-36 bg-white text-black border border-black mt-24 font-normal'><ul><li className='hover:bg-blue-500 hover:text-white p-1'>Price High to Low</li>
              <li className='hover:bg-blue-500 p-1 hover:text-white'>Price Low to High</li></ul></div>
            )}
            </button>
          </div>
          <div className=" grid grid-cols-4 mt-5 gap-10 pb-28">

            {allProducts && allProducts.map (product => (
              <div key={product._id} className='w-[280px] h-[320px]'>
                <div className='relative '>
                  <img src={product.images[0]} alt=""  className='w-full h-[300px]  object-cover bg-[#F5F5F5] p-4 '/>
                  <div className='absolute left-2 mt-[-26px] text-[15px] bg-white text-black p-[2px] px-2'>&#8377; {product.price}</div>
                 
                  <div> 
                    <p className='text-sm font-medium mt-2'>{product.productName}</p> </div>
                </div>

              </div>
            )

            )
              
            }

          </div>

      </div>
    </div>
  )
}

export default Prodcts