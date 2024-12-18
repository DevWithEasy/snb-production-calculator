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
    getProducts('Cake',setProducts)
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
                  <RmViewConsumption name='Vanilin Powder' ingredient={product?.ingredients?.vanilinPowder} batch={batch}/>

                  <RmViewConsumption name='Butter Oil Substitute' ingredient={product?.ingredients?.butterOilSubstitute} batch={batch}/>

                  <RmViewConsumption name='Cake Gel' ingredient={product?.ingredients?.cakeGel} batch={batch}/>

                  <RmViewConsumption name='Cake Emulsifier' ingredient={product?.ingredients?.cakeEmulsifier} batch={batch}/>

                  <RmViewConsumption name='Chocolate Brown Colour 6059' ingredient={product?.ingredients?.chocolateBrownColour_6059} batch={batch}/>

                  <RmViewConsumption name='Chocolate Flavour SYMRISE' ingredient={product?.ingredients?.chocolateFlavourSYMRISE} batch={batch}/>

                  <RmViewConsumption name='Chocolate Paste' ingredient={product?.ingredients?.chocolatePaste} batch={batch}/>

                  <RmViewConsumption name='Citric Acid Mono' ingredient={product?.ingredients?.citricAcidMono} batch={batch}/>

                  <RmViewConsumption name='Egg' ingredient={product?.ingredients?.egg} batch={batch}/>

                  <RmViewConsumption name='Flour B Grade' ingredient={product?.ingredients?.flourGrade_B} batch={batch}/>

                  <RmViewConsumption name='Flour C Grade' ingredient={product?.ingredients?.flourGrade_C} batch={batch}/>

                  <RmViewConsumption name='Glycerine' ingredient={product?.ingredients?.glycerine} batch={batch}/>

                  <RmViewConsumption name='Isopropyl Alcohol' ingredient={product?.ingredients?.isopropylAlcohol} batch={batch}/>

                  <RmViewConsumption name='Milk Flavour KING' ingredient={product?.ingredients?.milkFlavourKing} batch={batch}/>

                  <RmViewConsumption name='Paraffin Oil' ingredient={product?.ingredients?.paraffinOil} batch={batch}/>

                  <RmViewConsumption name='Potassium Sorbate' ingredient={product?.ingredients?.potassiumSorbate} batch={batch}/>

                  <RmViewConsumption name='Super Salt' ingredient={product?.ingredients?.superSalt} batch={batch}/>

                  <RmViewConsumption name='Skim Milk Powder' ingredient={product?.ingredients?.skimMilkPowder} batch={batch}/>

                  <RmViewConsumption name='Sorbitol' ingredient={product?.ingredients?.sorbitol} batch={batch}/>

                  <RmViewConsumption name='Soya Lecithine' ingredient={product?.ingredients?.soyaLecithine} batch={batch}/>

                  <RmViewConsumption name='Sugar' ingredient={product?.ingredients?.sugar} batch={batch}/>

                  <RmViewConsumption name='Palm Oil Super' ingredient={product?.ingredients?.palmOilSuper} batch={batch}/>

                  <RmViewConsumption name='TBHQ' ingredient={product?.ingredients?.tbhq} batch={batch}/>

                  <RmViewConsumption name='Vanila Flavour FORZONE' ingredient={product?.ingredients?.vanilaFlavourFORZONE} batch={batch}/>

                  <RmViewConsumption name='Vanila Flavour KH' ingredient={product?.ingredients?.vanilaFlavourKH} batch={batch}/>

                  <RmViewConsumption name='Xanthem Gum' ingredient={product?.ingredients?.xanthemGum} batch={batch}/>

                  <RmViewConsumption name='Sodium Acid pyro Phosphet' ingredient={product?.ingredients?.sodiumAcidpyroPhosphet} batch={batch}/>

                  <RmViewConsumption name='Sodium Bi Carbonate' ingredient={product?.ingredients?.sodiumBiCarbonate} batch={batch}/>

                  <RmViewConsumption name='Starch Powder' ingredient={product?.ingredients?.starchPowder} batch={batch}/>
                </div>
            </div>
          </div>}
      </div>
      {!user.name && <LoginChecked />}
    </div>
  )
}
