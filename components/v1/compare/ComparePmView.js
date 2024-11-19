import React from 'react';

const ComparePmView = ({label,current,oldValue}) => {
    return (
        <div
            className='p-2 w-full flex justify-between border-b'
        >
            <p className='w-1/2'>{label} : </p>
            <p className='w-1/2 flex justify-between'>
                <span className='block w-1/2 text-center'>
                    {current}
                </span>
                <span className='block w-1/2 text-center'>
                    {oldValue}
                </span>
            </p>
        </div>
    );
};

export default ComparePmView;