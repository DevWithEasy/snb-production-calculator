import React from 'react';
import {AiOutlinePrinter} from 'react-icons/ai'

const Heading = ({product,handlePrint}) => {
    return (
        <h1 className='relative py-1 bg-gray-500 text-white text-xl text-center font-bold print:mx-2'>
            Recipe
            {product?.name && <AiOutlinePrinter onClick={()=>handlePrint()} className="absolute right-2 top-2 print:hidden" />}
          </h1>
    );
};

export default Heading;