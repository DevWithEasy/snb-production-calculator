import {
    Spinner,Table,
    TableContainer,
    Tbody,
    Td,
    Tr
 } from '@chakra-ui/react';
import React, { useState } from 'react';
import useUserStore from '../features/userStore';
import { toast } from "react-hot-toast";
import { getProduct } from '../utils/demand_api_utils';

const TargetCarton = ({products,handlePrint}) => {
    const{demand,addDemand,removeDemand} = useUserStore()
    const [id,setId] = useState('')
    const [carton,setCarton] = useState('')
    const [loading,setLoading] = useState(false)
    return (
        <div className="print:hidden space-y-2 border border-gray-400">
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
           );
};

export default TargetCarton;