import Head from 'next/head';
import { useEffect, useState } from 'react';
import {ProductSelect,RmViewConsumption} from '../../../components/Index';
import { getProducts, getRecipe } from '../../../utils/api_utils';

export default function Biscuit() {
  const [id,setId] = useState('')
  const [product,setProduct] = useState({})
  const [batch,setBatch] = useState(0)
  const [products,setProducts] = useState([])

  useEffect(()=>{
    getProducts('Wafer',setProducts)
  },[])

  useEffect(()=>{
    if(id) getRecipe(id,setProduct)
  },[id])
  

  return (
    <div className='raw-consumption'>
      <Head>
        <title>RM & PM Calculation</title>
        <meta name="description" content="RM & PM Calculation S&B Nice Food Valley Ltd." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='raw'>
        <h1 className='py-2 bg-gray-600 text-white text-xl text-center'>Consumption</h1>
          
        <ProductSelect {...{setId,products}}/>
        
          <div className="input">
              <label htmlFor="" >Production Batch</label>
              <input className='name' type="number" name='batch' onChange={(e)=>setBatch(e.target.value)}></input>
          </div>
          
          {product?.ingredients && <div className='space-y-2'>
            <div className='consumption space-y-2'>
              <div className="heading">
                              <p className="name">Ingredients</p>
                              <p>Quantity</p>
                          </div>
                <div className='space-y-2'>
                  <RmViewConsumption name='Chocolate Brown Colour 6059' ingredient={product?.ingredients?.chocolateBrownColour_6059}/>

                  <RmViewConsumption name='Citric Acid Mono' ingredient={product?.ingredients?.citricAcidMono} batch={batch}/>

                  <RmViewConsumption name='Cocoa Powder Black 4011' ingredient={product?.ingredients?.cocoaPowderBlack_4011} batch={batch}/>

                  <RmViewConsumption name='Chocolate Flavour KH' ingredient={product?.ingredients?.chocolateFlavourKH} batch={batch}/>

                  <RmViewConsumption name='Dalda Hard PUSTI' ingredient={product?.ingredients?.daldaHardPUSTI} batch={batch}/>

                  <RmViewConsumption name='Flour A Grade' ingredient={product?.ingredients?.flourGrade_A} batch={batch}/>

                  <RmViewConsumption name='Flour B Grade' ingredient={product?.ingredients?.flourGrade_B} batch={batch}/>

                  <RmViewConsumption name='Soya Lecithine' ingredient={product?.ingredients?.soyaLecithine} batch={batch}/>

                  <RmViewConsumption name='Milk Flavour KH' ingredient={product?.ingredients?.milkFlavourKH} batch={batch}/>

                  <RmViewConsumption name='Palm Oil Super' ingredient={product?.ingredients?.palmOilSuper} batch={batch}/>

                  <RmViewConsumption name='Super Salt' ingredient={product?.ingredients?.superSalt} batch={batch}/>

                  <RmViewConsumption name='Skim Milk Powder' ingredient={product?.ingredients?.skimMilkPowder} batch={batch}/>

                  <RmViewConsumption name='Sodium Bi Carbonate' ingredient={product?.ingredients?.sodiumBiCarbonate} batch={batch}/>

                  <RmViewConsumption name='Sodium Meta Bi Sulphate' ingredient={product?.ingredients?.sodiumMetaBiSulphate} batch={batch}/>

                  <RmViewConsumption name='Starch Powder' ingredient={product?.ingredients?.starchPowder} batch={batch}/>

                  <RmViewConsumption name='Sugar' ingredient={product?.ingredients?.sugar} batch={batch}/>

                  <RmViewConsumption name='TBHQ' ingredient={product?.ingredients?.tbhq} batch={batch}/>

                  <RmViewConsumption name='Vanila Flavour KH' ingredient={product?.ingredients?.vanilaFlavourKH} batch={batch}/>
                </div>
            </div>
          </div>}
      </div>
    </div>
  )
}
