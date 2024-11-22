//api end point '/api/add_user'

import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const cashQuery = doc(db, "cash", req.query.id)

        await deleteDoc(cashQuery)

        res.status(200).json({
            status : 200,
            success : true,
            data : 'Cash Entry deleted successfully'
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}