import React from 'react';

const TrInfo = ({name,unit,report,query}) => {
    return (
        <tr>
        <td
            className='p-1 border'
        >{name}</td>
        <td
            className='border'
            style={{
                textAlign : 'center'
            }}
        >{unit}</td>
        {
            report.getInfo(query).map((qty, i) =>
                <td
                    key={i}
                    className='border'
                    style={{
                        textAlign : 'center'
                    }}
                >
                    {qty>0 && qty}
                </td>
            )
        }
    </tr>
    );
};

export default TrInfo;