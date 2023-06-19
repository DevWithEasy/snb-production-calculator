import React from 'react';
import GetDate from '../utils/date';

const MonthlyDemandMonth = ({section}) => {
    const date = new GetDate()
    return (
        <div className='hidden print:flex justify-between text-xs'>
            <p>Section : {section} , Month : {date.getMonth()}</p>
            <p>
                <span className='text-red-500 font-bold'>Note : </span>
                Calcultate ditional 20% from production demand.
            </p>
        </div>
    );
};

export default MonthlyDemandMonth;