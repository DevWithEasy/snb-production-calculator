import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from 'react-hot-toast';
import ProductInput from "../../components/ProductInput";
import RmInput from "../../components/RmInput";
import { db } from "../../database/conncetDB";
import handleInput from "../../utils/handleInput";

export async function getServerSideProps(){
    const q= query(collection(db,'products'),where('section','==', 'Wafer'))
    const docs = await getDocs(q)
    const products = [];
    docs.forEach(data => products.push(data.data()));
    console.log(products);
    return({
      props : {
        products
      }
    })
}

export default function AddWafer({products}){
    const router = useRouter()
    const [product,setProduct] = useState({
        id : '',
        version :'',
        name: "",
        section: "Wafer",
        packetWeight: 0,
        packetPerCarton: 0,
        processLoss : 0,
        foilWeight : 0,
    })
    const [ingredients,setIngredients] = useState({
        chocolateBrownColour_6059 : 0,
        citricAcidMono : 0,
        cocoaPowderBlack_4011 : 0,
        chocolateFlavourKH : 0,
        daldaHardPUSTI : 0,
        flourGrade_A : 0,
        flourGrade_B : 0,
        soyaLecithine : 0,
        milkFlavourKH : 0,
        palmOilSuper : 0,
        superSalt : 0,
        skimMilkPowder : 0,
        sodiumBiCarbonate : 0,
        sodiumMetaBiSulphate : 0,
        starchPowder : 0,
        sugar : 0,
        tbhq : 0,
        vanilaFlavourKH : 0,
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
                <title>Wafer Add Product</title>
                <meta name="description" content="Wafer Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Wafer Add Product</h3>
                
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
                        <div className="heading">
                            <p className="name">Ingredients</p>
                            <p>Quantity</p>
                        </div>
                        <div className="space-y-2">
                            <RmInput name={'Chocolate Brown Colour 6059'} ingredient={'chocolateBrownColour_6059'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Citric Acid Mono'} ingredient={'citricAcidMono'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Cocoa Powder Black 4011'} ingredient={'cocoaPowderBlack_4011'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Chocolate Flavour KH'} ingredient={'chocolateFlavourKH'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Dalda Hard PUSTI'} ingredient={'daldaHardPUSTI'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Flour Grade A'} ingredient={'flourGrade_A'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Flour Grade B'} ingredient={'flourGrade_B'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Soya Lecithine'} ingredient={'soyaLecithine'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Milk Flavour KH'} ingredient={'milkFlavourKH'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Palm Oil Super'} ingredient={'palmOilSuper'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Super Salt'} ingredient={'superSalt'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Skim Milk Powder'} ingredient={'skimMilkPowder'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Sodium Bi Carbonate'} ingredient={'sodiumBiCarbonate'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Sodium Meta Bi Sulphate'} ingredient={'sodiumMetaBiSulphate'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Starch Powder'} ingredient={'starchPowder'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Sugar'} ingredient={'sugar'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'TBHQ'} ingredient={'tbhq'} ingredients={ingredients} setIngredients={setIngredients}/>
                            <RmInput name={'Vanila Flavour KH'} ingredient={'vanilaFlavourKH'} ingredients={ingredients} setIngredients={setIngredients}/>
                        </div>
                        <button onClick={()=>addProduct()}>Add Product</button>
                </div>
            </div>
        </div>
    )
}