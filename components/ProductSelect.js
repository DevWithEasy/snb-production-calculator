import React from 'react';

const ProductSelect = ({products,setId}) => {
    return (
            <div className="input">
                <label htmlFor="">Product Name :</label>
                <select name="name"  onChange={(e)=>setId(e.target.value)}>
                    <option value="">{products.length > 0 ? 'Select Name' : ''}</option>
                        {
                        products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)
                        }
                </select>
            </div>
    );
};

export default ProductSelect;