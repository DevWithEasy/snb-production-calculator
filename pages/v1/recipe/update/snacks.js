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
    const [loading, setLoading] = useState(false)

    const [oldProduct, setOldProduct] = useState({})
    const [oldIngredients, setOldIngredients] = useState({});
    const {
        version,
        packetWeight,
        packetPerCarton,
        processLoss,
        foilWeight,
        packet_per_inner,
        inner_per_master,
        inner_poly_18_15,
        master_poly_25_47,
        inner_poly_17_19_5,
        master_poly_25_37,
        inner_poly_16_21_5,
        master_poly_35_26,
        inner_poly_24_15,
        master_poly_44_23,
        inner_poly_19_20,
        master_poly_28_42,
    } = oldProduct
    const {
        turmeric,
        cinamon,
        testingSalt,
        redChili,
        nutMug,
        cumin,
        blackPepper,
        clove,
        cardamon,
        cuminSweet,
        bitSalt,
        ginger,
        riceFlask,
        sodiumBiCarbonate,
        rawPeanut,
        lentil,
        saltSuper,
        palmOilSuper,
        anchorDal,
        pea,
        skimMilkPowder,
        sugar,
        citricAcidAno,
        mugDal,
        appleGreenColour,
        tapiocaStarch,
        onionPowder,
        garlicPowder,
        jwainMasala,
        riceAtop,
        lemonYellowColour,
        tbhq,
        bbq
    } = oldIngredients

    useEffect(() => {
        getProducts('Snacks', setProducts)
    }, [])

    useEffect(() => {
        if (id) getUpdateRecipe(id, setProduct, setIngredients, setOldProduct, setOldIngredients)
    }, [id])


    return (
        <div className="add_product">
            <Head>
                <title>Snacks update Product</title>
                <meta name="description" content="Lachcha Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Lachcha Update Product</h3>

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
                                label: 'Packet Per Inner',
                                name: "packet_per_inner",
                                value: packet_per_inner,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Inner Per Master',
                                name: "inner_per_master",
                                value: inner_per_master,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Inner Poly 18"x15"',
                                name: "inner_poly_18_15",
                                value: inner_poly_18_15,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Master Poly 25"x47"',
                                name: "master_poly_25_47",
                                value: master_poly_25_47,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Inner Poly 17"x19.5"',
                                name: "inner_poly_17_19_5",
                                value: inner_poly_17_19_5,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Master Poly 25"x37"',
                                name: "master_poly_25_37",
                                value: master_poly_25_37,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Inner Poly 16"x21.5"',
                                name: "inner_poly_16_21_5",
                                value: inner_poly_16_21_5,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Master Poly 35"x26"',
                                name: "master_poly_35_26",
                                value: master_poly_35_26,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Inner Poly 24"x15"',
                                name: "inner_poly_24_15",
                                value: inner_poly_24_15,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Master Poly 44"x23"',
                                name: "master_poly_44_23",
                                value: master_poly_44_23,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Inner Poly 19"x20"',
                                name: "inner_poly_19_20",
                                value: inner_poly_19_20,
                                product,
                                setProduct
                            }} />

                            <UpdateInput {...{
                                label: 'Master Poly 28"x42"',
                                name: "master_poly_28_42",
                                value: master_poly_28_42,
                                product,
                                setProduct
                            }} />
                        </div>
                        <div className="heading">
                            <p className="name">Ingredients</p>
                            <p>Quantity</p>
                        </div>
                        <div className="space-y-2">
                            <RmUpdate label='Turmeric' name='turmeric' value={turmeric} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Cinamon' name='cinamon' value={cinamon} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Testing Salt' name='testingSalt' value={testingSalt} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Red Chili' name='redChili' value={redChili} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Nut Mug' name='nutMug' value={nutMug} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Cumin' name='cumin' value={cumin} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Black Pepper' name='blackPepper' value={blackPepper} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Clove' name='clove' value={clove} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Cardamon' name='cardamon' value={cardamon} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Cumin Sweet' name='cuminSweet' value={cuminSweet} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Bit Salt' name='bitSalt' value={bitSalt} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Ginger' name='ginger' value={ginger} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Rice Flask' name='riceFlask' value={riceFlask} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Sodium Bi Carbonate' name='sodiumBiCarbonate' value={sodiumBiCarbonate} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Raw Peanut' name='rawPeanut' value={rawPeanut} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Lentil' name='lentil' value={lentil} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Salt Super' name='saltSuper' value={saltSuper} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Palm Oil Super' name='palmOilSuper' value={palmOilSuper} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Anchor Dal' name='anchorDal' value={anchorDal} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Pea' name='pea' value={pea} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Skim Milk Powder' name='skimMilkPowder' value={skimMilkPowder} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Sugar' name='sugar' value={sugar} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Citric Acid Ano' name='citricAcidAno' value={citricAcidAno} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Mug Dal' name='mugDal' value={mugDal} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Apple Green Colour' name='appleGreenColour' value={appleGreenColour} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Tapioca Starch' name='tapiocaStarch' value={tapiocaStarch} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Onion Powder' name='onionPowder' value={onionPowder} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Garlic Powder' name='garlicPowder' value={garlicPowder} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Jwain Masala' name='jwainMasala' value={jwainMasala} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Rice Atop' name='riceAtop' value={riceAtop} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='Lemon Yellow Colour' name='lemonYellowColour' value={lemonYellowColour} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='TBHQ' name='tbhq' value={tbhq} ingredients={ingredients} setIngredients={setIngredients} />

                            <RmUpdate label='BBQ' name='bbq' value={bbq} ingredients={ingredients} setIngredients={setIngredients} />
                        </div>
                        <div className="flex flex-col md:flex-row space-x-2 py-2">
                            <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                                onClick={() => updateRecipe(product.id, toast, { product, ingredients })}
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
            <Loading {...{ msg: 'Updating', isOpen, onOpen, onClose }} />
            {!user.name && <LoginChecked/>}
        </div>
    )
}