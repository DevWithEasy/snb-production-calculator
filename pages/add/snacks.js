import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../../components/Loading";
import ProductInput from "../../components/ProductInput";
import RmInput from "../../components/RmInput";
import { addProuctRecipe } from "../../utils/api_utils";
import handleInput from "../../utils/handleInput";

export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Snacks`)
    return{
        props:{
            products : res.data.data || []
        }
    }
}

export default function AddLachcha({products}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [product,setProduct] = useState({
        id : '',
        version :'',
        name: "",
        section: "Snacks",
        packetWeight: 0,
        packetPerCarton: 0,
        processLoss : 0,
        foilWeight : 0,
        packet_per_inner : 0,
        inner_per_master : 0,
        inner_poly_18_15 : 0,
        master_poly_25_47 : 0,
        inner_poly_17_19_5 : 0,
        master_poly_25_37 : 0,
        inner_poly_16_21_5 : 0,
        master_poly_35_26 : 0,
        inner_poly_24_15 : 0,
        master_poly_44_23 : 0,
        inner_poly_19_20 : 0,
        master_poly_28_42 : 0,
    })
    const [ingredients,setIngredients] = useState({
        turmeric : 0,
        cinamon : 0,
        testingSalt : 0,
        redChili : 0,
        nutMug : 0,
        cumin : 0,
        blackPepper : 0,
        clove : 0,
        cardamon : 0,
        cuminSweet : 0,
        bitSalt : 0,
        ginger : 0,
        riceFlask : 0,
        sodiumBiCarbonate : 0,
        rawPeanut : 0,
        lentil : 0,
        saltSuper : 0,
        palmOilSuper : 0,
        anchorDal : 0,
        pea : 0,
        skimMilkPowder : 0,
        sugar : 0,
        citricAcidAno : 0,
        mugDal : 0,
        appleGreenColour : 0,
        tapiocaStarch : 0,
        onionPowder : 0,
        garlicPowder : 0,
        jwainMasala : 0,
        riceAtop : 0,
        lemonYellowColour : 0,
        tbhq : 0,
        bbq : 0
    });
    const data = products.find(item => item.name == product.name)

    return(
        <div className="add_product">
            <Head>
                <title>Snacks Add Product</title>
                <meta name="description" content="Snacks Add Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="ingredient_area">
                <h3>Snacks Add Product</h3>
                
                <div className="ingredients">
                        <div className="input">
                            <label htmlFor="">Product Name</label>
                            <select name="name"  onChange={(e)=>handleInput(e,product,setProduct)}>
                                <option value="">Select Name</option>
                                    {
                                        products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)
                                    }
                            </select>
                        </div>
                        <ProductInput {...{
                            label:'Version',
                            name:"version",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Packet Weight',
                            name:"packetWeight",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Packet Per Carton',
                            name:"packetPerCarton",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Process Loss',
                            name:"processLoss",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Foil Weight',
                            name:"foilWeight",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Packet Per Inner',
                            name:"packet_per_inner",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Inner Per Master',
                            name:"inner_per_master",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Inner Poly 18"x15"',
                            name:"inner_poly_18_15",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Master Poly 25"x47"',
                            name:"master_poly_25_47",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Inner Poly 17"x19.5"',
                            name:"inner_poly_17_19_5",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Master Poly 25"x37"',
                            name:"master_poly_25_37",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Inner Poly 16"x21.5"',
                            name:"inner_poly_16_21_5",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Master Poly 35"x26"',
                            name:"master_poly_35_26",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Inner Poly 24"x15"',
                            name:"inner_poly_24_15",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Master Poly 44"x23"',
                            name:"master_poly_44_23",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Inner Poly 19"x20"',
                            name:"inner_poly_19_20",
                            product,
                            setProduct
                        }}/>

                        <ProductInput {...{
                            label:'Master Poly 28"x42"',
                            name:"master_poly_28_42",
                            product,
                            setProduct
                        }}/>

                        <div className="heading">
                            <p className="name">Ingredients</p>
                            <p>Quantity</p>
                        </div>
                        <div className="space-y-2">
                            <RmInput name={'Turmeric'} ingredient={'turmeric'} ingredients={ingredients} setIngredients={setIngredients}/>
                            
                            <RmInput name={'Cinamon'} ingredient={'cinamon'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Testing Salt'} ingredient={'testingSalt'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Red Chili'} ingredient={'redChili'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Nut Mug'} ingredient={'nutMug'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Cumin'} ingredient={'cumin'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Black Pepper'} ingredient={'blackPepper'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Clove'} ingredient={'clove'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Cardamon'} ingredient={'cardamon'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Cumin Sweet'} ingredient={'cuminSweet'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Bit Salt'} ingredient={'bitSalt'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Ginger'} ingredient={'ginger'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Rice Flask'} ingredient={'riceFlask'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Sodium Bi Carbonate'} ingredient={'sodiumBiCarbonate'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Raw Peanut'} ingredient={'rawPeanut'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Lentil'} ingredient={'lentil'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Salt Super'} ingredient={'saltSuper'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Palm Oil Super'} ingredient={'palmOilSuper'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Anchor Dal'} ingredient={'anchorDal'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'pea'} ingredient={'pea'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Skim Milk Powder'} ingredient={'skimMilkPowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Sugar'} ingredient={'sugar'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Citric Acid Ano'} ingredient={'citricAcidAno'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Mug Dal'} ingredient={'mugDal'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Apple Green Colour'} ingredient={'appleGreenColour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Tapioca Starch'} ingredient={'tapiocaStarch'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Onion Powder'} ingredient={'onionPowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Garlic Powder'} ingredient={'garlicPowder'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Jwain Masala'} ingredient={'jwainMasala'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Rice Atop'} ingredient={'riceAtop'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'Lemon Yellow Colour'} ingredient={'lemonYellowColour'} ingredients={ingredients} setIngredients={setIngredients}/>

                            <RmInput name={'TBHQ'} ingredient={'tbhq'} ingredients={ingredients} setIngredients={setIngredients}/>
                            
                            <RmInput name={'BBQ'} ingredient={'bbq'} ingredients={ingredients} setIngredients={setIngredients}/>
                        </div>
                        <button onClick={()=>addProuctRecipe(data.id,product,ingredients,toast,onOpen, onClose)}>Add Product</button>
                </div>
            </div>
            <Loading {...{msg:'Addeding',isOpen, onOpen, onClose}}/>
        </div>
    )
}