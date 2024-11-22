import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../database/conncetDB";

export default async function handler(req,res,next){
    try {
        const docRef = doc(db, "products_info", req.query.id);

        await updateDoc(docRef, {
            // packet_per_inner : 0,
            // inner_per_master : 0,
            // inner_poly_18_15 : 0,
            // master_poly_25_47 : 0,
            // inner_poly_17_19_5 : 0,
            // master_poly_25_37 : 0,
            // inner_poly_16_21_5 : 0,
            // master_poly_35_26 : 0,
            // inner_poly_24_15 : 0,
            // master_poly_44_23 : 0,
            // shrink_outer_poly : 0,
            // inner_poly_19_20 : 0,
            // master_poly_28_42 : 0,
            // jar : 0,
            // label : 0,
            // atc : 0,
            // tray : 0,
            // inner_pouch : 0,
            // inner_poly_6_8 : 0,
            // inner_poly_8_11_5 : 0,
            // inner_poly_9_11_5 : 0,
            // inner_poly_6x8 : deleteField(),
            // inner_poly_8x11_5 : deleteField(),
            // inner_poly_9x11_5 : deleteField(),
            // innerPoly: deleteField(),
            // masterPoly: deleteField()
        });

        res.status(200).json({
            status : 200,
            success : false,
            message : 'Success'
        })

    } catch (error) {
        res.status(500).json({
            status : 500,
            success : false,
            message : error.message
        })
    }
}