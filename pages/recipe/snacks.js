import axios from 'axios';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Info from '../../components/Info';
import PrintHeader from '../../components/PrintHeader';
import RmView from '../../components/RmView';
import { getRecipe } from '../../utils/api_utils';
import baseUrl from '../../utils/baseUrl';
import Recipe from '../../utils/recipe';
import ProductSelect from '../../components/ProductSelect';
import Total from '../../components/recipe/Total';
import Heading from '../../components/recipe/Heading';



export async function getServerSideProps(){
  const res = await axios.get(`${baseUrl}/api/products/Snacks`)
  return{
      props:{
          products : res.data.data || []
      }
  }
}

export default function Raw({products}) {
  const printRef = useRef()
  const [id,setId] = useState('')
  const [product,setProduct] = useState({})

  useEffect(()=>{
    if(id) getRecipe(id,setProduct)
  },[id])
  

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle : product?.name + " [Version-"+product?.version+"]"
  });

  const {
    version,
    packetWeight,
    packetPerCarton,
    processLoss,
    foilWeight,
    packet_per_inner,
    inner_per_master,
    inner_poly_18_15,
    master_poly_25_47,
    inner_poly_17_19_5,
    master_poly_25_37,
    inner_poly_16_21_5,
    master_poly_35_26,
    inner_poly_24_15,
    master_poly_44_23,
    inner_poly_19_20,
    master_poly_28_42,
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
    <div className='raw-consumption '>
      <Head>
        <title>Check your recipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='raw print:mx-12' ref={printRef}>
        <PrintHeader/>
        <div>
          <Heading {...{product,handlePrint}}/>
          
          <div className='space-y-2 py-2 print:space-y-0 print:flex justify-between print:space-x-4 print:p-2 print:text-sm'>
            <ProductSelect {...{setId,products}}/>
          </div>

          {product?.ingredients && <div className='recipe-area'>
            {/*===================== short info area ===================*/}
            <div className='pb-2'>
              <h3 className='text-center p-1 font-bold bg-gray-500 text-white print:mx-2'>Information</h3>
              <div className='print:grid grid-cols-2 gap-x-8 print:text-sm print:px-2'>
                <Info 
                  text='Version' 
                  value={version} 
                  unit=''
                />
                <Info 
                  text='Packet Weight' 
                  value={packetWeight} 
                  unit='gm'
                />
                <Info 
                  text='Packet Per Carton' 
                  value={packetPerCarton} unit='Packet'
                />
                <Info 
                  text='Process Loss' 
                  value={processLoss} 
                  unit='%'
                />
                <Info 
                  text='Foil Weight' 
                  value={foilWeight} 
                  unit='gm'
                />

                {packet_per_inner > 0 && 
                  <Info 
                    text='Packet Per Inner' 
                    value={packet_per_inner} 
                    unit='Packet'
                  />
                }

                {inner_per_master > 0 && 
                  <Info 
                    text='Inner Per Master' 
                    value={inner_per_master} 
                    unit='Packet'
                  />
                }

                {inner_poly_18_15 > 0 && 
                  <Info 
                    text='Inner Poly 18"x15"' 
                    value={inner_poly_18_15} 
                    unit='gm'
                  />
                }

                {master_poly_25_47 > 0 && 
                  <Info 
                    text='Master Poly 25"x47"' 
                    value={master_poly_25_47} 
                    unit='gm'
                  />
                }

                {inner_poly_17_19_5 > 0 && 
                  <Info 
                    text='Inner Poly 17"x19.5"' 
                    value={inner_poly_17_19_5} 
                    unit='gm'
                  />
                }

                {master_poly_25_37 > 0 && 
                  <Info 
                    text='Master Poly 25"x37"' 
                    value={master_poly_25_37} 
                    unit='gm'
                  />
                }

                {inner_poly_16_21_5 > 0 && 
                  <Info 
                    text='Inner Poly 16"x21.5"' 
                    value={inner_poly_16_21_5} 
                    unit='gm'
                  />
                }

                {master_poly_35_26 > 0 && 
                  <Info 
                    text='Master Poly 35"x26"' 
                    value={master_poly_35_26} 
                    unit='gm'
                  />
                }
                
                {inner_poly_24_15 > 0 && 
                  <Info 
                    text='Inner Poly 24"x15"' 
                    value={inner_poly_24_15} 
                    unit='gm'
                  />
                }

                {master_poly_44_23 > 0 && 
                  <Info 
                    text='Master Poly 44"x23"' 
                    value={master_poly_44_23} 
                    unit='gm'
                  />
                }

                {inner_poly_19_20 > 0 && 
                  <Info 
                    text='Inner Poly 19"x20"' 
                    value={inner_poly_19_20} 
                    unit='gm'
                  />
                }

                {master_poly_28_42 > 0 && 
                  <Info 
                    text='Master Poly 28"x42"' 
                    value={master_poly_28_42} 
                    unit='gm'
                  />
                }                

                <Info 
                  text='Carton Per Batch' 
                  value={carton} 
                  unit=''
                />
              </div>
            </div>

            {/*===================== ingredient list area ===================*/}
            <div className='consumption space-y-2'>
                <div className="heading print:px-2">
                    <p className="name">Ingredients</p>
                    <p>Quantity (kg)</p>
                </div>
                <div className='space-y-2 print:px-2 print:pb-2'>
                  <RmView name='Turmeric' ingredient={product?.ingredients?.turmeric}/>

                  <RmView name='Cinamon' ingredient={product?.ingredients?.cinamon}/>

                  <RmView name='Testing Salt' ingredient={product?.ingredients?.testingSalt}/>

                  <RmView name='Red Chili' ingredient={product?.ingredients?.redChili}/>

                  <RmView name='Nut Mug' ingredient={product?.ingredients?.nutMug}/>

                  <RmView name='Cumin' ingredient={product?.ingredients?.cumin}/>

                  <RmView name='Black Pepper' ingredient={product?.ingredients?.blackPepper}/>

                  <RmView name='Clove' ingredient={product?.ingredients?.clove}/>

                  <RmView name='Cardamon' ingredient={product?.ingredients?.cardamon}/>

                  <RmView name='Cumin Sweet' ingredient={product?.ingredients?.cuminSweet}/>

                  <RmView name='Bit Salt' ingredient={product?.ingredients?.bitSalt}/>
                  
                  <RmView name='Ginger' ingredient={product?.ingredients?.ginger}/>

                  <RmView name='Rice Flask' ingredient={product?.ingredients?.riceFlask}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={product?.ingredients?.sodiumBiCarbonate}/>

                  <RmView name='Raw Peanut' ingredient={product?.ingredients?.rawPeanut}/>

                  <RmView name='Lentil' ingredient={product?.ingredients?.lentil}/>

                  <RmView name='Salt' ingredient={product?.ingredients?.salt}/>

                  <RmView name='Palm Oil Super' ingredient={product?.ingredients?.palmOilSuper}/>

                  <RmView name='Anchor Dal' ingredient={product?.ingredients?.anchorDal}/>

                  <RmView name='Pea' ingredient={product?.ingredients?.pea}/>

                  <RmView name='Skim Milk Powder' ingredient={product?.ingredients?.skimMilkPowder}/>

                  <RmView name='Sugar' ingredient={product?.ingredients?.sugar}/>

                  <RmView name='Citric Acid Ano' ingredient={product?.ingredients?.citricAcidAno}/>

                  <RmView name='Mug Dal' ingredient={product?.ingredients?.mugDal}/>

                  <RmView name='Apple Green Colour' ingredient={product?.ingredients?.appleGreenColour}/>

                  <RmView name='Tapioca Starch' ingredient={product?.ingredients?.tapiocaStarch}/>

                  <RmView name='Onion Powder' ingredient={product?.ingredients?.onionPowder}/>

                  <RmView name='Garlic Powder' ingredient={product?.ingredients?.garlicPowder}/>

                  <RmView name='Jwain Masala' ingredient={product?.ingredients?.jwainMasala}/>

                  <RmView name='Rice Atop' ingredient={product?.ingredients?.riceAtop}/>

                  <RmView name='Lemon Yellow Colour' ingredient={product?.ingredients?.lemonYellowColour}/>

                  <RmView name='TBHQ' ingredient={product?.ingredients?.tbhq}/>

                  <RmView name='BBQ' ingredient={product?.ingredients?.bbq}/>
                </div>
                <Total {...{total,processLoss,totalProcessLoss,output}}/>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}