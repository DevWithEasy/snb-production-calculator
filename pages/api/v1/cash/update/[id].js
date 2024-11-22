//api end point '/api/add_user'

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../database/conncetDB";

export default async function handler(req, res, next) {
    try {
        const docRef = doc(db, "cash", req.query.id)

        await updateDoc(docRef, {
            ...req.body
        })

        res.status(200).json({
            status: 200,
            success: true,
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