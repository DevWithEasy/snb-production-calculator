import {
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr
} from '@chakra-ui/react';
import axios from "axios";
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import PrintHeader from "../../components/PrintHeader";
import useUserStore from '../../features/userStore';
import baseUrl from "../../utils/baseUrl";
import { getProduct } from '../../utils/demand_api_utils';
import {toast} from 'react-hot-toast'
import { getDemandPM } from '../../utils/demand_utils';

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

    getDemandPM(demand)

    // useEffect(()=>{
    //     resetDemand()
    // },[])
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
                </div>
                <div className="w-1/2 border border-gray-400">
                    <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>
                </div>
            </div>

        </div>
    )
}