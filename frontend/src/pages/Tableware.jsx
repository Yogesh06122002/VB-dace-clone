import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Tableware() {

  const [dropDown, setDropDown] = useState(false);
  const [allProducts, setAllProducts] = useState();
  const [tableProduct, setTableProduct] = useState();

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
    <div className='mx-16 text-base font-normal pt-16'>
      <div><Link to ='/' className='mr-3 hover:underline'>Home</Link>     /   <Link to ='/products' className='mx-3 hover:underline'>All Products</Link>   / <span className='mx-3'>
      Tableware</span></div>
      <div className='mt-3 pb-20'>
        <h1 className=' text-4xl'>
        Tableware</h1>
        <p className='mt-4'>Shop 
        Tableware exclusively designed by Venkatesh <br />Bhat.</p>
      </div>
    </div>
    </div>
    <div className='mt-10 mx-16 '>
      <div className='relative'>
        <button className='w-36 font-medium    flex justify-between items-center' onClick={() => setDropDown(!dropDown)} onMouseLeave={()=> setDropDown(false)}><p>SORT BY</p><MdOutlineKeyboardArrowDown className='text-xl'/>
        {dropDown && (
          <div className='absolute z-10 w-36 bg-white text-black border border-black mt-24 font-normal'><ul><li className='hover:bg-blue-500 hover:text-white p-1'>Price High to Low</li>
          <li className='hover:bg-blue-500 p-1 hover:text-white'>Price Low to High</li></ul></div>
        )}
        </button>
      </div>
      <div className=" grid grid-cols-4 mt-5 gap-10 pb-28">

        {allProducts && allProducts.filter (product =>  product.category === 'tableware').map(product => (
          <Link to={`/product/${product._id}`}>
          <div key={product._id} className='w-[280px] h-[320px]'>
            <div className='relative ' onMouseEnter={() => setTableProduct(product._id)} onMouseLeave={()=>setTableProduct()} >
              <img src={tableProduct === product._id ? product.images[1] : product.images[0]} alt=""  className='w-full h-[300px]  object-cover bg-[#F5F5F5] p-4 '/>
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

export default Tableware