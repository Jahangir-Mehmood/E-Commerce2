import status from 'http-status';
import User from '../models/userModel.js'
import { createToken } from '../utils/utils.js';

export const createUser = async(req,res)=>{
    try{
       const {name,email,_id} =  await User.create(req.body);
    res.status(status.CREATED).send({name,email,_id});
    }catch(error){
        res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})
    }
}

export const getALLUsers = async(req,res)=>{
    try{

        //.populate('category'); name aur id dono get karne k lye
        // const resp =  await Product.find().populate('category');
        const {pageNumber,pageSize} = req.req;
        const resp =  await User.paginate({},{populate:'category',page: pageNumber,limit:pageSize});

     res.status(status.OK).send(resp);
     }catch(error){
        res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})
     }
}

export const updateUser = async(req,res)=>{
    try{
        const {id} = req.params;
        await User.findByIdAndUpdate(id,{...req.body})
        res.status(200).send({message:'Successfully Updadted'});
    }catch(error){
        console.log(error)
                res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})

    }
    
}
export const deleteUser = async(req,res)=>{
    try{
        const {id} = req.params;
        await User.findByIdAndDelete(id)
        res.status(200).send({message:'Successfully Deleted'});
    }catch(error){
        console.log(error)
                res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})

    }
}
export const loginUser = async(req,res)=>{
    try{
        const {email ,password} = req.body;
        const data = await User.findOne({email});
        if(data && data.password === password){
            const token = createToken({email:data.email,password:data.password,_id:data._id});
            const {_id,email,name}=data;
            return res.status(status.OK).send({_id,email,name, token})
            }
        res.status(status.BAD_REQUEST).send({message:'Email or Password is incorrect'})
    }catch(error){
        console.log(error)
                res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})

    }
}