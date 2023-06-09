import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useUserStore from "../../features/userStore";
import baseUrl from "../../utils/baseUrl";
import { getProduct } from "../../utils/demand_api_utils";
import { getDemandPM } from "../../utils/demand_utils";


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

    getDemandPM(demand)

    // useEffect(()=>{
    //     resetDemand()
    // },[])
    return (
            <div className="p-4">
                <div>
                    <TableContainer className='border rounded'>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Product name</Th>
                                    <Th>Target Carton</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
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
                </div>
                <div className="flex">
                    <select 
                        onChange={(e)=>setId(e.target.value)}
                        className="p-2 border rounded"
                    >
                        <option value="">Select</option>
                        {products.map(product=><option key={product.id} value={product.id}>{product.name}</option>)}
                    </select>
                    <input
                        type="number"
                        value={carton}
                        onChange={(e)=>setCarton(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded" 
                        onClick={()=>getProduct(id,carton,setCarton,demand,addDemand,toast)}
                    >
                        Submit
                    </button>
                </div>
                
            </div>
        )
}