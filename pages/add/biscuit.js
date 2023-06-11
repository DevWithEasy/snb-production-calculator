import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import Head from "next/head";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ProductInput from "../../components/ProductInput";
import RmInput from "../../components/RmInput";
import { db } from "../../database/conncetDB";
import handleInput from "../../utils/handleInput";

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

export default function AddLachcha({products}){
    const [product,setProduct] = useState({
        id : '',
        version :'',
        name: "",
        section: "Biscuit",
        packetWeight: 0,
        packetPerCarton: 0,
        processLoss : 0,
        foilWeight : 0,
    })
    const [ingredients,setIngredients] = useState({
        ammonium : 0,
        blackCumin : 0,
        bitSalt : 0,
        butterFlavourSK : 0,
        butterFlavourSYMEGA : 0,
        butterSolid : 0,
        butterOilSubstitute : 0,
        chocolateBrownColour_815 : 0,
        aspertem : 0,
        chocolateFlavourKH : 0,
        calciumCarbonate : 0,
        crakerEnzyme : 0,
        citricAcidMono : 0,
        cocoaPowderBlack_910 : 0,
        daldaSoftHILSA : 0,
        cardamonFlavour : 0,
        flourGrade_A : 0,
        flourGrade_B : 0,
        flourGrade_C : 0,
        glucosePowder : 0,
        lemonFlavour : 0,
        lemonYellowColour : 0,
        soyaLecithine : 0,
        liquidGlucose : 0,
        milkFlavourKH : 0,
        orangeFlavour : 0,
        onionFlavourGreen : 0,
        onionFlavourSYMEGA : 0,
        onionPowder : 0,
        palmOilSuper : 0,
        pineappleFlavour : 0,
        palmCornOil : 0,
        superSalt : 0,
        sodiumAcidpyroPhosphet : 0,
        skimMilkPowder : 0,
        sodiumMetaBiSulphate : 0,
        sodiumBiCarbonate : 0,
        starchPowder : 0,
        sugar : 0, 
        testingSalt : 0,
        tbhq : 0,
        vanilinPowder : 0,
        onionChieves : 0,
        coconutFlavour : 0,
        buttaBellyFlavour : 0,
        coconutPowder : 0
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
                <title>Biscuit Add Product</title>
                <meta name="description" content="Biscuit Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Biscuit Add Product</h3>
                
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

                        <ProductInput {...{
                            label:'Version',
                            name:"version",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Packet Weight',
                            name:"packetWeight",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Packet Per Carton',
                            name:"packetPerCarton",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Process Loss',
                            name:"processLoss",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Foil Weight',
                            name:"foilWeight",
                            product,
                            setProduct
                        }}/>

                        <div className="heading">
                            <p className="name">Ingredients</p>
                            <p>Quantity</p>
                        </div>
                        <div className="space-y-2">
                            <RmInput name={'Ammonium Bi Carbonate'} ingredient={'ammonium'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Black Cumin'} ingredient={'blackCumin'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Bit Salt'} ingredient={'bitSalt'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Butter Flavour SK'} ingredient={'butterFlavourSK'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Butter Flavour SYMEGA'} ingredient={'butterFlavourSYMEGA'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Butter Solid'} ingredient={'butterSolid'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Butter Oil Substitute'} ingredient={'butterOilSubstitute'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Chocolate Brown Colour 815'} ingredient={'chocolateBrownColour_815'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Chocolate Flavour KH'} ingredient={'chocolateFlavourKH'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Calcium Carbonate'} ingredient={'calciumCarbonate'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Craker Enzyme'} ingredient={'crakerEnzyme'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Citric Acid Mono'} ingredient={'citricAcidMono'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Cocoa Powder Black 910'} ingredient={'cocoaPowderBlack_910'} ingredients={ingredients} setIngredients={setIngredients}/>
                            
                            <RmInput name={'Dalda Soft HILSA'} ingredient={'daldaSoftHILSA'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Cardamon Flavour'} ingredient={'cardamonFlavour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Flour Grade A'} ingredient={'flourGrade_A'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Flour Grade B'} ingredient={'flourGrade_B'} ingredients={ingredients} setIngredients={setIngredients}/>
                            
                            <RmInput name={'Flour Grade C'} ingredient={'flourGrade_C'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Glucose Powder'} ingredient={'glucosePowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Lemon Flavour'} ingredient={'lemonFlavour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Lemon Yellow Colour'} ingredient={'lemonYellowColour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Soya Lecithine'} ingredient={'soyaLecithine'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Liquid Glucose'} ingredient={'liquidGlucose'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Milk Flavour KH'} ingredient={'milkFlavourKH'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Orange Flavour'} ingredient={'orangeFlavour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Onion Flavour Green'} ingredient={'onionFlavourGreen'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Onion Flavour SYMEGA'} ingredient={'onionFlavourSYMEGA'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Onion Powder'} ingredient={'onionPowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Palm Oil Super'} ingredient={'palmOilSuper'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Pineapple Flavour'} ingredient={'pineappleFlavour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Palm Corn Oil'} ingredient={'palmCornOil'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Super Salt'} ingredient={'superSalt'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Sodium Acid Pyro Phosphet'} ingredient={'sodiumAcidpyroPhosphet'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Skim Milk Powder'} ingredient={'skimMilkPowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Sodium Meta Bi Sulphate'} ingredient={'sodiumMetaBiSulphate'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Sodium Bi Carbonate'} ingredient={'sodiumBiCarbonate'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Starch Powder'} ingredient={'starchPowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Sugar'} ingredient={'sugar'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Testing Salt'} ingredient={'testingSalt'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'TBHQ'} ingredient={'tbhq'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Vanilin Powder'} ingredient={'vanilinPowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Onion Chieves'} ingredient={'onionChieves'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Coconut Flavour'} ingredient={'coconutFlavour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Butta Belly Flavour'} ingredient={'buttaBellyFlavour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Coconut Powder'} ingredient={'coconutPowder'} ingredients={ingredients} setIngredients={setIngredients}/>
                        </div>
                        <button onClick={()=>addProduct()}>Add Product</button>
                </div>
            </div>
        </div>
    )
}