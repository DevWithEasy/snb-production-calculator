//api end point '/api/add_user'

import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const products_Ref = doc(db, "products", req.query.id)
        const products_info_Ref = doc(db, "products_info", req.query.id)
        const products_recipe_ref = doc(db, "products_recipe", req.query.id)

        const find = await getDoc(products_info_Ref)
        const product = find.data()

        if(product){
            await deleteDoc(products_Ref)
            await deleteDoc(products_info_Ref)
            await deleteDoc(products_recipe_ref)

            return res.status(200).json({
                status : 200,
                success : true,
                data : 'Product deleted successfully'
            })
        }else{
            await deleteDoc(products_Ref)

            return res.status(200).json({
                status : 200,
                success : true,
                data : 'Product deleted successfully'
            })
        }
    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}