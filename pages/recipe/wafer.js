import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import {Info,PrintHeader,ProductSelect,RmView,Heading,Total} from '../../components/Index';
import { getProducts, getRecipe } from '../../utils/api_utils';
import Recipe from '../../utils/recipe';


export default function Raw() {
  const printRef = useRef()
  const [id, setId] = useState('')
  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts('Wafer', setProducts)
  }, [])

  useEffect(() => {
    if (id) getRecipe(id, setProduct)
  }, [id])


  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: product?.name + " [Version-" + product?.version + "]"
  });

  const {
    version,
    packetWeight,
    packetPerCarton,
    processLoss,
    foilWeight,
  } = product

  const recipe = new Recipe(product)

  let total
  if (product?.ingredients) total = recipe.totalInput()

  let totalProcessLoss
  if (total) totalProcessLoss = recipe.totalProcessLoss()

  let output
  if (totalProcessLoss) output = recipe.totalOutput()

  let carton
  if (output) carton = recipe.totalCarton()

  return (
    <div className='raw-consumption '>
      <Head>
        <title>Check your recipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='raw print:mx-12' ref={printRef}>
        <PrintHeader />
        <div>
          <Heading {...{ product, handlePrint }} />

          <div className='space-y-2 py-2 print:space-y-0 print:flex justify-between print:space-x-4 print:p-2 print:text-sm'>
            <ProductSelect {...{ setId, products }} />
          </div>

          {product?.ingredients && <div className='recipe-area'>
            {/*===================== short info area ===================*/}
            <div className='pb-2'>
              <h3 className='text-center p-1 font-bold bg-gray-500 text-white print:mx-2'>Information</h3>
              <div className='print:grid grid-cols-2 gap-x-8 print:text-sm print:px-2'>
                <Info text='Version' value={version} unit='' />
                <Info text='Packet Weight' value={packetWeight} unit='gm' />
                <Info text='Packet Per Carton' value={packetPerCarton} q unit='Packet' />
                <Info text='Process Loss' value={processLoss} unit='%' />
                <Info text='Foil Weight' value={foilWeight} unit='gm' />
                <Info text='Carton Per Batch' value={carton} unit='' />
              </div>
            </div>

            {/*===================== ingredient list area ===================*/}
            <div className='consumption space-y-2'>
              <div className="heading print:px-2">
                <p className="name">Ingredients</p>
                <p>Quantity (kg)</p>
              </div>
              <div className='space-y-2 print:px-2 print:pb-2'>
                <RmView name='Chocolate Brown Colour 6059' ingredient={product?.ingredients?.chocolateBrownColour_6059} />

                <RmView name='Citric Acid Mono' ingredient={product?.ingredients?.citricAcidMono} />

                <RmView name='Cocoa Powder Black 4011' ingredient={product?.ingredients?.cocoaPowderBlack_4011} />

                <RmView name='Chocolate Flavour KH' ingredient={product?.ingredients?.chocolateFlavourKH} />

                <RmView name='Dalda Hard PUSTI' ingredient={product?.ingredients?.daldaHardPUSTI} />

                <RmView name='Flour A Grade' ingredient={product?.ingredients?.flourGrade_A} />

                <RmView name='Flour B Grade' ingredient={product?.ingredients?.flourGrade_B} />

                <RmView name='Soya Lecithine' ingredient={product?.ingredients?.soyaLecithine} />

                <RmView name='Milk Flavour KH' ingredient={product?.ingredients?.milkFlavourKH} />

                <RmView name='Palm Oil Super' ingredient={product?.ingredients?.palmOilSuper} />

                <RmView name='Super Salt' ingredient={product?.ingredients?.superSalt} />

                <RmView name='Skim Milk Powder' ingredient={product?.ingredients?.skimMilkPowder} />

                <RmView name='Sodium Bi Carbonate' ingredient={product?.ingredients?.sodiumBiCarbonate} />

                <RmView name='Sodium Meta Bi Sulphate' ingredient={product?.ingredients?.sodiumMetaBiSulphate} />

                <RmView name='Starch Powder' ingredient={product?.ingredients?.starchPowder} />

                <RmView name='Sugar' ingredient={product?.ingredients?.sugar} />

                <RmView name='TBHQ' ingredient={product?.ingredients?.tbhq} />

                <RmView name='Vanila Flavour KH' ingredient={product?.ingredients?.vanilaFlavourKH} />
              </div>

              <Total {...{ total, processLoss, totalProcessLoss, output }} />
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}