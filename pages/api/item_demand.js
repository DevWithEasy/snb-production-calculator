import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../database/conncetDB";
import { ingredients_Obj_to_Array, targetBatch } from "../../utils/demand_utils";


export default async function handler(req,res,next){
    try {
        //get product_info
        const info_query= query(collection(db,'products_info'),where('id','==', req.query.id))
        const docs = await getDocs(info_query)
        const products = [];
        docs.forEach(data => products.push(data.data()));

        //get product_ingredients
        const ingredientRef = doc(db,'products_recipe',products[0].id)
        const ingredients = await getDoc(ingredientRef)

        //get target batch
        const batch = targetBatch(req.query.carton,products[0],ingredients.data())

        //get ingredient array
        const ingredients_Array = ingredients_Obj_to_Array(ingredients.data(),batch)

        res.status(200).json({
            status : 200,
            success : true,
            data : {
                ...products[0],
                target : Number(req.query.carton),
                ingredients:ingredients_Array
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