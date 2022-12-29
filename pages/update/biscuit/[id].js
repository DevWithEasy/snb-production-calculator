import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import UpdateIngredientInput from "../../../components/UpdateIngredientInput";
import UpdateProductInput from "../../../components/UpdateProductInput";
import { db } from "../../../database/conncetDB";
import biscuitProduct from "../../../utils/productGenerate/biscuit";

export async function getServerSideProps(ctx){
    const docRef = doc(db, "recipes", ctx.query.id);
    const docSnap = await getDoc(docRef);

    return{
        props: {
            data : docSnap.data()
        }
    }
}
export default function AddProduct({data}){
    const router = useRouter()
    const [product,setProduct] = useState({
        version : data.version,
        name: data.name,
        section: data.section,
        packetWeight: data.packetWeight,
        packetPerCarton: data.packetPerCarton,
        processLoss : data.processLoss,
        innerFoilWeight: data.innerFoilWeight,
        foilWeight : data.foilWeight,
    })
    const [quantity,setQuantity] = useState({
        ammonium : data.ingredients[0].quantity,
        blackCumin : data.ingredients[1].quantity,
        bitSalt : data.ingredients[2].quantity,
        butterFlavourSK : data.ingredients[3].quantity,
        butterFlavourSYMEGA : data.ingredients[4].quantity,
        butterSolid : data.ingredients[5].quantity,
        butterOilSubstitute : data.ingredients[6].quantity,
        chocolateBrownColour_815 : data.ingredients[7].quantity,
        aspertem : data.ingredients[8].quantity,
        chocolateFlavourKH : data.ingredients[9].quantity,
        calciumCarbonate : data.ingredients[10].quantity,
        crakerEnzyme : data.ingredients[11].quantity,
        citricAcidMono : data.ingredients[12].quantity,
        cocoaPowderBlack_910 : data.ingredients[13].quantity,
        daldaSoftHILSA : data.ingredients[14].quantity,
        cardamonFlavour : data.ingredients[15].quantity,
        flourGrade_A : data.ingredients[16].quantity,
        flourGrade_B : data.ingredients[17].quantity,
        flourGrade_C : data.ingredients[18].quantity,
        glucosePowder : data.ingredients[19].quantity,
        lemonFlavour : data.ingredients[20].quantity,
        lemonYellowColour : data.ingredients[21].quantity,
        soyaLecithine : data.ingredients[22].quantity,
        liquidGlucose : data.ingredients[23].quantity,
        milkFlavourKH : data.ingredients[24].quantity,
        orangeFlavour : data.ingredients[25].quantity,
        onionFlavourGreen : data.ingredients[26].quantity,
        onionFlavourSYMEGA : data.ingredients[27].quantity,
        onionPowder : data.ingredients[28].quantity,
        palmOilSuper : data.ingredients[29].quantity,
        pineappleFlavour : data.ingredients[30].quantity,
        palmCornOil : data.ingredients[31].quantity,
        superSalt : data.ingredients[32].quantity,
        sodiumAcidpyroPhosphet : data.ingredients[33].quantity,
        skimMilkPowder : data.ingredients[34].quantity,
        sodiumMetaBiSulphate : data.ingredients[35].quantity,
        sodiumBiCarbonate : data.ingredients[36].quantity,
        starchPowder : data.ingredients[37].quantity,
        sugar : data.ingredients[38].quantity, 
        testingSalt : data.ingredients[39].quantity,
        tbhq : data.ingredients[40].quantity,
        vanilinPowder : data.ingredients[41].quantity,
        onionChieves : data.ingredients[42].quantity,
        coconutFlavour : data.ingredients[43].quantity,
        buttaBellyFlavour : data.ingredients[44].quantity,
        coconutPowder : data.ingredients[45].quantity
    })

    // const createProduct = {...product,id:product.name.split(" ").join("_"),ingredients : biscuitProduct(quantity)}
    const createProduct = {...product,id:data.id,ingredients : biscuitProduct(quantity)}


    async function updateProduct(e){
        e.preventDefault();
        const docRef = doc(db, "recipes", data.id);
        await updateDoc(docRef, createProduct);
        await setDoc(doc(db,'all_version_recipes',("V"+"_"+data.version+"_"+data.id)),data)
        toast.success('Product update Successfully')
        router.push('/admin')
    }
    return(
        <div className="add_product">
            <Head>
                <title>Biscuit Add Product</title>
                <meta name="description" content="Biscuit Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>{data.name}</h3>
                
                <div className="ingredients">

                    <form onSubmit={(e)=>updateProduct(e)}>
                        
                        <UpdateProductInput label='Version' name="version" value={product.version} product={product} setProduct={setProduct}/>
                        <UpdateProductInput label='Packet Weight' name="packetWeight" value={product.packetWeight} product={product} setProduct={setProduct}/>
                        <UpdateProductInput label='Packet Per Carton' name="packetPerCarton" value={product.packetPerCarton} product={product} setProduct={setProduct}/>
                        <UpdateProductInput label='Process Loss' name="processLoss" value={product.processLoss} product={product} setProduct={setProduct}/>
                        <UpdateProductInput label='Inner Foil Weight' name="innerFoilWeight" value={product.innerFoilWeight} product={product} setProduct={setProduct}/>
                        <UpdateProductInput label='Foil Weight' name="foilWeight" value={product.foilWeight} product={product} setProduct={setProduct}/>
                        <div className="flex justify-between px-2 text-white">
                            <p className="w-7/12 py-1 text-white text-center bg-slate-500 font-bold border-r-4">Ingredients</p>
                            <p className="w-5/12 py-1 text-white text-center bg-slate-500 font-bold">Quantity</p>
                        </div>
                        
                        {
                            createProduct.ingredients.map((ingredient,i)=><UpdateIngredientInput key={i} ingredient={ingredient} quantity={quantity} setQuantity={setQuantity}/>)
                        }
                        <button type="submit">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}