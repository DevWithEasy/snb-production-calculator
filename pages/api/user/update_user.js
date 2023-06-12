//api end point '/api/add_user'

import {  collection, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const docRef = doc(db, "users", req.query.id);
        await updateDoc(docRef, {
            name : req.body.name,
            username : req.body.username,
            password : req.body.password,
            section : req.body.section
         });

        const q= query(collection(db,'users'))
        const docs = await getDocs(q)
        const users = [];
        docs.forEach(data => users.push({id:data.id,... data.data()}));

        res.status(200).json({
            status : 200,
            success : true,
            data : users,
            message : 'User update successfully'
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}