
import {Schema,model} from 'mongoose';
import pagenate from 'mongoose-paginate-v2';

const orderSchema =new Schema({
    customer:{type:Schema.Types.ObjectId,ref:'user',required:true},
    product:{type:Schema.Types.ObjectId,ref:'product',required:true},
    address:{type:String,required:true},
    quantity:{type:Number,required:true},
});

orderSchema.plugin(pagenate);
const Order = model('order',orderSchema);

export default Order;