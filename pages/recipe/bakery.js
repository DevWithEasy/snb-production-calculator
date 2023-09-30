import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { BakeryExcel, Heading, Info, LoginChecked, PrintHeader, ProductSelect, RmView, Total } from '../../components/Index';
import { getProducts, getRecipe } from '../../utils/api_utils';
import Recipe from '../../utils/recipe';
import { useDownloadExcel } from 'react-export-table-to-excel';
import useUserStore from '../../features/userStore';

export default function Raw() {
  const {user} = useUserStore()
  const printRef = useRef()
  const excelRef = useRef()
  const [id,setId] = useState('')
  const [product,setProduct] = useState({})
  const [products,setProducts] = useState([])

  useEffect(()=>{
    getProducts('Bakery',setProducts)
  },[])

  useEffect(()=>{
    if(id) getRecipe(id,setProduct)
  },[id])

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle : product?.name + " [Version-"+product?.version+"]"
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: excelRef.current,
    filename: `${product?.section} - ${product?.name} [v-${product?.version}]`,
    sheet: product?.name
  });

  const {
    version,
    packetWeight,
    packetPerCarton,
    processLoss,
    foilWeight,
    inner_poly_6_8,
    inner_poly_8_11_5,
    inner_poly_9_11_5,
  } = product

  const recipe = new Recipe(product)

  let total
  if(product?.ingredients) total = recipe.totalInput()

  let totalProcessLoss
  if(total)  totalProcessLoss = recipe.totalProcessLoss()

  let output
  if(totalProcessLoss) output = recipe.totalOutput()

  let carton
  if(output) carton = recipe.totalCarton()


  return (
    <div className='raw-consumption'>
      <Head>
        <title>Check your recipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='raw print:mx-12' ref={printRef}>
        <PrintHeader/>
        <div>
        <Heading {...{product,handlePrint,onDownload}}/>
          {/* =================selection area====================== */}

          <div className='space-y-2 py-2 print:space-y-0 print:flex justify-between print:space-x-4 print:p-2 print:text-sm'>
            <ProductSelect {...{setId,products}}/>
          </div>
          
          {product?.ingredients && <div className='recipe-area'>
            {/*===================== short info area ===================*/}
            <div className='pb-2'>
              <h3 className='text-center p-1 font-bold bg-gray-500 text-white print:mx-2'>Information</h3>
              <div className='print:grid grid-cols-2 gap-x-8 print:text-sm print:px-2'>
                <Info text='Version' value={version} unit=''/>
                <Info text='Packet Weight' value={packetWeight} unit='gm'/>
                <Info text='Packet Per Carton' value={packetPerCarton}q unit='Packet'/>
                <Info text='Process Loss' value={processLoss} unit='%'/>
                <Info text='Foil Weight' value={foilWeight} unit='gm'/>
                
                {inner_poly_6_8 > 0 && 
                  <Info 
                    text='Inner Poly 6"x8"' 
                    value={inner_poly_6_8} 
                    unit='gm'
                  />
                }

                {inner_poly_8_11_5 > 0 && 
                  <Info 
                    text='Inner Poly 8"x11.5"' 
                    value={inner_poly_8_11_5} 
                    unit='gm'
                  />
                }

                {inner_poly_9_11_5 > 0 && 
                  <Info 
                    text='Inner Poly 9"x11.5"' 
                    value={inner_poly_9_11_5} 
                    unit='gm'
                  />
                }
                <Info text='Carton Per Batch' value={carton} unit=''/>
              </div>
            </div>

            {/*===================== ingredient list area ===================*/}
            <div className='consumption space-y-2'>
                <div className="heading print:px-2">
                    <p className="name">Ingredients</p>
                    <p>Quantity (kg)</p>
                </div>
                <div className='space-y-2 print:px-2 print:pb-2'>
                  <RmView name='Ammonium' ingredient={product?.ingredients?.ammonium}/>

                  <RmView name='Baking Powder' ingredient={product?.ingredients?.bakingPowder}/>
                  
                  <RmView name='Black Cumin' ingredient={product?.ingredients?.blackCumin}/>

                  <RmView name='Bread Improver' ingredient={product?.ingredients?.breadImprover}/>

                  <RmView name='Butter Flavour SM' ingredient={product?.ingredients?.butterFlavourSM}/>

                  <RmView name='Cake Gel' ingredient={product?.ingredients?.cakeGel}/>

                  <RmView name='Chocolate Chips' ingredient={product?.ingredients?.chocolateChips}/>

                  <RmView name='Chocolate Flavour SYMRISE' ingredient={product?.ingredients?.chocolateFlavourSYMRISE}/>

                  <RmView name='Chocolate Paste' ingredient={product?.ingredients?.chocolatePaste}/>

                  <RmView name='Cocoa Powder 4011' ingredient={product?.ingredients?.cocoaPowder_4011}/>

                  <RmView name='Coconut Powder' ingredient={product?.ingredients?.coconutPowder}/>

                  <RmView name='Coconut Flavour' ingredient={product?.ingredients?.coconutFlavour}/>

                  <RmView name='Condenced Milk Flavour' ingredient={product?.ingredients?.condencedMilkFlavour}/>

                  <RmView name='Dalda Hard PUSTI' ingredient={product?.ingredients?.daldaHardPUSTI}/>

                  <RmView name='Dalda Soft HILSA' ingredient={product?.ingredients?.daldaSoftHILSA}/>

                  <RmView name='Egg' ingredient={product?.ingredients?.egg}/>

                  <RmView name='Egg Yellow Colour' ingredient={product?.ingredients?.eggYellowColour}/>

                  <RmView name='Flour A Grade' ingredient={product?.ingredients?.flourGrade_A}/>

                  <RmView name='Flour B Grade' ingredient={product?.ingredients?.flourGrade_B}/>

                  <RmView name='Flour C Grade' ingredient={product?.ingredients?.flourGrade_C}/>

                  <RmView name='Ghee' ingredient={product?.ingredients?.ghee}/>

                  <RmView name='Ghee Flavour' ingredient={product?.ingredients?.gheeFlavour}/>

                  <RmView name='Glucose Powder' ingredient={product?.ingredients?.glucosePowder}/>

                  <RmView name='Lemon Yellow Colour' ingredient={product?.ingredients?.lemonYellowColour}/>

                  <RmView name='Skim Milk Powder' ingredient={product?.ingredients?.skimMilkPowder}/>

                  <RmView name='Milk Flavour KH' ingredient={product?.ingredients?.milkFlavourKH}/>

                  <RmView name='Mono Saccharine' ingredient={product?.ingredients?.monoSaccharine}/>

                  <RmView name='Palm Oil Super' ingredient={product?.ingredients?.palmOilSuper}/>

                  <RmView name='Super Salt' ingredient={product?.ingredients?.superSalt}/>

                  <RmView name='Sodium Acid Pyro Phosphet' ingredient={product?.ingredients?.sodiumAcidPyroPhosphet}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={product?.ingredients?.sodiumBiCarbonate}/>

                  <RmView name='Starch Powder' ingredient={product?.ingredients?.starchPowder}/>

                  <RmView name='Sugar' ingredient={product?.ingredients?.sugar}/>

                  <RmView name='TBHQ' ingredient={product?.ingredients?.tbhq}/>

                  <RmView name='Vanilin Powder Flavour' ingredient={product?.ingredients?.vanilinPowderFlavour}/>

                  <RmView name='Xanthem Gum' ingredient={product?.ingredients?.xanthemGum}/>

                  <RmView name='Yeast' ingredient={product?.ingredients?.yeast}/>
                </div>
                
                <Total {...{total,processLoss,totalProcessLoss,output}}/>
            </div>
          </div>}
        </div>
      </div>
      <BakeryExcel {...{product,total,totalProcessLoss,output,carton,excelRef}}/>
      {!user.name && <LoginChecked/>}
    </div>
  )
}