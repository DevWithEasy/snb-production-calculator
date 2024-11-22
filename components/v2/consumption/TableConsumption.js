import React from "react";

export default function TableConsumption({ headers, rows }) {
    return (
        <div className="overflow-x-auto">
            <p className="px-2 py-1 bg-gray-100 border-l border-r border-t rounded-t-lg font-bold">
                Consumption
            </p>
            <div className="inline-block min-w-full overflow-hidden rounded-b-lg border bg-white">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="px-2 py-2 text-sm font-normal text-center text-gray-800 bg-gray-100 border-b border-r border-gray-200"
                            >
                                Sl
                            </th>
                            {headers.map((name, i) => {
                                return (
                                    <th
                                        key={i}
                                        scope="col"
                                        className={`pr-5 py-2 text-sm font-normal text-gray-800 bg-gray-100 border-b border-r border-gray-200 ${name === "Name" ? "text-left" : "text-center"
                                            }`}
                                    >
                                        {name}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((tr, i) => (
                            <tr key={i}>
                                <td
                                    key={i}
                                    className="px-2 py-1 text-sm bg-white border-gray-200 border-b border-r"
                                >
                                    <p className="text-gray-900 whitespace-no-wrap text-center">
                                        {i}
                                    </p>
                                </td>
                                {tr.map((value, i) => {
                                    console.log(i === 0);
                                    return (
                                        <td
                                            key={i}
                                            className={`pr-4 py-1 text-sm bg-white border-gray-200 border-b border-r ${i === 0 ? "text-left" : "text-center"
                                                }`}
                                        >
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {value}
                                            </p>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
