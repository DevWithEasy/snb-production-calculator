//api end point '/api/sections'
import axios from "axios";
import getAPI from "../../../../../../utils/v2/appscript_api_url";

export default async function handler(req,res,next){
    try {
        const {section} = req.query
        const {data} = await axios.get(getAPI()+`route=demand_products&section=${section}`)

        res.send(data)
    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}