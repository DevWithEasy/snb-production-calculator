export function biscuitProduct(quantity){
    const ingredients = [
        {
            name : 'Ammonium Bi Carbonate',
            code_name : 'ammonium',
            quantity : Number(quantity.ammonium)
        },
        {
            name : 'Black Cumin',
            code_name : 'blackCumin',
            quantity : Number(quantity.blackCumin)
        },
        {
            name : 'Bit Salt',
            code_name : 'bitSalt',
            quantity : Number(quantity.bitSalt)
        },
        {
            name : 'Butter Flavour SK',
            code_name : 'butterFlavourSK',
            quantity : Number(quantity.butterFlavourSK)
        },
        {
            name : 'Butter Flavour Symega',
            code_name : 'butterFlavourSYMEGA',
            quantity : Number(quantity.butterFlavourSYMEGA)
        },
        {
            name : 'Butter Solid',
            code_name : 'butterSolid',
            quantity : Number(quantity.butterSolid)
        },
        {
            name : 'Butter Oil Substitute',
            code_name : 'butterOilSubstitute',
            quantity : Number(quantity.butterOilSubstitute)
        },
        {
            name : 'Chocolate Brown Colour 815',
            code_name : 'chocolateBrownColour_815',
            quantity : Number(quantity.chocolateBrownColour_815)
        },
        {
            name : 'Aspertem',
            code_name : 'aspertem',
            quantity : Number(quantity.aspertem)
        },
        {
            name : 'Chocokate Flavour KH',
            code_name : 'chocolateFlavourKH',
            quantity : Number(quantity.chocolateFlavourKH)
        },
        {
            name : 'Calcium Carbonate',
            code_name : 'calciumCarbonate',
            quantity : Number(quantity.calciumCarbonate)
        },
        {
            name : 'Cracker Enzyme',
            code_name : 'crakerEnzyme',
            quantity : Number(quantity.crakerEnzyme)
        },
        {
            name : 'Citric Acid Mono',
            code_name : 'citricAcidMono',
            quantity : Number(quantity.citricAcidMono)
        },
        {
            name : 'Cocoa Powder Black 910',
            code_name : 'cocoaPowderBlack_910',
            quantity : Number(quantity.cocoaPowderBlack_910)
        },
        {
            name : 'Dalda Soft (Hilsa)',
            code_name : 'daldaSoftHILSA',
            quantity : Number(quantity.daldaSoftHILSA)
        },
        {
            name : 'Cardamon Flavour',
            code_name : 'cardamonFlavour',
            quantity : Number(quantity.cardamonFlavour)
        },
        {
            name : 'Flour A Grade',
            code_name : 'flourGrade_A',
            quantity : Number(quantity.flourGrade_A)
        },
        {
            name : 'Flour B Grade',
            code_name : 'flourGrade_B',
            quantity : Number(quantity.flourGrade_B)
        },
        {
            name : 'Flour C Grade',
            code_name : 'flourGrade_C',
            quantity : Number(quantity.flourGrade_C)
        },
        {
            name : 'Glucose Powder',
            code_name : 'glucosePowder',
            quantity : Number(quantity.glucosePowder)
        },
        {
            name : 'Lemon Flvour',
            code_name : 'lemonFlavour',
            quantity : Number(quantity.lemonFlavour)
        },
        {
            name : 'Lemon Yellow Colour',
            code_name : 'lemonYellowColour',
            quantity : Number(quantity.lemonYellowColour)
        },
        {
            name : 'Soya Lecithin',
            code_name : 'soyaLecithine',
            quantity : Number(quantity.soyaLecithine)
        },
        {
            name : 'Liquid Glucose',
            code_name : 'liquidGlucose',
            quantity : Number(quantity.liquidGlucose)
        },
        {
            name : 'Milk Flavour KH',
            code_name : 'milkFlavourKH',
            quantity : Number(quantity.milkFlavourKH)
        },
        {
            name : 'Orange Flavour',
            code_name : 'orangeFlavour',
            quantity : Number(quantity.orangeFlavour)
        },
        {
            name : 'Onion Flavour Green',
            code_name : 'onionFlavourGreen',
            quantity : Number(quantity.onionFlavourGreen)
        },
        {
            name : 'Onion Flavour Symega',
            code_name : 'onionFlavourSYMEGA',
            quantity : Number(quantity.onionFlavourSYMEGA)
        },
        {
            name : 'Onion Powder',
            code_name : 'onionPowder',
            quantity : Number(quantity.onionPowder)
        },
        {
            name : 'Palm Oil Super',
            code_name : 'palmOilSuper',
            quantity : Number(quantity.palmOilSuper)
        },
        {
            name : 'Pineapple Flavour',
            code_name : 'pineappleFlavour',
            quantity : Number(quantity.pineappleFlavour)
        },
        {
            name : 'Palm Corn Oil',
            code_name : 'palmCornOil',
            quantity : Number(quantity.palmCornOil)
        },
        {
            name : 'Salt (Super)',
            code_name : 'superSalt',
            quantity : Number(quantity.superSalt)
        },
        {
            name : 'Sodium Acid Pyro Phosphet',
            code_name : 'sodiumAcidpyroPhosphet',
            quantity : Number(quantity.sodiumAcidpyroPhosphet)
        },
        {
            name : 'Skim Milk Powder',
            code_name : 'skimMilkPowder',
            quantity : Number(quantity.skimMilkPowder)
        },
        {
            name : 'Sodium Meta Bi Sulphate',
            code_name : 'sodiumMetaBiSulphate',
            quantity : Number(quantity.sodiumMetaBiSulphate)
        },
        {
            name : 'Sodium Bi Carbonate',
            code_name : 'sodiumBiCarbonate',
            quantity : Number(quantity.sodiumBiCarbonate)
        },
        {
            name : 'Starch Powder',
            code_name : 'starchPowder',
            quantity : Number(quantity.starchPowder)
        },
        {
            name : 'Sugar',
            code_name : 'sugar',
            quantity : Number(quantity.sugar)
        },
        {
            name : 'Testing Salt',
            code_name : 'testingSalt',
            quantity : Number(quantity.testingSalt)
        },
        {
            name : 'TBHQ',
            code_name : 'tbhq',
            quantity : Number(quantity.tbhq)
        },
        {
            name : 'Vanilin Powder',
            code_name : 'vanilinPowder',
            quantity : Number(quantity.vanilinPowder)
        },
        {
            name : 'Onion Chieves',
            code_name : 'onionChieves',
            quantity : Number(quantity.onionChieves)
        },
        {
            name : 'Coconut Flavour',
            code_name : 'coconutFlavour',
            quantity : Number(quantity.coconutFlavour)
        },
        {
            name : 'Butta Belly Flavour',
            code_name : 'buttaBellyFlavour',
            quantity : Number(quantity.buttaBellyFlavour)
        },
        {
            name : 'Coconut Powder',
            code_name : 'coconutPowder',
            quantity : Number(quantity.coconutPowder)
        },
    ]
    return ingredients
}

export function waferProduct(quantity) {
    const ingredients = [
        {
            name : 'Chocolate Brown Colour 6059',
            code_name : 'chocolateBrownColour_6059',
            quantity : Number(quantity.chocolateBrownColour_6059)
        },
        {
            name : 'Citric Acid',
            code_name : 'citricAcidMono',
            quantity : Number(quantity.citricAcidMono)
        },
        {
            name : 'Cocoa Powder Black 4011',
            code_name : 'cocoaPowderBlack_4011',
            quantity : Number(quantity.cocoaPowderBlack_4011)
        },
        {
            name : 'Chocolate Flavour KH',
            code_name : 'chocolateFlavourKH',
            quantity : Number(quantity.chocolateFlavourKH)
        },
        {
            name : 'Dalda Hard Pusti',
            code_name : 'daldaHardPUSTI',
            quantity : Number(quantity.daldaHardPUSTI)
        },
        {
            name : 'Flour A Grade',
            code_name : 'flourGrade_A',
            quantity : Number(quantity.flourGrade_A)
        },
        {
            name : 'Flour B Grade',
            code_name : 'flourGrade_B',
            quantity : Number(quantity.flourGrade_B)
        },
        {
            name : 'Soya Lecithine',
            code_name : 'soyaLecithine',
            quantity : Number(quantity.soyaLecithine)
        },
        {
            name : 'Milk Flavour KH',
            code_name : 'milkFlavourKH',
            quantity : Number(quantity.milkFlavourKH)
        },
        {
            name : 'Palm Oil Super',
            code_name : 'palmOilSuper',
            quantity : Number(quantity.palmOilSuper)
        },
        {
            name : 'Salt Super',
            code_name : 'superSalt',
            quantity : Number(quantity.superSalt)
        },
        {
            name : 'Skim Milk Powder',
            code_name : 'skimMilkPowder',
            quantity : Number(quantity.skimMilkPowder)
        },
        {
            name : 'Sodium Bi Carbonate',
            code_name : 'sodiumBiCarbonated',
            quantity : Number(quantity.sodiumBiCarbonate)
        },
        {
            name : 'Sodium Meta Bi-Sulphate',
            code_name : 'sodiumMetaBiSulphate',
            quantity : Number(quantity.sodiumMetaBiSulphate)
        },
        {
            name : 'Starch Powder',
            code_name : 'starchPowder',
            quantity : Number(quantity.starchPowder)
        },
        {
            name : 'Sugar',
            code_name : 'sugar',
            quantity : Number(quantity.sugar)
        },
        {
            name : 'TBHQ',
            code_name : 'tbhq',
            quantity : Number(quantity.tbhq)
        },
        {
            name : 'Vanilin Powder',
            code_name : 'vanilinPowder',
            quantity : Number(quantity.vanilinPowder)
        },
    ]
    return ingredients
}