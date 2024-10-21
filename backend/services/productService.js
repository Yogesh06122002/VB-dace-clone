import Product from "../models/productsSchema.js"


export const add = async (data) => {
  const result = await Product.create(data); 
  return result;
}

export const remove = async (id) => {
  const result = await Product.deleteOne({_id:id});
  return result;
}

export const get = async () => {
  const result = await Product.find();
  return result;
}

export const getOne = async (id) => {
  const result = await Product.findOne({_id: id });
  return result;
}

export const update = async (id,data) => {
  const result = await Product.findByIdAndUpdate({_id:id},data,{new:true});
  return result;
}

