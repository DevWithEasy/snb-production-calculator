import React from 'react';

const Tr = ({title,unit,value}) => {
    return (
        <>
            {
                value > 0 &&
                <tr>
                    <td> </td>
                    <td
                        style={{

                        }}
                    >
                        {title}
                    </td>
                    <td
                        style={{
                            textAlign:'center'
                        }}
                    >
                        {unit ? unit : ''}
                    </td>
                    <td
                        style={{
                            textAlign:'center'
                        }}
                    >
                        {value}
                    </td>
                    <td></td>
                </tr>
            }
        </>
    );
};

export default Tr;