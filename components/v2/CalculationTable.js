import axios from 'axios'
import React from 'react'

export default function CalculationTable({ headers, rows,section,setItem,setView,setInOut,setUnit,setLoading }) {
    const getItemInOut=async(item)=>{
        setItem(item)
        try {
            setLoading(true)
            const { data } = await axios.get(`/api/v2/daily_rmpm/item_inout?section=${section}&item=${item}`)
            console.log(data)
            if(data.success){
                setInOut(data.data)
                setUnit(data.unit)
                setLoading(false)
                setView(true)
            }else{
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
        }
    }
    return (
        <table
            className='w-full text-sm'
        >
            <thead>
                <tr
                    className='bg-gray-100'
                >
                    {
                        headers.map(velue => (
                            <th className='p-2' key={velue}>{velue}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, i) => (
                        <tr key={i} className='border-b'>
                            {
                                row.map((cell, i) => (
                                    <td
                                        key={i}
                                        onClick={i==1 ? ()=>getItemInOut(cell) : undefined}
                                        className={`p-2 ${i == 1 ? 'text-left text-nowrap cursor-pointer hover:text-blue-500' : 'text-center'}`}
                                    >
                                        {cell}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
