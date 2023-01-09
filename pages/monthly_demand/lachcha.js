import axios from "axios";
import { useState } from "react";
import findProduct from "../../utils/findProduct";
import handleInput from "../../utils/handleInput";
import ingredientsByBatch from "../../utils/ingredientsByBatch";
import targetBatch from "../../utils/targetBatch";

export async function getServerSideProps(){
    const data = await axios.get('http://localhost:3000/api/monthly_demand/lachcha')
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

    console.log(all);
    return(
        <div>
            <div className="p-10">
                <input type="number" name="Lachcha_Semai_200gm" onChange={(e)=>handleInput(e,carton,setCarton)} className='p-2 border'/>
                <input type="number" name="Lachcha_Semai_500gm" onChange={(e)=>handleInput(e,carton,setCarton)} className='p-2 border'/>
            </div>
        </div>
    )
}