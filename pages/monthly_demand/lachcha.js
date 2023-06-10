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
import { useReactToPrint } from 'react-to-print';
import PrintHeader from "../../components/PrintHeader";
import useUserStore from '../../features/userStore';
import baseUrl from "../../utils/baseUrl";
import { getProduct } from '../../utils/demand_api_utils';
import {toast} from 'react-hot-toast'
import { getDemand} from '../../utils/demand_utils';
import RmView from '../../components/RmView';
import PmView from '../../components/PmView';

export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Lachcha`)
    return{
        props:{
            products : res.data.data || []
        }
    }
}

export default function LachchaDemand({products}){
    const{demand,addDemand,removeDemand,resetDemand} = useUserStore()
    const [id,setId] = useState('')
    const [carton,setCarton] = useState()
    const [loading,setLoading] = useState(false)
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle : ""
      });

    const {rm,pm} = getDemand(demand)
    const {Lachcha_Semai_200gm,Lachcha_Semai_500gm} = pm

    // useEffect(()=>{
    //     resetDemand()
    // },[])

    console.log(pm)
    return(
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
                    <RmView name='Flour A Grade' ingredient={rm?.flourGrade_A}/>
                    <RmView name='Flour B Grade' ingredient={rm?.flourGrade_B}/>
                    <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>
                    <RmView name='Starch Powder' ingredient={rm?.starchPowder}/>
                    <RmView name='Dalda Hard Pusti' ingredient={rm?.daldaHardPUSTI}/>
                    <RmView name='Ghee' ingredient={rm?.ghee}/>
                    <RmView name='Ghee Flavour' ingredient={rm?.gheeFlavour}/>
                    <RmView name='TBHQ' ingredient={rm?.tbhq}/>
                </div>
                <div className="w-1/2 border border-gray-400">
                    <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>
                    <PmView name='Lachcha Semai 200gm Pouch' unit='' pm={Lachcha_Semai_200gm?.wrapper}/>
                    <PmView name='Master Poly 24"x22.5"' unit='' pm={Lachcha_Semai_200gm?.master_poly}/>
                    <PmView name='Lachcha Semai Premium Pouch' unit='' pm={Lachcha_Semai_500gm?.wrapper}/>
                    <PmView name='Lachcha Semai Premium Bag' unit='Pcs' pm={Lachcha_Semai_500gm?.atc}/>
                    <PmView name='Lachcha Semai Premium Carton' unit='Pcs' pm={Lachcha_Semai_500gm?.carton}/>
                    <PmView name='Lachcha Semai 200gm Pouch' unit='Pcs' pm={Lachcha_Semai_200gm?.gumTap2}/>

                </div>
            </div>

        </div>
    )
}