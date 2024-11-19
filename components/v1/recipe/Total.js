import React from 'react';

const Total = ({total,processLoss,totalProcessLoss,output}) => {
    return (
        <div className='mt-10 border print:border-gray-500 shadow print:shadow-none rounded-md print:text-sm print:mx-2'>
            <p className='flex justify-between p-2 print:px-2 print:py-0.5'>
                <span className='w-3/4'>Total Input</span>
                <span className='w-1/4 text-center'> {total}</span>
            </p>
            <p className='flex justify-between p-2 print:px-2 print:py-0.5 border-b print:border-0'>
                <span className='w-3/4'>Process Loss ({processLoss}%)</span>
                <span className='w-1/4 text-center'>{totalProcessLoss}</span>
            </p>
            <p className='flex justify-between p-2 print:px-2 print:py-0.5'>
                <span className='w-3/4'>Total Output</span>
                <span className='w-1/4 text-center'>{output}</span>
            </p>
        </div>
    );
};

export default Total;