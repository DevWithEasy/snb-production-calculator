import { useEffect, useState } from 'react';
import { ComparePmView, CompareRmView, LoginChecked, ProductSelect, ProductSelectOld } from '../../../components/Index';
import useUserStore from '../../../features/userStore';
import { getOldProduct, getOldProducts, getProducts, getRecipe } from '../../../utils/api_utils';
import Head from 'next/head';

const BakeryCompare = () => {
    const { user } = useUserStore()
    const [id, setId] = useState('')
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [oldID, setOldID] = useState('')
    const [oldProduct, setOldProduct] = useState({})
    const [oldProducts, setOldProducts] = useState([])

    useEffect(() => {
        getProducts('Bakery', setProducts)

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
                        label: 'Ammonium',
                        current: product?.ingredients?.ammonium,
                        oldValue: oldProduct?.ingredients?.ammonium
                    }} />
                    <CompareRmView {...{
                        label: 'Baking Powder',
                        current: product?.ingredients?.bakingPowder,
                        oldValue: oldProduct?.ingredients?.bakingPowder
                    }} />
                    <CompareRmView {...{
                        label: 'Black Cumin',
                        current: product?.ingredients?.blackCumin,
                        oldValue: oldProduct?.ingredients?.blackCumin
                    }} />
                    <CompareRmView {...{
                        label: 'Bread Improver',
                        current: product?.ingredients?.breadImprover,
                        oldValue: oldProduct?.ingredients?.breadImprover
                    }} />
                    <CompareRmView {...{
                        label: 'Butter Flavour SM',
                        current: product?.ingredients?.butterFlavourSM,
                        oldValue: oldProduct?.ingredients?.butterFlavourSM
                    }} />
                    <CompareRmView {...{
                        label: 'Cake Gel',
                        current: product?.ingredients?.cakeGel,
                        oldValue: oldProduct?.ingredients?.cakeGel
                    }} />
                    <CompareRmView {...{
                        label: 'Chocolate Chips',
                        current: product?.ingredients?.chocolateChips,
                        oldValue: oldProduct?.ingredients?.chocolateChips
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
                        label: 'Cocoa Powder 4011',
                        current: product?.ingredients?.cocoaPowder_4011,
                        oldValue: oldProduct?.ingredients?.cocoaPowder_4011
                    }} />
                    <CompareRmView {...{
                        label: 'Coconut Powder',
                        current: product?.ingredients?.coconutPowder,
                        oldValue: oldProduct?.ingredients?.coconutPowder
                    }} />
                    <CompareRmView {...{
                        label: 'Coconut Flavour',
                        current: product?.ingredients?.coconutFlavour,
                        oldValue: oldProduct?.ingredients?.coconutFlavour
                    }} />
                    <CompareRmView {...{
                        label: 'Condenced Milk Flavour',
                        current: product?.ingredients?.condencedMilkFlavour,
                        oldValue: oldProduct?.ingredients?.condencedMilkFlavour
                    }} />
                    <CompareRmView {...{
                        label: 'Dalda Hard PUSTI',
                        current: product?.ingredients?.daldaHardPUSTI,
                        oldValue: oldProduct?.ingredients?.daldaHardPUSTI
                    }} />
                    <CompareRmView {...{
                        label: 'Dalda Soft HILSA',
                        current: product?.ingredients?.daldaSoftHILSA,
                        oldValue: oldProduct?.ingredients?.daldaSoftHILSA
                    }} />
                    <CompareRmView {...{
                        label: 'Egg',
                        current: product?.ingredients?.egg,
                        oldValue: oldProduct?.ingredients?.egg
                    }} />
                    <CompareRmView {...{
                        label: 'Egg Yellow Colour',
                        current: product?.ingredients?.eggYellowColour,
                        oldValue: oldProduct?.ingredients?.eggYellowColour
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
                        label: 'Ghee',
                        current: product?.ingredients?.ghee,
                        oldValue: oldProduct?.ingredients?.ghee
                    }} />
                    <CompareRmView {...{
                        label: 'Ghee Flavour',
                        current: product?.ingredients?.gheeFlavour,
                        oldValue: oldProduct?.ingredients?.gheeFlavour
                    }} />
                    <CompareRmView {...{
                        label: 'Glucose Powder',
                        current: product?.ingredients?.glucosePowder,
                        oldValue: oldProduct?.ingredients?.glucosePowder
                    }} />
                    <CompareRmView {...{
                        label: 'Lemon Yellow Colour',
                        current: product?.ingredients?.lemonYellowColour,
                        oldValue: oldProduct?.ingredients?.lemonYellowColour
                    }} />
                    <CompareRmView {...{
                        label: 'Skim Milk Powder',
                        current: product?.ingredients?.skimMilkPowder,
                        oldValue: oldProduct?.ingredients?.skimMilkPowder
                    }} />
                    <CompareRmView {...{
                        label: 'Milk Flavour KH',
                        current: product?.ingredients?.milkFlavourKH,
                        oldValue: oldProduct?.ingredients?.milkFlavourKH
                    }} />
                    <CompareRmView {...{
                        label: 'Mono Saccharine',
                        current: product?.ingredients?.monoSaccharine,
                        oldValue: oldProduct?.ingredients?.monoSaccharine
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
                        label: 'Sodium Acid Pyro Phosphet',
                        current: product?.ingredients?.sodiumAcidPyroPhosphet,
                        oldValue: oldProduct?.ingredients?.sodiumAcidPyroPhosphet
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
                        label: 'TBHQ',
                        current: product?.ingredients?.tbhq,
                        oldValue: oldProduct?.ingredients?.tbhq
                    }} />
                    <CompareRmView {...{
                        label: 'Vanilin Powder Flavour',
                        current: product?.ingredients?.vanilinPowderFlavour,
                        oldValue: oldProduct?.ingredients?.vanilinPowderFlavour
                    }} />
                    <CompareRmView {...{
                        label: 'Xanthem Gum',
                        current: product?.ingredients?.xanthemGum,
                        oldValue: oldProduct?.ingredients?.xanthemGum
                    }} />
                    <CompareRmView {...{
                        label: 'Yeast',
                        current: product?.ingredients?.yeast,
                        oldValue: oldProduct?.ingredients?.yeast
                    }} />
                </div>
            </div>
            {!user.name && <LoginChecked/>}
        </div>
    );
};

export default BakeryCompare;