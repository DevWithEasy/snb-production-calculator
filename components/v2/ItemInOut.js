import React from 'react'
import { ImCross } from 'react-icons/im'

export default function ItemInOut({ item, unit, inOut, setView }) {
    
    return (
        <div
            className='absolute left-0 top-0 md:px-0 h-screen w-full bg-gray-500/50'
        >
            <div
                className='container h-screen md:max-w-3xl md:mx-auto bg-white'
            >
                <div
                    className='h-[72px] bg-red-50'
                >
                    <div
                        className='p-2 flex justify-between items-center px-2 bg-gray-50'
                    >
                        <p className='text-sm'>Item name : <b>{item}</b></p>
                        <button onClick={() => setView(false)}>
                            <ImCross/>
                        </button>
                    </div>
                    <div
                        className='container md:max-w-3xl md:mx-auto flex justify-between bg-gray-100 text-sm font-semibold'
                    >
                        <p className='w-20 p-2 text-center'>Date</p>
                        <p className='w-full p-2 pr-4 text-right'>Opening</p>
                        <p className='w-full p-2 pr-4 text-right'>Recieve</p>
                        <p className='w-full p-2 pr-4 text-right'>Consumption</p>
                        <p className='w-full p-2 pr-4 text-right'>Closing</p>
                    </div>
                </div>

                <div
                    className='relative h-[calc(100%-72px)] w-full overflow-x-auto overflow-y-auto text-sm'
                >
                    <div
                        className=''
                    >
                        {
                            inOut.map((entry, i) => (
                                <div key={i}
                                    className='flex justify-between border-b cursor-pointer hover:bg-gray-100 hover:font-bold transition-all duration-300'
                                >
                                    {
                                        entry.map((cell, i) => (
                                            <p
                                                key={i}
                                                className={`p-2 text-right ${i !== 0 ? `w-full pr-4` : `w-20`}`}
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
