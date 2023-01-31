import { getDoc } from "firebase/firestore"
import { info, recipe } from "../../../utils/info_recipe"

export default async function handler(req,res){
    const lachchaSemai200Info = await getDoc(info('Lachcha_Semai_200gm'))
    const lachchaSemai200Recipe = await getDoc(recipe('Lachcha_Semai_200gm'))

    const lachchaSemai500Info = await getDoc(info('Lachcha_Semai_500gm'))
    const lachchaSemai500Recipe = await getDoc(recipe('Lachcha_Semai_500gm'))


    res.status(200).send([
            {
                id : 'Lachcha_Semai_200gm',
                info : lachchaSemai200Info.data(),
                recipe : lachchaSemai200Recipe.data()
            },
            {
                id : 'Lachcha_Semai_500gm',
                info : lachchaSemai500Info.data(),
                recipe : lachchaSemai500Recipe.data()
            },
    ])
}