import express from 'express';
import Category from '../models/categoriesModel.js';
import status from 'http-status';
// import { validationForUniqueCategory } from '../middlewares/dbValidation.js';
import {catagoryValidation} from '../middlewares/dataValidation.js'
// import validationForUniqueCategory  from '../middlewares/dbValidation.js'
import {validationForUniqueCategory } from '../middlewares/dataValidation.js'
// import { validationForUniqueCategory } from '../middlewares/dbValidation.js';
const categoryRouter = express.Router();


categoryRouter.get('/',catagoryValidation,validationForUniqueCategory, async(req,res)=>{
    try{
        const resp =  await Category.find();
     res.status(status.OK).send(resp);
     }catch(error){
        res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})
     }
})
categoryRouter.post('/',async(req,res)=>{
    try{
       const resp =  await Category.create(req.body);
    res.status(status.CREATED).send(resp);
    }catch(error){
        res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})
    }
})

categoryRouter.put('/:id',(req,res)=>{
    console.log(req.params)
    res.status(200).send({...req.body, id:req.params.id});
})

export default categoryRouter;