import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import IngredientInput from "../../components/IngredientInput";
import ProductInput from "../../components/ProductInput";
import { db } from "../../database/conncetDB";
import handleInput from "../../utils/handleInput";
import bakeryProduct from "../../utils/productGenerate/bakery";
import bakery from "../../utils/quantity/bakery";

export async function getServerSideProps(){
    const docs = await getDocs(collection(db,'sections'))
    const sections = [];
    docs.forEach(data => sections.push(data.data()));

    return({
      props : {
        sections
      }
    })
}

export default function AddProduct({sections}){
    const router = useRouter()
    const [products,setProducts] = useState([])
    const [product,setProduct] = useState({
        id: uuidv4(),
        version :'',
        name: "",
        section: "",
        packetWeight: 0,
        packetPerCarton: 0,
        processLoss : 0,
        innerFoilWeight: 0,
        foilWeight : 0,
    })
    const [quantity,setQuantity] = useState(bakery)

    const createProduct = {...product,ingredients : bakeryProduct(quantity)}

    async function productList(e){
        const newValue = {...product}
        newValue[e.target.name] = e.target.value
        setProduct(newValue)
        const q= query(collection(db,'products'),where('section','==', e.target.value))
        const docs = await getDocs(q)
        const products = [];
        docs.forEach(data => products.push(data.data()));
        setProducts(products)
    }
    async function addProduct(e){
        e.preventDefault();
        await setDoc(doc(db,'recipes',createProduct.id),createProduct)
        toast.success('Product Added Successfully')
        e.target.reset()
        router.push(`/add_product/bakery`)
        
    }
    console.log(createProduct);
    return(
        <div className="add_product">
            <div className="ingredient_area">
                <h3>Bakery Add Product</h3>
                
                <div className="ingredients">

                    <form onSubmit={(e)=>addProduct(e)}>
                        <div className="input">
                            <label htmlFor="">Section Name</label>
                            <div>
                                <select name="section" onChange={(e)=>productList(e)}>
                                    <option value="">Select Product</option>
                                    {
                                        sections.map(section => <option key={section.id} value={section.name}>{section.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="">Product Name</label>
                            <div>
                                <select name="name"  onChange={(e)=>handleInput(e,product,setProduct)}>
                                    <option value="">Select Name</option>
                                    {
                                        products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <ProductInput label='Version' name="version" product={product} setProduct={setProduct}/>
                        <ProductInput label='Packet Weight' name="packetWeight" product={product} setProduct={setProduct}/>
                        <ProductInput label='Packet Per Carton' name="packetPerCarton" product={product} setProduct={setProduct}/>
                        <ProductInput label='Process Loss' name="processLoss" product={product} setProduct={setProduct}/>
                        <ProductInput label='Inner Foil Weight' name="innerFoilWeight" product={product} setProduct={setProduct}/>
                        <ProductInput label='Foil Weight' name="foilWeight" product={product} setProduct={setProduct}/>
                        <div className="heading">
                            <p className="name">Ingredients</p>
                            <p>Quantity</p>
                        </div>
                        
                        {
                            createProduct.ingredients.map((ingredient,i)=><IngredientInput key={i} ingredient={ingredient} quantity={quantity} setQuantity={setQuantity}/>)
                        }
                        <button type="submit">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}