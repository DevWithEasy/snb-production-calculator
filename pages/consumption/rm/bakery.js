import Head from 'next/head';
import { useEffect, useState } from 'react';
import {LoginChecked, ProductSelect,RmViewConsumption} from '../../../components/Index';
import { getProducts, getRecipe } from '../../../utils/api_utils';
import useUserStore from '../../../features/userStore';

export default function Biscuit() {
  const {user} = useUserStore()
  const [id,setId] = useState('')
  const [product,setProduct] = useState({})
  const [batch,setBatch] = useState(0)
  const [products,setProducts] = useState([])

  useEffect(()=>{
    getProducts('Bakery',setProducts)
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
                  <RmViewConsumption name='Ammonium' ingredient={product?.ingredients?.ammonium} batch={batch}/>

                  <RmViewConsumption name='Baking Powder' ingredient={product?.ingredients?.bakingPowder} batch={batch}/>

                  <RmViewConsumption name='Black Cumin' ingredient={product?.ingredients?.blackCumin} batch={batch}/>

                  <RmViewConsumption name='Bread Improver' ingredient={product?.ingredients?.breadImprover} batch={batch}/>

                  <RmViewConsumption name='Butter Flavour SM' ingredient={product?.ingredients?.butterFlavourSM} batch={batch}/>

                  <RmViewConsumption name='Cake Gel' ingredient={product?.ingredients?.cakeGel} batch={batch}/>

                  <RmViewConsumption name='Chocolate Chips' ingredient={product?.ingredients?.chocolateChips} batch={batch}/>

                  <RmViewConsumption name='Chocolate Flavour SYMRISE' ingredient={product?.ingredients?.chocolateFlavourSYMRISE} batch={batch}/>

                  <RmViewConsumption name='Chocolate Paste' ingredient={product?.ingredients?.chocolatePaste} batch={batch}/>

                  <RmViewConsumption name='Cocoa Powder 4011' ingredient={product?.ingredients?.cocoaPowder_4011} batch={batch}/>

                  <RmViewConsumption name='Condenced Milk Flavour' ingredient={product?.ingredients?.condencedMilkFlavour} batch={batch}/>

                  <RmViewConsumption name='Dalda Hard PUSTI' ingredient={product?.ingredients?.daldaHardPUSTI} batch={batch}/>

                  <RmViewConsumption name='Dalda Soft HILSA' ingredient={product?.ingredients?.daldaSoftHILSA} batch={batch}/>

                  <RmViewConsumption name='Egg' ingredient={product?.ingredients?.egg} batch={batch}/>

                  <RmViewConsumption name='Egg Yellow Colour' ingredient={product?.ingredients?.eggYellowColour} batch={batch}/>

                  <RmViewConsumption name='Flour A Grade' ingredient={product?.ingredients?.flourGrade_A} batch={batch}/>

                  <RmViewConsumption name='Flour B Grade' ingredient={product?.ingredients?.flourGrade_B} batch={batch}/>

                  <RmViewConsumption name='Flour C Grade' ingredient={product?.ingredients?.flourGrade_C} batch={batch}/>

                  <RmViewConsumption name='Ghee' ingredient={product?.ingredients?.ghee} batch={batch}/>

                  <RmViewConsumption name='Ghee Flavour' ingredient={product?.ingredients?.gheeFlavour} batch={batch}/>

                  <RmViewConsumption name='Glucose Powder' ingredient={product?.ingredients?.glucosePowder} batch={batch}/>

                  <RmViewConsumption name='Lemon Yellow Colour' ingredient={product?.ingredients?.lemonYellowColour} batch={batch}/>

                  <RmViewConsumption name='Skim Milk Powder' ingredient={product?.ingredients?.skimMilkPowder} batch={batch}/>

                  <RmViewConsumption name='Milk Flavour KH' ingredient={product?.ingredients?.milkFlavourKH} batch={batch}/>

                  <RmViewConsumption name='Mono Saccharine' ingredient={product?.ingredients?.monoSaccharine} batch={batch}/>

                  <RmViewConsumption name='Palm Oil Super' ingredient={product?.ingredients?.palmOilSuper} batch={batch}/>

                  <RmViewConsumption name='Super Salt' ingredient={product?.ingredients?.superSalt} batch={batch}/>

                  <RmViewConsumption name='Sodium Acid Pyro Phosphet' ingredient={product?.ingredients?.sodiumAcidPyroPhosphet} batch={batch}/>

                  <RmViewConsumption name='Sodium Bi Carbonate' ingredient={product?.ingredients?.sodiumBiCarbonate} batch={batch}/>

                  <RmViewConsumption name='Starch Powder' ingredient={product?.ingredients?.starchPowder} batch={batch}/>

                  <RmViewConsumption name='Sugar' ingredient={product?.ingredients?.sugar} batch={batch}/>

                  <RmViewConsumption name='TBHQ' ingredient={product?.ingredients?.tbhq} batch={batch}/>

                  <RmViewConsumption name='Vanilin Powder Flavour' ingredient={product?.ingredients?.vanilinPowderFlavour} batch={batch}/>

                  <RmViewConsumption name='Xanthem Gum' ingredient={product?.ingredients?.xanthemGum} batch={batch}/>

                  <RmViewConsumption name='Yeast' ingredient={product?.ingredients?.yeast} batch={batch}/>
                </div>
            </div>
          </div>}
      </div>
      {!user.name && <LoginChecked />}
    </div>
  )
}
