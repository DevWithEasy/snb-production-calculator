//api end point '/api/sections'
import axios from "axios";
import getAPI from "../../../../../utils/v2/appscript_api_url";

export default async function handler(req,res,next){
    try {
        const {section,start_date,end_date} = req.query
        const {data} = await axios.get(getAPI()+`route=calculation&section=${section}&start_date=${start_date}&end_date=${end_date}`)
        res.send(data)
    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}