import React, { useState } from 'react';
import handleInput from '../../utils/handleInput';
import { createCashEntry } from '../../utils/cash_api_utils';
import useUserStore from '../../features/userStore';

const CashSubmitMode = ({ type, setType }) => {
    const { newEntries } = useUserStore()
    const [value, setValue] = useState({
        _id : Date.now(),
        name: '',
        section: '',
        id: '',
        amount: '',
        type: type,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    })

    const handleClose = (e) => {
        setType('')
        setValue({
            name: '',
            section: '',
            id: '',
            amount: '',
            type: type,
        })
    }
    return (
        <div
            className={`w-full h-screen fixed top-0 left-0 z-10 flex justify-center items-center ${type === 'cash_in' ? 'bg-green-500/20' : 'bg-red-500/20'}`}
        >
            <div
                className='w-1/2 space-y-2 bg-white rounded-md'
            >
                <h2 className={`text-sm font-bold p-2 text-white text-center rounded-t-md ${type === 'cash_in' ? 'bg-green-500' : 'bg-red-500'}`}>নতুন এন্ট্রি সাবমিট করুন</h2>
                <div
                    className='p-2 space-y-2'
                >
                    <input
                        name='name'
                        onChange={(e) => handleInput(e, value, setValue)}
                        placeholder='নাম'
                        className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder:text-sm'
                    />
                    <input
                        name='section'
                        onChange={(e) => handleInput(e, value, setValue)}
                        placeholder='সেকশন'
                        className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 placeholder:text-sm'
                    />
                    <input
                        name='id'
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
                </div>
                <div
                    className='p-2 space-x-2'
                >
                    <button
                        onClick={()=>createCashEntry(value,newEntries,handleClose)}
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

export default CashSubmitMode;