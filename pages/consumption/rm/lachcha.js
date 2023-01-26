import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import RmViewConsumption from '../../../components/RmViewConsumption';
import { db } from '../../../database/conncetDB';


export async function getServerSideProps(){
    const q= query(collection(db,'products'),where('section','==', 'Lachcha'))
    const docs = await getDocs(q)
    const products = [];
    docs.forEach(data => products.push(data.data()));

  return({
    props : {
        products
    }
  })
}

export default function Biscuit({products}) {
  const [name,setName] = useState('')
  const [product,setProduct] = useState({})
  const [batch,setBatch] = useState(0)

  useEffect(()=>{
    async function getRecipe(name){
        const info_query= query(collection(db,'products_info'),where('id','==', name))
        const docs = await getDocs(info_query)
        const products = [];
        docs.forEach(data => products.push(data.data()));
        if(products.length){
            const ingredientRef = doc(db,'products_recipe',products[0].id)
            const ingredients = await getDoc(ingredientRef)
            setProduct({...products[0],ingredients:ingredients.data()})
        }
    }
    getRecipe(name)
  },[name])

  return (
    <div className='raw-consumption'>
      <Head>
        <title>RM & PM Calculation</title>
        <meta name="description" content="RM & PM Calculation S&B Nice Food Valley Ltd." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='raw'>
        <h1 className='py-2 bg-gray-600 text-white text-xl text-center'>Consumption</h1>
          
          <div className="input">
              <label htmlFor="">Product Name</label>
              <select name="name"  onChange={(e)=>setName(e.target.value)}>
                    <option value="">Select Name</option>
                    {
                      products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)
                    }
                </select>
          </div>
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
    </div>
  )
}
