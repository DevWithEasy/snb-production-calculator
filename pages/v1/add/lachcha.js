import { useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Loading, LoginChecked, ProductInput, RmInput } from "../../../components/v1/Index";
import { addProuctRecipe, getProducts } from "../../../utils/v1/api_utils";
import handleInput from "../../../utils/v1/handleInput";
import useUserStore from "../../../features/userStore";

export default function AddLachcha() {
    const {user} = useUserStore()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({
        id: '',
        version: '',
        name: "",
        section: "Lachcha",
        packetWeight: 0,
        packetPerCarton: 0,
        processLoss: 0,
        foilWeight: 0,
        master_poly_24_22_5: 0,
    })
    const [ingredients, setIngredients] = useState({
        flourGrade_A: 0,
        flourGrade_B: 0,
        palmOilSuper: 0,
        starchPowder: 0,
        daldaHardPUSTI: 0,
        ghee: 0,
        gheeFlavour: 0,
        tbhq: 0
    });
    const data = products.find(item => item.name == product.name)

    useEffect(() => {
        getProducts('Lachcha', setProducts)
    }, [])
    
    return (
        <div className="add_product">
            <Head>
                <title>Lachcha Add Product</title>
                <meta name="description" content="Lachcha Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Lachcha Add Product</h3>

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
                        label: 'Master Poly 24"x22.5"',
                        name: "master_poly_24_22_5",
                        product,
                        setProduct
                    }} />

                    <div className="heading">
                        <p className="name">Ingredients</p>
                        <p>Quantity</p>
                    </div>
                    <div className="space-y-2">
                        <RmInput name={'Flour A Grade'} ingredient={'flourGrade_A'} ingredients={ingredients} setIngredients={setIngredients} />
                        <RmInput name={'Flour B Grade'} ingredient={'flourGrade_B'} ingredients={ingredients} setIngredients={setIngredients} />
                        <RmInput name={'Palm Oil Super'} ingredient={'palmOilSuper'} ingredients={ingredients} setIngredients={setIngredients} />
                        <RmInput name={'Starch Powder'} ingredient={'starchPowder'} ingredients={ingredients} setIngredients={setIngredients} />
                        <RmInput name={'Dalda Hard Pusti'} ingredient={'daldaHardPUSTI'} ingredients={ingredients} setIngredients={setIngredients} />
                        <RmInput name={'Ghee'} ingredient={'ghee'} ingredients={ingredients} setIngredients={setIngredients} />
                        <RmInput name={'Ghee Flavour'} ingredient={'gheeFlavour'} ingredients={ingredients} setIngredients={setIngredients} />
                        <RmInput name={'TBHQ'} ingredient={'tbhq'} ingredients={ingredients} setIngredients={setIngredients} />
                    </div>
                    <button onClick={() => addProuctRecipe(data.id, product, ingredients, toast, onOpen, onClose)}>Add Product</button>
                </div>
            </div>
            <Loading {...{ msg: 'Addeding', isOpen, onOpen, onClose }} />
            {!user.name && <LoginChecked />}
        </div>
    )
}