import {
    categoryValidationSchema,
    productValidationSchema,
    productUpdateValidationSchema,
    userValidationSchema,
    loginValidationSchema,
    orderValidationSchema,
  } from '../db/validations/index.js';
  import status from 'http-status';
  
import Category from '../models/categoriesModel.js'
// import status from 'http-status';
// export const validationForUniqueCategory = async (req, res, next) => {
//   try {
//     const data = await Category.findOne({ ...req.body });
//     if (data) {
//       return res
//         .status(status.BAD_REQUEST)
//         .send({ message: 'Category with this name already exist' });
//     }
//   } catch (error) {
//     return res.status(status.INTERNAL_SERVER_ERROR).send(error);
//   }
//   next();
// };

  export const catagoryValidation = (req, res, next) => {
    const { error } = categoryValidationSchema.validate(req.body);
    if (error) {
      return res.status(status.BAD_REQUEST).send(error);
    }
    next();
  };
  
  export const productValidation = (req, res, next) => {
    const { error } = userValidationSchema.validate(req.body);
    if (error) {
      return res.status(status.BAD_REQUEST).send(error);
    }
    next();
  };
  
  export const productUpdateValidation = (req, res, next) => {
    const { error } = productUpdateValidationSchema.validate(req.body);
    if (error) {
      return res.status(status.BAD_REQUEST).send(error);
    }
    next();
  };
  
  export const userValidation = (req, res, next) => {
    const { error } = userValidationSchema.validate(req.body);
    if (error) {
      return res.status(status.BAD_REQUEST).send(error);
    }
    next();
  };
  
  export const loginValidation = (req, res, next) => {
    const { error } = loginValidationSchema.validate(req.body);
    if (error) {
      return res.status(status.BAD_REQUEST).send(error);
    }
    next();
  };
  
  export const orderValidation = (req, res, next) => {
    const { error } = orderValidationSchema.validate(req.body);
    if (error) {
      return res.status(status.BAD_REQUEST).send(error);
    }
    next();
  };