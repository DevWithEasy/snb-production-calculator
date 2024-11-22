//api end point '/api/products/:name'

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../database/conncetDB";

export default async function handler(req,res,next){
    try {

        const infoRef = doc(db, "products_info", req.query.id);
        await updateDoc(infoRef, req.body.product);

        const recipeRef = doc(db, "products_recipe", req.query.id);
        await updateDoc(recipeRef, req.body.ingredients);

        res.status(200).json({
            status : 200,
            success : true,
            message : 'Successfully updated recipe'
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}