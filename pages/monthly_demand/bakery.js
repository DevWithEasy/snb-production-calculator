import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { useEffect, useRef, useState } from "react";
import useUserStore from "../../features/userStore";
import { toast } from "react-hot-toast";
import { getDemand, getDemandPM } from "../../utils/demand_utils";
import { addField, getProduct } from "../../utils/demand_api_utils";
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
    const res = await axios.get(`${baseUrl}/api/products/Bakery`)
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
                <RmView name='Ammonium' ingredient={rm?.ammonium}/>

                  <RmView name='Baking Powder' ingredient={rm?.bakingPowder}/>
                  
                  <RmView name='Black Cumin' ingredient={rm?.blackCumin}/>

                  <RmView name='Bread Improver' ingredient={rm?.breadImprover}/>

                  <RmView name='Butter Flavour SM' ingredient={rm?.butterFlavourSM}/>

                  <RmView name='Cake Gel' ingredient={rm?.cakeGel}/>

                  <RmView name='Chocolate Chips' ingredient={rm?.chocolateChips}/>

                  <RmView name='Chocolate Flavour SYMRISE' ingredient={rm?.chocolateFlavourSYMRISE}/>

                  <RmView name='Chocolate Paste' ingredient={rm?.chocolatePaste}/>

                  <RmView name='Cocoa Powder 4011' ingredient={rm?.cocoaPowder_4011}/>

                  <RmView name='Condenced Milk Flavour' ingredient={rm?.condencedMilkFlavour}/>

                  <RmView name='Dalda Hard PUSTI' ingredient={rm?.daldaHardPUSTI}/>

                  <RmView name='Dalda Soft HILSA' ingredient={rm?.daldaSoftHILSA}/>

                  <RmView name='Egg' ingredient={rm?.egg}/>

                  <RmView name='Egg Yellow Colour' ingredient={rm?.eggYellowColour}/>

                  <RmView name='Flour A Grade' ingredient={rm?.flourGrade_A}/>

                  <RmView name='Flour B Grade' ingredient={rm?.flourGrade_B}/>

                  <RmView name='Flour C Grade' ingredient={rm?.flourGrade_C}/>

                  <RmView name='Ghee' ingredient={rm?.ghee}/>

                  <RmView name='Ghee Flavour' ingredient={rm?.gheeFlavour}/>

                  <RmView name='Glucose Powder' ingredient={rm?.glucosePowder}/>

                  <RmView name='Lemon Yellow Colour' ingredient={rm?.lemonYellowColour}/>

                  <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder}/>

                  <RmView name='Milk Flavour KH' ingredient={rm?.milkFlavourKH}/>

                  <RmView name='Mono Saccharine' ingredient={rm?.monoSaccharine}/>

                  <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>

                  <RmView name='Super Salt' ingredient={rm?.superSalt}/>

                  <RmView name='Sodium Acid Pyro Phosphet' ingredient={rm?.sodiumAcidPyroPhosphet}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate}/>

                  <RmView name='Starch Powder' ingredient={rm?.starchPowder}/>

                  <RmView name='Sugar' ingredient={rm?.sugar}/>

                  <RmView name='TBHQ' ingredient={rm?.tbhq}/>

                  <RmView name='Vanilin Powder Flavour' ingredient={rm?.vanilinPowderFlavour}/>

                  <RmView name='Xanthem Gum' ingredient={rm?.xanthemGum}/>

                  <RmView name='Yeast' ingredient={rm?.yeast}/>
            </div>
            <div className="w-1/2 border border-gray-400">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>

            </div>
        </div>

    </div>
        )
}