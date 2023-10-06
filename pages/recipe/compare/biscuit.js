import React, { useState } from 'react';
import useUserStore from '../../../features/userStore';
import { getProducts, getRecipe } from '../../../utils/api_utils';
import ProductSelect from '../../../components/ProductSelect';

const BiscuitCompare = () => {
    const { user } = useUserStore()
    const [id, setId] = useState('')
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts('', setProducts)
    }, [])

    useEffect(() => {
        if (id) getRecipe(id, setProduct)
    }, [id])
    return (
        <div>
            <ProductSelect {...{setId,products}}/>
        </div>
    );
};

export default BiscuitCompare;