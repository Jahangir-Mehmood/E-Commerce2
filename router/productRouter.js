import express from 'express';
import { createProduct, deleteProduct, getALLProducts, updateProduct } from '../conrollers/productController.js';
import { productUpdateValidation, productValidation } from '../middlewares/dataValidation.js';
import { validateValidProductId } from '../middlewares/dbValidation.js';

const productRouter = express.Router();

productRouter.get('/',getALLProducts);

productRouter.post('/',productValidation,createProduct)

productRouter.put('/:id',validateValidProductId,productUpdateValidation,updateProduct)

productRouter.delete('/:id',validateValidProductId,deleteProduct)


export default productRouter;