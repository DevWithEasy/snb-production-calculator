//api end point '/api/add_user'

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const q= query(collection(db,'users'),where('username','==', req.body.username))
        const docs = await getDocs(q)
        const users = [];
        docs.forEach(data => users.push(data.data()));
        if (!users[0]) return res.status(404).json({
            status : 404,
            success : false,
            message : 'User not found'
        })
        if (users[0].password !== req.body.password) return res.status(401).json({
            status : 401,
            success : false,
            message : 'Credentials do not match'
        })
        
        if(users[0].section == 'Admin'){
            const q= query(collection(db,'users'))
            const docs = await getDocs(q)
            const all_users = [];
            docs.forEach(data => all_users.push({id:data.id,... data.data()}));
        
            const productQ= query(collection(db,'products'))
            const docsProducts = await getDocs(productQ)
            const products = [];
            docsProducts.forEach(data => products.push({id:data.id,... data.data()}));

            const sectionData = await getDocs(collection(db,'sections'))
            const sections = [];
            sectionData.forEach(data => sections.push(data.data()));

            res.status(200).json({
                status : 200,
                success : true,
                data : {
                    user : users[0],
                    users: all_users,
                    products,
                    sections
                }
            })
        }else{
            res.status(200).json({
                status : 200,
                success : true,
                data : {
                    user : users[0],
                    users : [],
                    products : [],
                    sections : []
                }
            })
        }

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}