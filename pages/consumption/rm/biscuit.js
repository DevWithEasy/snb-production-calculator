import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import RmViewConsumption from '../../../components/RmViewConsumption';
import { db } from '../../../database/conncetDB';


export async function getServerSideProps(){
    const q= query(collection(db,'products'),where('section','==', 'Biscuit'))
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
                    <RmViewConsumption name='Ammonium Bi Carbonate' ingredient={product?.ingredients?.ammonium} batch={batch}/>

                    <RmViewConsumption name='Black Cumin' ingredient={product?.ingredients?.blackCumin} batch={batch}/>

                    <RmViewConsumption name='Bit Salt' ingredient={product?.ingredients?.bitSalt} batch={batch}/>

                    <RmViewConsumption name='Butter Flavour SK' ingredient={product?.ingredients?.butterFlavourSK} batch={batch}/>

                    <RmViewConsumption name='Butter Flavour SYMEGA' ingredient={product?.ingredients?.butterFlavourSYMEGA} batch={batch}/>

                    <RmViewConsumption name='Butter Solid' ingredient={product?.ingredients?.butterSolid} batch={batch}/>

                    <RmViewConsumption name='Butter Oil Substitute' ingredient={product?.ingredients?.butterOilSubstitute} batch={batch}/>

                    <RmViewConsumption name='Chocolate Brown Colour 815' ingredient={product?.ingredients?.chocolateBrownColour_815} batch={batch}/>

                    <RmViewConsumption name='Aspertem' ingredient={product?.ingredients?.aspertem} batch={batch}/>

                    <RmViewConsumption name='Chocolate Flavour KH' ingredient={product?.ingredients?.chocolateFlavourKH} batch={batch}/>

                    <RmViewConsumption name='Calcium Carbonate' ingredient={product?.ingredients?.calciumCarbonate} batch={batch}/>

                    <RmViewConsumption name='Craker Enzyme' ingredient={product?.ingredients?.crakerEnzyme} batch={batch}/>

                    <RmViewConsumption name='Citric Acid Mono' ingredient={product?.ingredients?.citricAcidMono} batch={batch}/>

                    <RmViewConsumption name='Cocoa Powder Black 910' ingredient={product?.ingredients?.cocoaPowderBlack_910} batch={batch}/>

                    <RmViewConsumption name='Dalda Soft HILSA' ingredient={product?.ingredients?.daldaSoftHILSA} batch={batch}/>

                    <RmViewConsumption name='Cardamon Flavour' ingredient={product?.ingredients?.cardamonFlavour} batch={batch}/>

                    <RmViewConsumption name='Flour Grade A' ingredient={product?.ingredients?.flourGrade_A} batch={batch}/>

                    <RmViewConsumption name='Flour Grade B' ingredient={product?.ingredients?.flourGrade_B} batch={batch}/>

                    <RmViewConsumption name='Flour Grade C' ingredient={product?.ingredients?.flourGrade_C} batch={batch}/>

                    <RmViewConsumption name='Glucose Powder' ingredient={product?.ingredients?.glucosePowder} batch={batch}/>

                    <RmViewConsumption name='Lemon Flavour' ingredient={product?.ingredients?.lemonFlavour} batch={batch}/>

                    <RmViewConsumption name='Lemon Yellow Colour' ingredient={product?.ingredients?.lemonYellowColour} batch={batch}/>

                    <RmViewConsumption name='Soya Lecithine' ingredient={product?.ingredients?.soyaLecithine} batch={batch}/>

                    <RmViewConsumption name='Liquid Glucose' ingredient={product?.ingredients?.liquidGlucose} batch={batch}/>

                    <RmViewConsumption name='Milk Flavour KH' ingredient={product?.ingredients?.milkFlavourKH} batch={batch}/>

                    <RmViewConsumption name='Orange Flavour' ingredient={product?.ingredients?.orangeFlavour} batch={batch}/>

                    <RmViewConsumption name='Onion Flavour Green' ingredient={product?.ingredients?.onionFlavourGreen} batch={batch}/>

                    <RmViewConsumption name='Onion Flavour SYMEGA' ingredient={product?.ingredients?.onionFlavourSYMEGA} batch={batch}/>

                    <RmViewConsumption name='Onion Powder' ingredient={product?.ingredients?.onionPowder} batch={batch}/>

                    <RmViewConsumption name='Palm Oil Super' ingredient={product?.ingredients?.palmOilSuper} batch={batch}/>

                    <RmViewConsumption name='Pineapple Flavour' ingredient={product?.ingredients?.pineappleFlavour} batch={batch}/>

                    <RmViewConsumption name='Palm Corn Oil' ingredient={product?.ingredients?.palmCornOil} batch={batch}/>

                    <RmViewConsumption name='Super Salt' ingredient={product?.ingredients?.superSalt} batch={batch}/>

                    <RmViewConsumption name='Sodium Acid Pyro Phosphet' ingredient={product?.ingredients?.sodiumAcidpyroPhosphet} batch={batch}/>

                    <RmViewConsumption name='Skim Milk Powder' ingredient={product?.ingredients?.skimMilkPowder} batch={batch}/>

                    <RmViewConsumption name='Sodium Meta Bi Sulphate' ingredient={product?.ingredients?.sodiumMetaBiSulphate} batch={batch}/>

                    <RmViewConsumption name='Sodium Bi Carbonate' ingredient={product?.ingredients?.sodiumBiCarbonate} batch={batch}/>

                    <RmViewConsumption name='Starch Powder' ingredient={product?.ingredients?.starchPowder} batch={batch}/>

                    <RmViewConsumption name='Sugar' ingredient={product?.ingredients?.sugar} batch={batch}/>

                    <RmViewConsumption name='Testing Salt' ingredient={product?.ingredients?.testingSalt} batch={batch}/>

                    <RmViewConsumption name='TBHQ' ingredient={product?.ingredients?.tbhq} batch={batch}/>

                    <RmViewConsumption name='Vanilin Powder' ingredient={product?.ingredients?.vanilinPowder} batch={batch}/>

                    <RmViewConsumption name='Onion Chieves' ingredient={product?.ingredients?.onionChieves} batch={batch}/>

                    <RmViewConsumption name='Coconut Flavour' ingredient={product?.ingredients?.coconutFlavour} batch={batch}/>

                    <RmViewConsumption name='Butta Belly Flavour' ingredient={product?.ingredients?.buttaBellyFlavour} batch={batch}/>

                    <RmViewConsumption name='Coconut Powder' ingredient={product?.ingredients?.coconutPowder} batch={batch}/>
                </div>
            </div>
          </div>}
      </div>
    </div>
  )
}
