import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import checkAddtionIndex from '../../../utils/v2/checkAddtionIndex'
import getConsumptionItemsString from '../../../utils/v2/getConsumptionItemsString'
import getMonthDaysArray from '../../../utils/v2/getMonthDaysArray'
import Loading from '../Loading'

export default function SubmitConsumption({ section, field, setIsSubmit, keys, cons_object }) {
    const [object, setObject] = useState(cons_object)
    const [data, setData] = useState(cons_object)
    const [date, setDate] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorField, setErrorField] = useState('')

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
    const handleSubmitServer = async () => {
        if (error) return toast.error('Have an input error!')
        if (!date) return toast.error('Please insert a date!')
        try {
            setLoading(true)
            const response = await axios.post('/api/v2/daily_rmpm/consumption/rmpm_post', {
                section,
                field,
                date,
                items: getConsumptionItemsString(data)
            }
            )
            if (response.data.status === 200) {
                toast.success(response.data.message)
                setLoading(false)
                setIsSubmit(false)
            } else {
                toast.error(response.data.message)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(!loading)
        }
    }
    console.log(data)
    return (
        <div
            className='absolute top-0 left-0 h-screen w-full flex justify-center items-center bg-gray-500/50'
        >
            <div
                className='h-screen w-full md:w-5/12 mx-auto md:px-0 overflow-y-auto'
            >
                <div
                    className='fixed top-0 h-28 z-50 w-full md:w-5/12 mx-auto px-4 py-2 space-y-2 bg-gray-300 text-sm'
                >
                    <p className='p-1 bg-white rounded'>Submit report in server. If want possible to change any item quantity.</p>
                    <div
                        className='w-full flex justify-between items-center'
                    >
                        <select
                            onChange={(e) => setDate(e.target.value)}
                            className='px-2 py-1 rounded-lg focus:outline-none border'
                        >
                            <option>Date select</option>
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
                                Submit
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
                                        className={`w-[80px] py-1 text-center border focus:outline-none focus:border-blue-500  ${key === errorField ? 'bg-red-50 focus:border-red-500 text-red-500' : ''}`}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                loading && <Loading title='Sending...' />
            }
        </div>
    )
}
