//api end point '/api/products/:name'

import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";

export default async function handler(req,res,next){
    try {

        const infoRef = doc(db, "products_info", req.query.id);
        await updateDoc(infoRef, req.body.product);

        const recipeRef = doc(db, "products_recipe", req.query.id);
        await updateDoc(recipeRef, req.body.ingredients);

        await setDoc(doc(db,'all_version_recipes',("V"+"_"+req.body.product.version+"_"+req.body.product.id)),{...req.body.product,ingredients : req.body.ingredients,changedAt: Date.now()})

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