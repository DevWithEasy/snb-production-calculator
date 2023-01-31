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

export default function AddLachcha({products}){
    const router = useRouter()
    const [product,setProduct] = useState({
        id : '',
        version :'',
        name: "",
        section: "Lachcha",
        packetWeight: 0,
        packetPerCarton: 0,
        processLoss : 0,
        innerFoil: 0,
        foilWeight : 0,
    })
    const [ingredients,setIngredients] = useState({
    });
    const data = products.find(item => item.name == product.name)

    async function addProduct(){
        if(!data) return toast.error('Select a product name.')
        await setDoc(doc(db,'products_info',data.id),{...product,id:data.id})
        await setDoc(doc(db,'products_recipe',data.id),ingredients)
        toast.success('Product Added Successfully')
    }
    console.log(product);
    return(
        <div className="add_product">
            <Head>
                <title>Water Add Product</title>
                <meta name="description" content="Water Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Water Add Product</h3>
                
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
                            <RmInput name={''} ingredient={'flourGrade_A'} ingredients={ingredients} setIngredients={setIngredients}/>
                        </div>
                        <button onClick={()=>addProduct()}>Add Product</button>
                </div>
            </div>
        </div>
    )
}