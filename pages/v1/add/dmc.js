import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Loading, LoginChecked, ProductInput, RmInput } from "../../../components/v1/Index";
import useUserStore from "../../../features/userStore";
import { addProuctRecipe, getProducts } from "../../../utils/v1/api_utils";
import handleInput from "../../../utils/v1/handleInput";

export default function AddDMC() {
    const {user} = useUserStore()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({
        id: '',
        version: '',
        name: "",
        section: "DMC",
        packetWeight: 0,
        packetPerBox: 0,
        boxPerCarton : 0,
        processLoss: 0,
        foilWeight: 0,
        aluminiumAlloyWrapper: 0
    })
    const [ingredients, setIngredients] = useState({
        
        butterOilSubstitute: 0,
        cakeGel: 0,
        cakeEmulsifier: 0,
        chocolateBrownColour_6059: 0,
        chocolateFlavourSYMRISE: 0,
        chocolatePaste: 0,
        citricAcidMono: 0,
        sugar: 0,
        vanilinPowder: 0,
        vegetableFatHPKO: 0,
    });
    const data = products.find(item => item.name == product.name)

    useEffect(() => {
        getProducts('Cake', setProducts)
    }, [])

    return (
        <div className="add_product">
            <Head>
                <title>Cake Add Product</title>
                <meta name="description" content="Cake Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Cake Add Product</h3>

                <div className="ingredients">
                    <div className="input">
                        <label htmlFor="">Product Name</label>
                        <select name="name" onChange={(e) => handleInput(e, product, setProduct)}>
                            <option value="">Select Name</option>
                            {
                                products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)
                            }
                        </select>
                    </div>
                    <ProductInput {...{
                        label: 'Version',
                        name: "version",
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Packet Weight',
                        name: "packetWeight",
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Packet Per Carton',
                        name: "packetPerCarton",
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Process Loss',
                        name: "processLoss",
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Foil Weight',
                        name: "foilWeight",
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Shrink Outer Poly',
                        name: "shrink_outer_poly",
                        product,
                        setProduct
                    }} />

                    <div className="heading">
                        <p className="name">Ingredients</p>
                        <p>Quantity</p>
                    </div>
                    <div className="space-y-2">
                        <RmInput name={'Vanilin Powder'} ingredient={'vanilinPowder'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Butter Oil Substitute'} ingredient={'butterOilSubstitute'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Cake Gel'} ingredient={'cakeGel'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Cake Emulsifier'} ingredient={'cakeEmulsifier'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Chocolate Brown Colour 6059'} ingredient={'chocolateBrownColour_6059'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Chocolate Flavour SYMRISE'} ingredient={'chocolateFlavourSYMRISE'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Chocolate Paste'} ingredient={'chocolatePaste'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Citric Acid Mono'} ingredient={'citricAcidMono'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Egg'} ingredient={'egg'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Flour Grade B'} ingredient={'flourGrade_B'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Flour Grade C'} ingredient={'flourGrade_C'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Glycerine'} ingredient={'glycerine'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Isopropyl Alcohol'} ingredient={'isopropylAlcohol'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Milk Flavour King'} ingredient={'milkFlavourKing'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Paraffin Oil'} ingredient={'paraffinOil'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Potassium Sorbate'} ingredient={'potassiumSorbate'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Super Salt'} ingredient={'superSalt'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Skim Milk Powder'} ingredient={'skimMilkPowder'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Sorbitol'} ingredient={'sorbitol'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Soya Lecithine'} ingredient={'soyaLecithine'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Sugar'} ingredient={'sugar'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Palm Oil Super'} ingredient={'palmOilSuper'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'TBHQ'} ingredient={'tbhq'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Vanila Flavour FORZONE'} ingredient={'vanilaFlavourFORZONE'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Vanila Flavour KH'} ingredient={'vanilaFlavourKH'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Xanthem Gum'} ingredient={'xanthemGum'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Sodium Acid pyro Phosphet'} ingredient={'sodiumAcidpyroPhosphet'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Sodium Bi Carbonate'} ingredient={'sodiumBiCarbonate'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Starch Powder'} ingredient={'starchPowder'} ingredients={ingredients} setIngredients={setIngredients} />
                    </div>
                    <button onClick={() => addProuctRecipe(data.id, product, ingredients, toast, onOpen, onClose)}>Add Product</button>
                </div>
            </div>
            {!user.name && <LoginChecked />}
        </div>
    )
}