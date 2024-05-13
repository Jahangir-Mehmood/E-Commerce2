import express from 'express';

const productRouter = express.Router();

productRouter.get('/',(req,res)=>{
    console.log('Request',req)
    res.status(200).send('No Products exit');
})

productRouter.post('/',(req,res)=>{
    console.log('Request Data',req.body)
    res.status(200).send({...req.body, id:1});
})

productRouter.put('/:id',(req,res)=>{
    console.log(req.params)
    res.status(200).send({...req.body, id:req.params.id});
})

export default productRouter;