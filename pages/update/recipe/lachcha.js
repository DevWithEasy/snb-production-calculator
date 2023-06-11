import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import RmUpdate from "../../../components/RmUpdate";
import UpdateInput from "../../../components/UpdateInput";
import { db } from "../../../database/conncetDB";


export async function getServerSideProps(){
    const q= query(collection(db,'products'),where('section','==', 'Lachcha'))
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
    const {version,packetWeight,packetPerCarton,processLoss,master_poly_24_22_5,foilWeight} = oldProduct
    const {flourGrade_A,flourGrade_B,palmOilSuper,starchPowder,daldaHardPUSTI,ghee,gheeFlavour,tbhq} = oldIngredients

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
                                    label:'Master Poly 24"x22.5"',
                                    name:"master_poly_24_22_5",
                                    value : master_poly_24_22_5,
                                    product,
                                    setProduct
                                }}/>
                            </div>
                            <div className="heading">
                                <p className="name">Ingredients</p>
                                <p>Quantity</p>
                            </div>
                            <div className="space-y-2">
                                <RmUpdate label='Flour A Grade' name='flourGrade_A' value={flourGrade_A} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Flour B Grade' name='flourGrade_B' value={flourGrade_B} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Palm Oil Super' name='palmOilSuper' value={palmOilSuper} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Starch Powder' name='starchPowder' value={starchPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Dalda Hard Pusti' name='daldaHardPUSTI' value={daldaHardPUSTI} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Ghee' name='ghee' value={ghee} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Ghee Flavour' name='gheeFlavour' value={gheeFlavour} ingredients={ingredients} setIngredients={setIngredients}/>
                                
                                <RmUpdate label='TBHQ' name='tbhq' value={tbhq} ingredients={ingredients} setIngredients={setIngredients}/>
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