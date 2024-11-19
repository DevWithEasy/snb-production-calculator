export function totalCarton(product,batch){
    const keys = Object.values(product?.ingredients)
    const total = keys.reduce((total,item)=>total + item,0)
    const output = total - (total*product?.processLoss)/100
    const totalCarton = Number((((output/(product?.packetWeight/1000))/product?.packetPerCarton)*batch).toFixed(0))
    return totalCarton
}

export function totalFoil(product,carton){
    const totalFoil =(( product?.foilWeight * product?.packetPerCarton * carton)/1000).toFixed(2)
    return totalFoil
}

export default function totalInnerFoil(product,carton){
    const totalFoil =(( product?.innerFoil * product?.packetPerCarton * 3 * carton)/1000).toFixed(2)
    return totalFoil
}

export function totalMasterPoly(product,carton){
    const totalFoil =((product?.masterPoly * carton)/1000).toFixed(2)
    return totalFoil
}

