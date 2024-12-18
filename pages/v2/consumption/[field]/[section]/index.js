import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HeadInfo from "../../../../../components/HeadInfo";
import SubmitConsumption from "../../../../../components/v2/consumption/SubmitConsumption";
import TableConsumption from "../../../../../components/v2/consumption/TableConsumption";
import Loading from '../../../../../components/v2/Loading';
import getItemsString from "../../../../../utils/v2/getItemsString";
import { handleBlur, handleFocus } from "../../../../../utils/v2/inputHandler";

export default function Consumption() {
    const router = useRouter();
    const { section, field } = router.query;
    const [loading, setLoading] = useState(false)
    const [requests, setRequest] = useState([])
    const [product, setProduct] = useState('')
    const [products, setProducts] = useState([])
    const [batch, setBatch] = useState('')
    const [consumption, setConsumption] = useState({})
    const [object, setObject] = useState()
    const [data, setData] = useState()
    const [keys, setKeys] = useState([])
    const [closingValues, setSetClosingValues] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const getProducts = async (section) => {
        setLoading(true)
        try {
            const { data } = await axios.get(`/api/v2/${section}/products`)
            if (data.success) {
                setLoading(false)
                setProducts(data.data)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const addRequest = async () => {
        if (!product || !batch) return toast.error('Select Product and Input Batch')

        const isHere = requests.find(req => req.product === product)
        if (isHere) {
            return toast.error('This product is already added.')
        } else {
            setRequest([...requests, { product, batch }])
            toast.success('Product added successfully')
            setProduct('')
            setBatch('')
        }
    }

    const getConsumption = async () => {
        if(requests.length ===0) return toast.error('This product no added.')
        setLoading(true)
        try {
            const { data } = await axios.post(`/api/v2/consumption`, {
                section,
                field,
                items: getItemsString(requests)
            })

            if (data.success) {
                setLoading(false)
                setConsumption(data.data)
                setData(data.total.object)
                setObject(data.total.object)
                setKeys(data.total.keys)
                setSetClosingValues(data.total.closing_values)
                toast.success('Consumption added successfully')
                setRequest([])
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts(section)
    }, [section])

    
    return (
        <>
            <HeadInfo title={`Consumption(PM) - ${section}`} />
            <div
                className='space-y-4'
            >
                <div>
                    <div>
                        <div className="flex flex-col space-y-1">
                            <div
                                className="flex w-full"
                            >
                                <select
                                    value={product}
                                    onChange={(e) => setProduct(e.target.value)}
                                    className='w-full p-2 border-l border-t border-b rounded-l'
                                >
                                    <option value="">Select Item</option>
                                    {products.length > 0 &&
                                        products.map((product) => (
                                            <option key={product.name} value={product.name}>{product.name}</option>
                                        ))}
                                </select>
                                <input
                                    value={batch}
                                    onChange={(e) => setBatch(e.target.value)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder={field==='rm' && section !== 'chocolate' ? 'Batch' : 'Carton'}
                                    className='w-[150px] p-2 border'
                                />
                            </div>

                            <button
                                onClick={addRequest}
                                className="px-2 py-1 bg-gray-100 border-r border-t border-b rounded-lg hover:bg-gray-200"
                            >
                                Add List
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200">
                    <div
                        className="flex items-center justify-between bg-gray-100 px-2 py-1 rounded-t-lg"
                    >
                        <p>Item and Batch</p>
                        <div
                            className="space-x-2"
                        >
                            <button
                                onClick={getConsumption}
                                className="bg-gray-500 text-white px-4 py-1 text-sm rounded"
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                    <div className="p-2 space-y-2">
                        {
                            requests.length > 0 ?
                                <table
                                    className="w-full"
                                >
                                    <tbody>
                                        {
                                            requests.map((req, index) => (
                                                <tr key={index} className="flex justify-between space-x-2">
                                                    <td className="text-nowrap">{req.product}</td>
                                                    <td className="text-center">{req.batch}</td>
                                                    <td className="text-right">
                                                        <button
                                                            onClick={() => setRequest(requests.filter(r => r.product !== req.product))}
                                                            className="px-2 py-0.5 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                :
                                <p className="text-center text-sm text-gray-300">No items add in list.</p>
                        }
                    </div>
                </div>
                {
                    consumption?.headers ?
                        <div
                            className="flex justify-end"
                        >
                            <button
                                onClick={() => setIsSubmit(true)}
                                className="p-2 text-sm bg-gray-500 text-white rounded"
                            >
                                Server submit
                            </button>
                        </div>
                        : null
                }
                <div>
                    {
                        consumption.headers &&
                        <TableConsumption
                            headers={consumption.headers}
                            rows={consumption.rows}
                        />
                    }
                </div>
            </div>
            {loading && <Loading />}
            {isSubmit &&
                <SubmitConsumption
                    section={section}
                    field={field}
                    keys={keys}
                    object={object}
                    setObject={setObject}
                    data={data}
                    setData={setData}
                    closingValues={closingValues}
                    setIsSubmit={setIsSubmit}
                />
            }
        </>

    );
}
