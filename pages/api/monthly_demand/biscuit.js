import { getDoc } from "firebase/firestore"
import { info, recipe } from "../../../utils/info_recipe"

export default async function handler(req,res){
    const active_Energy_MiniInfo = await getDoc(info('Active_Energy_Mini'))
    const active_Energy_MiniRecipe = await getDoc(recipe('Active_Energy_Mini'))

    const active_Energy_StandardInfo = await getDoc(info('Active_Energy_Standard'))
    const active_Energy_StandardRecipe = await getDoc(recipe('Active_Energy_Standard'))

    res.status(200).send([
        {
            id : 'Active_Energy_Mini',
            info : active_Energy_MiniInfo.data(),
            recipe : active_Energy_MiniRecipe.data()
        },
        {
            id : 'Active_Energy_Standard',
            info : active_Energy_StandardInfo.data(),
            recipe : active_Energy_StandardRecipe.data()
        }
    ])
}