export default function biscuitProduct(quantity){
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
    return ingredients
}