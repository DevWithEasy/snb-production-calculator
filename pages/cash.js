import React, { useState } from 'react';
import CashSubmitMode from '../components/cash/CashSubmitMode';

const Cash = () => {
    const [type,setType] = useState('')
    return (
        <div>
            <div 
                className='p-4 flex justify-end space-x-2'
            >
                <button
                    className='px-6 py-2 bg-green-500 text-white rounded-md'
                    onClick={()=>setType('cash-in')}
                >
                    ক্যাশ ইন
                </button>
                <button
                    className='px-6 py-2 bg-red-500 text-white rounded-md'
                    onClick={()=>setType('cash-out')}
                >
                    ক্যাশ আউট
                </button>
            </div>
            {type === 'cash-in' && <CashSubmitMode {...{type,setType}}/>}
            {type === 'cash-out' && <CashSubmitMode {...{type,setType}}/>}
        </div>
    );
};

export default Cash;