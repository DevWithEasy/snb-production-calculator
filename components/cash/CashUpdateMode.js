import React, { useState } from 'react';
import handleInput from '../../utils/handleInput';

const CashUpdateMode = ({data}) => {
    const [value, setValue] = useState(data)

    const handleClose = (e) => {
    }

    return (
        <div
            className={`w-full h-screen fixed top-0 left-0 z-10 flex justify-center items-center ${type === 'cash-in' ? 'bg-green-500/20' : 'bg-red-500/20'}`}
        >
            <div
                className='w-1/2 space-y-2 bg-white rounded-md'
            >
                <h2 className={`text-sm font-bold p-2 text-white text-center rounded-t-md ${type === 'cash-in' ? 'bg-green-500' : 'bg-red-500'}`}>এন্ট্রি আপডেট সাবমিট করুন</h2>
                <div
                    className='p-2 space-y-2'
                >
                    <input
                        name='name'
                        value={value.name}
                        onChange={(e) => handleInput(e, value, setValue)}
                        placeholder='নাম'
                        className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder:text-sm'
                    />
                    <input
                        name='section'
                        value={value.section}
                        onChange={(e) => handleInput(e, value, setValue)}
                        placeholder='সেকশন'
                        className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder:text-sm'
                    />
                    <input
                        name='id'
                        value={value.id}
                        onChange={(e) => handleInput(e, value, setValue)}
                        placeholder='আইডি নং'
                        className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder:text-sm'
                    />
                    <input
                        name='amount'
                        onChange={(e) => handleInput(e, value, setValue)}
                        placeholder='টাকার পরিমাণ'
                        className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder:text-sm'
                    />
                    <select
                        value={value.type}
                        onChange={(e)=>handleInput(e,value,setValue)}
                    >
                        <option value='cash-in'>ক্যাশ ইন</option>
                        <option value='cash-out'>ক্যাশ আউট</option>
                    </select>
                </div>
                <div
                    className='p-2 space-x-2'
                >
                    <button
                        className='px-6 py-2 bg-blue-500 text-white rounded-md text-sm'
                    >
                        সাবমিট
                    </button>
                    <button
                        onClick={() => handleClose()}
                        className='px-6 py-2 bg-gray-500 text-white rounded-md text-sm'
                    >
                        বন্ধ করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CashUpdateMode;