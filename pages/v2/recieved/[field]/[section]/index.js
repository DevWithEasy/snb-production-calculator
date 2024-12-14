import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { ImCross } from 'react-icons/im'
import HeadInfo from '../../../../../components/HeadInfo'
import Loading from '../../../../../components/v2/Loading'
import getMonthDaysArray from '../../../../../utils/v2/getMonthDaysArray'
import getConsumptionItemsString from '../../../../../utils/v2/getConsumptionItemsString'
import { IoIosArrowRoundBack } from 'react-icons/io'
import checkAddtionIndex from '../../../../../utils/v2/checkAddtionIndex'

export default function Recipe() {
    const router = useRouter()
    const { section, field } = router.query
    const [loading, setLoading] = useState(false)
    const [dateView, setDateView] = useState(true)
    const [date, setDate] = useState(null)
    const [keys, setKeys] = useState([])
    const [object, setObject] = useState({})
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [errorField, setErrorField] = useState('')

    const handleFocus = (e) => {
        e.target.type = 'tel'
        e.target.setAttribute('inputmode', 'numeric')
    }

    const handleBlur = (e) => {
        e.target.type = 'text'
    }

    const handleDateChange = (e) => {
        const { name, value } = e.target
        setObject({ ...object, [name]: value })
        try {
            const calcValue = eval(value)
            setData({ ...data, [name]: calcValue })
            setError(false)
            setErrorField('')
        } catch (e) {
            setError(true)
            setErrorField(name)
        }
    }

    const getConsumption = async () => {
        if (!date) return toast.error('Select a date.')
        setLoading(true)
        setDateView(false)
        try {
            const { data } = await axios.get(`/api/v2/daily_rmpm/find_items?section=${section}&field=${field}`)

            if (data.success) {
                setLoading(false)
                setKeys(data.data.values_array)
                setObject(data.data.values_object)
                setData(data.data.values_object)
            }
        } catch (error) {
            setLoading(false)
            setDateView(true)
        }
    }
    const handleSubmitServer = async () => {
        if (error) return toast.error('Have an input error!')
        if (!date) return toast.error('Please insert a date!')
        try {
            setLoading(true)
            const response = await axios.post('/api/v2/daily_rmpm/recieved/rmpm_post', {
                section,
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
            <HeadInfo title={`Daily Recieve Input - ${section}`} />
            <div
                className=' bg-gray-50'
            >
                {
                    dateView &&
                    <div
                        className='absolute left-0 top-0 z-50 px-4 md:px-0 h-screen w-full flex justify-center items-center bg-gray-500/50'
                    >
                        <div
                            className='relative w-9/12 md:w-3/12 p-4 flex flex-col space-y-2 bg-white rounded-lg'
                        >
                            {keys.length > 0 && <ImCross onClick={() => setDateView(!dateView)} className='absolute -top-5 right-2 text-red-500' />}
                            <select
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className='p-2 rounded-lg focus:outline-none border'
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
                            <IoIosArrowRoundBack size={30} className='cursor-pointer' onClick={() => router.back()} />
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
                    <div
                        className='bg-white p-2 text-sm'
                    >
                        {
                            keys.map(key => (
                                <div
                                    key={key}
                                    className='flex items-center border-b py-2'
                                >
                                    <label className='w-full'>{key}</label>
                                    <div
                                        className='w-[80px] relative'
                                    >
                                        {
                                            checkAddtionIndex(object[key]) &&
                                            <span className='absolute w-[42px] -top-2 -left-10 text-xs text-center bg-blue-50 px-1 border border-blue-100'>{data[key]}</span>
                                        }
                                        <input
                                            key={key}
                                            type='text'
                                            name={key}
                                            value={object[key]}
                                            onChange={handleDateChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                            className={`w-[80px] py-1 text-center border focus:outline-none focus:border-blue-500  ${key === errorField ? 'bg-red-50 focus:border-red-500 text-red-500' : ''}`}
                                        />
                                    </div>
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
