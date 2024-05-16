import express from 'express';
import { createUser, deleteUser, getALLUsers, loginUser, updateUser } from '../conrollers/authController.js';
import { loginValidation, orderValidation, productUpdateValidation, productValidation, userValidation } from '../middlewares/dataValidation.js';
import { validateValidProductId, validationForUniqueEmail } from '../middlewares/dbValidation.js';
import { authorizeUser } from '../middlewares/authValidation.js';
import { createOrder } from '../conrollers/orderController.js';

const orderRouter = express.Router();

orderRouter.get('/',getALLUsers);
orderRouter.post('/signup',authorizeUser,orderValidation,createOrder)
orderRouter.put('/:id',validateValidProductId,productUpdateValidation,updateUser)
orderRouter.delete('/:id',validateValidProductId,deleteUser)


export default orderRouter;