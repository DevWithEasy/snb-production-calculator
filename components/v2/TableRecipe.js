import React from 'react'
import TrRM from './TrRM'
import TrRMTotal from './TrRMTotal'

export default function TableRecipe({ title, rm, rm_total }) {
    
    return (
        <div className="max-w-3xl mx-auto">
            <div className="overflow-x-auto">
                <p
                    className='px-2 py-1 bg-gray-100 border-l border-r border-t rounded-t-lg font-bold'
                >
                    {title}
                </p>
                <div className="inline-block min-w-full overflow-hidden rounded-b-lg border bg-white">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-5 py-2 text-sm font-normal text-center text-gray-800 bg-gray-100 border-b border-gray-200">
                                    Sl
                                </th>
                                <th scope="col" className="pr-5 py-2 text-sm font-normal text-left text-gray-800 bg-gray-100 border-b border-gray-200">
                                    Name
                                </th>
                                <th scope="col" className="px-5 py-2 text-sm font-normal text-center text-gray-800 bg-gray-100 border-b border-gray-200">
                                    Unit
                                </th>
                                <th scope="col" className="px-5 py-2 text-sm font-normal text-center text-gray-800 bg-gray-100 border-b border-gray-200">
                                    Quantity
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rm.map((rm, index) => rm.value ? <TrRM
                                    key={index}
                                    total={rm.length}
                                    sl={index + 1}
                                    value={rm}
                                />
                                    : null
                                )
                            }
                            {
                                rm_total && rm_total.map((rm, index) => (
                                    <TrRMTotal
                                        key={index}
                                        total={rm_total.length}
                                        sl={index + 1}
                                        value={rm}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
