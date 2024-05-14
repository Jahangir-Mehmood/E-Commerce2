import express from 'express';
import Category from '../models/categoriesModel.js';
import status from 'http-status';
import {catagoryValidation} from '../middlewares/dataValidation.js';
import {validationForUniqueCategory,validateValidCategoryId } from '../middlewares/dbValidation.js';
import {createCategory,getALLCategories,updateCategory,deleteCategory} from '../conrollers/categoryController.js'

const categoryRouter = express.Router();


categoryRouter.get('/', getALLCategories)
categoryRouter.post('/',catagoryValidation,validationForUniqueCategory,createCategory)
categoryRouter.put('/:id',validateValidCategoryId,catagoryValidation,validationForUniqueCategory,updateCategory)
categoryRouter.delete('/:id',validateValidCategoryId,deleteCategory)
export default categoryRouter;