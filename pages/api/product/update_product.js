//api end point '/api/add_user'

import { collection, doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../../../database/conncetDB";

export default async function handler(req, res, next) {
    try {
        const docRef = doc(db, "products", req.query.id);
        await updateDoc(docRef, {
            name: req.body.name
        });

        const productQ = query(collection(db, 'products'))
        const docsProducts = await getDocs(productQ)
        const products = [];
        docsProducts.forEach(data => products.push({ id: data.id, ...data.data() }));
        res.status(200).json({
            status: 200,
            success: true,
            data: products,
            message: 'Product updated successfully'
        })

    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: error.message
        })
    }
}