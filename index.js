import express,{json} from 'express';
import productRouter from './router/productRouter.js';
import categoryRouter from './router/categoryRouter.js';
import connectDb from './db/indexdb.js';
connectDb();


const app = express();
app.use(json());

app.use('/products',productRouter);
app.use('/categories',categoryRouter);


app.listen(4000,()=>{
    console.log('Listening to port 4000');
})