import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import UpdateInput from "../../../components/ProductInputUpdate";
import RmUpdate from "../../../components/RmUpdate";
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

    useEffect(()=>{
        async function getUpdateRecipe(name){
            const info_query= query(collection(db,'products_info'),where('id','==', name))
            const docs = await getDocs(info_query)
            const products = [];
            docs.forEach(data => products.push(data.data()));
            if(products.length){
                const ingredientRef = doc(db,'products_recipe',products[0].id)
                const ingredients = await getDoc(ingredientRef)
                setProduct(products[0])
                setIngredients(ingredients.data())
            }
        }
        getUpdateRecipe(name)
      },[name])

    async function addProduct(){
        if(!data) return toast.error('Select a product name.')
        await setDoc(doc(db,'products_info',data.id),{...product,id:data.id})
        await setDoc(doc(db,'products_recipe',data.id),ingredients)
        toast.success('Product Added Successfully')
        // e.target.reset()
        // router.push(`/add_product/lachcha`)
        
    }
    console.log(product);
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
                                <UpdateInput label='Version' name='version' value={product?.version} product={product} setProduct={setProduct}/>
                                <UpdateInput label='Packet Weight' name='packetWeight' value={product?.packetWeight} product={product} setProduct={setProduct}/>
                                <UpdateInput label='Packet Per Carton' name='packetPerCarton' value={product?.packetPerCarton} product={product} setProduct={setProduct}/>
                                <UpdateInput label='Process Loss' name='processLoss' value={product?.processLoss} product={product} setProduct={setProduct}/>
                                <UpdateInput label='Master Poly Weight' name='masterPoly' value={product?.masterPoly} product={product} setProduct={setProduct}/>
                                <UpdateInput label='Foil Weight' name='foilWeight' value={product?.foilWeight} product={product} setProduct={setProduct}/>
                            </div>
                            <div className="heading">
                                <p className="name">Ingredients</p>
                                <p>Quantity</p>
                            </div>
                            <div className="space-y-2">
                                <RmUpdate label='Flour A Grade' name='flourGrade_A' value={ingredients?.flourGrade_A} ingredients={ingredients} setIngredients={setIngredients}/>
                                <RmUpdate label='Flour B Grade' name='flourGrade_B' value={ingredients?.flourGrade_B} ingredients={ingredients} setIngredients={setIngredients}/>
                                <RmUpdate label='Palm Oil Super' name='palmOilSuper' value={ingredients?.palmOilSuper} ingredients={ingredients} setIngredients={setIngredients}/>
                                <RmUpdate label='Starch Powder' name='starchPowder' value={ingredients?.starchPowder} ingredients={ingredients} setIngredients={setIngredients}/>
                                <RmUpdate label='Dalda Hard Pusti' name='daldaHardPUSTI' value={ingredients?.daldaHardPUSTI} ingredients={ingredients} setIngredients={setIngredients}/>
                                <RmUpdate label='Ghee' name='ghee' value={ingredients?.ghee} ingredients={ingredients} setIngredients={setIngredients}/>
                                <RmUpdate label='Ghee Flavour' name='gheeFlavour' value={ingredients?.gheeFlavour} ingredients={ingredients} setIngredients={setIngredients}/>
                                <RmUpdate label='TBHQ' name='tbhq' value={ingredients?.tbhq} ingredients={ingredients} setIngredients={setIngredients}/>
                            </div>
                            <button >Add Product</button>
                        </div>}
                </div>
            </div>
        </div>
    )
}