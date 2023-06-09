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
    const res = await axios.get(`${baseUrl}/api/products/Snacks`)
    return{
        props:{
            products : res.data.data || []
        }
    }
}


export default function SnacksDemand({ products }) {
    const{demand,addDemand,removeDemand,resetDemand} = useUserStore()
    const [id,setId] = useState('')
    const [carton,setCarton] = useState(0)
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
                <RmView name='Turmeric' ingredient={rm?.turmeric}/>

                  <RmView name='Cinamon' ingredient={rm?.cinamon}/>

                  <RmView name='Testing Salt' ingredient={rm?.testingSalt}/>

                  <RmView name='Red Chili' ingredient={rm?.redChili}/>

                  <RmView name='Nut Mug' ingredient={rm?.nutMug}/>

                  <RmView name='Cumin' ingredient={rm?.cumin}/>

                  <RmView name='Black Pepper' ingredient={rm?.blackPepper}/>

                  <RmView name='Clove' ingredient={rm?.clove}/>

                  <RmView name='Cardamon' ingredient={rm?.cardamon}/>

                  <RmView name='Cumin Sweet' ingredient={rm?.cuminSweet}/>

                  <RmView name='Bit Salt' ingredient={rm?.bitSalt}/>
                  
                  <RmView name='Ginger' ingredient={rm?.ginger}/>

                  <RmView name='Rice Flask' ingredient={rm?.riceFlask}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate}/>

                  <RmView name='Raw Peanut' ingredient={rm?.rawPeanut}/>

                  <RmView name='Lentil' ingredient={rm?.lentil}/>

                  <RmView name='Salt' ingredient={rm?.salt}/>

                  <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>

                  <RmView name='Anchor Dal' ingredient={rm?.anchorDal}/>

                  <RmView name='Pea' ingredient={rm?.pea}/>

                  <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder}/>

                  <RmView name='Sugar' ingredient={rm?.sugar}/>

                  <RmView name='Citric Acid Ano' ingredient={rm?.citricAcidAno}/>

                  <RmView name='Mug Dal' ingredient={rm?.mugDal}/>

                  <RmView name='Apple Green Colour' ingredient={rm?.appleGreenColour}/>

                  <RmView name='Tapioca Starch' ingredient={rm?.tapiocaStarch}/>

                  <RmView name='Onion Powder' ingredient={rm?.onionPowder}/>

                  <RmView name='Garlic Powder' ingredient={rm?.garlicPowder}/>

                  <RmView name='Jwain Masala' ingredient={rm?.jwainMasala}/>

                  <RmView name='Rice Atop' ingredient={rm?.riceAtop}/>

                  <RmView name='Lemon Yellow Colour' ingredient={rm?.lemonYellowColour}/>

                  <RmView name='TBHQ' ingredient={rm?.tbhq}/>

                  <RmView name='BBQ' ingredient={rm?.bbq}/>
                
            </div>
            <div className="w-1/2 border border-gray-400">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>

            </div>
        </div>

    </div>
        )
}