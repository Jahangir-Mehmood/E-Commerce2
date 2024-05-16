import express from 'express';
import { createUser, deleteUser, getALLUsers, loginUser, updateUser } from '../conrollers/authController.js';
import { loginValidation, productUpdateValidation, productValidation, userValidation } from '../middlewares/dataValidation.js';
import { validateValidProductId, validationForUniqueEmail } from '../middlewares/dbValidation.js';

const authRouter = express.Router();

authRouter.get('/',getALLUsers);

authRouter.post('/signup',userValidation,validationForUniqueEmail,createUser)

authRouter.post('/login',loginValidation,loginUser)


authRouter.put('/:id',validateValidProductId,productUpdateValidation,updateUser)

authRouter.delete('/:id',validateValidProductId,deleteUser)


export default authRouter;