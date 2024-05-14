
import {Schema,model} from 'mongoose';
import pagenate from 'mongoose-paginate-v2';

const productSchema =new Schema({
    name : { type: String,required: true },
    price: { type: Number,required:true},
    discount : Number,
    //Schema import se lena hai
    //types.ObjectId ye hi ayege
    //category peche model se liya hai is me product add karni hai
    category:{type:Schema.Types.ObjectId,ref:'category',required:true},
    discription:String,
    quantity:{type:Number,required:true},
});

productSchema.plugin(pagenate);
const Product = model('product',productSchema);

export default Product;