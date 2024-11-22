import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";
import Demand from '../../../../utils/v1/demand';


export default async function handler(req,res,next){
    const demand = new Demand()
    try {
        //get product_info
        const info_query= query(collection(db,'products_info'),where('id','==', req.query.id))
        const docs = await getDocs(info_query)
        const products = [];
        docs.forEach(data => products.push(data.data()));

        //get product_ingredients
        const ingredientRef = doc(db,'products_recipe',products[0].id)
        const ingredients = await getDoc(ingredientRef)

        //get carton per batch
        const carton_per_batch = demand.cartonPerBatch(products[0],ingredients.data())

        //get target ctn
        const target_carton = demand.targetCarton(req.query.carton)

        //get target batch
        const batch = demand.targetBatch(target_carton,carton_per_batch)

        //get ingredient array
        const ingredients_Array = demand.ingredients_Obj_to_Array(ingredients.data(),batch)

        res.status(200).json({
            status : 200,
            success : true,
            data : {
                ...products[0],
                demand : req.query.carton,
                target : target_carton,
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