import React from 'react';
import GetDate from '../utils/date';

const MonthlyDemandMonth = ({section}) => {
    const date = new GetDate()
    return (
        <div className='hidden print:flex justify-between '>
            <p>Section : {section} , Month : {date.getMonth()}</p>
        </div>
    );
};

export default MonthlyDemandMonth;