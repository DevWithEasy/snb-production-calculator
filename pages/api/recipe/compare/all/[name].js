import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../../database/conncetDB";


export default async function handler(req, res, next) {
    try {
        const products_query = query(collection(db, 'all_version_recipes'), where('id', '==', req.query.name))
        const docs = await getDocs(products_query)
        const products = []
        docs.forEach(data => products.push(data.id))

        res.status(200).json({
            status: 200,
            success: true,
            data: products
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}