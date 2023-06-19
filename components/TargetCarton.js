import {
    Spinner, Table,
    TableContainer,
    Tbody,
    Td,
    Tr
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { AiOutlinePrinter } from 'react-icons/ai';
import useUserStore from '../features/userStore';
import { getProduct } from '../utils/demand_api_utils';

const TargetCarton = ({products,handlePrint}) => {
    const{demand,addDemand,removeDemand} = useUserStore()
    const [id,setId] = useState('')
    const [carton,setCarton] = useState('')
    const [loading,setLoading] = useState(false)
    return (
        <div className="print:hidden space-y-2 border border-gray-400">
            <h1 className="relative py-1 bg-gray-500 text-white text-xl text-center font-bold print:mx-2">
                Production Target Carton
                <AiOutlinePrinter onClick={()=>handlePrint()} className="absolute right-2 top-2 print:hidden cursor-pointer" />
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
                            className='w-full md:w-1/2 flex flex-col md:flex-row p-2 md:p-0 space-y-2 md:space-y-0'
                        >
                            <select 
                                value={id}
                                onChange={(e)=>setId(e.target.value)}
                                className="w-full p-2 border  rounded md:rounded-none"
                            >
                                <option value="">Select</option>
                                {products.map(product=><option key={product.id} value={product.id}>{product.name}</option>)}
                            </select>
                            <input
                                type="number"
                                value={carton}
                                onChange={(e)=>setCarton(e.target.value)}
                                className="w-full p-2 border rounded md:rounded-none"
                            />
                            <button
                                className="px-4 py-2 flex bg-blue-500 text-white rounded md:rounded-none" 
                                type='submit'
                            >
                                {loading ? <span className='flex items-center space-x-1'>
                                        <Spinner size='sm'/> 
                                        <span>Submitting</span>
                                    </span> : 'Submit'
                                }
                            </button>
                        </form>
                    </div>
            </div>
 
        </div>
           );
};

export default TargetCarton;