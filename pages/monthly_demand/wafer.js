import {
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr
} from '@chakra-ui/react';
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useReactToPrint } from 'react-to-print';
import PmView from "../../components/PmView";
import PrintHeader from "../../components/PrintHeader";
import RmView from "../../components/RmView";
import useUserStore from "../../features/userStore";
import baseUrl from "../../utils/baseUrl";
import { getProduct } from "../../utils/demand_api_utils";
import { getDemand, getTotalPmItem } from "../../utils/demand_utils";


export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Wafer`)
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
    const {Vanilla_Wafer,Chocolate_Wafer} = pm

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
                <h3 className="py-2 bg-gray-500 text-white text-center">Raw Materials (Kg)</h3>
                <RmView name='Chocolate Brown Colour 6059' ingredient={rm?.chocolateBrownColour_6059}/>

                <RmView name='Citric Acid Mono' ingredient={rm?.citricAcidMono}/>

                <RmView name='Cocoa Powder Black 4011' ingredient={rm?.cocoaPowderBlack_4011}/>

                <RmView name='Chocolate Flavour KH' ingredient={rm?.chocolateFlavourKH}/>

                <RmView name='Dalda Hard PUSTI' ingredient={rm?.daldaHardPUSTI}/>

                <RmView name='Flour A Grade' ingredient={rm?.flourGrade_A}/>

                <RmView name='Flour B Grade' ingredient={rm?.flourGrade_B}/>

                <RmView name='Soya Lecithine' ingredient={rm?.soyaLecithine}/>

                <RmView name='Milk Flavour KH' ingredient={rm?.milkFlavourKH}/>

                <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>

                <RmView name='Super Salt' ingredient={rm?.superSalt}/>

                <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder}/>

                <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate}/>

                <RmView name='Sodium Meta Bi Sulphate' ingredient={rm?.sodiumMetaBiSulphate}/>

                <RmView name='Starch Powder' ingredient={rm?.starchPowder}/>

                <RmView name='Sugar' ingredient={rm?.sugar}/>

                <RmView name='TBHQ' ingredient={rm?.tbhq}/>

                <RmView name='Vanila Flavour KH' ingredient={rm?.vanilaFlavourKH}/>
            </div>
            <div className="w-1/2 border border-gray-400">
                <h3 className="py-2 bg-gray-500 text-white text-center">Packaging Materials</h3>
                <PmView name='Chocolate Wafer Wrapper' unit='' pm={Chocolate_Wafer?.wrapper}/>
                <PmView name='Chocolate Wafer Carton' unit='Pcs' pm={Chocolate_Wafer?.carton}/>
                <PmView name='Vanilla Wafer Wrapper' unit='' pm={Vanilla_Wafer?.wrapper}/>
                <PmView name='Vanilla Wafer Carton' unit='Pcs' pm={Vanilla_Wafer?.carton}/>
                <PmView name='Wafer Paper Board' unit='Pcs' pm={getTotalPmItem(pm,'board')}/>
                <PmView name='Gum Tape 2"' unit='Pcs' pm={getTotalPmItem(pm,'gumTap2')}/>
            </div>
        </div>

    </div>
        )
}