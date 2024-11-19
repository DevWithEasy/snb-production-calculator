import { useEffect, useState } from 'react';
import { ComparePmView, CompareRmView, LoginChecked, ProductSelect, ProductSelectOld } from '../../../components/Index';
import useUserStore from '../../../features/userStore';
import { getOldProduct, getOldProducts, getProducts, getRecipe } from '../../../utils/api_utils';
import Head from 'next/head';

const CakeCompare = () => {
    const { user } = useUserStore()
    const [id, setId] = useState('')
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [oldID, setOldID] = useState('')
    const [oldProduct, setOldProduct] = useState({})
    const [oldProducts, setOldProducts] = useState([])

    useEffect(() => {
        getProducts('Cake', setProducts)

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
                        label: 'Vanilin Powder',
                        current: product?.ingredients?.vanilinPowder,
                        oldValue: oldProduct?.ingredients?.vanilinPowder
                    }} />
                    <CompareRmView {...{
                        label: 'Butter Oil Substitute',
                        current: product?.ingredients?.butterOilSubstitute,
                        oldValue: oldProduct?.ingredients?.butterOilSubstitute
                    }} />
                    <CompareRmView {...{
                        label: 'Cake Gel',
                        current: product?.ingredients?.cakeGel,
                        oldValue: oldProduct?.ingredients?.cakeGel
                    }} />
                    <CompareRmView {...{
                        label: 'Cake Emulsifier',
                        current: product?.ingredients?.cakeEmulsifier,
                        oldValue: oldProduct?.ingredients?.cakeEmulsifier
                    }} />
                    <CompareRmView {...{
                        label: 'Chocolate Brown Colour 6059',
                        current: product?.ingredients?.chocolateBrownColour_6059,
                        oldValue: oldProduct?.ingredients?.chocolateBrownColour_6059
                    }} />
                    <CompareRmView {...{
                        label: 'Chocolate Flavour SYMRISE',
                        current: product?.ingredients?.chocolateFlavourSYMRISE,
                        oldValue: oldProduct?.ingredients?.chocolateFlavourSYMRISE
                    }} />
                    <CompareRmView {...{
                        label: 'Chocolate Paste',
                        current: product?.ingredients?.chocolatePaste,
                        oldValue: oldProduct?.ingredients?.chocolatePaste
                    }} />
                    <CompareRmView {...{
                        label: 'Citric Acid Mono',
                        current: product?.ingredients?.citricAcidMono,
                        oldValue: oldProduct?.ingredients?.citricAcidMono
                    }} />
                    <CompareRmView {...{
                        label: 'Egg',
                        current: product?.ingredients?.egg,
                        oldValue: oldProduct?.ingredients?.egg
                    }} />
                    <CompareRmView {...{
                        label: 'Flour Grade B',
                        current: product?.ingredients?.flourGrade_B,
                        oldValue: oldProduct?.ingredients?.flourGrade_B
                    }} />
                    <CompareRmView {...{
                        label: 'Flour Grade C',
                        current: product?.ingredients?.flourGrade_C,
                        oldValue: oldProduct?.ingredients?.flourGrade_C
                    }} />
                    <CompareRmView {...{
                        label: 'Glycerine',
                        current: product?.ingredients?.glycerine,
                        oldValue: oldProduct?.ingredients?.glycerine
                    }} />
                    <CompareRmView {...{
                        label: 'Isopropyl Alcohol',
                        current: product?.ingredients?.isopropylAlcohol,
                        oldValue: oldProduct?.ingredients?.isopropylAlcohol
                    }} />
                    <CompareRmView {...{
                        label: 'Milk Flavour King',
                        current: product?.ingredients?.milkFlavourKing,
                        oldValue: oldProduct?.ingredients?.milkFlavourKing
                    }} />
                    <CompareRmView {...{
                        label: 'Paraffin Oil',
                        current: product?.ingredients?.paraffinOil,
                        oldValue: oldProduct?.ingredients?.paraffinOil
                    }} />
                    <CompareRmView {...{
                        label: 'Potassium Sorbate',
                        current: product?.ingredients?.potassiumSorbate,
                        oldValue: oldProduct?.ingredients?.potassiumSorbate
                    }} />
                    <CompareRmView {...{
                        label: 'Super Salt',
                        current: product?.ingredients?.superSalt,
                        oldValue: oldProduct?.ingredients?.superSalt
                    }} />
                    <CompareRmView {...{
                        label: 'Skim Milk Powder',
                        current: product?.ingredients?.skimMilkPowder,
                        oldValue: oldProduct?.ingredients?.skimMilkPowder
                    }} />
                    <CompareRmView {...{
                        label: 'Sorbitol',
                        current: product?.ingredients?.sorbitol,
                        oldValue: oldProduct?.ingredients?.sorbitol
                    }} />
                    <CompareRmView {...{
                        label: 'Soya Lecithine',
                        current: product?.ingredients?.soyaLecithine,
                        oldValue: oldProduct?.ingredients?.soyaLecithine
                    }} />
                    <CompareRmView {...{
                        label: 'Sugar',
                        current: product?.ingredients?.sugar,
                        oldValue: oldProduct?.ingredients?.sugar
                    }} />
                    <CompareRmView {...{
                        label: 'Palm Oil Super',
                        current: product?.ingredients?.palmOilSuper,
                        oldValue: oldProduct?.ingredients?.palmOilSuper
                    }} />
                    <CompareRmView {...{
                        label: 'TBHQ',
                        current: product?.ingredients?.tbhq,
                        oldValue: oldProduct?.ingredients?.tbhq
                    }} />
                    <CompareRmView {...{
                        label: 'Vanila Flavour FORZONE',
                        current: product?.ingredients?.vanilaFlavourFORZONE,
                        oldValue: oldProduct?.ingredients?.vanilaFlavourFORZONE
                    }} />
                    <CompareRmView {...{
                        label: 'Vanila Flavour KH',
                        current: product?.ingredients?.vanilaFlavourKH,
                        oldValue: oldProduct?.ingredients?.vanilaFlavourKH
                    }} />
                    <CompareRmView {...{
                        label: 'Xanthem Gum',
                        current: product?.ingredients?.xanthemGum,
                        oldValue: oldProduct?.ingredients?.xanthemGum
                    }} />
                    <CompareRmView {...{
                        label: 'Sodium Acid pyro Phosphet',
                        current: product?.ingredients?.sodiumAcidpyroPhosphet,
                        oldValue: oldProduct?.ingredients?.sodiumAcidpyroPhosphet
                    }} />
                    <CompareRmView {...{
                        label: 'Sodium Bi Carbonate',
                        current: product?.ingredients?.sodiumBiCarbonate,
                        oldValue: oldProduct?.ingredients?.sodiumBiCarbonate
                    }} />
                    <CompareRmView {...{
                        label: 'Starch Powder',
                        current: product?.ingredients?.starchPowder,
                        oldValue: oldProduct?.ingredients?.starchPowder
                    }} />
                </div>
            </div>
            {!user.name && <LoginChecked/>}
        </div>
    );
};

export default CakeCompare;