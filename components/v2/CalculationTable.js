import React from 'react'

export default function CalculationTable({ headers, rows }) {
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
                                        className={`p-2 ${i == 1 ? 'text-left text-nowrap' : 'text-center'}`}
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
