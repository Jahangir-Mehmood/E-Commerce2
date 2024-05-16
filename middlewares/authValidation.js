
import jwt from 'jsonwebtoken';
import status from 'http-status';

export const authorizeUser = (req,res,next)=>{
    //req me multiple header hote hai aur header k ander hota hau authorization aur authorizationme token provide kiya jata hai
    //token ki diffrent type hoti hai me is me se bearer istimal karonga

      const authHeader = req.authHeader.authorizeUser;
      if(authHeader){
        const token = authHeader.split(' ')[1];
        if(token){
            jwt.verify(token,process.env.SEC_KEY,(err,user)=>{
              if(err){
                return res.status(status.FORBIDDEN).send({message:'Token is expired'}) ;
             }
            //  req.user = user;
             next();
            })
        }

      }
      res.status(status.FORBIDDEN).send({message:'Authorizetion is required'}) ;
}
