import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { useEffect, useState } from "react";
import useUserStore from "../../features/userStore";
import { toast } from "react-hot-toast";
import { getDemandList } from "../../utils/demand_utils";


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
    const [carton,setCarton] = useState(0)

    const getProduct=async(id,carton)=>{
        if(!id || !carton){
            return toast.error('Feild Empty')
        }

        try {
            const res = await axios.get(`/api/item_demand/?id=${id}&carton=${carton}`)

            const find = demand.find(product => product.id === res.data.data.id)
            if(find){
                return toast.error( `${find.name} is already added.`)
            }else{
                addDemand(res.data.data)
            }
            
        } catch (error) {
            console.log(error)
        }

    }

    getDemandList(demand)

    // useEffect(()=>{
    //     resetDemand()
    // },[])
    
    return (
            <div className="p-4">
                <div>
                    {
                        demand && demand.map(product => <p 
                            key={product.id}
                            className="flex justify-between"
                        >
                            <span>{product.name}</span>
                            <span>{product.target}</span>
                            <button onClick={()=>removeDemand(product.id)}>X</button>
                        </p>)
                    }
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
                        onChange={(e)=>setCarton(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded" 
                        onClick={()=>getProduct(id,carton)}
                    >
                        Submit
                    </button>
                </div>
                
            </div>
        )
}