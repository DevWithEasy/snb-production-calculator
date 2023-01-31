//recieve parameter recipe and batch no

export function ingredientsByBatch(product,batch){
    const keys = Object.keys(product?.recipe)
    const array = keys.map(item=>{
         return {name: item,quantity:product?.recipe[item]}
    })
    const data = array.map(item=>{
        return {name: item.name,quantity: item.quantity * Number(batch)}
    })
    return data;
}

export function ingredient(all,name){
    return Number(all.filter(item => item.name == name).map(item=>item.quantity).reduce((total,item)=>total+item,0).toFixed(2))
}

export function totalTargetCartonWithExtra(targetCarton){
    return Number((Number(targetCarton)+(Number(targetCarton)*20)/100))
}

export default function totalCartonByTargetCarton(targetCarton){
    const totalTragetCarton =  Number((Number(targetCarton)+(Number(targetCarton)*20)/100))
    const wastage = (totalTragetCarton * 2)/100
    return (totalTragetCarton + wastage).toFixed(0)
}

export  function totalFoilByTargetCarton(targetCarton,product){
    const totalTragetCarton =  Number((Number(targetCarton)+(Number(targetCarton)*20)/100))
    const foil = totalTragetCarton * product?.foilWeight * product?.packetPerCarton
    const wastage = (foil * 2)/100
    return ((foil + wastage)/1000).toFixed(2)
}

export function totalMasterPPByTargetCarton(targetCarton,product){
    const totalTragetCarton =  Number((Number(targetCarton)+(Number(targetCarton)*20)/100))
    const masterPP = totalTragetCarton * product?.masterPoly
    const wastage = (masterPP * .5)/100
    return ((masterPP + wastage)/1000).toFixed(2)
}