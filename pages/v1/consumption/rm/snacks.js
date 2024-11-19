import Head from 'next/head';
import { useEffect, useState } from 'react';
import {LoginChecked, ProductSelect,RmViewConsumption} from '../../../../components/v1/Index';
import { getProducts, getRecipe } from '../../../../utils/v1/api_utils';
import useUserStore from '../../../../features/userStore';


export default function Biscuit() {
  const {user} = useUserStore()
  const [id,setId] = useState('')
  const [product,setProduct] = useState({})
  const [batch,setBatch] = useState(0)
  const [products,setProducts] = useState([])

  useEffect(()=>{
    getProducts('Snacks',setProducts)
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
                  <RmViewConsumption name='Turmeric' ingredient={product?.ingredients?.turmeric} batch={batch}/>

                  <RmViewConsumption name='Cinamon' ingredient={product?.ingredients?.cinamon} batch={batch}/>

                  <RmViewConsumption name='Testing Salt' ingredient={product?.ingredients?.testingSalt} batch={batch}/>

                  <RmViewConsumption name='Red Chili' ingredient={product?.ingredients?.redChili} batch={batch}/>

                  <RmViewConsumption name='Nut Mug' ingredient={product?.ingredients?.nutMug} batch={batch}/>

                  <RmViewConsumption name='Cumin' ingredient={product?.ingredients?.cumin} batch={batch}/>

                  <RmViewConsumption name='Black Pepper' ingredient={product?.ingredients?.blackPepper} batch={batch}/>

                  <RmViewConsumption name='Clove' ingredient={product?.ingredients?.clove} batch={batch}/>

                  <RmViewConsumption name='Cardamon' ingredient={product?.ingredients?.cardamon} batch={batch}/>

                  <RmViewConsumption name='Cumin Sweet' ingredient={product?.ingredients?.cuminSweet} batch={batch}/>

                  <RmViewConsumption name='Bit Salt' ingredient={product?.ingredients?.bitSalt} batch={batch}/>

                  <RmViewConsumption name='Ginger' ingredient={product?.ingredients?.ginger} batch={batch}/>

                  <RmViewConsumption name='Rice Flask' ingredient={product?.ingredients?.riceFlask} batch={batch}/>

                  <RmViewConsumption name='Sodium Bi Carbonate' ingredient={product?.ingredients?.sodiumBiCarbonate} batch={batch}/>

                  <RmViewConsumption name='Raw Peanut' ingredient={product?.ingredients?.rawPeanut} batch={batch}/>

                  <RmViewConsumption name='Lentil' ingredient={product?.ingredients?.lentil} batch={batch}/>

                  <RmViewConsumption name='Salt' ingredient={product?.ingredients?.salt} batch={batch}/>

                  <RmViewConsumption name='Palm Oil Super' ingredient={product?.ingredients?.palmOilSuper} batch={batch}/>

                  <RmViewConsumption name='Anchor Dal' ingredient={product?.ingredients?.anchorDal} batch={batch}/>

                  <RmViewConsumption name='Pea' ingredient={product?.ingredients?.pea} batch={batch}/>

                  <RmViewConsumption name='Skim Milk Powder' ingredient={product?.ingredients?.skimMilkPowder} batch={batch}/>

                  <RmViewConsumption name='Sugar' ingredient={product?.ingredients?.sugar} batch={batch}/>

                  <RmViewConsumption name='Citric Acid Ano' ingredient={product?.ingredients?.citricAcidAno} batch={batch}/>

                  <RmViewConsumption name='Mug Dal' ingredient={product?.ingredients?.mugDal} batch={batch}/>

                  <RmViewConsumption name='Apple Green Colour' ingredient={product?.ingredients?.appleGreenColour} batch={batch}/>

                  <RmViewConsumption name='Tapioca Starch' ingredient={product?.ingredients?.tapiocaStarch} batch={batch}/>

                  <RmViewConsumption name='Onion Powder' ingredient={product?.ingredients?.onionPowder} batch={batch}/>

                  <RmViewConsumption name='Garlic Powder' ingredient={product?.ingredients?.garlicPowder} batch={batch}/>

                  <RmViewConsumption name='Jwain Masala' ingredient={product?.ingredients?.jwainMasala} batch={batch}/>

                  <RmViewConsumption name='Rice Atop' ingredient={product?.ingredients?.riceAtop} batch={batch}/>

                  <RmViewConsumption name='Lemon Yellow Colour' ingredient={product?.ingredients?.lemonYellowColour} batch={batch}/>

                  <RmViewConsumption name='TBHQ' ingredient={product?.ingredients?.tbhq} batch={batch}/>

                  <RmViewConsumption name='BBQ' ingredient={product?.ingredients?.bbq} batch={batch}/>
                </div>
            </div>
          </div>}
      </div>
      {!user.name && <LoginChecked />}
    </div>
  )
}
