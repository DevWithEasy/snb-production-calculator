import React, { useState } from 'react'
import baseUrl from '../../../utils/v1/baseUrl';
import axios from 'axios';
import getConsumptionItemsString from '../../../utils/v2/getConsumptionItemsString';
import Loading from '../../../components/v2/Loading';
import HeadInfo from '../../../components/HeadInfo';

export default function Demand({ data }) {
    const [object, setObject] = useState(data.object)
    const [loading, setLoading] = useState(false)
    const [demand, setDemand] = useState({})
    const getDemand = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`/api/v2/daily_rmpm/demand/calculation`, {
                section: data.section,
                items: getConsumptionItemsString(object)
            })
            if (response.data.success) {
                setLoading(false)
                setDemand(response.data.data)
            }
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }

    return (
        <div
            className=''
        >
            <HeadInfo title={`Demand - ${data.section}`} />
            <div
                className='container md:max-w-3xl md:mx-auto space-y-2 bg-white'
            >
                <div
                    className='p-2 text-sm'
                >
                    {
                        data.array.map(key => (
                            <div
                                key={key}
                                className='flex items-center border-b py-2'
                            >
                                <label className='w-full'>{key}</label>
                                <div
                                    className='w-[80px]'
                                >
                                    <input
                                        key={key}
                                        type='number'
                                        name={key}
                                        value={object[key]}
                                        onChange={(e) => setObject({ ...object, [key]: Number(e.target.value) })}
                                        className={`w-[80px] py-1 text-center border focus:outline-none focus:border-blue-500`}
                                    />
                                </div>
                            </div>
                        ))
                    }
                    <button onClick={getDemand} className='px-2 py-1 mt-2 border rounded-md bg-gray-50 hover:bg-gray-100'>Generate Demand</button>
                </div>
                <div
                    className='p-2'
                >
                    <table
                        className='w-full text-sm border'
                    >
                        <thead>
                            <tr
                                className='bg-gray-100'
                            >
                                <td className='p-2 font-semibold text-center'>Sl</td>
                                <td className='p-2 font-semibold'>Name</td>
                                <td className='p-2 text-center font-semibold'>Unit</td>
                                <td className='p-2 text-center font-semibold'>Quantity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                demand.rm && demand.rm.map((tr, i) => (
                                    <tr
                                        key={i}
                                        className='border-b'
                                    >
                                        <td className='p-2 text-center'>{i + 1}</td>
                                        {
                                            tr.map((td, j) => (
                                                <td
                                                    key={j}
                                                    className={`p-2 ${j !== 0 ? 'text-center' : ''}`}
                                                >
                                                    {td}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {

                    }
                </div>
                <div
                    className='p-2'
                >
                    <table
                        className='w-full text-sm border'
                    >
                        <thead>
                            <tr
                                className='bg-gray-100'
                            >
                                <td className='p-2 font-semibold text-center'>Sl</td>
                                <td className='p-2 font-semibold'>Name</td>
                                <td className='p-2 text-center font-semibold'>Unit</td>
                                <td className='p-2 text-center font-semibold'>Quantity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                demand.pm && demand.pm.map((tr, i) => (
                                    <tr
                                        key={i}
                                        className='border-b'
                                    >
                                        <td className='p-2 text-center'>{i + 1}</td>
                                        {
                                            tr.map((td, j) => (
                                                <td
                                                    key={j}
                                                    className={`p-2 ${j !== 0 ? 'text-center' : ''}`}
                                                >
                                                    {td}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {

                    }
                </div>
            </div>
            {loading && <Loading />}
        </div>
    )
}

export async function getServerSideProps(context) {
    const { section } = context.params;
    try {
        const { data } = await axios.get(`${baseUrl}/api/v2/daily_rmpm/demand/products/${section}`)

        return {
            props: {
                data: { ...data.data, section },
            },
        };
    } catch (error) {
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
        return {
            props: {
                data: {},
            },
        };
    }
}