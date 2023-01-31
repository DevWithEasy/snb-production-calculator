import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { db } from '../../../database/conncetDB';
import { totalCarton, totalFoil } from '../../../utils/pmConsumption';


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

export default function PM({products}) {
  const [name,setName] = useState('')
  const [product,setProduct] = useState({})
  const [batch,setBatch] = useState(0)
  const [carton,setCarton] = useState(0)
  const [wastage,setWastage] = useState(0)

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
  const totalCartonByBatch = product.ingredients ? totalCarton(product,batch) : 0
  const totalFoilByCarton = product.ingredients && carton ? Number(totalFoil(product,carton))+Number(wastage) : 0
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

          <div className="input">
              <label htmlFor="" >Production Carton</label>
              <input className='name' type="number" name='batch' onChange={(e)=>setCarton(e.target.value)}></input>
          </div>

          {carton > 0 && <div className="input">
              <label htmlFor="" >Foil Wastage</label>
              <input className='name' type="number" name='batch' onChange={(e)=>setWastage(e.target.value)}></input>
          </div>}
          
          {product?.ingredients && <div className='space-y-2'>
            <div className='consumption space-y-2'>
                <h3 className='py-1 bg-gray-500 text-white text-center font-bold'>Packing Consumption</h3>

                <div className='border shadow rounded-md'>
                    <p className='flex justify-between p-2'>
                        <span className='w-3/4'>Recipe wise Carton</span>
                        <span className='w-1/4 text-center'> {totalCartonByBatch}</span>
                    </p>
                    <p className='flex justify-between p-2'>
                        <span className='w-3/4'>Actual Output</span>
                        <span className='w-1/4 text-center'> {carton}</span>
                    </p>
                    <p className='flex justify-between p-2'>
                        <span className='w-3/4'>Different</span>
                        <span className='w-1/4 text-center'> {carton - totalCartonByBatch}</span>
                    </p>
                </div>
                <div className='border shadow rounded-md'>
                    <p className='flex justify-between p-2'>
                        <span className='w-3/4'>Foil Consumpotion By Carton</span>
                        <span className='w-1/4 text-center'> {totalFoilByCarton}</span>
                    </p>
                    <p className='flex justify-between p-2 items-center'>
                        <span className='w-3/4'>Paper Board Consumpotion</span>
                        <span className='w-1/4 text-center'> {carton*2}</span>
                    </p>
                </div>
            </div>
          </div>}
      </div>
    </div>
  )
}
