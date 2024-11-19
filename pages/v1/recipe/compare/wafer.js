import { useEffect, useState } from 'react';
import { ComparePmView, CompareRmView, LoginChecked, ProductSelect, ProductSelectOld } from '../../../../components/v1/Index';
import useUserStore from '../../../../features/userStore';
import { getOldProduct, getOldProducts, getProducts, getRecipe } from '../../../../utils/v1/api_utils';
import Head from 'next/head';

const WaferCompare = () => {
    const { user } = useUserStore()
    const [id, setId] = useState('')
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [oldID, setOldID] = useState('')
    const [oldProduct, setOldProduct] = useState({})
    const [oldProducts, setOldProducts] = useState([])

    useEffect(() => {
        getProducts('Wafer', setProducts)
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
                        label: 'Chocolate Brown Colour 6059',
                        current: product?.ingredients?.chocolateBrownColour_6059,
                        oldValue: oldProduct?.ingredients?.chocolateBrownColour_6059
                    }} />
                    <CompareRmView {...{
                        label: 'Citric Acid Mono',
                        current: product?.ingredients?.citricAcidMono,
                        oldValue: oldProduct?.ingredients?.citricAcidMono
                    }} />
                    <CompareRmView {...{
                        label: 'Cocoa Powder Black 4011',
                        current: product?.ingredients?.cocoaPowderBlack_4011,
                        oldValue: oldProduct?.ingredients?.cocoaPowderBlack_4011
                    }} />
                    <CompareRmView {...{
                        label: 'Chocolate Flavour KH',
                        current: product?.ingredients?.chocolateFlavourKH,
                        oldValue: oldProduct?.ingredients?.chocolateFlavourKH
                    }} />
                    <CompareRmView {...{
                        label: 'Dalda Hard PUSTI',
                        current: product?.ingredients?.daldaHardPUSTI,
                        oldValue: oldProduct?.ingredients?.daldaHardPUSTI
                    }} />
                    <CompareRmView {...{
                        label: 'Flour Grade A',
                        current: product?.ingredients?.flourGrade_A,
                        oldValue: oldProduct?.ingredients?.flourGrade_A
                    }} />
                    <CompareRmView {...{
                        label: 'Flour Grade B',
                        current: product?.ingredients?.flourGrade_B,
                        oldValue: oldProduct?.ingredients?.flourGrade_B
                    }} />
                    <CompareRmView {...{
                        label: 'Soya Lecithine',
                        current: product?.ingredients?.soyaLecithine,
                        oldValue: oldProduct?.ingredients?.soyaLecithine
                    }} />
                    <CompareRmView {...{
                        label: 'Milk Flavour KH',
                        current: product?.ingredients?.milkFlavourKH,
                        oldValue: oldProduct?.ingredients?.milkFlavourKH
                    }} />
                    <CompareRmView {...{
                        label: 'Palm Oil Super',
                        current: product?.ingredients?.palmOilSuper,
                        oldValue: oldProduct?.ingredients?.palmOilSuper
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
                        label: 'Sodium Bi Carbonate',
                        current: product?.ingredients?.sodiumBiCarbonate,
                        oldValue: oldProduct?.ingredients?.sodiumBiCarbonate
                    }} />
                    <CompareRmView {...{
                        label: 'Sodium Meta Bi Sulphate',
                        current: product?.ingredients?.sodiumMetaBiSulphate,
                        oldValue: oldProduct?.ingredients?.sodiumMetaBiSulphate
                    }} />
                    <CompareRmView {...{
                        label: 'Starch Powder',
                        current: product?.ingredients?.starchPowder,
                        oldValue: oldProduct?.ingredients?.starchPowder
                    }} />
                    <CompareRmView {...{
                        label: 'Sugar',
                        current: product?.ingredients?.sugar,
                        oldValue: oldProduct?.ingredients?.sugar
                    }} />
                    <CompareRmView {...{
                        label: 'TBHQ',
                        current: product?.ingredients?.tbhq,
                        oldValue: oldProduct?.ingredients?.tbhq
                    }} />
                    <CompareRmView {...{
                        label: 'Vanila Flavour KH',
                        current: product?.ingredients?.vanilaFlavourKH,
                        oldValue: oldProduct?.ingredients?.vanilaFlavourKH
                    }} />
                </div>
            </div>
            {!user.name && <LoginChecked/>}
        </div>
    );
};

export default WaferCompare;