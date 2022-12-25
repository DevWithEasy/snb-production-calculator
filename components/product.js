import React from 'react';
import Image from 'next/image'

const Product = ({product}) => {
    return (
        <div className=''>
            <div className="">
                <Image src={product.img} alt={product.title} />
            </div>
            <div className="">
                <p className="">{product.title}</p>
            </div>
        </div>
    );
};

export default Product;