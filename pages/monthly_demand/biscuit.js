import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import useUserStore from "../../features/userStore";
import baseUrl from "../../utils/baseUrl";
import { getProduct } from "../../utils/demand_api_utils";
import { getDemand, getDemandPM } from "../../utils/demand_utils";
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



export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Biscuit`)
    return{
        props:{
            products : res.data.data || []
        }
    }
}


export default function WaferDemand({ products }) {
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

    useEffect(()=>{
        resetDemand()
    },[])

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
                    <div className='border'>
                        <select 
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
                            onClick={()=>getProduct(id,carton,setCarton,demand,addDemand,toast,setLoading)}
                        >
                            {loading ? <><Spinner size='sm'/> Submitting</> : 'Submit'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between space-x-2">
            <div className="w-1/2 border border-gray-400 pb-4">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Raw Materials (Kg)</h3>
                <RmView name='Ammonium Bi Carbonate' ingredient={rm?.ammonium}/>

                  <RmView name='Black Cumin' ingredient={rm?.blackCumin}/>

                  <RmView name='Bit Salt' ingredient={rm?.bitSalt}/>

                  <RmView name='Butter Flavour SK' ingredient={rm?.butterFlavourSK}/>

                  <RmView name='Butter Flavour SYMEGA' ingredient={rm?.butterFlavourSYMEGA}/>

                  <RmView name='Butter Solid' ingredient={rm?.butterSolid}/>

                  <RmView name='Butter Oil Substitute' ingredient={rm?.butterOilSubstitute}/>

                  <RmView name='Chocolate Brown Colour 815' ingredient={rm?.chocolateBrownColour_815}/>

                  <RmView name='Aspertem' ingredient={rm?.aspertem}/>

                  <RmView name='Chocolate Flavour KH' ingredient={rm?.chocolateFlavourKH}/>

                  <RmView name='Calcium Carbonate' ingredient={rm?.calciumCarbonate}/>

                  <RmView name='Craker Enzyme' ingredient={rm?.crakerEnzyme}/>

                  <RmView name='Citric Acid Mono' ingredient={rm?.citricAcidMono}/>

                  <RmView name='Cocoa Powder Black 910' ingredient={rm?.cocoaPowderBlack_910}/>

                  <RmView name='Dalda Soft HILSA' ingredient={rm?.daldaSoftHILSA}/>

                  <RmView name='Cardamon Flavour' ingredient={rm?.cardamonFlavour}/>

                  <RmView name='Flour Grade A' ingredient={rm?.flourGrade_A}/>

                  <RmView name='Flour Grade B' ingredient={rm?.flourGrade_B}/>

                  <RmView name='Flour Grade C' ingredient={rm?.flourGrade_C}/>

                  <RmView name='Glucose Powder' ingredient={rm?.glucosePowder}/>

                  <RmView name='Lemon Flavour' ingredient={rm?.lemonFlavour}/>

                  <RmView name='Lemon Yellow Colour' ingredient={rm?.lemonYellowColour}/>

                  <RmView name='Soya Lecithine' ingredient={rm?.soyaLecithine}/>

                  <RmView name='Liquid Glucose' ingredient={rm?.liquidGlucose}/>

                  <RmView name='Milk Flavour KH' ingredient={rm?.milkFlavourKH}/>

                  <RmView name='Orange Flavour' ingredient={rm?.orangeFlavour}/>

                  <RmView name='Onion Flavour Green' ingredient={rm?.onionFlavourGreen}/>

                  <RmView name='Onion Flavour SYMEGA' ingredient={rm?.onionFlavourSYMEGA}/>

                  <RmView name='Onion Powder' ingredient={rm?.onionPowder}/>

                  <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>

                  <RmView name='Pineapple Flavour' ingredient={rm?.pineappleFlavour}/>

                  <RmView name='Palm Corn Oil' ingredient={rm?.palmCornOil}/>

                  <RmView name='Super Salt' ingredient={rm?.superSalt}/>

                  <RmView name='Sodium Acid Pyro Phosphet' ingredient={rm?.sodiumAcidpyroPhosphet}/>

                  <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder}/>

                  <RmView name='Sodium Meta Bi Sulphate' ingredient={rm?.sodiumMetaBiSulphate}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate}/>

                  <RmView name='Starch Powder' ingredient={rm?.starchPowder}/>

                  <RmView name='Sugar' ingredient={rm?.sugar}/>

                  <RmView name='Testing Salt' ingredient={rm?.testingSalt}/>

                  <RmView name='TBHQ' ingredient={rm?.tbhq}/>

                  <RmView name='Vanilin Powder' ingredient={rm?.vanilinPowder}/>

                  <RmView name='Onion Chieves' ingredient={rm?.onionChieves}/>

                  <RmView name='Coconut Flavour' ingredient={rm?.coconutFlavour}/>

                  <RmView name='Butta Belly Flavour' ingredient={rm?.buttaBellyFlavour}/>

                  <RmView name='Coconut Powder' ingredient={rm?.coconutPowder}/>
                
            </div>
            <div className="w-1/2 border border-gray-400">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>

            </div>
        </div>

    </div>
        )
}