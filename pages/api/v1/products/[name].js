//api end point '/api/products/:name'

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const q= query(collection(db,'products'),where('section','==', req.query.name))
        const docs = await getDocs(q)
        const products = [];
        docs.forEach(data => products.push(data.data()));
        res.status(200).json({
            status : 200,
            success : true,
            data : products
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}