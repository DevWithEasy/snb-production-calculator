import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { ImCross } from 'react-icons/im'
import { IoIosArrowRoundBack } from "react-icons/io"
import HeadInfo from '../../../../../../components/HeadInfo'
import Loading from '../../../../../../components/v2/Loading'
import getConsumptionItemsString from '../../../../../../utils/v2/getConsumptionItemsString'
import getMonthDaysArray from '../../../../../../utils/v2/getMonthDaysArray'

export default function Recipe() {
    const router = useRouter()
    const { section, type, field } = router.query
    const [loading, setLoading] = useState(false)
    const [dateView, setDateView] = useState(true)
    const [date, setDate] = useState(null)
    const [keys, setKeys] = useState([])
    const [object, setObject] = useState({})

    const getConsumption = async () => {
        if (!date) return toast.error('Date is not available')
        setLoading(true)
        setDateView(false)
        try {
            const { data } = await axios.post(`/api/v2/daily_rmpm/update/rmpm_inout`, { section, type, field, date })

            if (data.success) {
                setLoading(false)
                setKeys(data.data.values_array)
                setObject(data.data.values_object)
            }
        } catch (error) {
            setLoading(false)
            setDateView(true)
        }
    }
    const handleSubmitServer = async () => {
        if (!date) return toast.error('please select a date')
        try {
            setLoading(true)
            const response = await axios.post('/api/v2/daily_rmpm/update/rmpm_inout_post', {
                section,
                type,
                field,
                date,
                items: getConsumptionItemsString(object)
            }
            )

            if (response.data.status === 200) {
                toast.success(response.data.message)
                setLoading(false)
            } else {
                toast.error(response.data.message)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(!loading)
        }
    }

    return (
        <>
            <HeadInfo title={`Stock update - ${section}`} />
            <div
                className=' bg-gray-50'
            >
                {
                    dateView &&
                    <div
                        className='absolute left-0 top-0 px-4 md:px-0 h-screen w-full flex justify-center items-center bg-gray-500/50'
                    >
                        <div
                            className='relative w-9/12 md:w-3/12 p-4 flex flex-col space-y-2 bg-white rounded-lg'
                        >
                            {keys.length > 0 && <ImCross onClick={() => setDateView(!dateView)} className='absolute -top-5 right-2 text-red-500' />}
                            <select
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className='px-2 py-1 rounded-lg focus:outline-none border'
                            >
                                <option value={null}>Date select</option>
                                {
                                    getMonthDaysArray().map(day => (
                                        <option key={day.value} value={day.value}>{day.title}</option>
                                    ))
                                }
                            </select>
                            <button
                                className='p-2 bg-blue-500 text-white rounded-lg'
                                onClick={getConsumption}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                }
                <div
                    className='container md:max-w-3xl md:mx-auto bg-white p-2 text-sm rounded-lg'
                >
                    {
                        date &&
                        <div
                            className='flex items-center justify-between space-x-2 py-2'
                        >
                            <IoIosArrowRoundBack size={30} className='cursor-pointer' onClick={()=>router.back()}/>
                            <div
                                className='space-x-2'
                            >
                                <button
                                    onClick={() => setDateView(!dateView)}
                                    className='border px-2 py-1 rounded-lg text-sm'
                                >
                                    ({date}) Date Change
                                </button>
                                <button
                                    onClick={handleSubmitServer}
                                    className='bg-gray-500 text-white border px-2 py-1 rounded-lg'
                                >
                                    Send server
                                </button>
                            </div>
                        </div>
                    }
                    <div>
                        {
                            keys.map(key => (
                                <div
                                    key={key}
                                    className='flex items-center border-b py-2'
                                >
                                    <label className='w-full'>{key}</label>
                                    <input
                                        key={key}
                                        type='text'
                                        value={object[key]}
                                        onChange={(e) => setObject({ ...object, [key]: e.target.value })}
                                        className='w-[80px] py-1 text-center border focus:outline-none focus:border-blue-400 rounded-lg'
                                    />
                                </div>
                            ))
                        }
                    </div>

                </div>

                {loading && <Loading />}
            </div>
        </>

    )
}
