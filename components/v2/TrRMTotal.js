import React from 'react'

export default function TrRMTotal({ total_sl, sl, value }) {
    return (
        <tr>
            <td colspan={2} class={`px-2 py-1 text-sm bg-white border-gray-200 ${total_sl === sl ? '' : ' border-b'}`}>
                <p class="text-gray-900 whitespace-no-wrap text-right">
                    {value.name}
                </p>
            </td>
            <td class={`px-2 py-1 text-sm bg-white border-gray-200 ${total_sl === sl ? '' : ' border-b'}`}>
                <p class="text-gray-900 whitespace-no-wrap text-center">
                    {value.unit}
                </p>
            </td>
            <td class={`px-2 py-1 text-sm bg-white border-gray-200 ${total_sl === sl ? '' : ' border-b'}`}>
                <p class="text-gray-900 whitespace-no-wrap text-center">
                    {value.value}
                </p>
            </td>
        </tr>
    )
}
