import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import RmUpdate from "../../../components/RmUpdate";
import UpdateInput from "../../../components/UpdateInput";
import { db } from "../../../database/conncetDB";


export async function getServerSideProps(){
    const q= query(collection(db,'products'),where('section','==', 'Bakery'))
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
    const {version,packetWeight,packetPerCarton,processLoss,innerPoly,foilWeight,dryCakepaper} = oldProduct
    const {
        ammonium,
        bakingPowder,
        blackCumin,
        breadImprover,
        butterFlavourSM,
        cakeGel,
        chocolateChips,
        chocolateFlavourSYMRISE,
        chocolatePaste,
        cocoaPowder_4011,
        condencedMilkFlavour,
        daldaHardPUSTI,
        daldaSoftHILSA,
        egg,
        eggYellowColour,
        flourGrade_A,
        flourGrade_B,
        flourGrade_C,
        ghee,
        gheeFlavour,
        glucosePowder,
        lemonYellowColour,
        skimMilkPowder,
        milkFlavourKH,
        monoSaccharine,
        palmOilSuper,
        superSalt,
        sodiumAcidPyroPhosphet,
        sodiumBiCarbonate,
        starchPowder,
        sugar,
        tbhq,
        vanilinPowderFlavour,
        xanthemGum,
        yeast
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

                                <UpdateInput label='Inner Poly' name='innerPoly' value={innerPoly} product={product} setProduct={setProduct}/>

                                <UpdateInput label='Foil Weight' name='foilWeight' value={foilWeight} product={product} setProduct={setProduct}/>

                                <UpdateInput label='Dry Cake Paper' name='dryCakepaper' value={dryCakepaper} product={product} setProduct={setProduct}/>
                            </div>
                            <div className="heading">
                                <p className="name">Ingredients</p>
                                <p>Quantity</p>
                            </div>
                            <div className="space-y-2">
                                <RmUpdate label='Ammonium' name='ammonium' value={ammonium} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Baking Powder' name='bakingPowder' value={bakingPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Black Cumin' name='blackCumin' value={blackCumin} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Bread Improver' name='breadImprover' value={breadImprover} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Butter Flavour SM' name='butterFlavourSM' value={butterFlavourSM} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Cake Gel' name='cakeGel' value={cakeGel} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Chocolate Chips' name='chocolateChips' value={chocolateChips} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Chocolate Flavour SYMRISE' name='chocolateFlavourSYMRISE' value={chocolateFlavourSYMRISE} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Chocolate Paste' name='chocolatePaste' value={chocolatePaste} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Cocoa Powder 4011' name='cocoaPowder_4011' value={cocoaPowder_4011} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Condenced Milk Flavour' name='condencedMilkFlavour' value={condencedMilkFlavour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Dalda Hard PUSTI' name='daldaHardPUSTI' value={daldaHardPUSTI} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Dalda Soft HILSA' name='daldaSoftHILSA' value={daldaSoftHILSA} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Egg' name='egg' value={egg} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Egg Yellow Colour' name='eggYellowColour' value={eggYellowColour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Flour A grade' name='flourGrade_A' value={flourGrade_A} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Flour B grade' name='flourGrade_B' value={flourGrade_B} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Flour C grade' name='flourGrade_C' value={flourGrade_C} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Ghee' name='ghee' value={ghee} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Ghee Flavour' name='gheeFlavour' value={gheeFlavour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Glucose Powder' name='glucosePowder' value={glucosePowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Lemon Yellow Colour' name='lemonYellowColour' value={lemonYellowColour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Skim Milk Powder' name='skimMilkPowder' value={skimMilkPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Milk Flavour KH' name='milkFlavourKH' value={milkFlavourKH} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Mono Saccharine' name='monoSaccharine' value={monoSaccharine} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Palm Oil Super' name='palmOilSuper' value={palmOilSuper} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Super Salt' name='superSalt' value={superSalt} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sodium Acid Pyro Phosphet' name='sodiumAcidPyroPhosphet' value={sodiumAcidPyroPhosphet} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sodium Bi Carbonate' name='sodiumBiCarbonate' value={sodiumBiCarbonate} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Starch Powder' name='starchPowder' value={starchPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sugar' name='sugar' value={sugar} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='TBHQ' name='tbhq' value={tbhq} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Vanilin Powder Flavour' name='vanilinPowderFlavour' value={vanilinPowderFlavour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Xanthem Gum' name='xanthemGum' value={xanthemGum} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Yeast' name='yeast' value={yeast} ingredients={ingredients} setIngredients={setIngredients}/>
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