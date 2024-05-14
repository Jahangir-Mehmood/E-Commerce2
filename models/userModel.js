
import {Schema,model} from 'mongoose';
import pagenate from 'mongoose-paginate-v2';

const userModelSchema =new Schema({
    name : { type: String,required: true },
    email: { type: String,required:true},
    password : { type: String,required:true},
    isAdmin : Boolean,
});

userModelSchema.plugin(pagenate);
const User = model('user',userModelSchema);

export default User;