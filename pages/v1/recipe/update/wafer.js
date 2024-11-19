import { useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { Loading, LoginChecked, ProductSelect, RmUpdate, UpdateInput } from "../../../../components/v1/Index";
import useUserStore from "../../../../features/userStore";
import { getProducts, getUpdateRecipe, updateRecipe, updateRecipeWithVersion } from "../../../../utils/v1/api_utils";

export default function UpdateProduct() {
    const {user} = useUserStore()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [products, setProducts] = useState([])
    const [id, setId] = useState('')
    const [product, setProduct] = useState({})
    const [ingredients, setIngredients] = useState({});

    const [oldProduct, setOldProduct] = useState({})
    const [oldIngredients, setOldIngredients] = useState({});

    const { version, packetWeight, packetPerCarton, processLoss, foilWeight } = oldProduct
    const {
        chocolateBrownColour_6059,
        citricAcidMono,
        cocoaPowderBlack_4011,
        chocolateFlavourKH,
        daldaHardPUSTI,
        flourGrade_A,
        flourGrade_B,
        soyaLecithine,
        milkFlavourKH,
        palmOilSuper,
        superSalt,
        skimMilkPowder,
        sodiumBiCarbonate,
        sodiumMetaBiSulphate,
        starchPowder,
        sugar,
        tbhq,
        vanilaFlavourKH
    } = oldIngredients

    useEffect(() => {
        getProducts('Wafer', setProducts)
    }, [])

    useEffect(() => {
        if (id) getUpdateRecipe(id, setProduct, setIngredients, setOldProduct, setOldIngredients)
    }, [id])

    console.log(oldProduct)
    return (
        <div className="add_product">
            <Head>
                <title>Wafer update Product</title>
                <meta name="description" content="Lachcha Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Wafer Update Product</h3>

                <div className="ingredients">
                    <ProductSelect {...{ setId, products }} />
                    {product?.name && <div className="space-y-2">
                        <div className="space-y-2">
                            <UpdateInput {...{
                                label: 'Version',
                                name: "version",
                                value: version,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Packet Weight',
                                name: "packetWeight",
                                value: packetWeight,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Packet Per Carton',
                                name: "packetPerCarton",
                                value: packetPerCarton,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Process Loss',
                                name: "processLoss",
                                value: processLoss,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Foil Weight',
                                name: "foilWeight",
                                value: foilWeight,
                                product,
                                setProduct
                            }} />
                        </div>
                        <div className="heading">
                            <p className="name">Ingredients</p>
                            <p>Quantity</p>
                        </div>
                        <div className="space-y-2">
                            <RmUpdate label='Chocolate Brown Colour 6059' name='chocolateBrownColour_6059' value={chocolateBrownColour_6059} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Citric Acid Mono' name='citricAcidMono' value={citricAcidMono} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Cocoa Powder Black 4011' name='cocoaPowderBlack_4011' value={cocoaPowderBlack_4011} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Chocolate Flavour KH' name='chocolateFlavourKH' value={chocolateFlavourKH} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Dalda Hard PUSTI' name='daldaHardPUSTI' value={daldaHardPUSTI} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Flour A Grade' name='flourGrade_A' value={flourGrade_A} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Flour B Grade' name='flourGrade_B' value={flourGrade_B} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Soya Lecithine' name='soyaLecithine' value={soyaLecithine} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Milk Flavour KH' name='milkFlavourKH' value={milkFlavourKH} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Palm Oil Super' name='palmOilSuper' value={palmOilSuper} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Super Salt' name='superSalt' value={superSalt} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Skim Milk Powder' name='skimMilkPowder' value={skimMilkPowder} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Sodium Bi Carbonate' name='sodiumBiCarbonate' value={sodiumBiCarbonate} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Sodium Meta Bi Sulphate' name='sodiumMetaBiSulphate' value={sodiumMetaBiSulphate} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Starch Powder' name='starchPowder' value={starchPowder} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Sugar' name='sugar' value={sugar} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='TBHQ' name='tbhq' value={tbhq} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Vanila Flavour KH' name='vanilaFlavourKH' value={vanilaFlavourKH} ingredients={ingredients} setIngredients={setIngredients} />
                        </div>
                        <div className="flex flex-col md:flex-row space-x-2 py-2">
                            <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                onClick={() => updateRecipe(product.id, toast, onOpen, onClose, { product, ingredients })}
                            >
                                Update Product
                            </button>
                            <br />
                            <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                onClick={() => updateRecipeWithVersion(
                                    product.id, toast, onOpen, onClose, 
                                    { 
                                        oldRecipe : {
                                            product : oldProduct, 
                                            ingredients : oldIngredients
                                        },
                                        newRecipe : {
                                            product : product,
                                            ingredients : ingredients
                                        }
                                    }
                                    )
                                }
                            >
                                Update Product & Change Version
                            </button>
                        </div>
                    </div>}
                </div>
            </div>
            <Loading {...{ msg: 'Updating', isOpen, onOpen, onClose }} />
            {!user.name && <LoginChecked/>}
        </div>
    )
}