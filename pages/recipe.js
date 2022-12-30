import { collection, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import Info from '../components/Info';
import { db } from '../database/conncetDB';
import { useReactToPrint } from 'react-to-print';
import PrintHeader from '../components/PrintHeader';


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
  const printRef = useRef()
  const [products,setProducts] = useState([])
  const [name,setName] = useState('')
  const [product,setProduct] = useState({})

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

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const total = parseFloat(product?.ingredients?.map((a,i)=>a.quantity).reduce((a,i)=>a+i,0)).toFixed(2);
  const processLoss = ((total*Number(product?.processLoss))/100).toFixed(2)
  console.log(product);
  const  output = (total - processLoss).toFixed(2);
  const carton = (output/(Number(product?.packetWeight)/1000))/Number(product?.packetPerCarton)

  return (
    <div className='raw-consumption'>
      <Head>
        <title>Check your recipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='raw mx-4 print:border' ref={printRef}>
        <PrintHeader/>
        <div>
        <h1 className='py-1 bg-gray-500 text-white text-xl text-center print:mx-2'>Recipe</h1>
          {/* =================selection area====================== */}
          <div className='print:flex justify-between print:space-x-4 print:p-2'>
            <div className="input">
                <label htmlFor="">Section Name</label>
                <select name="section" onChange={(e)=>productList(e)}>
                      <option value="">Select Section</option>
                        {
                            sections.map(section => <option key={section.id} value={section.name}>{section.name}</option>)
                        }
                  </select>
            </div>
            <div className="input">
                <label htmlFor="">Product Name</label>
                <select name="name"  onChange={(e)=>setName(e.target.value)}>
                      <option value="">{products.length > 0 ? 'Select Name' : ''}</option>
                      {
                        products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)
                      }
                  </select>
            </div>
          </div>

          {product?.ingredients && <div className='recipe-area'>
            {/*===================== short info area ===================*/}
            <div className='pb-2'>
              <h3 className='text-center p-1 font-bold bg-gray-500 text-white print:mx-2'>Information</h3>
              <div className='print:grid grid-cols-2 gap-x-4'>
                <Info text='Version' value={product?.version} unit=''/>
                <Info text='Packet Weight' value={product?.packetWeight} unit='gm'/>
                <Info text='Packet Per Carton' value={product?.packetPerCarton}q unit='Packet'/>
                <Info text='Process Loss' value={product?.processLoss} unit='%'/>
                <Info text='Foil Weight' value={product?.foilWeight} unit='gm'/>
                <Info text='Carton Per Batch' value={carton.toFixed(2)} unit=''/>
              </div>
            </div>

            {/*===================== ingredient list area ===================*/}
            <div className='consumption space-y-2'>
                <div className="heading print:px-2">
                    <p className="name">Ingredients</p>
                    <p>Quantity</p>
                </div>
                <div className='space-y-2'>
                  {
                    product?.ingredients?.map((ingredient)=><div key={ingredient.code_name} className={ingredient.quantity == 0 ? `hidden` : `w-full flex justify-between py-2 print:py-0 border-b items-center rounded hover:bg-gray-500 hover:text-white transition-all duration-300 hover:scale-[1.02]`}>
                    <label htmlFor="" className='w-3/4 pl-2'>{ingredient.name}</label>
                      <div className='w-1/4 text-center'>
                        {
                          Number(ingredient.quantity)  == 0 ? "-" : ingredient.quantity
                        }
                      </div>
                    </div>)
                  }
                  <div className='border shadow rounded-md'>
                    <p className='flex justify-between p-2 print:px-2 print:py-0'>
                      <span className='w-3/4'>Total Input</span>
                      <span className='w-1/4 text-center'> {total}</span>
                    </p>
                    <p className='flex justify-between p-2 print:px-2 print:py-0 border-b'>
                      <span className='w-3/4'>Process Loss ({product?.processLoss}%)</span>
                      <span className='w-1/4 text-center'>{processLoss}</span>
                    </p>
                    <p className='flex justify-between p-2 print:px-2 print:py-0'>
                      <span className='w-3/4'>Total Output</span>
                      <span className='w-1/4 text-center'>{output}</span>
                    </p>
                  </div>
                  <div className='print:hidden flex justify-center'>
                    <button onClick={()=>handlePrint()} className="px-4 py-2 bg-green-500 text-white rounded-md"> Print</button>
                  </div>
                </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}
