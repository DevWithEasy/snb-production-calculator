import { getDoc } from "firebase/firestore"
import { info, recipe } from "../../../utils/info_recipe"

export default async function handler(req,res){
    const Active_Energy_MiniInfo = await getDoc(info('Active_Energy_Mini'))
    const Active_Energy_MiniRecipe = await getDoc(recipe('Active_Energy_Mini'))

    const Active_Energy_StandardInfo = await getDoc(info('Active_Energy_Standard'))
    const Active_Energy_StandardRecipe = await getDoc(recipe('Active_Energy_Standard'))

    const Active_Energy_FamilyInfo = await getDoc(info('Active_Energy_Family'))
    const Active_Energy_FamilyRecipe = await getDoc(recipe('Active_Energy_Family'))

    const Best_Choice_StandardInfo = await getDoc(info('Best_Choice_Standard'))
    const Best_Choice_StandardRecipe = await getDoc(recipe('Best_Choice_Standard'))

    const Best_Choice_FamilyInfo = await getDoc(info('Best_Choice_Family'))
    const Best_Choice_FamilyRecipe = await getDoc(recipe('Best_Choice_Family'))

    const Valencia_Orange_StandardInfo = await getDoc(info('Valencia_Orange_Standard'))
    const Valencia_Orange_StandardRecipe = await getDoc(recipe('Valencia_Orange_Standard'))

    const Valencia_Orange_FamilyInfo = await getDoc(info('Valencia_Orange_Family'))
    const Valencia_Orange_FamilyRecipe = await getDoc(recipe('Valencia_Orange_Family'))

    const Elachi_StandardInfo = await getDoc(info('Elachi_Standard'))
    const Elachi_StandardRecipe = await getDoc(recipe('Elachi_Standard'))

    const King_Cookies_BiscuitInfo = await getDoc(info('King_Cookies_Biscuit'))
    const King_Cookies_BiscuitRecipe = await getDoc(recipe('King_Cookies_Biscuit'))

    const Lexus_MiniInfo = await getDoc(info('Lexus_Mini'))
    const Lexus_MiniRecipe = await getDoc(recipe('Lexus_Mini'))

    const Lexus_StandardInfo = await getDoc(info('Lexus_Standard'))
    const Lexus_StandardRecipe = await getDoc(recipe('Lexus_Standard'))

    const Lexus_FamilyInfo = await getDoc(info('Lexus_Family'))
    const Lexus_FamilyRecipe = await getDoc(recipe('Lexus_Family'))

    const Fruit_Plus_MiniInfo = await getDoc(info('Fruit_Plus_Mini'))
    const Fruit_Plus_MiniRecipe = await getDoc(recipe('Fruit_Plus_Mini'))

    const Fruit_Plus_StandardInfo = await getDoc(info('Fruit_Plus_Standard'))
    const Fruit_Plus_StandardRecipe = await getDoc(recipe('Fruit_Plus_Standard'))

    const Choco_Plus_MiniInfo = await getDoc(info('Choco_Plus_Mini'))
    const Choco_Plus_MiniRecipe = await getDoc(recipe('Choco_Plus_Mini'))

    const Choco_Plus_StandardInfo = await getDoc(info('Choco_Plus_Standard'))
    const Choco_Plus_StandardRecipe = await getDoc(recipe('Choco_Plus_Standard'))


    res.status(200).json({
        data : {},
        success : true
    })
}

[
    {
        id : 'Active_Energy_Mini',
        info : Active_Energy_MiniInfo.data(),
        recipe : Active_Energy_MiniRecipe.data()
    },
    {
        id : 'Active_Energy_Standard',
        info : Active_Energy_StandardInfo.data(),
        recipe : Active_Energy_StandardRecipe.data()
    },
    {
        id : 'Active_Energy_Family',
        info : Active_Energy_FamilyInfo.data(),
        recipe : Active_Energy_FamilyRecipe.data()
    },
    {
        id : 'Best_Choice_Standard',
        info : Best_Choice_StandardInfo.data(),
        recipe : Best_Choice_StandardRecipe.data()
    },
    {
        id : 'Best_Choice_Family',
        info : Best_Choice_FamilyInfo.data(),
        recipe : Best_Choice_FamilyRecipe.data()
    },
    {
        id : 'Valencia_Orange_Standard',
        info : Valencia_Orange_StandardInfo.data(),
        recipe : Valencia_Orange_StandardRecipe.data()
    },
    {
        id : 'Valencia_Orange_Family',
        info : Valencia_Orange_FamilyInfo.data(),
        recipe : Valencia_Orange_FamilyRecipe.data()
    },
    {
        id : 'Elachi_Standard',
        info : Elachi_StandardInfo.data(),
        recipe : Elachi_StandardRecipe.data()
    },
    {
        id : 'King_Cookies_Biscuit',
        info : King_Cookies_BiscuitInfo.data(),
        recipe : King_Cookies_BiscuitRecipe.data()
    },
    {
        id : 'Lexus_Mini',
        info : Lexus_MiniInfo.data(),
        recipe : Lexus_MiniRecipe.data()
    },
    {
        id : 'Lexus_Standard',
        info : Lexus_StandardInfo.data(),
        recipe : Lexus_StandardRecipe.data()
    },
    {
        id : 'Lexus_Family',
        info : Lexus_FamilyInfo.data(),
        recipe : Lexus_FamilyRecipe.data()
    },
    {
        id : 'Fruit_Plus_Mini',
        info : Fruit_Plus_MiniInfo.data(),
        recipe : Fruit_Plus_MiniRecipe.data()
    },
    {
        id : 'Fruit_Plus_Standard',
        info : Fruit_Plus_StandardInfo.data(),
        recipe : Fruit_Plus_StandardRecipe.data()
    },
    {
        id : 'Choco_Plus_Mini',
        info : Choco_Plus_MiniInfo.data(),
        recipe : Choco_Plus_MiniRecipe.data()
    },
    {
        id : 'Choco_Plus_Standard',
        info : Choco_Plus_StandardInfo.data(),
        recipe : Choco_Plus_StandardRecipe.data()
    },
]