import React, { useState } from 'react';

const CashDeleteMode = ({data}) => {
    const [value, setValue] = useState(data)

    const handleClose = (e) => {
    }

    return (
        <div
            className={`w-full h-screen fixed top-0 left-0 z-10 flex justify-center items-center bg-red-500`}
        >
            <div
                className='w-1/2 space-y-2 bg-white rounded-md'
            >
                <h2 className={`text-sm font-bold p-2 text-white text-center rounded-t-md bg-red-500`}>এন্ট্রি ডিলিট ? </h2>
                <div
                    className='p-2 space-y-2'
                >
                    আপনি কি ডিলিট করতে চান। ডিলিট করলে এটি আর ফেরত আনা যাবে না। 
                </div>
                <div
                    className='p-2 space-x-2'
                >
                    <button
                        className='px-6 py-2 bg-red-500 text-white rounded-md text-sm'
                    >
                        ডিলিট করুন
                    </button>
                    <button
                        onClick={() => handleClose()}
                        className='px-6 py-2 bg-gray-500 text-white rounded-md text-sm'
                    >
                        বন্ধ করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CashDeleteMode;