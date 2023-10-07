import { useEffect, useState } from 'react';
import { ComparePmView, CompareRmView, LoginChecked, ProductSelect, ProductSelectOld } from '../../../components/Index';
import useUserStore from '../../../features/userStore';
import { getOldProduct, getOldProducts, getProducts, getRecipe } from '../../../utils/api_utils';
import Head from 'next/head';

const BiscuitCompare = () => {
    const { user } = useUserStore()
    const [id, setId] = useState('')
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [oldID, setOldID] = useState('')
    const [oldProduct, setOldProduct] = useState({})
    const [oldProducts, setOldProducts] = useState([])

    useEffect(() => {
        getProducts('Biscuit', setProducts)

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
                <title>Biscuit Recipe Compare</title>
            </Head>
            <div
                className='p-2 space-y-2'
            >
                <h2 className='p-2 mb-5 bg-slate-500 text-white text-center text-2xl'>Biscuit recipe compare</h2>
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
                    label: 'Ammonium Bi Carbonate',
                    current: product?.ingredients?.ammonium,
                    oldValue: oldProduct?.ingredients?.ammonium
                }} />

                <CompareRmView {...{
                    label: 'Black Cumin',
                    current: product?.ingredients?.blackCumin,
                    oldValue: oldProduct?.ingredients?.blackCumin
                }} />
                <CompareRmView {...{
                    label: 'Bit Salt',
                    current: product?.ingredients?.bitSalt,
                    oldValue: oldProduct?.ingredients?.bitSalt
                }} />
                <CompareRmView {...{
                    label: 'Butter Flavour SK',
                    current: product?.ingredients?.butterFlavourSK,
                    oldValue: oldProduct?.ingredients?.butterFlavourSK
                }} />
                <CompareRmView {...{
                    label: 'Butter Flavour SYMEGA',
                    current: product?.ingredients?.butterFlavourSYMEGA,
                    oldValue: oldProduct?.ingredients?.butterFlavourSYMEGA
                }} />
                <CompareRmView {...{
                    label: 'Butter Solid',
                    current: product?.ingredients?.butterSolid,
                    oldValue: oldProduct?.ingredients?.butterSolid
                }} />
                <CompareRmView {...{
                    label: 'Butter Oil Substitute',
                    current: product?.ingredients?.butterOilSubstitute,
                    oldValue: oldProduct?.ingredients?.butterOilSubstitute
                }} />
                <CompareRmView {...{
                    label: 'chocolateBrownColour_815',
                    current: product?.ingredients?.chocolateBrownColour_815,
                    oldValue: oldProduct?.ingredients?.chocolateBrownColour_815
                }} />
                <CompareRmView {...{
                    label: 'Aspertem',
                    current: product?.ingredients?.aspertem,
                    oldValue: oldProduct?.ingredients?.aspertem
                }} />
                <CompareRmView {...{
                    label: 'Chocolate Flavour KH',
                    current: product?.ingredients?.chocolateFlavourKH,
                    oldValue: oldProduct?.ingredients?.chocolateFlavourKH
                }} />
                <CompareRmView {...{
                    label: 'Calcium Carbonate',
                    current: product?.ingredients?.calciumCarbonate,
                    oldValue: oldProduct?.ingredients?.calciumCarbonate
                }} />
                <CompareRmView {...{
                    label: 'Craker Enzyme',
                    current: product?.ingredients?.crakerEnzyme,
                    oldValue: oldProduct?.ingredients?.crakerEnzyme
                }} />
                <CompareRmView {...{
                    label: 'Citric Acid Mono',
                    current: product?.ingredients?.citricAcidMono,
                    oldValue: oldProduct?.ingredients?.citricAcidMono
                }} />
                <CompareRmView {...{
                    label: 'Cocoa Powder Black 910',
                    current: product?.ingredients?.cocoaPowderBlack_910,
                    oldValue: oldProduct?.ingredients?.cocoaPowderBlack_910
                }} />
                <CompareRmView {...{
                    label: 'Dalda Soft HILSA',
                    current: product?.ingredients?.daldaSoftHILSA,
                    oldValue: oldProduct?.ingredients?.daldaSoftHILSA
                }} />
                <CompareRmView {...{
                    label: 'Cardamon Flavour',
                    current: product?.ingredients?.cardamonFlavour,
                    oldValue: oldProduct?.ingredients?.cardamonFlavour
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
                    label: 'Flour Grade C',
                    current: product?.ingredients?.flourGrade_C,
                    oldValue: oldProduct?.ingredients?.flourGrade_C
                }} />
                <CompareRmView {...{
                    label: 'Glucose Powder',
                    current: product?.ingredients?.glucosePowder,
                    oldValue: oldProduct?.ingredients?.glucosePowder
                }} />
                <CompareRmView {...{
                    label: 'Lemon Flavour',
                    current: product?.ingredients?.lemonFlavour,
                    oldValue: oldProduct?.ingredients?.lemonFlavour
                }} />
                <CompareRmView {...{
                    label: 'Lemon Yellow Colour',
                    current: product?.ingredients?.lemonYellowColour,
                    oldValue: oldProduct?.ingredients?.lemonYellowColour
                }} />
                <CompareRmView {...{
                    label: 'Soya Lecithine',
                    current: product?.ingredients?.soyaLecithine,
                    oldValue: oldProduct?.ingredients?.soyaLecithine
                }} />
                <CompareRmView {...{
                    label: 'Liquid Glucose',
                    current: product?.ingredients?.liquidGlucose,
                    oldValue: oldProduct?.ingredients?.liquidGlucose
                }} />
                <CompareRmView {...{
                    label: 'Milk Flavour KH',
                    current: product?.ingredients?.milkFlavourKH,
                    oldValue: oldProduct?.ingredients?.milkFlavourKH
                }} />
                <CompareRmView {...{
                    label: 'Orange Flavour BFF',
                    current: product?.ingredients?.orangeFlavour,
                    oldValue: oldProduct?.ingredients?.orangeFlavour
                }} />
                <CompareRmView {...{
                    label: 'Onion Flavour Green',
                    current: product?.ingredients?.onionFlavourGreen,
                    oldValue: oldProduct?.ingredients?.onionFlavourGreen
                }} />
                <CompareRmView {...{
                    label: 'Onion Flavour SYMEGA',
                    current: product?.ingredients?.onionFlavourSYMEGA,
                    oldValue: oldProduct?.ingredients?.onionFlavourSYMEGA
                }} />
                <CompareRmView {...{
                    label: 'Onion Powder',
                    current: product?.ingredients?.onionPowder,
                    oldValue: oldProduct?.ingredients?.onionPowder
                }} />
                <CompareRmView {...{
                    label: 'Palm Oil Super',
                    current: product?.ingredients?.palmOilSuper,
                    oldValue: oldProduct?.ingredients?.palmOilSuper
                }} />
                <CompareRmView {...{
                    label: 'Pineapple Flavour',
                    current: product?.ingredients?.pineappleFlavour,
                    oldValue: oldProduct?.ingredients?.pineappleFlavour
                }} />
                <CompareRmView {...{
                    label: 'Palm Corn Oil',
                    current: product?.ingredients?.palmCornOil,
                    oldValue: oldProduct?.ingredients?.palmCornOil
                }} />
                <CompareRmView {...{
                    label: 'Super Salt',
                    current: product?.ingredients?.superSalt,
                    oldValue: oldProduct?.ingredients?.superSalt
                }} />
                <CompareRmView {...{
                    label: 'Sodium Acid Pyro Phosphet',
                    current: product?.ingredients?.sodiumAcidpyroPhosphet,
                    oldValue: oldProduct?.ingredients?.sodiumAcidpyroPhosphet
                }} />
                <CompareRmView {...{
                    label: 'Skim Milk Powder',
                    current: product?.ingredients?.skimMilkPowder,
                    oldValue: oldProduct?.ingredients?.skimMilkPowder
                }} />
                <CompareRmView {...{
                    label: 'Sodium Meta Bi Sulphate',
                    current: product?.ingredients?.sodiumMetaBiSulphate,
                    oldValue: oldProduct?.ingredients?.sodiumMetaBiSulphate
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
                <CompareRmView {...{
                    label: 'Sugar',
                    current: product?.ingredients?.sugar,
                    oldValue: oldProduct?.ingredients?.sugar
                }} />
                <CompareRmView {...{
                    label: 'Testing Salt',
                    current: product?.ingredients?.testingSalt,
                    oldValue: oldProduct?.ingredients?.testingSalt
                }} />
                <CompareRmView {...{
                    label: 'TBHQ',
                    current: product?.ingredients?.tbhq,
                    oldValue: oldProduct?.ingredients?.tbhq
                }} />
                <CompareRmView {...{
                    label: 'Vanilin Powder',
                    current: product?.ingredients?.vanilinPowder,
                    oldValue: oldProduct?.ingredients?.vanilinPowder
                }} />
                <CompareRmView {...{
                    label: 'Onion Chieves',
                    current: product?.ingredients?.onionChieves,
                    oldValue: oldProduct?.ingredients?.onionChieves
                }} />
                <CompareRmView {...{
                    label: 'Coconut Flavour',
                    current: product?.ingredients?.coconutFlavour,
                    oldValue: oldProduct?.ingredients?.coconutFlavour
                }} />
                <CompareRmView {...{
                    label: 'Butta Belly Flavour',
                    current: product?.ingredients?.buttaBellyFlavour,
                    oldValue: oldProduct?.ingredients?.buttaBellyFlavour
                }} />
                <CompareRmView {...{
                    label: 'Coconut Powder',
                    current: product?.ingredients?.coconutPowder,
                    oldValue: oldProduct?.ingredients?.coconutPowder
                }} />

            </div>
        </div>
        {!user.name && <LoginChecked/>}
        </div>
    );
};

export default BiscuitCompare;