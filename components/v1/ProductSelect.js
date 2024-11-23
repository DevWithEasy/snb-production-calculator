import React from 'react';
import { getRecipe } from '../../utils/v1/api_utils';

const ProductSelect = ({products,setProduct}) => {
    return (
            <div className="input">
                <label htmlFor="">Product Name :</label>
                <select name="name"  onChange={(e)=>getRecipe(e.target.value, setProduct)}>
                    <option value="">{products.length > 0 ? 'Select Name' : 'Loading...'}</option>
                        {
                        products.map(product => <option key={product._id} value={product._id}>{product.name}</option>)
                        }
                </select>
            </div>
    );
};

export default ProductSelect;