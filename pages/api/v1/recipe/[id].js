//api end point '/api/products/:name'

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const product_ref = doc(db,'products_info',req.query.id)
        const product = await getDoc(product_ref)

        const ingredient_ref = doc(db,'products_recipe',req.query.id)
        const ingredients = await getDoc(ingredient_ref)

        res.status(200).json({
            status : 200,
            success : true,
            data : {
                ...product.data(),
                ingredients : ingredients.data()
            }
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}