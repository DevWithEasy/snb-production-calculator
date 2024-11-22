//api end point '/api/add_user'

import {doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const _id = req.body.name.split(" ").join("_")
        await setDoc(doc(db,'products', _id),{
            id: _id,
            name : req.body.name,
            section :req.body.section
        })
        const docRef = doc(db,'products',_id)
        const data = await getDoc(docRef)
        res.status(200).json({
            status : 200,
            success : true,
            data : data.data(),
            message : 'Product added successfully'
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}