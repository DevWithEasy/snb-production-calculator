import axios from "axios";
import { useState } from "react";
import Ingredient from "../../components/Ingredient";
import baseUrl from "../../utils/baseUrl";
import findProduct from "../../utils/findProduct";
import handleInput from "../../utils/handleInput";
import ingredient from "../../utils/ingredient";
import ingredientsByBatch from "../../utils/ingredientsByBatch";
import targetBatch from "../../utils/targetBatch";
import totalFoilByTargetCarton from "../../utils/totalFoilByTargetCarton";

export async function getServerSideProps(){
    const data = await axios.get(`${baseUrl}/api/monthly_demand/lachcha`)
    return{
        props:{
            products : data.data || []
        }
    }
}

export default function LachchaDemand({products}){
    const [carton,setCarton] = useState({
        Lachcha_Semai_200gm : 0,
        Lachcha_Semai_500gm : 0
    })
    //generate all recipe ana ingredient
    const lachcha200 = findProduct(products, 'Lachcha_Semai_200gm')
    const lachcha500 = findProduct(products, 'Lachcha_Semai_500gm')
    const lachcha200Batch = targetBatch(carton.Lachcha_Semai_200gm,lachcha200)
    const lachcha500Batch = targetBatch(carton.Lachcha_Semai_500gm,lachcha500)
    const all = [...ingredientsByBatch(lachcha200,lachcha200Batch),...ingredientsByBatch(lachcha500,lachcha500Batch)]
    const foil = totalFoilByTargetCarton(carton.Lachcha_Semai_200gm,lachcha200)
    console.log(lachcha200,foil);
    return(
        <div className="mt-2 w-1/2 p-2 mx-auto border shadow-lg rounded-md">
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label className="w-2/3">Lachcha Semai 200 gm</label>
                    <input type="number" name="Lachcha_Semai_200gm" onChange={(e)=>handleInput(e,carton,setCarton)} className='w-1/3 p-2 border rounded text-center focus:outline-none focus:ring-2'/>
                </div>
                <div className="flex justify-between items-center">
                    <label className="w-2/3">Lachcha Semai 500 gm</label>
                    <input type="number" name="Lachcha_Semai_500gm" onChange={(e)=>handleInput(e,carton,setCarton)} className='w-1/3 p-2 border rounded text-center focus:outline-none focus:ring-2'/>
                </div>
            </div>
            <div>
                <Ingredient name='Flour A Grade' value={ingredient(all,'flourGrade_A')}/>
                <Ingredient name='Flour B Grade' value={ingredient(all,'flourGrade_B')}/>
                <Ingredient name='Palm Oil Super' value={ingredient(all,'palmOilSuper')}/>
                <Ingredient name='Starch Powder' value={ingredient(all,'starchPowder')}/>
                <Ingredient name='Dalda Hard Pusti' value={ingredient(all,'daldaHardPUSTI')}/>
                <Ingredient name='Ghee' value={ingredient(all,'ghee')}/>
                <Ingredient name='Ghee Flavour' value={ingredient(all,'gheeFlavour')}/>
                <Ingredient name='TBHQ' value={ingredient(all,'tbhq')}/>
            </div>
        </div>
    )
}