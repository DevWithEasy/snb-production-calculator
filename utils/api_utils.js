export function ingredients_Obj_to_Array(ingredients_obj,batch){
    return Object.entries(ingredients_obj).map(([key, value]) => ({ [key]: value* batch }))
}

export function ingredients_Array_to_Obj(ingredients_Array){
    const outputObject = {};

    for (const item of ingredients_Array) {
        const key = Object.keys(item)[0];
        const value = item[key];
        outputObject[key] = value;
    }

    return outputObject
}


export function targetBatch(targetCarton,product,ingredients){
    const keys = Object.values(ingredients)
    const total = keys.reduce((total,item)=>total + item,0)
    const output = total - (total*product?.processLoss)/100
    const totalCarton = Number(((output/(product?.packetWeight/1000))/product?.packetPerCarton).toFixed(2))
    const totalTragetCarton = Number(targetCarton)+(Number(targetCarton)*20)/100
    return Number((totalTragetCarton/totalCarton).toFixed(2))
}