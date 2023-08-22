import { collection, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Info from '../components/Info';
import PrintHeader from '../components/PrintHeader';
import { db } from '../database/conncetDB';


export async function getServerSideProps(){
  // const docs = await getDocs(collection(db,'sections'))
  // const sections = [];
  // docs.forEach(data => sections.push(data.data()));

  // return({
  //   props : {
  //     sections
  //   }
  // })
}

export default function Raw({sections}) {
  const printRef = useRef()
  const [products,setProducts] = useState([])
  const [name,setName] = useState('')
  const [product,setProduct] = useState({})

  // async function productList(e){
  //     const q= query(collection(db,'products'),where('section','==', e.target.value))
  //     const docs = await getDocs(q)
  //     const products = [];
  //     docs.forEach(data => products.push(data.data()));
  //     setProducts(products)
  // }

  // useEffect(()=>{
  //   async function getRecipe(name){
  //       const q= query(collection(db,'recipes'),where('name','==', name))
  //       const docs = await getDocs(q)
  //       const products = [];
  //       docs.forEach(data => products.push(data.data()));
  //       setProduct(products[0])
  //   }
  //   getRecipe(name)
  // },[name])

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle : product?.name + " [Version-"+product?.version+"]"
  });

  const total = parseFloat(product?.ingredients?.map((a,i)=>a.quantity).reduce((a,i)=>a+i,0)).toFixed(2);
  const processLoss = ((total*Number(product?.processLoss))/100).toFixed(2)
  console.log(product);
  const  output = (total - processLoss).toFixed(2);
  const carton = (output/(Number(product?.packetWeight)/1000))/Number(product?.packetPerCarton)

  return (
    <div className='raw-consumption '>
      {/* <Head>
        <title>Check your recipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head> */}
      <div className='raw print:mx-12' ref={printRef}>
        <PrintHeader/>
        <div>
          {/* <h1 className=' relative py-1 bg-gray-500 text-white text-xl text-center font-bold print:mx-2'>
            Recipe
            {product?.name && <button onClick={()=>handlePrint()} className="absolute right-2 print:hidden"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
              </svg>
            </button>}
          </h1> */}
          {/* =================selection area====================== */}
          {/* <div className='space-y-2 py-2 print:space-y-0 print:flex justify-between print:space-x-4 print:p-2 print:text-sm'>
            <div className="input">
                <label htmlFor="">Section Name :</label>
                <select name="section" onChange={(e)=>productList(e)}>
                      <option value="">Select Section</option>
                        {
                            sections.map(section => <option key={section.id} value={section.name}>{section.name}</option>)
                        }
                  </select>
            </div>
            <div className="input">
                <label htmlFor="">Product Name :</label>
                <select name="name"  onChange={(e)=>setName(e.target.value)}>
                      <option value="">{products.length > 0 ? 'Select Name' : ''}</option>
                      {
                        products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)
                      }
                  </select>
            </div>
          </div> */}

          {product?.ingredients && <div className='recipe-area'>
            {/*===================== short info area ===================*/}
            {/* <div className='pb-2'>
              <h3 className='text-center p-1 font-bold bg-gray-500 text-white print:mx-2'>Information</h3>
              <div className='print:grid grid-cols-2 gap-x-8 print:text-sm'>
                <Info text='Version' value={product?.version} unit=''/>
                <Info text='Packet Weight' value={product?.packetWeight} unit='gm'/>
                <Info text='Packet Per Carton' value={product?.packetPerCarton}q unit='Packet'/>
                <Info text='Process Loss' value={product?.processLoss} unit='%'/>
                <Info text='Foil Weight' value={product?.foilWeight} unit='gm'/>
                <Info text='Carton Per Batch' value={carton.toFixed(2)} unit=''/>
              </div>
            </div> */}

            {/*===================== ingredient list area ===================*/}
            {/* <div className='consumption space-y-2'>
                <div className="heading print:px-2">
                    <p className="name">Ingredients</p>
                    <p>Quantity (kg)</p>
                </div>
                <div className='space-y-2 print:px-2 print:pb-2'>
                  {
                    product?.ingredients?.map((ingredient)=><div key={ingredient.code_name} className={ingredient.quantity == 0 ? `hidden` : `w-full flex justify-between py-2 print:py-0 border-b print:border-gray-500 items-center rounded print:rounded-none hover:bg-gray-500 hover:text-white transition-all duration-300 hover:scale-[1.02] print:text-sm`}>
                    <label htmlFor="" className='w-3/4 pl-2 print:pl-0'>{ingredient.name}</label>
                      <div className='w-1/4 text-center'>
                        {
                          Number(ingredient.quantity)  == 0 ? "-" : ingredient.quantity
                        }
                      </div>
                    </div>)
                  }
                </div>
                <div className='mt-10 border print:border-gray-500 shadow print:shadow-none rounded-md print:text-sm print:mx-2'>
                    <p className='flex justify-between p-2 print:px-2 print:py-0.5'>
                      <span className='w-3/4'>Total Input</span>
                      <span className='w-1/4 text-center'> {total}</span>
                    </p>
                    <p className='flex justify-between p-2 print:px-2 print:py-0.5 border-b print:border-0'>
                      <span className='w-3/4'>Process Loss ({product?.processLoss}%)</span>
                      <span className='w-1/4 text-center'>{processLoss}</span>
                    </p>
                    <p className='flex justify-between p-2 print:px-2 print:py-0.5'>
                      <span className='w-3/4'>Total Output</span>
                      <span className='w-1/4 text-center'>{output}</span>
                    </p>
                  </div>
            </div> */}
          </div>}
        </div>
      </div>
    </div>
  )
}
