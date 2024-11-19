import { useEffect, useState } from 'react';
import { ComparePmView, CompareRmView, LoginChecked, ProductSelect, ProductSelectOld } from '../../../../components/v1/Index';
import useUserStore from '../../../../features/userStore';
import { getOldProduct, getOldProducts, getProducts, getRecipe } from '../../../../utils/v1/api_utils';
import Head from 'next/head';

const LachchaCompare = () => {
    const { user } = useUserStore()
    const [id, setId] = useState('')
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [oldID, setOldID] = useState('')
    const [oldProduct, setOldProduct] = useState({})
    const [oldProducts, setOldProducts] = useState([])

    useEffect(() => {
        getProducts('Lachcha', setProducts)

    }, [])

    useEffect(() => {
        if (id) getRecipe(id, setProduct)
        if (id) getOldProducts(id, setOldProducts)
    }, [id])

    useEffect(() => {
        if (oldID) getOldProduct(oldID, setOldProduct)
    }, [oldID])

    return (
        <div className='p-4'>
            <div
                className='w-full md:w-1/2 md:mx-auto border rounded'
            >
                <Head>
                    <title>Cake Recipe Compare</title>
                </Head>
                <div
                    className='p-2 space-y-2'
                >
                    <h2 className='p-2 mb-5 bg-slate-500 text-white text-center text-2xl'>Cake recipe compare</h2>
                    <ProductSelect {...{ setId, products }} />
                    <ProductSelectOld {...{ setOldID, oldProducts }} />
                </div>
                <div className='w-full p-2'>
                    <h2 className='p-2 bg-gray-100 text-center'>Packing Info</h2>
                    <ComparePmView {...{
                        label: 'Version',
                        current: product?.version,
                        oldValue: oldProduct?.version
                    }} />
                    <ComparePmView {...{
                        label: 'Packet Weight',
                        current: product?.packetWeight,
                        oldValue: oldProduct?.packetWeight
                    }} />
                    <ComparePmView {...{
                        label: 'Packet Per Carton',
                        current: product?.packetPerCarton,
                        oldValue: oldProduct?.packetPerCarton
                    }} />
                    <ComparePmView {...{
                        label: 'Process Loss (%)',
                        current: product?.processLoss,
                        oldValue: oldProduct?.processLoss
                    }} />
                    <ComparePmView {...{
                        label: 'Foil Weight',
                        current: product?.foilWeight,
                        oldValue: oldProduct?.foilWeight
                    }} />
                </div>
                <div className='w-full p-2'>
                    <h2 className='p-2 mb-2 bg-gray-100 text-center'>Raw materils Info</h2>
                    <CompareRmView {...{
                        label: '',
                        current: product?.ingredients?.ammonium,
                        oldValue: oldProduct?.ingredients?.ammonium
                    }} />
                </div>
            </div>
            {!user.name && <LoginChecked/>}
        </div>
    );
};

export default LachchaCompare;