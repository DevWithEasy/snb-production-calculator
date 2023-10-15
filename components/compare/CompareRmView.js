import React from 'react';

const CompareRmView = ({ label, current, oldValue }) => {
    return (
        <>
            {current !== 0 && oldValue !== 0 &&
                <div
                    className={`p-2 w-full flex justify-between border-b ${current > oldValue ? 'bg-green-100' : current < oldValue ? 'bg-red-100' : ''}`}
                >
                    <p className='w-1/2'>{label} </p>
                    <p className='w-1/2 flex justify-between'>
                        <span className='block w-4/12 text-center'>
                            {current}
                        </span>
                        <span className='block w-4/12 text-center'>
                            {oldValue}
                        </span>
                        <span className='block w-4/12 text-center'>
                            {current && oldValue && (current - oldValue).toFixed(2)}
                        </span>
                    </p>
                </div>
            }
        </>
    );
};

export default CompareRmView;