import React from 'react';

const TrBlank = ({report,query}) => {
    return (
        <tr className=''>
        <td style={{
            background : '#f3f4f6'
        }}>Packet info</td>
        <td></td>
        {
            report.getIngedient(query).map((qty, i) =>
                <td
                    key={i}
                    className='bordep-2'
                >

                </td>
            )
        }
    </tr>
    );
};

export default TrBlank;