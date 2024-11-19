import React, { useState } from 'react';
import useUserStore from '../../../features/userStore';
import { updateCashEntry } from '../../../utils/v1/cash_api_utils';
import handleInput from '../../../utils/v1/handleInput';

const CashUpdateMode = ({data,setView}) => {
    const {updateEntries} = useUserStore()
    const [value, setValue] = useState(data)
    return (
        <div
            className={`w-full h-screen fixed top-0 left-0 z-10 flex justify-center items-center bg-green-500/20`}
        >
            <div
                className='mx-2 md:w-1/2 space-y-2 bg-white rounded-md'
            >
                <h2 className={`text-sm font-bold p-2 text-white text-center rounded-t-md bg-green-500`}>এন্ট্রি আপডেট  করুন</h2>
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
                        value={value.amount}
                        onChange={(e) => handleInput(e, value, setValue)}
                        placeholder='টাকার পরিমাণ'
                        className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder:text-sm'
                    />
                    <select
                        value={value.type}
                        onChange={(e)=>handleInput(e,value,setValue)}
                        className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder:text-sm'
                    >
                        <option value='cash-in'>ক্যাশ ইন</option>
                        <option value='cash-out'>ক্যাশ আউট</option>
                    </select>
                </div>
                <div
                    className='p-2 space-x-2'
                >
                    <button
                        onClick={()=>updateCashEntry(value,updateEntries,setView)}
                        className='px-6 py-2 bg-blue-500 text-white rounded-md text-sm'
                    >
                        সাবমিট
                    </button>
                    <button
                        onClick={() => setView('')}
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