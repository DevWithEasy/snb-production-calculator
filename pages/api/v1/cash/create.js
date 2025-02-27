import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../database/conncetDB";


export default async function handler(req,res,next){
    try {
        
        const id = req.body._id
        const cashQuery = doc(db,'cash',id.toString())

        await setDoc(cashQuery,req.body)

        res.status(200).json({
            status : 200,
            success : true,
            message : 'Successfully created recipe'
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}