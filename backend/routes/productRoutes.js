import express from 'express';
import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';
import { upload } from '../utils/multer.js';

const router = Router();

router.post('/create', upload.array('images'),createProduct);
router.delete('/delete/:id',deleteProduct);
router.get('/get',getProducts);
router.get('/get/:id',getProduct);
router.put('/update/:id',updateProduct);


export default router;





