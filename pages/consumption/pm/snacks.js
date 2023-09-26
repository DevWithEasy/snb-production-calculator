import Head from 'next/head';
import { useEffect, useState } from 'react';
import {ProductSelect} from '../../../components/Index';
import { getProducts, getRecipe } from '../../../utils/api_utils';
import { totalCarton, totalFoil, totalMasterPoly } from '../../../utils/pmConsumption';

export default function PM() {
  const [id,setId] = useState('')
  const [product,setProduct] = useState({})
  const [batch,setBatch] = useState(0)
  const [carton,setCarton] = useState(0)
  const [wastage,setWastage] = useState(0)
  const [products,setProducts] = useState([])

  useEffect(()=>{
    getProducts('Snacks',setProducts)
  },[])

  useEffect(()=>{
    if(id) getRecipe(id,setProduct)
  },[id])

  const totalCartonByBatch = product.ingredients ? totalCarton(product,batch) : 0
  const totalFoilByCarton = product.ingredients && carton ? totalFoil(product,carton)+wastage : 0
  const totalMasterPolyByCarton = product.ingredients && carton ? totalMasterPoly(product,carton) : 0
  console.log(product);
  console.log(totalMasterPolyByCarton)
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
                        <span className='w-3/4'>Foil Consumpotion</span>
                        <span className='w-1/4 text-center'> {totalFoilByCarton}</span>
                    </p>
                    <p className='flex justify-between p-2 items-center'>
                        <span className='w-3/4'>Inner Poly Consumpotion</span>
                        <span className='w-1/4 text-center'> {totalMasterPolyByCarton}</span>
                    </p>
                    <p className='flex justify-between p-2 items-center'>
                        <span className='w-3/4'>Master Poly Consumpotion</span>
                        <span className='w-1/4 text-center'> {totalMasterPolyByCarton}</span>
                    </p>
                </div>
            </div>
          </div>}
      </div>
    </div>
  )
}
