import React from 'react';
import GetDate from '../utils/date';

const MonthlyDemandMonth = ({section}) => {
    const date = new GetDate()
    return (
        <div className='hidden print:flex justify-between text-xs'>
            <p>Section : {section} , Month : {date.getMonth()}</p>
        </div>
    );
};

export default MonthlyDemandMonth;