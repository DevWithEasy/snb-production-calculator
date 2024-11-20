import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loading from '../../../../components/v2/Loading'
import toast from "react-hot-toast";
import getItemsString from "../../../../utils/v2/getItemsString";

export default function Consumption() {
    const router = useRouter();
    const section = router.query.section;
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [requests, setRequest] = useState([])
    const [product,setProduct] = useState('')
    const [batch,setBatch] = useState('')
    const getProducts = async (section) => {
        setLoading(!loading);
        try {
            const { data } = await axios.get(
                process.env.NEXT_PUBLIC_API_URL + `?route=products&section=${section}`
            );
            if (data.success) {
                setProducts(data.data);
                setLoading(!loading);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addRequest = async () => {
        if (!product ||!batch) return toast.error('Select Product and Input Batch')

        const isHere = requests.find(req => req.product === product)
        if (isHere){
            return toast.error('This product is already added.')
        } else{
            setRequest([...requests, { product, batch }])
            toast.success('Product added successfully')
            setProduct('')
            setBatch('')
        }
    }

    const getConsumption=async()=>{
        try {
            const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + `?route=consumption_chocolate&section=${section}&items=${getItemsString(requests)}`);
            console.log(data)
            if (data.success) {
                toast.success('Consumption added successfully')
                setRequest([])
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getProducts(section);
    }, [section])

    console.log()
    return (
        <div className="h-screen bg-gray-50 overflow-y-auto">
            <div className="p-4 space-y-4">
            <div>
                    <div className="flex">
                        <div
                            className="flex w-full"
                        >
                            <select
                                value={product}
                                onChange={(e) => setProduct(e.target.value)}
                                className='w-full p-2 border-l border-t border-b rounded-l'
                            >
                                <option value="">Select a product</option>
                                {products.length > 0 &&
                                    products.map((product) => (
                                        <option key={product.name} value={product.name}>{product.name}</option>
                                    ))}
                            </select>
                            <input
                                value={batch}
                                onChange={(e)=>setBatch(e.target.value)}
                                placeholder={section === 'choclate' ? 'Carton' : 'Batch'}
                                className='w-[150px] p-2 border'
                            />
                        </div>

                        <button
                            onClick={addRequest}
                            className="w-[100px] px-6 bg-gray-100 border-r border-t border-b rounded-r hover:bg-gray-200"
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg">
                    <div
                        className="flex items-center justify-between bg-gray-100 p-2 rounded-t-lg"
                    >
                    <p>Select Product & Batch</p>
                    <button
                        onClick={getConsumption}
                        className="bg-gray-500 text-white px-4 py-1 text-sm rounded"
                    >
                        Submit
                    </button>
                    </div>
                    <div className="p-2 space-y-2">
                        {
                            requests.length > 0 ?
                            requests.map((req, index) => (
                                <div key={index} className="flex justify-between space-x-2">
                                    <p>{req.product}</p>
                                    <p>{req.batch}</p>
                                    <button
                                        onClick={()=>setRequest(requests.filter(r=>r.product!==req.product))}
                                        className="px-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))
                            :
                            <p className="text-center text-sm text-red-300">No Products Added yet</p>
                        }
                    </div>
                </div>
            </div>
            {loading && <Loading />}
        </div>
    );
}
