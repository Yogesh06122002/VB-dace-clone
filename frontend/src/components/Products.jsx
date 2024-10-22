import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect,useRef} from 'react';
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function Products() {

  const [allProducts, setAllProducts] = useState([]);
  const scrollContainerRef = useRef(null); // Reference for the scrollable container
  const newArrivalsRef = useRef(null);
  const trendingRef = useRef(null);
  const productWidth = 240  ;

  const [hoveredProduct, setHoveredProduct] = useState();
  const [newProduct, setNewProduct] = useState();
  const [trendingProduct, setTrendingProduct] = useState();
  useEffect(() => {
    axios.get("http://localhost:5005/api/products/get").then((response) => {
    // console.log(response.data);
      setAllProducts(response.data);
      // console.log(allProducts);

    
    })
    
  }, []);

  const kitchenWare = allProducts.filter(product => product.category === 'tableware')

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: productWidth, behavior: 'smooth' });
  };

  // Function to scroll the container left
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -productWidth, behavior: 'smooth' });
  };

  const scrollRightNewArrivals = () => {
    newArrivalsRef.current.scrollBy({ left: productWidth, behavior: 'smooth' });
  };
  const scrollLeftNewArrivals = () => {
    newArrivalsRef.current.scrollBy({ left: -productWidth, behavior: 'smooth' });
  };

  // Scroll functions for What's Trending
  const scrollRightTrending = () => {
    trendingRef.current.scrollBy({ left: productWidth, behavior: 'smooth' });
  };
  const scrollLeftTrending = () => {
    trendingRef.current.scrollBy({ left: -productWidth, behavior: 'smooth' });
  };
  return (
    <div className='lg:mx-16 mx-3'>
      <div className='text-center text-[23px] lg:text-2xl'>Shop by Products</div>
      <div className='  '>
        <p className='font-medium  mt-10 lg:border-b-black border-b-[#BB906A] w-[25%] lg:w-[8%] lg:text-lg text-base border-b-2 text-[#BB906A] lg:text-black'>Best Sellers</p>
        

        <div ref={scrollContainerRef} className=" flex  pt-7 gap-3 lg:gap-[17px] pb-16 overflow-x-auto scrollbar-hide  border-t-[1px] border-t-gray-200 w-full mt-[-2]  ">

          {allProducts && allProducts.map(product => (
            <Link to ={`/product/${product._id}`} key={product._id}>
          <div  className='w-[230px] h-[250px] flex-shrink-0'>
               <div className='relative  'onMouseEnter={()=>setHoveredProduct(product._id)} onMouseLeave={()=>setHoveredProduct()}>
            <img src={hoveredProduct === product._id ? product.images[1] : product.images [0]} alt=""  className='w-full h-[250px]  object-cover bg-[#F5F5F5] p-3 '/>
            <div className='absolute leading-4 left-2 mt-[-22px] text-[15px] bg-white text-black py-1 px-2 '>&#8377; {product.price}</div>
     
            <div> 
            <p className='text-sm font-medium mt-2'>{product.productName}</p> </div>
             </div>
   
            
          </div>
          </Link>
)

)
  
}

        </div>

        <div className="flex text-[#BB906A] gap-5 text-2xl  justify-end">
          <button onClick={scrollLeft}><FaArrowLeftLong /></button>
          <button onClick={scrollRight}><FaArrowRightLong /></button>
        </div>
      </div>


        
      <div className='  '>
        <p className='font-medium  mt-10 lg:border-b-black border-b-[#BB906A] w-[25%] lg:w-[9%] lg:text-lg text-base border-b-2 text-[#BB906A] lg:text-black'>New Arrivals</p>
        

        <div ref={newArrivalsRef} className=" flex  pt-7 gap-3 lg:gap-[17px] pb-16 overflow-x-auto scrollbar-hide  border-t-[1px] border-t-gray-200 w-full mt-[-2]  ">

          {allProducts && allProducts.slice().reverse().map(product => (
            <Link to={`/product/${product._id}`}>
  <div key={product._id} className='w-[230px] h-[250px] flex-shrink-0'>
    <div className='relative 'onMouseEnter={()=>setNewProduct(product._id)} onMouseLeave={()=>setNewProduct()}>
      <img src={newProduct === product._id ? product.images[1] : product.images [0]} alt=""  className='w-full h-[250px]  object-cover bg-[#F5F5F5] p-3 '/>
      <div className='absolute leading-4 left-2 mt-[-22px] text-[15px] bg-white text-black py-1 px-2'>&#8377; {product.price}</div>
      <div className='absolute top-2 right-2 px-1 text-sm text-white bg-[#BA8F6A]'>New</div>
     
      <div> 
        <p className='text-sm font-medium mt-2'>{product.productName}</p> </div>
    </div>
   

  </div>
  </Link>
)

)
  
}

        </div>

        <div className="flex text-[#BB906A] gap-5 text-2xl  justify-end">
          <button onClick={scrollLeftNewArrivals}><FaArrowLeftLong /></button>
          <button onClick={scrollRightNewArrivals}><FaArrowRightLong /></button>
        </div>
      </div>


        
      <div className='  '>
        <p className='font-medium  mt-10 lg:border-b-black border-b-[#BB906A] w-[32%] lg:w-[11%] lg:text-lg text-base border-b-2 text-[#BB906A] lg:text-black '>What's Trending</p>
        

        <div ref={ trendingRef} className=" flex   pt-7 gap-3 lg:gap-[17px] pb-16 overflow-x-auto scrollbar-hide  border-t-[1px] border-t-gray-200 w-full mt-[-2]  ">

          {  kitchenWare.map(product => (
            <Link to={`/product/${product._id}`}>
  <div key={product._id} className='w-[230px] h-[250px] flex-shrink-0'>
    <div className='relative 'onMouseEnter={()=>setTrendingProduct(product._id)} onMouseLeave={()=>setTrendingProduct()}>
      <img src={trendingProduct === product._id ? product.images[1] : product.images [0]} alt=""  className='w-full h-[250px]  object-cover bg-[#F5F5F5] p-3 '/>
      <div className='absolute leading-4 left-2 mt-[-26px] text-[15px] bg-white text-black py-2 px-2'>&#8377; {product.price}</div>
     
      <div> 
        <p className='text-sm font-medium mt-2'>{product.productName}</p> </div>
    </div>
   

  </div>
  </Link>
)

)
  
}

        </div>

        <div className="flex text-[#BB906A] gap-5 text-2xl mb-14  justify-end">
          <button onClick={scrollLeftTrending}><FaArrowLeftLong /></button>
          <button onClick={scrollRightTrending}><FaArrowRightLong /></button>
        </div>


        
      </div>
      
    </div>
  )
}

export default Products