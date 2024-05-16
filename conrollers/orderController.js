import status from 'http-status';
import Order  from '../models/orderModel.js';

export const createOrder = async(req,res)=>{
    const data = req.body;
    const user = req.user;
    try{
       const resp =  await Order.create({customer:user._id,product:data._id,quantity:data.quantity,address:data.address});
    res.status(status.CREATED).send({message:'Order has been Successfully placed'});
    }catch(error){
        res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})
    }
}

export const getALLProducts = async(req,res)=>{
    try{

        //.populate('category'); name aur id dono get karne k lye
        // const resp =  await Product.find().populate('category');
        const {pageNumber,pageSize} = req.req;
        const resp =  await Order.paginate({},{populate:'category',page: pageNumber,limit:pageSize});

     res.status(status.OK).send(resp);
     }catch(error){
        res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})
     }
}

export const updateProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        await Order.findByIdAndUpdate(id,{...req.body})
        res.status(200).send({message:'Successfully Updadted'});
    }catch(error){
        console.log(error)
                res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})

    }
    
}
export const deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        await Order.findByIdAndDelete(id)
        res.status(200).send({message:'Successfully Deleted'});
    }catch(error){
        console.log(error)
                res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})

    }
}