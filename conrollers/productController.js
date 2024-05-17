import status from 'http-status';
import Product from '../models/productModel.js'

export const createProduct = async(req,res)=>{
    try{
       const resp =  await Product.create(req.body);
    res.status(status.CREATED).send(resp);
    }catch(error){
        res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})
    }
}

export const getALLProducts = async (req, res) => {
    try {
        const { categoryId, pageNumber, pageSize } = req.query;

        let query = {};

        if (categoryId) {
            query.category = categoryId;
        }

        if (pageNumber && pageSize) {
            const options = {
                populate: 'category',
                page: pageNumber,
                limit: pageSize
            };
            const paginatedProducts = await Product.paginate(query, options);
            return res.status(status.OK).send(paginatedProducts);
        } else {
            const allProducts = await Product.find(query).populate('category');
            return res.status(status.OK).send(allProducts);
        }
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).send({ message: error.message });
    }
}


// export const getALLProducts = async (req, res) => {
//     try {
//         const { categoryId, pageNumber, pageSize } = req.query;

//         if (!categoryId) {
//             return res.status(status.BAD_REQUEST).send({ message: "Category ID is required" });
//         }

//         let query = { category: categoryId };

//         if (pageNumber && pageSize) {
//             const options = {
//                 populate: 'category',
//                 page: pageNumber,
//                 limit: pageSize
//             };
//             const paginatedProducts = await Product.paginate(query, options);
//             return res.status(status.OK).send(paginatedProducts);
//         } else {
//             const allProducts = await Product.find(query).populate('category');
//             return res.status(status.OK).send(allProducts);
//         }
//     } catch (error) {
//         res.status(status.INTERNAL_SERVER_ERROR).send({ message: error.message });
//     }
// }


export const updateProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        await Product.findByIdAndUpdate(id,{...req.body})
        res.status(200).send({message:'Successfully Updadted'});
    }catch(error){
        console.log(error)
                res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})

    }
    
}
export const deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        await Product.findByIdAndDelete(id)
        res.status(200).send({message:'Successfully Deleted'});
    }catch(error){
        console.log(error)
                res.status(status.INTERNAL_SERVER_ERROR).send({message:error.message})

    }
}