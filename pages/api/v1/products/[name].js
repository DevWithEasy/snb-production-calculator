//api end point '/api/products/:name'

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const name = req.query.name.charAt(0).toUpperCase() + req.query.name.slice(1)
        const q= query(collection(db,'products'),where('section','==', name))
        const docs = await getDocs(q)
        const products = [];
        docs.forEach(data => products.push(data.data()));
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}