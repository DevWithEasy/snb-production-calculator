import axios from "axios";
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import Ingredient from "../../components/Ingredient";
import Ingredientpacking from "../../components/IngredientPaking";
import PrintHeader from "../../components/PrintHeader";
import baseUrl from "../../utils/baseUrl";
import findProduct from "../../utils/findProduct";
import handleInput from "../../utils/handleInput";
import ingredient from "../../utils/ingredient";
import ingredientsByBatch from "../../utils/ingredientsByBatch";
import targetBatch from "../../utils/targetBatch";
import totalcartonByTargetCarton from "../../utils/totalCartonByTargetCarton";
import totalFoilByTargetCarton from "../../utils/totalFoilByTargetCarton";
import totalMasterPPByTargetCarton from "../../utils/totalMasterPPByTargetCarton";

export async function getServerSideProps(){
    const data = await axios.get(`${baseUrl}/api/monthly_demand/lachcha`)
    return{
        props:{
            products : data.data || []
        }
    }
}

export default function LachchaDemand({products}){
    const printRef = useRef()
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
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle : ""
      });
    const premiumBag = carton.Lachcha_Semai_500gm * lachcha500?.info?.packetPerCarton
    const gumtap = (Math.ceil(Number(carton.Lachcha_Semai_200gm) + Number(carton.Lachcha_Semai_500gm))/120).toFixed(0)
    return(
        <div ref={printRef} className="mt-2 p-2 mx-4 space-y-2 border shadow-lg rounded-md print:shadow-none print:border-none print:rounded-none">
            <PrintHeader/>
            <div className="space-y-2 border border-gray-500">
                <h1 className="relative py-2 bg-gray-500 text-white text-xl text-center font-bold">
                    Production Target Carton
                    <button onClick={()=>handlePrint()} className="absolute right-2 print:hidden"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                        </svg>
                    </button>
                </h1>
                <div className="p-2 grid grid-cols-2 gap-x-6">
                    <div className="flex justify-between items-center">
                        <label className="w-2/3">Lachcha Semai 200 gm</label>
                        <input type="number" name="Lachcha_Semai_200gm" onChange={(e)=>handleInput(e,carton,setCarton)} className='w-1/3 p-2 border rounded text-center focus:outline-none focus:ring-2'/>
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="w-2/3">Lachcha Semai 500 gm</label>
                        <input type="number" name="Lachcha_Semai_500gm" onChange={(e)=>handleInput(e,carton,setCarton)} className='w-1/3 p-2 border rounded text-center focus:outline-none focus:ring-2'/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between space-x-2">
                <div className="w-1/2 border border-gray-500 pb-4">
                    <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Raw Materials (Kg)</h3>
                    <Ingredient name='Flour A Grade' value={ingredient(all,'flourGrade_A')}/>
                    <Ingredient name='Flour B Grade' value={ingredient(all,'flourGrade_B')}/>
                    <Ingredient name='Palm Oil Super' value={ingredient(all,'palmOilSuper')}/>
                    <Ingredient name='Starch Powder' value={ingredient(all,'starchPowder')}/>
                    <Ingredient name='Dalda Hard Pusti' value={ingredient(all,'daldaHardPUSTI')}/>
                    <Ingredient name='Ghee' value={ingredient(all,'ghee')}/>
                    <Ingredient name='Ghee Flavour' value={ingredient(all,'gheeFlavour')}/>
                    <Ingredient name='TBHQ' value={ingredient(all,'tbhq')}/>
                </div>
                <div className="w-1/2 border border-gray-500">
                    <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>
                    <Ingredientpacking name='Lachcha 200gm Pouch' value={totalFoilByTargetCarton(carton.Lachcha_Semai_200gm,lachcha200)} unit='Kg'/>
                    <Ingredientpacking name='HDPE Master Poly 24x22.5"' value={totalMasterPPByTargetCarton(carton.Lachcha_Semai_200gm,lachcha200)} unit='Kg'/>
                    <Ingredientpacking name='Lachcha Premium Bag' value={premiumBag} unit='Pcs'/>
                    <Ingredientpacking name='Lachcha Premium Pouch' value={totalFoilByTargetCarton(carton.Lachcha_Semai_500gm,lachcha200)} unit='Kg'/>
                    <Ingredientpacking name='Lachcha 500gm Carton' value={totalcartonByTargetCarton(carton.Lachcha_Semai_500gm)} unit='Pcs'/>
                    <Ingredientpacking name='Gum Tap 2"' value={gumtap} unit='Pcs'/>
                    <Ingredientpacking name='PP HandGloves' value='500' unit='Pcs'/>
                </div>
            </div>

        </div>
    )
}