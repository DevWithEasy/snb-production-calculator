import { useEffect, useState } from 'react';
import { ComparePmView, CompareRmView, LoginChecked, ProductSelect, ProductSelectOld } from '../../../../components/v1/Index';
import useUserStore from '../../../../features/userStore';
import { getOldProduct, getOldProducts, getProducts, getRecipe } from '../../../../utils/v1/api_utils';
import Head from 'next/head';

const SnacksCompare = () => {
    const { user } = useUserStore()
    const [id, setId] = useState('')
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [oldID, setOldID] = useState('')
    const [oldProduct, setOldProduct] = useState({})
    const [oldProducts, setOldProducts] = useState([])

    useEffect(() => {
        getProducts('Snacks', setProducts)

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
                        label: 'Turmeric',
                        current: product?.ingredients?.turmeric,
                        oldValue: oldProduct?.ingredients?.turmeric
                    }} />
                    <CompareRmView {...{
                        label: 'Cinamon',
                        current: product?.ingredients?.cinamon,
                        oldValue: oldProduct?.ingredients?.cinamon
                    }} />
                    <CompareRmView {...{
                        label: 'Testing Salt',
                        current: product?.ingredients?.testingSalt,
                        oldValue: oldProduct?.ingredients?.testingSalt
                    }} />
                    <CompareRmView {...{
                        label: 'Red Chili',
                        current: product?.ingredients?.redChili,
                        oldValue: oldProduct?.ingredients?.redChili
                    }} />
                    <CompareRmView {...{
                        label: 'Nutmug',
                        current: product?.ingredients?.nutMug,
                        oldValue: oldProduct?.ingredients?.nutMug
                    }} />
                    <CompareRmView {...{
                        label: 'Cumin',
                        current: product?.ingredients?.cumin,
                        oldValue: oldProduct?.ingredients?.cumin
                    }} />
                    <CompareRmView {...{
                        label: 'Black Pepper',
                        current: product?.ingredients?.blackPepper,
                        oldValue: oldProduct?.ingredients?.blackPepper
                    }} />
                    <CompareRmView {...{
                        label: 'Clove',
                        current: product?.ingredients?.clove,
                        oldValue: oldProduct?.ingredients?.clove
                    }} />
                    <CompareRmView {...{
                        label: 'Cardamon',
                        current: product?.ingredients?.cardamon,
                        oldValue: oldProduct?.ingredients?.cardamon
                    }} />
                    <CompareRmView {...{
                        label: 'Cumin Sweet',
                        current: product?.ingredients?.cuminSweet,
                        oldValue: oldProduct?.ingredients?.cuminSweet
                    }} />
                    <CompareRmView {...{
                        label: 'Bit Salt',
                        current: product?.ingredients?.bitSalt,
                        oldValue: oldProduct?.ingredients?.bitSalt
                    }} />
                    <CompareRmView {...{
                        label: 'Ginger',
                        current: product?.ingredients?.ginger,
                        oldValue: oldProduct?.ingredients?.ginger
                    }} />
                    <CompareRmView {...{
                        label: 'Rice Flask',
                        current: product?.ingredients?.riceFlask,
                        oldValue: oldProduct?.ingredients?.riceFlask
                    }} />
                    <CompareRmView {...{
                        label: 'Sodium Bi Carbonate',
                        current: product?.ingredients?.sodiumBiCarbonate,
                        oldValue: oldProduct?.ingredients?.sodiumBiCarbonate
                    }} />
                    <CompareRmView {...{
                        label: 'Raw Peanut',
                        current: product?.ingredients?.rawPeanut,
                        oldValue: oldProduct?.ingredients?.rawPeanut
                    }} />
                    <CompareRmView {...{
                        label: 'Lentil',
                        current: product?.ingredients?.lentil,
                        oldValue: oldProduct?.ingredients?.lentil
                    }} />
                    <CompareRmView {...{
                        label: 'Salt Super',
                        current: product?.ingredients?.saltSuper,
                        oldValue: oldProduct?.ingredients?.saltSuper
                    }} />
                    <CompareRmView {...{
                        label: 'Palm Oil Super',
                        current: product?.ingredients?.palmOilSuper,
                        oldValue: oldProduct?.ingredients?.palmOilSuper
                    }} />
                    <CompareRmView {...{
                        label: 'Anchor Dal',
                        current: product?.ingredients?.anchorDal,
                        oldValue: oldProduct?.ingredients?.anchorDal
                    }} />
                    <CompareRmView {...{
                        label: 'Pea',
                        current: product?.ingredients?.pea,
                        oldValue: oldProduct?.ingredients?.pea
                    }} />
                    <CompareRmView {...{
                        label: 'Skim Milk Powder',
                        current: product?.ingredients?.skimMilkPowder,
                        oldValue: oldProduct?.ingredients?.skimMilkPowder
                    }} />
                    <CompareRmView {...{
                        label: 'Sugar',
                        current: product?.ingredients?.sugar,
                        oldValue: oldProduct?.ingredients?.sugar
                    }} />
                    <CompareRmView {...{
                        label: 'Citric Acid Ano',
                        current: product?.ingredients?.citricAcidAno,
                        oldValue: oldProduct?.ingredients?.citricAcidAno
                    }} />
                    <CompareRmView {...{
                        label: 'Mug Dal',
                        current: product?.ingredients?.mugDal,
                        oldValue: oldProduct?.ingredients?.mugDal
                    }} />
                    <CompareRmView {...{
                        label: 'Apple Green Colour',
                        current: product?.ingredients?.appleGreenColour,
                        oldValue: oldProduct?.ingredients?.appleGreenColour
                    }} />
                    <CompareRmView {...{
                        label: 'Aapioca Starch',
                        current: product?.ingredients?.tapiocaStarch,
                        oldValue: oldProduct?.ingredients?.tapiocaStarch
                    }} />
                    <CompareRmView {...{
                        label: 'Onion Powder',
                        current: product?.ingredients?.onionPowder,
                        oldValue: oldProduct?.ingredients?.onionPowder
                    }} />
                    <CompareRmView {...{
                        label: 'Garlic Powder',
                        current: product?.ingredients?.garlicPowder,
                        oldValue: oldProduct?.ingredients?.garlicPowder
                    }} />
                    <CompareRmView {...{
                        label: 'Jwain Masala',
                        current: product?.ingredients?.jwainMasala,
                        oldValue: oldProduct?.ingredients?.jwainMasala
                    }} />
                    <CompareRmView {...{
                        label: 'Rice Atop',
                        current: product?.ingredients?.riceAtop,
                        oldValue: oldProduct?.ingredients?.riceAtop
                    }} />
                    <CompareRmView {...{
                        label: 'Lemon Yellow Colour',
                        current: product?.ingredients?.lemonYellowColour,
                        oldValue: oldProduct?.ingredients?.lemonYellowColour
                    }} />
                    <CompareRmView {...{
                        label: 'TBHQ',
                        current: product?.ingredients?.tbhq,
                        oldValue: oldProduct?.ingredients?.tbhq
                    }} />
                    <CompareRmView {...{
                        label: 'BBQ',
                        current: product?.ingredients?.bbq,
                        oldValue: oldProduct?.ingredients?.bbq
                    }} />
                </div>
            </div>
            {!user.name && <LoginChecked/>}
        </div>
    );
};

export default SnacksCompare;