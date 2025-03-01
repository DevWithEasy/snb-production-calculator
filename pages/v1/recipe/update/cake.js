import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Loading, LoginChecked, ProductSelect, RmUpdate, UpdateInput } from "../../../../components/v1/Index";
import useUserStore from "../../../../features/userStore";
import { getProducts, getUpdateRecipe, updateRecipe, updateRecipeWithVersion } from "../../../../utils/v1/api_utils";

export default function UpdateProduct() {
    const {user} = useUserStore()
    const [products, setProducts] = useState([])
    const [id, setId] = useState('')
    const [product, setProduct] = useState({})
    const [ingredients, setIngredients] = useState({});
    const [oldProduct, setOldProduct] = useState({})
    const [oldIngredients, setOldIngredients] = useState({});
    const { version, packetWeight, packetPerCarton, processLoss, foilWeight, shrink_outer_poly } = oldProduct
    const {
        vanilinPowder,
        butterOilSubstitute,
        cakeGel,
        cakeEmulsifier,
        chocolateBrownColour_6059,
        chocolateFlavourSYMRISE,
        chocolatePaste,
        citricAcidMono,
        egg,
        flourGrade_B,
        flourGrade_C,
        glycerine,
        isopropylAlcohol,
        milkFlavourKing,
        paraffinOil,
        potassiumSorbate,
        superSalt,
        skimMilkPowder,
        sorbitol,
        soyaLecithine,
        sugar,
        palmOilSuper,
        tbhq,
        vanilaFlavourFORZONE,
        vanilaFlavourKH,
        xanthemGum,
        sodiumAcidpyroPhosphet,
        sodiumBiCarbonate,
        starchPowder
    } = oldIngredients

    useEffect(() => {
        getProducts('Cake', setProducts)
    }, [])

    useEffect(() => {
        if (id) getUpdateRecipe(id, setProduct, setIngredients, setOldProduct, setOldIngredients)
    }, [id])

    //console.log()
    return (
        <div className="add_product">
            <Head>
                <title>Cake update Product</title>
                <meta name="description" content="Lachcha Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Cake Update Product</h3>

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

                            <UpdateInput {...{
                                label: 'Shrink Outer Poly',
                                name: "shrink_outer_poly",
                                value: shrink_outer_poly,
                                product,
                                setProduct
                            }} />
                        </div>
                        <div className="heading">
                            <p className="name">Ingredients</p>
                            <p>Quantity</p>
                        </div>
                        <div className="space-y-2">
                            <RmUpdate label='Vanilin Powder' name='vanilinPowder' value={vanilinPowder} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Butter Oil Substitute' name='butterOilSubstitute' value={butterOilSubstitute} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Cake Gel' name='cakeGel' value={cakeGel} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Cake Emulsifier' name='cakeEmulsifier' value={cakeEmulsifier} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Chocolate Brown Colour 6059' name='chocolateBrownColour_6059' value={chocolateBrownColour_6059} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Chocolate Flavour SYMRISE' name='chocolateFlavourSYMRISE' value={chocolateFlavourSYMRISE} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Chocolate Paste' name='chocolatePaste' value={chocolatePaste} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Citric Acid Mono' name='citricAcidMono' value={citricAcidMono} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Egg' name='egg' value={egg} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Flour B Grade' name='flourGrade_B' value={flourGrade_B} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Flour C grade' name='flourGrade_C' value={flourGrade_C} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Glycerine' name='glycerine' value={glycerine} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Isopropyl Alcohol' name='isopropylAlcohol' value={isopropylAlcohol} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Milk Flavour King' name='milkFlavourKing' value={milkFlavourKing} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Paraffin Oil' name='paraffinOil' value={paraffinOil} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Potassium Sorbate' name='potassiumSorbate' value={potassiumSorbate} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Super Salt' name='superSalt' value={superSalt} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Skim Milk Powder' name='skimMilkPowder' value={skimMilkPowder} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Sorbitol' name='sorbitol' value={sorbitol} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Soya Lecithine' name='soyaLecithine' value={soyaLecithine} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Sugar' name='sugar' value={sugar} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Palm Oil Super' name='palmOilSuper' value={palmOilSuper} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='TBHQ' name='tbhq' value={tbhq} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Vanila Flavour FORZONE' name='vanilaFlavourFORZONE' value={vanilaFlavourFORZONE} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Vanila Flavour KH' name='vanilaFlavourKH' value={vanilaFlavourKH} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Xanthem Gum' name='xanthemGum' value={xanthemGum} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Sodium Acid pyro Phosphet' name='sodiumAcidpyroPhosphet' value={sodiumAcidpyroPhosphet} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Sodium Bi Carbonate' name='sodiumBiCarbonate' value={sodiumBiCarbonate} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Starch Powder' name='starchPowder' value={starchPowder} ingredients={ingredients} setIngredients={setIngredients} />
                        </div>
                        <div className="flex flex-col md:flex-row space-x-2 py-2">
                            <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                onClick={() => updateRecipe(product.id, toast,{ product, ingredients })}
                            >
                                Update Product
                            </button>
                            <br />
                            <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                onClick={() => updateRecipeWithVersion(
                                    product.id, toast,
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
            {!user.name && <LoginChecked/>}
        </div>
    )
}