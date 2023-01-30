import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import RmUpdate from "../../../components/RmUpdate";
import UpdateInput from "../../../components/UpdateInput";
import { db } from "../../../database/conncetDB";


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

export default function AddProduct({products}){
    const router = useRouter()
    const [name,setName] = useState('')
    const [product,setProduct] = useState({})
    const [ingredients,setIngredients] = useState({});

    const [oldProduct,setOldProduct] = useState({})
    const [oldIngredients,setOldIngredients] = useState({});
    const {version,packetWeight,packetPerCarton,processLoss,innerPoly,masterPoly,foilWeight} = oldProduct
    const {
        turmeric,
        cinamon,
        testingSalt,
        redChili,
        nutMug,
        cumin,
        blackPepper,
        clove,
        cardamon,
        cuminSweet,
        bitSalt,
        ginger,
        riceFlask,
        sodiumBiCarbonate,
        rawPeanut,
        lentil,
        saltSuper,
        palmOilSuper,
        anchorDal,
        pea,
        skimMilkPowder,
        sugar,
        citricAcidAno,
        mugDal,
        appleGreenColour,
        tapiocaStarch,
        onionPowder,
        garlicPowder,
        jwainMasala,
        riceAtop,
        lemonYellowColour,
        tbhq,
        bbq
    } = oldIngredients

    useEffect(()=>{
        async function getUpdateRecipe(name){
            const info_query= query(collection(db,'products_info'),where('id','==', name))
            const docs = await getDocs(info_query)
            const products = [];
            docs.forEach(data => products.push(data.data()));
            if(products.length){
                const ingredientRef = doc(db,'products_recipe',products[0].id)
                const ingredients = await getDoc(ingredientRef)
                //set product info
                setProduct(products[0])
                setOldProduct(products[0])
                //set ingredients
                setIngredients(ingredients.data())
                setOldIngredients(ingredients.data())
            }
        }
        getUpdateRecipe(name)
      },[name])

    async function updateProduct(){
        const infoRef = doc(db, "products_info", product.id);
        await updateDoc(infoRef, product);
        const recipeRef = doc(db, "products_recipe", product.id);
        await updateDoc(recipeRef, ingredients);
        toast.success('Product update Successfully')
        // e.target.reset()
        // router.push(`/add_product/lachcha`)
    }
    async function updateProductVerson(){
        const infoRef = doc(db, "products_info", product.id);
        await updateDoc(infoRef, product);
        const recipeRef = doc(db, "products_recipe", product.id);
        await updateDoc(recipeRef, ingredients);
        await setDoc(doc(db,'all_version_recipes',("V"+"_"+product.version+"_"+product.id)),{...product,ingredients : ingredients,changedAt: Date.now()})
        toast.success('Product update Successfully')
        // e.target.reset()
        // router.push(`/add_product/lachcha`)
    }
    console.log(ingredients);
    return(
        <div className="add_product">
            <Head>
                <title>Lachcha Add Product</title>
                <meta name="description" content="Lachcha Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Lachcha Update Product</h3>
                
                <div className="ingredients">
                        <div className="input">
                            <label htmlFor="">Product Name</label>
                            <select name="name"  onChange={(e)=>setName(e.target.value)}>
                                <option value="">Select Name</option>
                                    {
                                        products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)
                                    }
                            </select>
                        </div>
                        {product?.name && <div className="space-y-2">
                            <div className="space-y-2">
                                <UpdateInput label='Version' name='version' value={version} product={product} setProduct={setProduct}/>

                                <UpdateInput label='Packet Weight' name='packetWeight' value={packetWeight} product={product} setProduct={setProduct}/>

                                <UpdateInput label='Packet Per Carton' name='packetPerCarton' value={packetPerCarton} product={product} setProduct={setProduct}/>

                                <UpdateInput label='Process Loss' name='processLoss' value={processLoss} product={product} setProduct={setProduct}/>

                                <UpdateInput label='Foil Weight' name='foilWeight' value={foilWeight} product={product} setProduct={setProduct}/>

                                <UpdateInput label='Inner poly' name='innerPoly' value={innerPoly} product={product} setProduct={setProduct}/>

                                <UpdateInput label='Master Poly' name='masterPoly' value={masterPoly} product={product} setProduct={setProduct}/>
                            </div>
                            <div className="heading">
                                <p className="name">Ingredients</p>
                                <p>Quantity</p>
                            </div>
                            <div className="space-y-2">
                                <RmUpdate label='Turmeric' name='turmeric' value={turmeric} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Cinamon' name='cinamon' value={cinamon} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Testing Salt' name='testingSalt' value={testingSalt} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Red Chili' name='redChili' value={redChili} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Nut Mug' name='nutMug' value={nutMug} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Cumin' name='cumin' value={cumin} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Black Pepper' name='blackPepper' value={blackPepper} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Clove' name='clove' value={clove} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Cardamon' name='cardamon' value={cardamon} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Cumin Sweet' name='cuminSweet' value={cuminSweet} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Bit Salt' name='bitSalt' value={bitSalt} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Ginger' name='ginger' value={ginger} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Rice Flask' name='riceFlask' value={riceFlask} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sodium Bi Carbonate' name='sodiumBiCarbonate' value={sodiumBiCarbonate} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Raw Peanut' name='rawPeanut' value={rawPeanut} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Lentil' name='lentil' value={lentil} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Salt Super' name='saltSuper' value={saltSuper} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Palm Oil Super' name='palmOilSuper' value={palmOilSuper} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Anchor Dal' name='anchorDal' value={anchorDal} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Pea' name='pea' value={pea} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Skim Milk Powder' name='skimMilkPowder' value={skimMilkPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sugar' name='sugar' value={sugar} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Citric Acid Ano' name='citricAcidAno' value={citricAcidAno} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Mug Dal' name='mugDal' value={mugDal} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Apple Green Colour' name='appleGreenColour' value={appleGreenColour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Tapioca Starch' name='tapiocaStarch' value={tapiocaStarch} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Onion Powder' name='onionPowder' value={onionPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Garlic Powder' name='garlicPowder' value={garlicPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Jwain Masala' name='jwainMasala' value={jwainMasala} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Rice Atop' name='riceAtop' value={riceAtop} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Lemon Yellow Colour' name='lemonYellowColour' value={lemonYellowColour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='TBHQ' name='tbhq' value={tbhq} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='BBQ' name='bbq' value={bbq} ingredients={ingredients} setIngredients={setIngredients}/>
                            </div>
                            <button onClick={()=>updateProduct()}>Update Product</button>
                            <br/>
                            <button onClick={()=>updateProductVerson()}>Update Product & Change Version</button>
                        </div>}
                </div>
            </div>
        </div>
    )
}