import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { useEffect, useRef, useState } from "react";
import useUserStore from "../../features/userStore";
import { toast } from "react-hot-toast";
import { getDemand, getTotalFoil, getTotalPmItem } from "../../utils/demand_utils";
import { getProduct } from "../../utils/demand_api_utils";
import PrintHeader from "../../components/PrintHeader";
import { useReactToPrint } from 'react-to-print';
import {
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr
} from '@chakra-ui/react';
import RmView from "../../components/RmView";
import PmView from "../../components/PmView";



export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Cake`)
    return{
        props:{
            products : res.data.data || []
        }
    }
}


export default function SnacksDemand({ products }) {
    const{demand,addDemand,removeDemand,resetDemand} = useUserStore()
    const [id,setId] = useState('')
    const [carton,setCarton] = useState()
    const [loading,setLoading] = useState(false)
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle : ""
    });

    const {rm,pm}=getDemand(demand)
    const {
        Tiffin_Cake_Vanilla_Standard,
        Tiffin_Cake_Chocolate_Standard,
        Milk_Cake_11_gm_Standard,
        Milk_Cake_22_gm_Standard,
        Tiffin_Cake_Vanilla_Family,
        Tiffin_Cake_Chocolate_Family,
        Milk_Cake_11_gm_Family,
        Milk_Cake_22_gm_Family
    } = pm

    // useEffect(()=>{
    //     resetDemand()
    // },[])
    console.log(pm)
    return (
        <div ref={printRef} className="mt-2 p-2 mx-4 space-y-2 border shadow-lg rounded-md print:shadow-none print:border-none print:rounded-none">
        <PrintHeader/>
        <div className="space-y-2 border border-gray-400">
            <h1 className="relative py-2 bg-gray-500 text-white text-xl text-center">
                Production Target Carton
                <button onClick={()=>handlePrint()} className="absolute right-2 print:hidden"> 
                    Print
                </button>
            </h1>
            <div className="p-2 space-y-2">
                <TableContainer className='border rounded'>
                    <Table variant='simple'>
                        <Tbody>
                            {
                                demand && demand.map(product => <Tr 
                                    key={product.id}
                                >
                                    <Td>{product.name}</Td>
                                    <Td>{product.demand}</Td>
                                    <Td>{product.target}</Td>
                                    <Td>
                                        <button onClick={()=>removeDemand(product.id)}>X</button>
                                    </Td>
                                </Tr>)
                            }
                        </Tbody>
                    </Table>
                </TableContainer>  
                <div className="flex justify-center">
                        <form 
                            onSubmit={(e)=>getProduct(e,id,carton,setId,setCarton,demand,addDemand,toast,setLoading)}
                            className='border'
                        >
                            <select 
                                value={id}
                                onChange={(e)=>setId(e.target.value)}
                                className="p-2 border-r"
                            >
                                <option value="">Select</option>
                                {products.map(product=><option key={product.id} value={product.id}>{product.name}</option>)}
                            </select>
                            <input
                                type="number"
                                value={carton}
                                onChange={(e)=>setCarton(e.target.value)}
                                className="p-2"
                            />
                            <button
                                className="px-4 py-2 bg-blue-500 text-white" 
                                type='submit'
                            >
                                {loading ? <><Spinner size='sm'/> Submitting</> : 'Submit'}
                            </button>
                        </form>
                    </div>
            </div>
        </div>
        <div className="flex justify-between space-x-2">
            <div className="w-1/2 border border-gray-400 pb-4">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Raw Materials (Kg)</h3>
                <RmView name='Vanilin Powder' ingredient={rm?.vanilinPowder}/>

                  <RmView name='butter Oil Substitute' ingredient={rm?.butterOilSubstitute}/>

                  <RmView name='Cake Gel' ingredient={rm?.cakeGel}/>

                  <RmView name='Chocolate Brown Colour 6059' ingredient={rm?.chocolateBrownColour_6059}/>

                  <RmView name='Chocolate Flavour SYMRISE' ingredient={rm?.chocolateFlavourSYMRISE}/>

                  <RmView name='Chocolate Paste' ingredient={rm?.chocolatePaste}/>

                  <RmView name='Citric Acid Mono' ingredient={rm?.citricAcidMono}/>

                  <RmView name='Egg' ingredient={rm?.egg}/>

                  <RmView name='Flour B Grade' ingredient={rm?.flourGrade_B}/>

                  <RmView name='Flour C Grade' ingredient={rm?.flourGrade_C}/>

                  <RmView name='Glycerine' ingredient={rm?.glycerine}/>

                  <RmView name='Isopropyl Alcohol' ingredient={rm?.isopropylAlcohol}/>

                  <RmView name='Milk Flavour KING' ingredient={rm?.milkFlavourKing}/>

                  <RmView name='Paraffin Oil' ingredient={rm?.paraffinOil}/>

                  <RmView name='Potassium Sorbate' ingredient={rm?.potassiumSorbate}/>

                  <RmView name='Super Salt' ingredient={rm?.superSalt}/>

                  <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder}/>

                  <RmView name='Sorbitol' ingredient={rm?.sorbitol}/>

                  <RmView name='Soya Lecithine' ingredient={rm?.soyaLecithine}/>

                  <RmView name='Sugar' ingredient={rm?.sugar}/>

                  <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>

                  <RmView name='TBHQ' ingredient={rm?.tbhq}/>

                  <RmView name='Vanila Flavour FORZONE' ingredient={rm?.vanilaFlavourFORZONE}/>

                  <RmView name='Xanthem Gum' ingredient={rm?.xanthemGum}/>

                  <RmView name='Sodium Acid pyro Phosphet' ingredient={rm?.sodiumAcidpyroPhosphet}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate}/>

                  <RmView name='Starch Powder' ingredient={rm?.starchPowder}/>
                
            </div>
            <div className="w-1/2 border border-gray-400">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>
                <PmView name='Tiffin Cake Vanilla 15gm Wrapper' unit='' pm={getTotalFoil(pm,'vanilla')}/>
                <PmView name='Tiffin Cake Vanilla 15gm Carton' unit='Pcs' pm={Tiffin_Cake_Vanilla_Standard?.carton}/>
                <PmView name='Tiffin Cake Vanilla Family Carton' unit='Pcs' pm={Tiffin_Cake_Vanilla_Family?.carton}/>
                <PmView name='Tiffin Cake Vanilla Family ATC' unit='Pcs' pm={Tiffin_Cake_Vanilla_Family?.atc}/>
                <PmView name='Tiffin Cake Chocolate 15gm Wrapper' unit='' pm={getTotalFoil(pm,'chocolate')}/>
                <PmView name='Tiffin Cake Chocolate 15gm Carton' unit='Pcs' pm={Tiffin_Cake_Chocolate_Standard?.carton}/>
                <PmView name='Tiffin Cake Chocolate Family Carton' unit='Pcs' pm={Tiffin_Cake_Chocolate_Family?.carton}/>
                <PmView name='Tiffin Cake Chocolate Family ATC' unit='Pcs' pm={Tiffin_Cake_Chocolate_Family?.atc}/>
                <PmView name='Milk Cake 15gm Wrapper' unit='' pm={getTotalFoil(pm,'milk11')}/>
                <PmView name='Milk Cake 15gm Carton' unit='Pcs' pm={Milk_Cake_11_gm_Standard?.carton}/>
                <PmView name='Milk Cake 15gm Family Carton' unit='Pcs' pm={Milk_Cake_11_gm_Family?.carton}/>
                <PmView name='Milk Cake 15gm Family ATC' unit='Pcs' pm={Milk_Cake_11_gm_Family?.atc}/>
                <PmView name='Milk Cake 22gm Wrapper' unit='' pm={getTotalFoil(pm,'milk22')}/>
                <PmView name='Milk Cake 22gm Carton' unit='Pcs' pm={Milk_Cake_22_gm_Standard?.carton}/>
                <PmView name='Milk Cake 22gm Family Carton' unit='Pcs' pm={Milk_Cake_22_gm_Family?.carton}/>
                <PmView name='Milk Cake 22gm Family ATC' unit='Pcs' pm={Milk_Cake_22_gm_Family?.atc}/>
                <PmView name='Tiffin Cake Shrink Outer Poly' unit='Pcs' pm={getTotalPmItem(pm,'outer_poly')}/>
                <PmView name='Gum Tape 2"' unit='Pcs' pm={getTotalPmItem(pm,'gumTap1')}/>
                <PmView name='Gum Tape 2"' unit='Pcs' pm={getTotalPmItem(pm,'gumTap2')}/>
            </div>
        </div>

    </div>
        )
}