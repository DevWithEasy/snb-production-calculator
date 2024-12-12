//api end point '/api/sections'
import axios from "axios";
import getAPI from "../../../utils/v2/appscript_api_url";
import { SignJWT } from 'jose'

export default async function handler(req, res, next) {
    const { username, password } = req.query
    try {
        const { data } = await axios.get(getAPI() + `route=login&username=${username}&password=${password}`)
        if (data.data) {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET)
            const token = await new SignJWT({ section: data.data.section })
                .setProtectedHeader({ alg: 'HS256' })
                .sign(secret)
            res.send({ ...data, token })
        }else{
            res.send(data)
        }

    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: error.message
        })
    }
}