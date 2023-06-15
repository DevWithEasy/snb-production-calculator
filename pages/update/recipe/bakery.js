import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ProductSelect from '../../../components/ProductSelect';
import RmUpdate from "../../../components/RmUpdate";
import UpdateInput from "../../../components/UpdateInput";
import { getUpdateRecipe, updateRecipe, updateRecipeWithVersion } from "../../../utils/api_utils";
import baseUrl from "../../../utils/baseUrl";


export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Bakery`)
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
    const {version,packetWeight,packetPerCarton,processLoss,inner_poly_6_8,inner_poly_8_11_5,inner_poly_9_11_5,foilWeight,dryCakepaper} = oldProduct
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
        if(id) getUpdateRecipe(id,setProduct,setIngredients,setOldProduct,setOldIngredients)
    },[id])

    return(
        <div className="add_product">
            <Head>
                <title>Bakery update Product</title>
                <meta name="description" content="Bakery update Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Bakery update Product</h3>
                
                <div className="ingredients">

                    <ProductSelect {...{setId,products}}/>
                    
                        {product?.name && <div className="space-y-2">
                            <div className="space-y-2">

                                <UpdateInput {...{
                                    label : 'Version',
                                    name : 'version',
                                    value : version,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label : 'Packet Weight',
                                    name : 'packetWeight',
                                    value : packetWeight,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label : 'Packet Per Carton',
                                    name : 'packetPerCarton',
                                    value : packetPerCarton,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label : 'Process Loss',
                                    name : 'processLoss',
                                    value : processLoss,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label : 'Foil Weight',
                                    name : 'foilWeight',
                                    value : foilWeight,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label : 'Inner Poly 6"x8"',
                                    name : 'inner_poly_6_8',
                                    value : inner_poly_6_8,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label : 'Inner Poly 8x11.5"',
                                    name : 'inner_poly_8_11_5',
                                    value : inner_poly_8_11_5,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label : 'Inner Poly 9"x11.5"',
                                    name : 'inner_poly_9_11_5',
                                    value : inner_poly_9_11_5,
                                    product,
                                    setProduct
                                }}/>

                                <UpdateInput {...{
                                    label : 'Dry Cake Paper',
                                    name : 'dryCakepaper',
                                    value : dryCakepaper,
                                    product,
                                    setProduct
                                }}/>
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