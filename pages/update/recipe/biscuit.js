import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ProductSelect from "../../../components/ProductSelect";
import RmUpdate from "../../../components/RmUpdate";
import UpdateInput from "../../../components/UpdateInput";
import { getUpdateRecipe, updateRecipe, updateRecipeWithVersion } from "../../../utils/api_utils";
import baseUrl from "../../../utils/baseUrl";


export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Biscuit`)
    return{
        props:{
            products : res.data.data || []
        }
    }
  }

export default function AddProduct({products}){
    const router = useRouter()
    const [id,setId] = useState('')
    const [product,setProduct] = useState({})
    const [ingredients,setIngredients] = useState({});
    const [loading,setLoading] = useState(false)

    const [oldProduct,setOldProduct] = useState({})
    const [oldIngredients,setOldIngredients] = useState({});
    const {version,packetWeight,packetPerCarton,processLoss,innerFoil,foilWeight} = oldProduct
    const {
        ammonium,
        blackCumin,
        bitSalt,
        butterFlavourSK,
        butterFlavourSYMEGA,
        butterSolid,
        butterOilSubstitute,
        chocolateBrownColour_815,
        aspertem,
        chocolateFlavourKH,
        calciumCarbonate,
        crakerEnzyme,
        citricAcidMono,
        cocoaPowderBlack_910,
        daldaSoftHILSA,
        cardamonFlavour,
        flourGrade_A,
        flourGrade_B,
        flourGrade_C,
        glucosePowder,
        lemonFlavour,
        lemonYellowColour,
        soyaLecithine,
        liquidGlucose,
        milkFlavourKH,
        orangeFlavour,
        onionFlavourGreen,
        onionFlavourSYMEGA,
        onionPowder,
        palmOilSuper,
        pineappleFlavour,
        palmCornOil,
        superSalt,
        sodiumAcidpyroPhosphet,
        skimMilkPowder,
        sodiumMetaBiSulphate,
        sodiumBiCarbonate,
        starchPowder,
        sugar, 
        testingSalt,
        tbhq,
        vanilinPowder,
        onionChieves,
        coconutFlavour,
        buttaBellyFlavour,
        coconutPowder
    } = oldIngredients


    useEffect(()=>{
        if(id) getUpdateRecipe(id,setProduct,setIngredients,setOldProduct,setOldIngredients)
    },[id])

    return(
        <div className="add_product">
            <Head>
                <title>Lachcha Add Product</title>
                <meta name="description" content="Lachcha Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Biscuit Update Product</h3>
                
                <div className="ingredients">
                    <ProductSelect {...{setId,products}}/>
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

                            </div>
                            <div className="heading">
                                <p className="name">Ingredients</p>
                                <p>Quantity</p>
                            </div>
                            <div className="space-y-2">
                                <RmUpdate label='Ammonium Bi Carbonate' name='ammonium' value={ammonium} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Black Cumin' name='blackCumin' value={blackCumin} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Bit Salt' name='bitSalt' value={bitSalt} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Butter Flavour SK' name='butterFlavourSK' value={butterFlavourSK} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Butter Flavour SYMEGA' name='butterFlavourSYMEGA' value={butterFlavourSYMEGA} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Butter Solid' name='butterSolid' value={butterSolid} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Butter Oil Substitute' name='butterOilSubstitute' value={butterOilSubstitute} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Chocolate Brown Colour 815' name='chocolateBrownColour_815' value={chocolateBrownColour_815} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Aspertem' name='aspertem' value={aspertem} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Chocolate Flavour KH' name='chocolateFlavourKH' value={chocolateFlavourKH} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Calcium Carbonate' name='calciumCarbonate' value={calciumCarbonate} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Craker Enzyme' name='crakerEnzyme' value={crakerEnzyme} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Citric Acid Mono' name='citricAcidMono' value={citricAcidMono} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Cocoa Powder Black 910' name='cocoaPowderBlack_910' value={cocoaPowderBlack_910} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Dalda Soft HILSA' name='daldaSoftHILSA' value={daldaSoftHILSA} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Cardamon Flavour' name='cardamonFlavour' value={cardamonFlavour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Flour A Grade' name='flourGrade_A' value={flourGrade_A} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Flour B Grade' name='flourGrade_B' value={flourGrade_B} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Flour C Grade' name='flourGrade_C' value={flourGrade_C} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Glucose Powder' name='glucosePowder' value={glucosePowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Lemon Flavour' name='lemonFlavour' value={lemonFlavour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Lemon Yellow Colour' name='lemonYellowColour' value={lemonYellowColour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Soya Lecithine' name='soyaLecithine' value={soyaLecithine} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Liquid Glucose' name='liquidGlucose' value={liquidGlucose} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Milk Flavour KH' name='milkFlavourKH' value={milkFlavourKH} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Orange Flavour' name='orangeFlavour' value={orangeFlavour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Onion Flavour Green' name='onionFlavourGreen' value={onionFlavourGreen} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Onion Flavour SYMEGA' name='onionFlavourSYMEGA' value={onionFlavourSYMEGA} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Onion Powder' name='onionPowder' value={onionPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Palm Oil Super' name='palmOilSuper' value={palmOilSuper} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Pineapple Flavour' name='pineappleFlavour' value={pineappleFlavour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Palm Corn Oil' name='palmCornOil' value={palmCornOil} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Super Salt' name='superSalt' value={superSalt} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sodium Acid pyro Phosphet' name='sodiumAcidpyroPhosphet' value={sodiumAcidpyroPhosphet} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Skim Milk Powder' name='skimMilkPowder' value={skimMilkPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sodium Meta Bi Sulphate' name='sodiumMetaBiSulphate' value={sodiumMetaBiSulphate} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sodium Bi Carbonate' name='sodiumBiCarbonate' value={sodiumBiCarbonate} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Starch Powder' name='starchPowder' value={starchPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Sugar' name='sugar' value={sugar} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Testing Salt' name='testingSalt' value={testingSalt} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='TBHQ' name='tbhq' value={tbhq} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Vanilin Powder' name='vanilinPowder' value={vanilinPowder} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Onion Chieves' name='onionChieves' value={onionChieves} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Coconut Flavour' name='coconutFlavour' value={coconutFlavour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Butta Belly Flavour' name='buttaBellyFlavour' value={buttaBellyFlavour} ingredients={ingredients} setIngredients={setIngredients}/>

                                <RmUpdate label='Coconut Powder' name='coconutPowder' value={coconutPowder} ingredients={ingredients} setIngredients={setIngredients}/>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-2 py-2">
                                <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                    onClick={()=>updateRecipe(product.id,toast,setLoading,{product,ingredients})}
                                >
                                    Update Product
                                </button>
                                <br/>
                                <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                    onClick={()=>updateRecipeWithVersion(product.id,toast,setLoading,{product,ingredients})}
                                >
                                    Update Product & Change Version
                                </button>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}