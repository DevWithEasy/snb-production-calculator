import React from 'react';

const ProductSelectOld = ({oldProducts,setOldID}) => {
    return (
            <div className="input">
                <label htmlFor="">Old Product Name :</label>
                <select name="name"  onChange={(e)=>setOldID(e.target.value)}>
                    <option value="">{oldProducts.length > 0 ? 'Select Name' : 'Loading...'}</option>
                        {
                        oldProducts.map(product => <option key={product} value={product}>{product}</option>)
                        }
                </select>
            </div>
    );
};

export default ProductSelectOld;