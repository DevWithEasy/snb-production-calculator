import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../database/conncetDB";


export default async function handler(req,res,next){
    try {
        const cashQuery = collection(db,'cash')
        const docs = await getDocs(cashQuery)
        const cashEntries = []
        docs.forEach(data => cashEntries.push(data.data()))

        res.status(200).json({
            status : 200,
            success : true,
            data : cashEntries
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}