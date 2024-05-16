import {config} from 'dotenv';
config();
import express,{json} from 'express';
import productRouter from './router/productRouter.js';
import categoryRouter from './router/categoryRouter.js';
import connectDb from './db/indexdb.js';
import authRouter from './router/authRouter.js';
import orderRouter from './router/orderRouter.js';

connectDb();


const app = express();
app.use(json());

app.use('/products',productRouter);
app.use('/categories',categoryRouter);
app.use('/auth',authRouter);
app.use('/login',authRouter);
app.use('/order',orderRouter);





app.listen(4000,()=>{
    console.log('Listening to port 4000');
})

// model
// router
// main screen me register karna hai
// controller bana hai