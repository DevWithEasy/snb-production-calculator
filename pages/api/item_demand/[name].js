import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../database/conncetDB";


export default async function handler(req,res,next){
    try {
        const info_query= query(collection(db,'products_info'),where('id','==', req.query.name))
        const docs = await getDocs(info_query)
        const products = [];
        docs.forEach(data => products.push(data.data()));
        const ingredientRef = doc(db,'products_recipe',products[0].id)
        const ingredients = await getDoc(ingredientRef)

        res.status(200).json({
            status : 200,
            success : true,
            data : {...products[0],ingredients:ingredients.data()}
        })
        

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}