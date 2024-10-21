import React,{useState} from 'react';
import axios from 'axios';



function Addproduct() {

  const [formData, setFormData] = useState({
    productName:'',
    price:'',
    disc:'',
    category:'',
    images:[]
  });

  // formdata = new FormData;

  const handleChange = (e) => {
    const {name,value,files} = e.target;

    if(name === 'images'){
      setFormData({
        ...formData,
        images:[...files]
      })
    }else{

      setFormData({
        ...formData,
        [name]:value
      });
    }
  }

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const productData = new FormData();
  
    // console.log(formData)

    productData.append('productName',formData.productName);
    productData.append('price',formData.price);
    productData.append('disc',formData.disc);
    productData.append('category',formData.category);
    
    formData.images.forEach((image) => {
      productData.append(`images`,image);
    
    });

    // for (let pair of productData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
    
    // console.log(formData.images);
    // console.log(productData.get('images[1]'));
    
    try{
      
      axios.post('https:vb-dace-server.vercel.app/api/products/create',productData);
      console.log('product created successfully');
      setFormData({
        productName:'',
        price:'',
        category:'',
        disc:'',
        images:[]
      });
      e.target.reset();

    }catch(error){
      console.log('something went wrong in submit',error.message);
    }

    
  }
  



  return (
    <div className='w-[80%] flex justify-center '>

        <div className='border-2 border-gray-500 rounded-lg p-4 w-[60%] flex items-center justify-center mt-10 ' >
          <form action="" onSubmit={handleSubmit} className='text-2xl space-y-10'>
            <div className="flex gap-2">
              <label htmlFor="name">Name:</label>
              <input type="text" className=' border-b-2 outline-none ' name='productName' value={formData.productName} onChange={handleChange}/>
            </div>
            <div className="flex gap-2">
              <label htmlFor="price">Price:</label>
              <input type="text" className=' border-b-2 outline-none ' name="price" value={formData.price} onChange={handleChange}/>
            </div>
            <div className="flex gap-2">
              <label htmlFor="category">category:</label>
              <select className=' border-b-2 outline-none ' name='category' value={formData.category} onChange={handleChange}>
              <option value="" className=''>Select a category</option>
              <option value="kitchenware">kitchenware</option>
              <option value="accessories">accessories</option>
              <option value="tableware">tableware</option>
              <option value="kitchentools">kitchentools</option>
              <option value="kitchenmate">kitchenmate</option>
              </select>
            </div>
            <div className="flex gap-2">
              <label htmlFor="Description">Description:</label>
              <textarea className="border-b-2 p outline-none " id="" rows="5" cols="40"  name='disc' value={formData.disc} onChange={handleChange}></textarea>
            </div>
            <div className="flex gap-2">
              <label htmlFor="images">images:</label>
              <input type="file" multiple name='images' className=' border-b-2 outline-none  ' onChange={handleChange}/>
            </div>
            <button className='text-center bg-blue-700 text-white px-4 py-2 rounded-lg ' type='submit'>Submit</button>


          </form>

        </div>

      </div>

    
  )
}


export default Addproduct