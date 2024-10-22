


import { add, get, getOne, remove, update } from "../services/productService.js";

export const createProduct = async (req,res,next) => {
    const data = req.body;

    const images = req.files;

    if (!data.productName || !data.price || !data.category || !data.disc || !images || images.length === 0) {
      return res.status(400).send("Missing required fields or no files uploaded");
  }

    const productData = {
      ...data,
      images: images.map(file =>  `https://vb-dace-server.vercel.app//images/${file.filename}`)
    }
   
    try{

      const product = await add(productData);

      console.log(product);

     
  
      if(product){
        // res.send("product created successfully");
        res.send(product);
        // console.log(product);
      }else {
        console.error("Something went wrong while creating the product.");
        res.status(500).send("Failed to create product",productData);
    }
    }catch(err){
      console.error("Error while creating product:", err);
        // res.status(500).send("Internal server error",err);
        res.send(productData,err)
    }


   
  }

  export const deleteProduct = async (req,res,next) => {
    const { id } = req.params;
    const product = await remove(id);

    
    if(product){
      res.send("product deleted successfully");
      console.log(product);
    }
    
    else{
      console.log("Something went wrong")

    }
  }

  export const getProducts = async (req,res,next) => {
    const products = await get(); 
    try{

      if (products && products.length > 0) {
        // Send the products data
        res.status(200).json(products);
      } else {
        res.status(404).json({ message: "No products found" });
      }
    }catch{
      console.error("Error while getting products:", err);
  }
}

  export const getProduct = async (req,res,next) => {
    const { id } = req.params;

    const product = await getOne(id);

    if(product){
      res.send(product);
      // console.log(product);
    }else{
      res.status(404).send("unable to get data");
    }
  }

  export const updateProduct = async (req,res,next) =>{
    const {id} = req.params;
     const data = req.body;

     const product = await update(id,data);

     if(product){
      res.send("update the product successfully");
      // console.log(product);
     }else{
      res.status(404).send("Unable to update");
     }
  }


  


    
  