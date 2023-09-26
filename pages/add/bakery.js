import { useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {Loading,ProductInput,RmInput} from "../../components/Index";
import { addProuctRecipe, getProducts } from "../../utils/api_utils";
import handleInput from "../../utils/handleInput";

export default function AddLachcha() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({
        id: '',
        version: '',
        name: "",
        section: "Bakery",
        packetWeight: 0,
        packetPerCarton: 0,
        processLoss: 0,
        foilWeight: 0,
        dryCakepaper: 0,
        atc: 0,
        jar: 0,
        label: 0,
        tray: 0,
        inner_poly_6_8: 0,
        inner_poly_8_11_5: 0,
        inner_poly_9_11_5: 0,
    })
    const [ingredients, setIngredients] = useState({
        ammonium: 0,
        bakingPowder: 0,
        blackCumin: 0,
        breadImprover: 0,
        butterFlavourSM: 0,
        cakeGel: 0,
        chocolateChips: 0,
        chocolateFlavourSYMRISE: 0,
        chocolatePaste: 0,
        cocoaPowder_4011: 0,
        coconutPowder: 0,
        coconutFlavour: 0,
        condencedMilkFlavour: 0,
        daldaHardPUSTI: 0,
        daldaSoftHILSA: 0,
        egg: 0,
        eggYellowColour: 0,
        flourGrade_A: 0,
        flourGrade_B: 0,
        flourGrade_C: 0,
        ghee: 0,
        gheeFlavour: 0,
        glucosePowder: 0,
        lemonYellowColour: 0,
        skimMilkPowder: 0,
        milkFlavourKH: 0,
        monoSaccharine: 0,
        palmOilSuper: 0,
        superSalt: 0,
        sodiumAcidPyroPhosphet: 0,
        sodiumBiCarbonate: 0,
        starchPowder: 0,
        sugar: 0,
        tbhq: 0,
        vanilinPowderFlavour: 0,
        xanthemGum: 0,
        yeast: 0,
    });
    const data = products.find(item => item.name == product.name)

    useEffect(() => {
        getProducts('Bakery', setProducts)
    }, [])

    return (
        <div className="add_product">
            <Head>
                <title>Bakery Add Product</title>
                <meta name="description" content="Bakery Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Bakery Add Product</h3>

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
                        name: 'version',
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Packet Weight',
                        name: 'packetWeight',
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Packet Per Carton',
                        name: 'packetPerCarton',
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Process Loss',
                        name: 'processLoss',
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Foil Weight',
                        name: 'foilWeight',
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Inner Poly 6"x8"',
                        name: 'inner_poly_6_8',
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Inner Poly 8x11.5"',
                        name: 'inner_poly_8_11_5',
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Inner Poly 9"x11.5"',
                        name: 'inner_poly_9_11_5',
                        product,
                        setProduct
                    }} />

                    <ProductInput {...{
                        label: 'Dry Cake Paper',
                        name: 'dryCakepaper',
                        product,
                        setProduct
                    }} />

                    <div className="heading">
                        <p className="name">Ingredients</p>
                        <p>Quantity</p>
                    </div>
                    <div className="space-y-2">
                        <RmInput name={'Ammonium Bi Carbonate'} ingredient={'ammonium'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Baking Powder'} ingredient={'bakingPowder'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Black Cumin'} ingredient={'blackCumin'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Bread Improver'} ingredient={'breadImprover'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Butter Flavour SM'} ingredient={'butterFlavourSM'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Cake Gel'} ingredient={'cakeGel'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Chocolate Chips'} ingredient={'chocolateChips'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Chocolate Flavour SYMRISE'} ingredient={'chocolateFlavourSYMRISE'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Chocolate Paste'} ingredient={'chocolatePaste'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Cocoa Powder 4011'} ingredient={'cocoaPowder_4011'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Coconut Powder'} ingredient={'coconutPowder'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Coconut Flavour'} ingredient={'coconutFlavour'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Condenced Milk Flavour'} ingredient={'condencedMilkFlavour'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Dalda Hard PUSTI'} ingredient={'daldaHardPUSTI'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Dalda Soft HILSA'} ingredient={'daldaSoftHILSA'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Egg'} ingredient={'egg'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Egg Yellow Colour'} ingredient={'eggYellowColour'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Flour Grade A'} ingredient={'flourGrade_A'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Flour Grade B'} ingredient={'flourGrade_B'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Flour Grade C'} ingredient={'flourGrade_C'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Ghee'} ingredient={'ghee'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Ghee Flavour'} ingredient={'gheeFlavour'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Glucose Powder'} ingredient={'glucosePowder'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Lemon Yellow Colour'} ingredient={'lemonYellowColour'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Skim Milk Powder'} ingredient={'skimMilkPowder'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Milk Flavour KH'} ingredient={'milkFlavourKH'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Mono Saccharine'} ingredient={'monoSaccharine'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Palm Oil Super'} ingredient={'palmOilSuper'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Super Salt'} ingredient={'superSalt'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Sodium Acid Pyro Phosphet'} ingredient={'sodiumAcidPyroPhosphet'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Sodium Bi Carbonate'} ingredient={'sodiumBiCarbonate'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Starch Powder'} ingredient={'starchPowder'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Sugar'} ingredient={'sugar'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'TBHQ'} ingredient={'tbhq'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Vanilin Powder Flavour'} ingredient={'vanilinPowderFlavour'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Xanthem Gum'} ingredient={'xanthemGum'} ingredients={ingredients} setIngredients={setIngredients} />

                        <RmInput name={'Yeast'} ingredient={'yeast'} ingredients={ingredients} setIngredients={setIngredients} />
                    </div>
                    <button onClick={() => addProuctRecipe(data.id, product, ingredients, toast, onOpen, onClose)}>Add Product</button>
                </div>
            </div>
            <Loading {...{ msg: 'Addeding', isOpen, onOpen, onClose }} />
        </div>
    )
}