import { collection, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { db } from '../database/conncetDB';


export async function getServerSideProps(){
  const docs = await getDocs(collection(db,'sections'))
  const sections = [];
  docs.forEach(data => sections.push(data.data()));

  return({
    props : {
      sections
    }
  })
}

export default function Raw({sections}) {
  const [products,setProducts] = useState([])
  const [name,setName] = useState('')
  const [product,setProduct] = useState('')
  const [batch,setBatch] = useState()

  async function productList(e){
      const q= query(collection(db,'products'),where('section','==', e.target.value))
      const docs = await getDocs(q)
      const products = [];
      docs.forEach(data => products.push(data.data()));
      setProducts(products)
  }

  useEffect(()=>{
    async function getRecipe(name){
        const q= query(collection(db,'recipes'),where('name','==', name))
        const docs = await getDocs(q)
        const products = [];
        docs.forEach(data => products.push(data.data()));
        setProduct(products[0])
    }
    getRecipe(name)
  },[name])
  console.log(product);
  return (
    <div className='raw-consumption'>
      <Head>
        <title>RM & PM Calculation</title>
        <meta name="description" content="RM & PM Calculation S&B Nice Food Valley Ltd." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='raw'>
        <h1 className='py-2 bg-gray-500 text-white text-xl text-center'>Consumption</h1>
          <div className="input">
              <label htmlFor="">Section Name</label>
                <div>
                  <select name="section" onChange={(e)=>productList(e)}>
                    <option value="">Select Section</option>
                      {
                          sections.map(section => <option key={section.id} value={section.name}>{section.name}</option>)
                      }
                  </select>
                </div>
          </div>
          <div className="input">
              <label htmlFor="">Product Name</label>
                <div>
                  <select name="name"  onChange={(e)=>setName(e.target.value)}>
                    <option value="">Select Name</option>
                    {
                      products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)
                    }
                  </select>
                </div>
          </div>
          <div className="input">
              <label htmlFor="">Production Batch</label>
                <div>
                  <input type="number" name='batch' onChange={(e)=>setBatch(e.target.value)}></input>
                </div>
          </div>
          {product?.ingredients && <div className='consumption space-y-2'>
            <div className="heading">
                            <p className="name">Ingredients</p>
                            <p>Quantity</p>
                        </div>
              <div className='space-y-2'>
                {
                   product.ingredients.map((ingredient)=><div key={ingredient.code_name} className="w-full flex justify-between py-2 border-b items-center rounded hover:bg-gray-500 hover:text-white transition-all duration-300 hover:scale-[1.02]">
                  <label htmlFor="" className='w-3/4 pl-2'>{ingredient.name}</label>
                    <div className='w-1/4 text-center'>
                      {
                        parseFloat(Number(ingredient.quantity) * Number(batch)) == 0 ? "-" : parseFloat(Number(ingredient.quantity) * Number(batch)).toFixed(2)
                      }
                    </div>
              </div>)
                }
              </div>
          </div>}
          <h3 className='py-1 bg-gray-500 text-white text-center font-bold'>Packing Consumption</h3>
      </div>
    </div>
  )
}
