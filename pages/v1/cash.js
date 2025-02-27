import React, { useEffect, useState } from 'react';
import CashList from '../../components/v1/cash/CashList';
import CashSubmitMode from '../../components/v1/cash/CashSubmitMode';
import useUserStore from '../../features/userStore';
import { getAllCashEntries } from '../../utils/v1/cash_api_utils';

const Cash = () => {
    const [type,setType] = useState('')
    const {cashEntries,addEntries} = useUserStore()

    useEffect(()=>{
        getAllCashEntries(addEntries)
    },[addEntries])

    console.log(cashEntries)
    return (
        <div>
            <div 
                className='p-4 flex justify-end space-x-2'
            >
                <button
                    className='px-6 py-2 bg-green-500 text-white rounded-md'
                    onClick={()=>setType('cash_in')}
                >
                    ক্যাশ ইন
                </button>
                <button
                    className='px-6 py-2 bg-red-500 text-white rounded-md'
                    onClick={()=>setType('cash_out')}
                >
                    ক্যাশ আউট
                </button>
            </div>
            <CashList/>
            {type === 'cash_in' && <CashSubmitMode {...{type,setType}}/>}
            {type === 'cash_out' && <CashSubmitMode {...{type,setType}}/>}
        </div>
    );
};

export default Cash;