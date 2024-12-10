import React from 'react'

export default function ItemInOut({ item, unit, inOut, setView }) {
    
    return (
        <div
            className='absolute left-0 top-0 md:px-0 h-screen w-full bg-gray-500/50'
        >
            <div
                className='container h-screen md:max-w-3xl md:mx-auto bg-white'
            >
                <div
                    className='h-[50px] flex justify-between items-center px-2 bg-gray-50'
                >
                    <p className='text-sm'>Item name : <b>{item}</b></p>
                    <button onClick={() => setView(false)}>X</button>
                </div>

                <div
                    className='relative h-[calc(100%-50px)] w-full overflow-x-auto overflow-y-auto text-sm'
                >
                    <div
                        className='fixed top-[50px] container md:max-w-3xl md:mx-auto flex justify-between bg-gray-100'
                    >
                        <p className='w-28 p-2 text-center'>Date</p>
                        <p className='w-full p-2 text-center'>Recieve</p>
                        <p className='w-full p-2 text-center'>Consumption</p>
                    </div>
                    <div
                        className='mt-7'
                    >
                    {
                                inOut.map((entry, i) => (
                                    <div key={i}
                                        className='flex justify-between border-b'
                                    >
                                        {
                                            entry.map((cell, i) => (
                                                <p
                                                    key={i}
                                                    className={`p-2 text-center ${i !== 0 ? `w-full` : `w-28`}`}
                                                >
                                                    {i !== 0 ? `${cell} ${unit}` : cell}
                                                </p>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}
