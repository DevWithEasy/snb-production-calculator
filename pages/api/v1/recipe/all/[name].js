import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";


export default async function handler(req, res, next) {
    try {

        const products_query = query(collection(db, 'products'), where('section', '==', req.query.name))
        const docs = await getDocs(products_query)
        const products = []
        docs.forEach(data => products.push(data.data()))

        const recipes = []

        const promises = products.map(async (product) => {
            const info = await getDoc(doc(db, 'products_info', product.id))
            const recipe = await getDoc(doc(db, 'products_recipe', product.id))
            recipes.push({
                info: info.data(),
                recipe: recipe.data()
            })
        })

        await Promise.all(promises);

        res.status(200).json({
            status: 200,
            success: true,
            data: recipes
        })

    } catch (error) {
        // res.status(500).json({
        //     status : 500,
        //     success : false,
        //     message : error.message
        // })
        console.log(error)
    }
}