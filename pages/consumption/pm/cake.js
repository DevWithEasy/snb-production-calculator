import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { db } from '../../../database/conncetDB';
import { totalCarton, totalFoil } from '../../../utils/pmConsumption';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import ProductSelect from '../../../components/ProductSelect';
import { getRecipe } from '../../../utils/api_utils';


export async function getServerSideProps(){
  const res = await axios.get(`${baseUrl}/api/products/Cake`)
  return{
      props:{
          products : res.data.data || []
      }
  }
}

export default function PM({products}) {
  const [id,setId] = useState('')
  const [product,setProduct] = useState({})
  const [batch,setBatch] = useState(0)
  const [standardCarton,setStandardCarton] = useState(0)
  const [familyCarton,setFamilyCarton] = useState(0)
  const [wastage,setWastage] = useState(0)
  const carton = Number(standardCarton)+Number(familyCarton)*3

  useEffect(()=>{
    if(id) getRecipe(id,setProduct)
  },[id])
  
  const totalCartonByBatch = product.ingredients ? totalCarton(product,batch) : 0
  const totalFoilByCarton = product.ingredients && standardCarton ? Number(totalFoil(product,carton))+Number(wastage) : 0
  console.log(product);
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
              <input className='name' type="number" onChange={(e)=>setBatch(e.target.value)}></input>
          </div>

          <div className="input">
              <label htmlFor="" >Production Standard Carton</label>
              <input className='name' type="number" onChange={(e)=>setStandardCarton(e.target.value)}></input>
          </div>

          <div className="input">
              <label htmlFor="" >Production Family Carton</label>
              <input className='name' type="number" onChange={(e)=>setFamilyCarton(e.target.value)}></input>
          </div>

          {standardCarton > 0 && <div className="input">
              <label htmlFor="" >Foil Wastage</label>
              <input className='name' type="number" onChange={(e)=>setWastage(e.target.value)}></input>
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
                        <span className='w-1/4 text-center'> {Number(standardCarton)+Number(familyCarton)*3}</span>
                    </p>
                    <p className='flex justify-between p-2'>
                        <span className='w-3/4'>Different</span>
                        <span className='w-1/4 text-center'> {(Number(standardCarton)+Number(familyCarton)*3) - totalCartonByBatch}</span>
                    </p>
                </div>
                <div className='border shadow rounded-md'>
                    <p className='flex justify-between p-2'>
                        <span className='w-3/4'>Foil Consumpotion By Carton</span>
                        <span className='w-1/4 text-center'> {totalFoilByCarton}</span>
                    </p>
                    {familyCarton>0 && <p className='flex justify-between p-2 items-center'>
                        <span className='w-3/4'>ATC Box Consumpotion By Carton</span>
                        <span className='w-1/4 text-center'> {familyCarton*12}</span>
                    </p>}
                </div>
            </div>
          </div>}
      </div>
    </div>
  )
}
