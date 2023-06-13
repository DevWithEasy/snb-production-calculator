import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RmUpdate from "../../../components/RmUpdate";
import UpdateInput from "../../../components/UpdateInput";
import { getUpdateRecipe, updateRecipe, updateRecipeWithVersion } from "../../../utils/api_utils";
import baseUrl from "../../../utils/baseUrl";
import ProductSelect from "../../../components/ProductSelect";


export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Lachcha`)
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

    const [oldProduct,setOldProduct] = useState({})
    const [oldIngredients,setOldIngredients] = useState({});
    const {version,packetWeight,packetPerCarton,processLoss,master_poly_24_22_5,foilWeight} = oldProduct
    const {flourGrade_A,flourGrade_B,palmOilSuper,starchPowder,daldaHardPUSTI,ghee,gheeFlavour,tbhq} = oldIngredients

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
                <h3>Lachcha Update Product</h3>
                
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
                            <div className="flex  space-x-2 py-2">
                                <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                    onClick={()=>updateRecipe(product.id,{product,ingredients})}
                                >
                                    Update Product
                                </button>
                                <br/>
                                <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                    onClick={()=>updateRecipeWithVersion(product.id,{product,ingredients})}
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