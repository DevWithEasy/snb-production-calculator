//api end point '/api/add_user'

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        await addDoc(collection(db, "users"), {
            name : req.body.name,
            username : req.body.username,
            password : req.body.password,
            section : req.body.section
         });
        console.log(req.body)
        res.status(200).json({
            status : 200,
            success : true,
            data : 'User added successfully'
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}