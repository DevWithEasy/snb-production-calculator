import React, { useState } from 'react';
import { FaGear } from "react-icons/fa6";
import { ImCross } from 'react-icons/im';

export default function ItemInOut({ item, unit, inOut, setView }) {
    const [setting, setSetting] = useState(true)
    const [opening, setOpening] = useState(true)
    const [recieved, setRecieved] = useState(true)
    const [consumption, setConsumption] = useState(true)
    const [stcok, setStock] = useState(true)
    const [showUnit, setShowUnit] = useState(true)

    return (
        <div className='absolute left-0 top-0 md:px-0 h-screen w-full bg-gray-500/50'>
            <div className='container h-screen md:max-w-3xl md:mx-auto bg-gray-50'>
                <div className='h-[40px]'>
                    <div className='p-2 flex justify-between items-center px-2'>
                        <p className='text-sm'>Item name : <b>{item}</b></p>
                        <div
                            className='flex items-center space-x-3'
                        >
                            <button onClick={() => setSetting(!setting)}>
                                <FaGear size={18} />
                            </button>
                            <button onClick={() => setView(false)}>
                                <ImCross />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='relative h-[calc(100%-40px)] w-full overflow-y-auto text-sm bg-white'>
                    <table className='w-full table-fixed'>
                        <thead className='bg-gray-200 sticky top-0'>
                            <tr>
                                <td className='w-[20px] p-2 text-center'>Date</td>
                                {opening && <td className='p-2 text-right'>Opening</td>}
                                {recieved && <td className='p-2 text-right'>In</td>}
                                {consumption && <td className='p-2 text-right'>Out</td>}
                                {stcok && <td className='p-2 text-right'>Closing</td>}
                            </tr>
                        </thead>
                        <tbody>
                            {inOut.map((entry, i) => (
                                <tr key={i} className='border-b cursor-pointer hover:bg-gray-100 transition-all duration-300'>
                                    <td className='w-[20px] p-2 text-center'>{entry[0]}</td>
                                    {opening && (
                                        <td className='p-2 text-right'>{entry[1]} {showUnit && unit}</td>
                                    )}
                                    {recieved && (
                                        <td className='p-2 text-right'>{entry[2]} {showUnit && unit}</td>
                                    )}
                                    {consumption && (
                                        <td className='p-2 text-right'>{entry[3]} {showUnit && unit}</td>
                                    )}
                                    {stcok && (
                                        <td className='p-2 text-right'>{entry[4]} {showUnit && unit}</td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {
                    setting &&
                    <div
                        className='absolute top-0 h-screen w-full flex justify-center items-center bg-gray-500/50 z-50 text-sm'
                    >
                        <div className="relative bg-white flex flex-col p-4 rounded-lg">
                            <button
                                className='absolute -right-2 -top-2 bg-white p-1 text-red-500 rounded-full'
                                onClick={() => setSetting(false)}
                            >
                                <ImCross />
                            </button>
                            <label className="flex items-center mr-4 pb-2">
                                <input type="checkbox" checked={showUnit} onChange={() => setShowUnit(!showUnit)} />
                                <span className="ml-2">Unit</span>
                            </label>
                            <label className="flex items-center mr-4 pb-2">
                                <input type="checkbox" checked={opening} onChange={() => setOpening(!opening)} />
                                <span className="ml-2">Opening</span>
                            </label>
                            <label className="flex items-center mr-4 pb-2">
                                <input type="checkbox" checked={recieved} onChange={() => setRecieved(!recieved)} />
                                <span className="ml-2">Recieved</span>
                            </label>
                            <label className="flex items-center mr-4 pb-2">
                                <input type="checkbox" checked={consumption} onChange={() => setConsumption(!consumption)} />
                                <span className="ml-2">Consumption</span>
                            </label>
                            <label className="flex items-center mr-4">
                                <input type="checkbox" checked={stcok} onChange={() => setStock(!stcok)} />
                                <span className="ml-2">Stock</span>
                            </label>
                        </div>
                    </div>
                }
        </div>
    );
}
