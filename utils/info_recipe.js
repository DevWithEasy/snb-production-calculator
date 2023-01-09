import { doc } from "firebase/firestore"
import { db } from "../database/conncetDB"

export function info(name){
        return doc(db,'products_info',name)
}

export function recipe(name){
        return doc(db,'products_recipe',name)
}