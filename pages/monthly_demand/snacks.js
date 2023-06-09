import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { useEffect, useState } from "react";
import useUserStore from "../../features/userStore";
import { toast } from "react-hot-toast";
import { getDemandPM } from "../../utils/demand_utils";
import { addField, getProduct } from "../../utils/demand_api_utils";


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

    getDemandPM(demand)

    // useEffect(()=>{
    //     resetDemand()
    // },[])
    
    console.log(products)
    return (
            <div className="p-4">

            {/* {products.map(product=><button 
                key={product.id}
                onClick={()=>addField(product.id)}
                className="px-4 py-2 bg-slate-50 m-2" 
                >
                    {product.name}
                </button>)} */}




                <div>
                    <table className="w-full">
                        <thead className="w-full">
                            <th>
                                <td>Product Name</td>
                                <td>Target Carton</td>
                                <td>Action</td>
                            </th>
                        </thead>
                        <tbody>
                            {
                                demand && demand.map(product => <tr 
                                    key={product.id}
                                    className="flex justify-between"
                                >
                                    <td>{product.name}</td>
                                    <td>{product.target}</td>
                                    <td><button onClick={()=>removeDemand(product.id)}>X</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
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