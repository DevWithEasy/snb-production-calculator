import React, { useState } from 'react'
import {AiOutlinePlus,AiOutlineMinus,AiOutlineDelete} from 'react-icons/ai'
import {LuEqual} from 'react-icons/lu'
import {BiEditAlt} from 'react-icons/bi'
import CashUpdateMode from './CashUpdateMode'
import CashDeleteMode from './CashDeleteMode'
import useUserStore from '../../../features/userStore'
import Cash from '../../../utils/v1/cash'
const CashList = () => {
    const { cashEntries } = useUserStore()
    const cash = new Cash(cashEntries)
    const cashIn = cash.getTotalCashIn()
    const cashOut = cash.getTotalCashOut()
    const balance = cash.getBalance()
    const entriesWithBalance = cash.getEntriesWithBalance()
    const [data,setData] = useState()
    const [view,setView] = useState('')
    return (
        <div
            className='p-4 space-y-5'
        >
            <div
                className='p-4 border flex justify-between rounded-md'
            >
                <div
                    className='w-4/12 flex space-x-2'
                >
                    <div>
                        <AiOutlineMinus
                            size={30}
                            className='p-2 bg-green-100 text-green-600 rounded-full'
                        />
                    </div>
                    <div>
                        <p>ক্যাশ ইন</p>
                        <p className='text-xl font-bold'>{cashIn}</p>
                    </div>
                </div>
                <div
                    className='w-4/12 px-6 flex space-x-2 border-l'
                >
                    <div>
                        <AiOutlinePlus
                            size={30}
                            className='p-2 bg-red-100 text-red-600 rounded-full'
                        />
                    </div>
                    <div>
                        <p>ক্যাশ আউট</p>
                        <p className='text-xl font-bold'>{cashOut}</p>
                    </div>
                </div>
                <div
                    className='w-4/12 px-6 flex space-x-2 border-l'
                >
                    <div>
                        <LuEqual
                            size={30}
                            className='p-2 bg-blue-100 text-blue-600 rounded-full'
                        />
                    </div>
                    <div>
                        <p>ব্যালেন্স</p>
                        <p className='text-xl font-bold'>{balance}</p>
                    </div>
                </div>
            </div>
            <div className='w-full overflow-auto'>
            <table
                className='w-full'
            >
                <tbody>
                    <tr
                        className='bg-gray-100'
                    >
                        <td className='px-4 py-2'>নং</td>
                        <td className='px-4 py-2'>তারিখ</td>
                        <td className='px-4 py-2'>নাম</td>
                        <td className='px-4 py-2'>সেকশন</td>
                        <td className='px-4 py-2'>আইডি নং</td>
                        <td className='px-4 py-2'>ধরন</td>
                        <td className='px-4 py-2'>টাকার পরিমাণ</td>
                        <td className='px-4 py-2'>ব্যালেন্স</td>
                        <td></td>
                    </tr>
                    {
                        entriesWithBalance && entriesWithBalance.map((entry, i) =>
                            <tr
                                key={entry._id}
                                className='border-b hover:bg-blue-50 group'
                            >
                                <td className='px-4 py-2'>{i + 1}</td>
                                <td className='px-4 py-2'>{entry?.date}</td>
                                <td className='px-4 py-2'>{entry?.name}</td>
                                <td className='px-4 py-2'>{entry?.section}</td>
                                <td className='px-4 py-2'>{entry?.id}</td>
                                <td className='px-4 py-2'>{entry?.type === 'cash_in' ? 'ক্যাশ ইন' : 'ক্যাশ আউট'}</td>
                                <td className={`px-4 py-2 font-bold ${entry?.type === 'cash_in' ? 'text-green-600' : 'text-red-600'} print:text-black`}>{entry?.amount}</td>
                                <td className='px-4 py-2'>{entry?.stock}</td>
                                <td className='px-4 py-2 group-hover:visible flex items-center justify-center space-x-4 invisible'>
                                    <BiEditAlt
                                        onClick={()=>{setData(entry),setView('update')}}
                                        size={20} className='cursor-pointer hover:text-blue-500'/>
                                    <AiOutlineDelete
                                        onClick={()=>{setData(entry),setView('delete')}}
                                        size={20} className='cursor-pointer hover:text-red-500'/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            {view === 'update' && <CashUpdateMode {...{data, setView}} />}
            {view === 'delete' && <CashDeleteMode {...{data, setView}} />}
        </div>
    );
};

export default CashList;