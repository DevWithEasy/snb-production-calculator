//api end point '/api/sections'
import axios from "axios";
import getAPI from "../../../../utils/v2/appscript_api_url";

export default async function handler(req,res,next){
    const {section,items,isFamily}=req.query
    try {
        const {data} = await axios.get(getAPI()+`route=consumption_pm&section=${section}&items=${items}&isFamily=${isFamily}`)
        res.send(data)
    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}