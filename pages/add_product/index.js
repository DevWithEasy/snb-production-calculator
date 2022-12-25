import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Input from "../../components/Input";

export default function AddProduct(){
    const [product,setProduct] = useState({
        id: uuidv4(),
        name: "",
        section: "",
        packetWeight: 0,
        packetPerCarton: 0,
        processLoss : 0,
        innerFoilWeight: 0,
        foilWeight : 0,
    })
    const [quantity,setQuantity] = useState({
        ammonium : 0,
        blackCumin : 0,
        bitSalt : 0,
        butterFlavourSK : 0,
        butterFlavourSYMEGA : 0,
        butterSolid : 0,
        butterOilSubstitute : 0,
        chocolateBrownColour_815 : 0,
        aspertem : 0,
        chocolateFlavourKH : 0,
        calciumCarbonate : 0,
        crakerEnzyme : 0,
        citricAcidMono : 0,
        cocoaPowderBlack_910 : 0,
        daldaSoftHILSA : 0,
        cardamonFlavour : 0,
        flourGrade_A : 0,
        flourGrade_B : 0,
        flourGrade_C : 0,
        glucosePowder : 0,
        lemonFlavour : 0,
        lemonYellowColour : 0,
        soyaLecithine : 0,
        liquidGlucose : 0,
        milkFlavourKH : 0,
        orangeFlavour : 0,
        onionFlavourGreen : 0,
        onionFlavourSYMEGA : 0,
        onionPowder : 0,
        palmOilSuper : 0,
        pineappleFlavour : 0,
        palmCornOil : 0,
        superSalt : 0,
        sodiumAcidpyroPhosphet : 0,
        skimMilkPowder : 0,
        sodiumMetaBiSulphate : 0,
        sodiumBiCarbonate : 0,
        starchPowder : 0,
        sugar : 0, 
        testingSalt : 0,
        tbhq : 0,
        vanilinPowder : 0,
        onionChieves : 0,
        coconutFlavour : 0,
        buttaBellyFlavour : 0,
        coconutPowder : 0
    })
    const ingredients = [
        {
            name : 'Ammonium Bi Carbonate',
            code_name : 'ammonium',
            quantity : quantity.ammonium
        },
        {
            name : 'Black Cumin',
            code_name : 'blackCumin',
            quantity : quantity.blackCumin
        },
        {
            name : 'Bit Salt',
            code_name : 'bitSalt',
            quantity : quantity.bitSalt
        },
        {
            name : 'Butter Flavour SK',
            code_name : 'butterFlavourSK',
            quantity : quantity.butterFlavourSK
        },
        {
            name : 'Butter Flavour Symega',
            code_name : 'butterFlavourSYMEGA',
            quantity : quantity.butterFlavourSYMEGA
        },
        {
            name : 'Butter Solid',
            code_name : 'butterSolid',
            quantity : quantity.butterSolid
        },
        {
            name : 'Butter Oil Substitute',
            code_name : 'butterOilSubstitute',
            quantity : quantity.butterOilSubstitute
        },
        {
            name : 'Chocolate Brown Colour 815',
            code_name : 'chocolateBrownColour_815',
            quantity : quantity.chocolateBrownColour_815
        },
        {
            name : 'Aspertem',
            code_name : 'aspertem',
            quantity : quantity.aspertem
        },
        {
            name : 'Chocokate Flavour KH',
            code_name : 'chocolateFlavourKH',
            quantity : quantity.chocolateFlavourKH
        },
        {
            name : 'Calcium Carbonate',
            code_name : 'calciumCarbonate',
            quantity : quantity.calciumCarbonate
        },
        {
            name : 'Cracker Enzyme',
            code_name : 'crakerEnzyme',
            quantity : quantity.crakerEnzyme
        },
        {
            name : 'Citric Acid Mono',
            code_name : 'citricAcidMono',
            quantity : quantity.citricAcidMono
        },
        {
            name : 'Cocoa Powder Black 910',
            code_name : 'cocoaPowderBlack_910',
            quantity : quantity.cocoaPowderBlack_910
        },
        {
            name : 'Dalda Soft (Hilsa)',
            code_name : 'daldaSoftHILSA',
            quantity : quantity.daldaSoftHILSA
        },
        {
            name : 'Cardamon Flavour',
            code_name : 'cardamonFlavour',
            quantity : quantity.cardamonFlavour
        },
        {
            name : 'Flour A Grade',
            code_name : 'flourGrade_A',
            quantity : quantity.flourGrade_A
        },
        {
            name : 'Flour B Grade',
            code_name : 'flourGrade_B',
            quantity : quantity.flourGrade_B
        },
        {
            name : 'Flour C Grade',
            code_name : 'flourGrade_C',
            quantity : quantity.flourGrade_C
        },
        {
            name : 'Glucose Powder',
            code_name : 'glucosePowder',
            quantity : quantity.glucosePowder
        },
        {
            name : 'Lemon Flvour',
            code_name : 'lemonFlavour',
            quantity : quantity.lemonFlavour
        },
        {
            name : 'Lemon Yellow Colour',
            code_name : 'lemonYellowColour',
            quantity : quantity.lemonYellowColour
        },
        {
            name : 'Soya Lecithin',
            code_name : 'soyaLecithine',
            quantity : quantity.soyaLecithine
        },
        {
            name : 'Liquid Glucose',
            code_name : 'liquidGlucose',
            quantity : quantity.liquidGlucose
        },
        {
            name : 'Milk Flavour KH',
            code_name : 'milkFlavourKH',
            quantity : quantity.milkFlavourKH
        },
        {
            name : 'Orange Flavour',
            code_name : 'orangeFlavour',
            quantity : quantity.orangeFlavour
        },
        {
            name : 'Onion Flavour Green',
            code_name : 'onionFlavourGreen',
            quantity : quantity.onionFlavourGreen
        },
        {
            name : 'Onion Flavour Symega',
            code_name : 'onionFlavourSYMEGA',
            quantity : quantity.onionFlavourSYMEGA
        },
        {
            name : 'Onion Powder',
            code_name : 'onionPowder',
            quantity : quantity.onionPowder
        },
        {
            name : 'Palm Oil Super',
            code_name : 'palmOilSuper',
            quantity : quantity.palmOilSuper
        },
        {
            name : 'Pineapple Flavour',
            code_name : 'pineappleFlavour',
            quantity : quantity.pineappleFlavour
        },
        {
            name : 'Palm Corn Oil',
            code_name : 'palmCornOil',
            quantity : quantity.palmCornOil
        },
        {
            name : 'Salt (Super)',
            code_name : 'superSalt',
            quantity : quantity.superSalt
        },
        {
            name : 'Sodium Acid Pyro Phosphet',
            code_name : 'sodiumAcidpyroPhosphet',
            quantity : quantity.sodiumAcidpyroPhosphet
        },
        {
            name : 'Skim Milk Powder',
            code_name : 'skimMilkPowder',
            quantity : quantity.skimMilkPowder
        },
        {
            name : 'Sodium Meta Bi Sulphate',
            code_name : 'sodiumMetaBiSulphate',
            quantity : quantity.sodiumMetaBiSulphate
        },
        {
            name : 'Sodium Bi Carbonate',
            code_name : 'sodiumBiCarbonate',
            quantity : quantity.sodiumBiCarbonate
        },
        {
            name : 'Starch Powder',
            code_name : 'starchPowder',
            quantity : quantity.starchPowder
        },
        {
            name : 'Sugar',
            code_name : 'sugar',
            quantity : quantity.sugar
        },
        {
            name : 'Testing Salt',
            code_name : 'testingSalt',
            quantity : quantity.testingSalt
        },
        {
            name : 'TBHQ',
            code_name : 'tbhq',
            quantity : quantity.tbhq
        },
        {
            name : 'Vanilin Powder',
            code_name : 'vanilinPowder',
            quantity : quantity.vanilinPowder
        },
        {
            name : 'Onion Chieves',
            code_name : 'onionChieves',
            quantity : quantity.onionChieves
        },
        {
            name : 'Coconut Flavour',
            code_name : 'coconutFlavour',
            quantity : quantity.coconutFlavour
        },
        {
            name : 'Butta Belly Flavour',
            code_name : 'buttaBellyFlavour',
            quantity : quantity.buttaBellyFlavour
        },
        {
            name : 'Coconut Powder',
            code_name : 'coconutPowder',
            quantity : quantity.coconutPowder
        },
    ]
    const createProduct = {...product,ingredients}
    console.log(quantity);
    return(
        <div className="add_product pt-5">
            <div className="ingredient_area">
                <h3>Add Product</h3>
                <div className="heading">
                    <p className="name">Ingredients</p>
                    <p>Quantity</p>
                </div>
                <div className="ingredients">
                    <div>
                        {
                            ingredients.map((ingredient,i)=><Input key={i} ingredient={ingredient} quantity={quantity} setQuantity={setQuantity}/>)
                        }
                    </div>
                    <button>Add Product</button>
                </div>
            </div>
        </div>
    )
}