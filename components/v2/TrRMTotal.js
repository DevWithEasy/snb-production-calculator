import React from 'react'

export default function TrRMTotal({ total_sl, sl, value }) {
    return (
        <tr>
            <td colSpan={2} className={`px-2 py-1 text-sm bg-white border-gray-200 ${total_sl === sl ? '' : ' border-b'}`}>
                <p className="text-gray-900 whitespace-no-wrap text-right">
                    {value.name}
                </p>
            </td>
            <td className={`px-2 py-1 text-sm bg-white border-gray-200 ${total_sl === sl ? '' : ' border-b'}`}>
                <p className="text-gray-900 whitespace-no-wrap text-center">
                    {value.unit}
                </p>
            </td>
            <td className={`px-2 py-1 text-sm bg-white border-gray-200 ${total_sl === sl ? '' : ' border-b'}`}>
                <p className="text-gray-900 whitespace-no-wrap text-center">
                    {value.value}
                </p>
            </td>
        </tr>
    )
}
