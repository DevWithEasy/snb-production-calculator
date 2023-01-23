import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Info from '../../components/Info';
import PrintHeader from '../../components/PrintHeader';
import RmView from '../../components/RmView';
import { db } from '../../database/conncetDB';



export async function getServerSideProps(){
    const q= query(collection(db,'products'),where('section','==', 'Snacks'))
    const docs = await getDocs(q)
    const products = [];
    docs.forEach(data => products.push(data.data()));
  return({
    props : {
        products
    }
  })
}

export default function Raw({products}) {
  const printRef = useRef()
  const [name,setName] = useState('')
  const [product,setProduct] = useState({})

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

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle : product?.name + " [Version-"+product?.version+"]"
  });
  function ingredientsArray(ingredients){
    const keys = Object.keys(ingredients)
    const array = keys.map(key =>{
      return {[key] : ingredients[key] }
    })
    return array
  }

  function totalInput(ingredients){
    const keys = Object.values(ingredients)
    const total = keys.reduce((a,i)=>a+i,0).toFixed(2)
    return total
  }

  function totalProcessLoss(totalInput,percent){
    return (totalInput*percent/100).toFixed(2)
  }

  function totalOutput(totalInput,totalProcessLoss){
    return (totalInput-totalProcessLoss).toFixed(2)
  }

  function totalCarton(totalOutput,packetWeight,packetPerCarton){
    return (totalOutput/(packetWeight/1000)/packetPerCarton).toFixed(2)
  }


  let ingredients
  if(product?.ingredients) ingredients = ingredientsArray(product?.ingredients)

  let total
  if(product?.ingredients) total = totalInput(product?.ingredients)

  let processLoss
  if(total)  processLoss = totalProcessLoss(total,product?.processLoss)

  let output
  if(processLoss) output = totalOutput(total,processLoss)
  let carton
  if(output) carton = totalCarton(output,product?.packetWeight,product?.packetPerCarton)

  console.log(product);
  return (
    <div className='raw-consumption '>
      <Head>
        <title>Check your recipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='raw print:mx-12' ref={printRef}>
        <PrintHeader/>
        <div>
          <h1 className=' relative py-1 bg-gray-500 text-white text-xl text-center font-bold print:mx-2'>
            Recipe
            {product?.name && <button onClick={()=>handlePrint()} className="absolute right-2 print:hidden"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
              </svg>
            </button>}
          </h1>
          {/* =================selection area====================== */}
          <div className='space-y-2 py-2 print:space-y-0 print:flex justify-between print:space-x-4 print:p-2 print:text-sm'>
            <div className="input">
                <label htmlFor="">Product Name :</label>
                <select name="name"  onChange={(e)=>setName(e.target.value)}>
                      <option value="">{products.length > 0 ? 'Select Name' : ''}</option>
                      {
                        products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)
                      }
                  </select>
            </div>
          </div>

          {product?.ingredients && <div className='recipe-area'>
            {/*===================== short info area ===================*/}
            <div className='pb-2'>
              <h3 className='text-center p-1 font-bold bg-gray-500 text-white print:mx-2'>Information</h3>
              <div className='print:grid grid-cols-2 gap-x-8 print:text-sm'>
                <Info text='Version' value={product?.version} unit=''/>
                <Info text='Packet Weight' value={product?.packetWeight} unit='gm'/>
                <Info text='Packet Per Carton' value={product?.packetPerCarton}q unit='Packet'/>
                <Info text='Process Loss' value={product?.processLoss} unit='%'/>
                <Info text='Foil Weight' value={product?.foilWeight} unit='gm'/>
                <Info text='Inner Foil Weight' value={product?.innerFoil} unit='gm'/>
                <Info text='Carton Per Batch' value={carton} unit=''/>
              </div>
            </div>

            {/*===================== ingredient list area ===================*/}
            <div className='consumption space-y-2'>
                <div className="heading print:px-2">
                    <p className="name">Ingredients</p>
                    <p>Quantity (kg)</p>
                </div>
                <div className='space-y-2 print:px-2 print:pb-2'>
                  <RmView name='Turmeric' ingredient={product?.ingredients?.turmeric}/>

                  <RmView name='Cinamon' ingredient={product?.ingredients?.cinamon}/>

                  <RmView name='Testing Salt' ingredient={product?.ingredients?.testingSalt}/>

                  <RmView name='Red Chili' ingredient={product?.ingredients?.redChili}/>

                  <RmView name='Nut Mug' ingredient={product?.ingredients?.nutMug}/>

                  <RmView name='Cumin' ingredient={product?.ingredients?.cumin}/>

                  <RmView name='Black Pepper' ingredient={product?.ingredients?.blackPepper}/>

                  <RmView name='Clove' ingredient={product?.ingredients?.clove}/>

                  <RmView name='Cardamon' ingredient={product?.ingredients?.cardamon}/>

                  <RmView name='Cumin Sweet' ingredient={product?.ingredients?.cuminSweet}/>

                  <RmView name='Bit Salt' ingredient={product?.ingredients?.bitSalt}/>
                  
                  <RmView name='Ginger' ingredient={product?.ingredients?.ginger}/>

                  <RmView name='Rice Flask' ingredient={product?.ingredients?.riceFlask}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={product?.ingredients?.sodiumBiCarbonate}/>

                  <RmView name='Raw Peanut' ingredient={product?.ingredients?.rawPeanut}/>

                  <RmView name='Lentil' ingredient={product?.ingredients?.lentil}/>

                  <RmView name='Salt' ingredient={product?.ingredients?.salt}/>

                  <RmView name='Palm Oil Super' ingredient={product?.ingredients?.palmOilSuper}/>

                  <RmView name='Anchor Dal' ingredient={product?.ingredients?.anchorDal}/>

                  <RmView name='Pea' ingredient={product?.ingredients?.pea}/>

                  <RmView name='Skim Milk Powder' ingredient={product?.ingredients?.skimMilkPowder}/>

                  <RmView name='Sugar' ingredient={product?.ingredients?.sugar}/>

                  <RmView name='Citric Acid Ano' ingredient={product?.ingredients?.citricAcidAno}/>

                  <RmView name='Mug Dal' ingredient={product?.ingredients?.mugDal}/>

                  <RmView name='Apple Green Colour' ingredient={product?.ingredients?.appleGreenColour}/>

                  <RmView name='Tapioca Starch' ingredient={product?.ingredients?.tapiocaStarch}/>

                  <RmView name='Onion Powder' ingredient={product?.ingredients?.onionPowder}/>

                  <RmView name='Garlic Powder' ingredient={product?.ingredients?.garlicPowder}/>

                  <RmView name='Jwain Masala' ingredient={product?.ingredients?.jwainMasala}/>

                  <RmView name='Rice Atop' ingredient={product?.ingredients?.riceAtop}/>

                  <RmView name='Lemon Yellow Colour' ingredient={product?.ingredients?.lemonYellowColour}/>

                  <RmView name='TBHQ' ingredient={product?.ingredients?.tbhq}/>

                  <RmView name='BBQ' ingredient={product?.ingredients?.bbq}/>
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
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}