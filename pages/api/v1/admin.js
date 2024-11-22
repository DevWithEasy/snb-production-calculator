import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const q= query(collection(db,'users'))
        const docs = await getDocs(q)
        const users = [];
        docs.forEach(data => users.push({id:data.id,... data.data()}));
    
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
                users,
                products,
                sections
            }
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}