//api end point '/api/sections'

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const docs = await getDocs(collection(db,'sections'))
        const sections = [];
        docs.forEach(data => sections.push(data.data()));
        res.status(200).json({
            status : 200,
            success : true,
            data : sections
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}