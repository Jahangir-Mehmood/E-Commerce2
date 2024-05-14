import status from 'http-status';
import Product from '../models/productModel.js'

export const createProduct = async(req,res)=>{
    try{
       const resp =  await Product.create(req.body);
    res.status(status.CREATED).send(resp);
    }catch(error){
        res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})
    }
}

export const getALLProducts = async(req,res)=>{
    try{

        //.populate('category'); name aur id dono get karne k lye
        // const resp =  await Product.find().populate('category');
        const {pageNumber,pageSize} = req.req;
        const resp =  await Product.paginate({},{populate:'category',page: pageNumber,limit:pageSize});

     res.status(status.OK).send(resp);
     }catch(error){
        res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})
     }
}

export const updateProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        await Product.findByIdAndUpdate(id,{...req.body})
        res.status(200).send({message:'Successfully Updadted'});
    }catch(error){
        console.log(error)
                res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})

    }
    
}
export const deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        await Product.findByIdAndDelete(id)
        res.status(200).send({message:'Successfully Deleted'});
    }catch(error){
        console.log(error)
                res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})

    }
}