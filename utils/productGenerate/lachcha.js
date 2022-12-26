export default function lachchaProduct(quantity) {
    const ingredients = [
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
            name : 'Palm Oil Super',
            code_name : 'palmOilSuper',
            quantity : Number(quantity.palmOilSuper)
        },
        {
            name : 'Starch Powder',
            code_name : 'starchPowder',
            quantity : Number(quantity.starchPowder)
        },
        {
            name : 'Dalda Hard Pusti',
            code_name : 'daldaHardPUSTI',
            quantity : Number(quantity.daldaHardPUSTI)
        },
        {
            name : 'Ghee',
            code_name : 'ghee',
            quantity : Number(quantity.ghee)
        },
        {
            name : 'Ghee Flavour',
            code_name : 'gheeFlavour',
            quantity : Number(quantity.gheeFlavour)
        },
        {
            name : 'TBHQ',
            code_name : 'tbhq',
            quantity : Number(quantity.tbhq)
        },
    ]
    return ingredients
}