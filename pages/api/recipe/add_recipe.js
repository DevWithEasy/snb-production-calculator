//api end point '/api/recipe/add_recipe?id=id'

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const product_ref = doc(db,'products_info',req.query.id)

        const ingredient_ref = doc(db,'products_recipe',req.query.id)

        await setDoc(product_ref,{...req.body.product,id:req.query.id})

        await setDoc(ingredient_ref,req.body.ingredients)

        res.status(200).json({
            status : 200,
            success : true,
            message : 'Successfully created recipe'
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}