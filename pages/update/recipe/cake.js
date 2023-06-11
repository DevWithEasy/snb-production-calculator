import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import RmUpdate from "../../../components/RmUpdate";
import UpdateInput from "../../../components/UpdateInput";
import { db } from "../../../database/conncetDB";


export async function getServerSideProps(){
    const q= query(collection(db,'products'),where('section','==', 'Cake'))
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
    const {version,packetWeight,packetPerCarton,processLoss,foilWeight} = oldProduct
    const {
        vanilinPowder,
        butterOilSubstitute,
        cakeGel,
        chocolateBrownColour_6059,
        chocolateFlavourSYMRISE,
        chocolatePaste,
        citricAcidMono,
        egg,
        flourGrade_B,
        flourGrade_C,
        glycerine,
        isopropylAlcohol,
        milkFlavourKing,
        paraffinOil,
        potassiumSorbate,
        superSalt,
        skimMilkPowder,
        sorbitol,
        soyaLecithine,
        sugar,
        palmOilSuper,
        tbhq,
        vanilaFlavourFORZONE,
        xanthemGum,
        sodiumAcidpyroPhosphet,
        sodiumBiCarbonate,
        starchPowder
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
                                <UpdateInput {...{
                                    label:'Version',
                                    name:"version",
                                    value : version,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label:'Packet Weight',
                                    name:"packetWeight",
                                    value : packetWeight,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label:'Packet Per Carton',
                                    name:"packetPerCarton",
                                    value : packetPerCarton,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label:'Process Loss',
                                    name:"processLoss",
                                    value : processLoss,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label:'Foil Weight',
                                    name:"foilWeight",
                                    value : foilWeight,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label:'Shrink Outer Poly',
                                    name:"shrink_outer_poly",
                                    value : shrink_outer_poly,
                                    product,
                                    setProduct
                                }}/>
                            </div>
                            <div className="heading">
                                <p className="name">Ingredients</p>
                                <p>Quantity</p>
                            </div>
                            <div className="space-y-2">
                                <RmUpdate label='Vanilin Powder' name='vanilinPowder' value={vanilinPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Butter Oil Substitute' name='butterOilSubstitute' value={butterOilSubstitute} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Cake Gel' name='cakeGel' value={cakeGel} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Chocolate Brown Colour 6059' name='chocolateBrownColour_6059' value={chocolateBrownColour_6059} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Chocolate Flavour SYMRISE' name='chocolateFlavourSYMRISE' value={chocolateFlavourSYMRISE} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Chocolate Paste' name='chocolatePaste' value={chocolatePaste} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Citric Acid Mono' name='citricAcidMono' value={citricAcidMono} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Egg' name='egg' value={egg} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Flour B Grade' name='flourGrade_B' value={flourGrade_B} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Flour C grade' name='flourGrade_C' value={flourGrade_C} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Glycerine' name='glycerine' value={glycerine} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Isopropyl Alcohol' name='isopropylAlcohol' value={isopropylAlcohol} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Milk Flavour King' name='milkFlavourKing' value={milkFlavourKing} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Paraffin Oil' name='paraffinOil' value={paraffinOil} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Potassium Sorbate' name='potassiumSorbate' value={potassiumSorbate} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Super Salt' name='superSalt' value={superSalt} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Skim Milk Powder' name='skimMilkPowder' value={skimMilkPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sorbitol' name='sorbitol' value={sorbitol} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Soya Lecithine' name='soyaLecithine' value={soyaLecithine} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sugar' name='sugar' value={sugar} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Palm Oil Super' name='palmOilSuper' value={palmOilSuper} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='TBHQ' name='tbhq' value={tbhq} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Vanila Flavour FORZONE' name='vanilaFlavourFORZONE' value={vanilaFlavourFORZONE} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Xanthem Gum' name='xanthemGum' value={xanthemGum} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sodium Acid pyro Phosphet' name='sodiumAcidpyroPhosphet' value={sodiumAcidpyroPhosphet} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sodium Bi Carbonate' name='sodiumBiCarbonate' value={sodiumBiCarbonate} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Starch Powder' name='starchPowder' value={starchPowder} ingredients={ingredients} setIngredients={setIngredients}/>
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