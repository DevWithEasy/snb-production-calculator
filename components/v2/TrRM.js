import React from 'react'

export default function TrRM({total_sl,sl,value}) {
    return (
        <tr
        >
            <td className={`'px-2 py-1 text-sm bg-white' ${total_sl === sl ? 'border-b-2' : 'border-gray-200 border-b'}`}>
                <p className="text-gray-900 whitespace-no-wrap text-center">
                    {sl}
                </p>
            </td>
            <td className={`'px-2 py-1 text-sm bg-white' ${total_sl === sl ? 'border-b-2' : 'border-gray-200 border-b'}`}>
                <p className="text-gray-900 whitespace-no-wrap">
                    {value.name}
                </p>
            </td>
            <td className={`'px-2 py-1 text-sm bg-white' ${total_sl === sl ? 'border-b-2' : 'border-gray-200 border-b'}`}>
                <p className="text-gray-900 whitespace-no-wrap text-center">
                    {value.unit}
                </p>
            </td>
            <td className={`'px-2 py-1 text-sm bg-white' ${total_sl === sl ? 'border-b-2' : 'border-gray-200 border-b'}`}>
                <p className="text-gray-900 whitespace-no-wrap text-center">
                    {value.value}
                </p>
            </td>
        </tr>
    )
}
