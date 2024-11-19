import React from 'react';
import { AiOutlinePrinter,AiOutlineFileExcel } from 'react-icons/ai'

const Heading = ({ product, handlePrint,onDownload }) => {
    return (
        <h1 className='relative py-1 bg-gray-500 text-white text-xl text-center font-bold print:mx-2'>
            Recipe
            {product?.name && <span
                className='absolute right-2 top-2 flex space-x-3 items-center print:hidden'
            >
                <AiOutlineFileExcel onClick={onDownload} className='cursor-pointer' />
                <AiOutlinePrinter onClick={() => handlePrint()} className='cursor-pointer' />    
            </span>}
        </h1>
    );
};

export default Heading;