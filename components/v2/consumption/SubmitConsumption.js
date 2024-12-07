import React, { useState } from 'react'

export default function SubmitConsumption({ field, setIsSubmit, keys, values, object }) {
    const [data, setData] = useState(object)
    console.log(data)
    return (
        <div
            className='absolute top-0 left-0 h-screen w-full flex justify-center items-center bg-gray-500/50'
        >
            <div
                className='h-[calc(100%-20px)] w-full md:w-5/12 mx-auto px-2 md:px-0 rounded-lg'
            >
                <div
                    className='h-10 px-4 flex justify-end items-center space-x-2 bg-gray-300 text-white text-sm rounded-t-lg'
                >
                    <button
                        onClick={() => setIsSubmit(false)}
                        className='bg-gray-500 px-4 py-0.5 rounded'
                    >
                        Submit
                    </button>
                    <button
                        onClick={() => setIsSubmit(false)}
                        className='bg-red-500 px-4 py-0.5 rounded'
                    >
                        Close
                    </button>
                </div>

                <div
                    className='h-[calc(100%-60px)] bg-white rounded-b-lg p-2 text-sm overflow-y-auto'
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

        </div>
    )
}
