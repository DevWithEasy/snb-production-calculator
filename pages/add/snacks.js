import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ProductInput from "../../components/ProductInput";
import RmInput from "../../components/RmInput";
import { db } from "../../database/conncetDB";
import handleInput from "../../utils/handleInput";

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

export default function AddLachcha({products}){
    const [product,setProduct] = useState({
        id : '',
        version :'',
        name: "",
        section: "Snacks",
        packetWeight: 0,
        packetPerCarton: 0,
        processLoss : 0,
        innerPoly: 0,
        masterPoly : 0,
        foilWeight : 0,
    })
    const [ingredients,setIngredients] = useState({
        turmeric : 0,
        cinamon : 0,
        testingSalt : 0,
        redChili : 0,
        nutMug : 0,
        cumin : 0,
        blackPepper : 0,
        clove : 0,
        cardamon : 0,
        cuminSweet : 0,
        bitSalt : 0,
        ginger : 0,
        riceFlask : 0,
        sodiumBiCarbonate : 0,
        rawPeanut : 0,
        lentil : 0,
        saltSuper : 0,
        palmOilSuper : 0,
        anchorDal : 0,
        pea : 0,
        skimMilkPowder : 0,
        sugar : 0,
        citricAcidAno : 0,
        mugDal : 0,
        appleGreenColour : 0,
        tapiocaStarch : 0,
        onionPowder : 0,
        garlicPowder : 0,
        jwainMasala : 0,
        riceAtop : 0,
        lemonYellowColour : 0,
        tbhq : 0,
        bbq : 0
    });
    const data = products.find(item => item.name == product.name)

    async function addProduct(){
        if(!data) return toast.error('Select a product name.')
        await setDoc(doc(db,'products_info',data.id),{...product,id:data.id})
        await setDoc(doc(db,'products_recipe',data.id),ingredients)
        toast.success('Product Added Successfully')
    }
    return(
        <div className="add_product">
            <Head>
                <title>Snacks Add Product</title>
                <meta name="description" content="Snacks Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Snacks Add Product</h3>
                
                <div className="ingredients">
                        <div className="input">
                            <label htmlFor="">Product Name</label>
                            <select name="name"  onChange={(e)=>handleInput(e,product,setProduct)}>
                                <option value="">Select Name</option>
                                    {
                                        products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)
                                    }
                            </select>
                        </div>
                        <ProductInput label='Version' name="version" product={product} setProduct={setProduct}/>
                        <ProductInput label='Packet Weight' name="packetWeight" product={product} setProduct={setProduct}/>
                        <ProductInput label='Packet Per Carton' name="packetPerCarton" product={product} setProduct={setProduct}/>
                        <ProductInput label='Process Loss' name="processLoss" product={product} setProduct={setProduct}/>
                        <ProductInput label='Foil Weight' name="foilWeight" product={product} setProduct={setProduct}/>
                        <ProductInput label='Inner Foil Weight' name="innerFoil" product={product} setProduct={setProduct}/>
                        <div className="heading">
                            <p className="name">Ingredients</p>
                            <p>Quantity</p>
                        </div>
                        <div className="space-y-2">
                            <RmInput name={'Turmeric'} ingredient={'turmeric'} ingredients={ingredients} setIngredients={setIngredients}/>
                            
                            <RmInput name={'Cinamon'} ingredient={'cinamon'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Testing Salt'} ingredient={'testingSalt'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Red Chili'} ingredient={'redChili'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Nut Mug'} ingredient={'nutMug'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Cumin'} ingredient={'cumin'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Black Pepper'} ingredient={'blackPepper'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Clove'} ingredient={'clove'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Cardamon'} ingredient={'cardamon'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Cumin Sweet'} ingredient={'cuminSweet'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Bit Salt'} ingredient={'bitSalt'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Ginger'} ingredient={'ginger'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Rice Flask'} ingredient={'riceFlask'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Sodium Bi Carbonate'} ingredient={'sodiumBiCarbonate'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Raw Peanut'} ingredient={'rawPeanut'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Lentil'} ingredient={'lentil'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Salt Super'} ingredient={'saltSuper'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Palm Oil Super'} ingredient={'palmOilSuper'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Anchor Dal'} ingredient={'anchorDal'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'pea'} ingredient={'pea'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Skim Milk Powder'} ingredient={'skimMilkPowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Sugar'} ingredient={'sugar'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Citric Acid Ano'} ingredient={'citricAcidAno'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Mug Dal'} ingredient={'mugDal'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Apple Green Colour'} ingredient={'appleGreenColour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Tapioca Starch'} ingredient={'tapiocaStarch'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Onion Powder'} ingredient={'onionPowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Garlic Powder'} ingredient={'garlicPowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Jwain Masala'} ingredient={'jwainMasala'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Rice Atop'} ingredient={'riceAtop'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Lemon Yellow Colour'} ingredient={'lemonYellowColour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'TBHQ'} ingredient={'tbhq'} ingredients={ingredients} setIngredients={setIngredients}/>
                            
                            <RmInput name={'BBQ'} ingredient={'bbq'} ingredients={ingredients} setIngredients={setIngredients}/>
                        </div>
                        <button onClick={()=>addProduct()}>Add Product</button>
                </div>
            </div>
        </div>
    )
}