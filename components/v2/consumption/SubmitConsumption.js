import React, { useState } from 'react'
import getMonthDaysArray from '../../../utils/v2/getMonthDaysArray'
import axios from 'axios'
import getConsumptionItemsString from '../../../utils/v2/getConsumptionItemsString'
import Loading from '../Loading'
import toast from 'react-hot-toast'

export default function SubmitConsumption({section, field, setIsSubmit, keys, values, object }) {
    const [data, setData] = useState(object)
    const [date, setDate] = useState(null)
    const [loading,setLoading] = useState(false)
    const handleSubmitServer=async()=>{
        if (!date) return toast.error('তারিখ সিলেক্ট করেন নি।')
        try {
            setLoading(true)
            const response = await axios.post('/api/v2/daily_rmpm/consumption/rmpm_post',{
                    section,
                    field,
                    date,
                    items : getConsumptionItemsString(data)
                }
            )
            if(response.data.status === 200){
                toast.success(response.data.message)
                setLoading(false)
                setIsSubmit(false)
            }else{
                toast.error(response.data.message)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(!loading)
        }
    }
    return (
        <div
            className='absolute top-0 left-0 h-screen w-full flex justify-center items-center bg-gray-500/50'
        >
            <div
                className='h-screen w-full md:w-5/12 mx-auto md:px-0 overflow-y-auto'
            >
                <div
                    className='fixed top-0 h-28 w-full md:w-5/12 mx-auto px-4 py-2 space-y-2 bg-gray-300 text-sm'
                >
                    <p className='p-1 bg-white rounded'>রিপোর্ট সার্ভারে সাবমিট করুন । আপনি চাইলে পরিমান পরিবর্তন করতে পারেন।</p>
                    <div
                        className='w-full flex justify-between items-center'
                    >
                        <select
                            onChange={(e) => setDate(e.target.value)}
                            className='px-2 py-1 rounded-lg focus:outline-none border'
                        >
                            <option>তারিখ সিলেক্ট</option>
                            {
                                getMonthDaysArray().map(day => (
                                    <option key={day.value} value={day.value}>{day.title}</option>
                                ))
                            }
                        </select>
                        <div
                            className='text-white space-x-2 '
                        >
                            <button
                                onClick={handleSubmitServer}
                                className='bg-gray-500 px-3 py-1 rounded'
                            >
                                সাবমিট
                            </button>
                            <button
                                onClick={() => setIsSubmit(false)}
                                className='bg-red-500 px-4 py-1 rounded'
                            >
                                X
                            </button>
                        </div>
                    </div>

                </div>

                <div
                    className='pt-28 bg-white p-2 text-sm overflow-y-auto'
                >
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
                                    value={data[key]}
                                    onChange={(e) => setData({ ...data, [key]: e.target.value })}
                                    className='w-[80px] py-1 text-center border focus:outline-none focus:border-blue-400 rounded-lg'
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                loading && <Loading title='পাঠানো হচ্ছে...'/>
            }
        </div>
    )
}
