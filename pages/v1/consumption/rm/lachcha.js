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
    getProducts('Lachcha',setProducts)
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
                    <RmViewConsumption name='Flour A Grade' ingredient={product?.ingredients?.flourGrade_A} batch={batch}/>
                    <RmViewConsumption name='Flour B Grade' ingredient={product?.ingredients?.flourGrade_B} batch={batch}/>
                    <RmViewConsumption name='Palm Oil Super' ingredient={product?.ingredients?.palmOilSuper} batch={batch}/>
                    <RmViewConsumption name='Starch Powder' ingredient={product?.ingredients?.starchPowder} batch={batch}/>
                    <RmViewConsumption name='Dalda Hard Pusti' ingredient={product?.ingredients?.daldaHardPUSTI} batch={batch}/>
                    <RmViewConsumption name='Ghee' ingredient={product?.ingredients?.ghee} batch={batch}/>
                    <RmViewConsumption name='Ghee Flavour' ingredient={product?.ingredients?.gheeFlavour} batch={batch}/>
                    <RmViewConsumption name='TBHQ' ingredient={product?.ingredients?.tbhq} batch={batch}/>
                  </div>
            </div>
          </div>}
      </div>
      {!user.name && <LoginChecked />}
    </div>
  )
}
