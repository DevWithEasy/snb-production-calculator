
export const ingredients_Obj_to_Array=(ingredients_obj,batch)=>{
    return Object.entries(ingredients_obj).map(([key, value]) => ({ [key]: value* batch }))
}

export const ingredients_Array_to_Obj=(ingredients_Array)=>{
    const outputObject = {};

    for (const item of ingredients_Array) {
        const key = Object.keys(item)[0];
        const value = item[key];
        outputObject[key] = value;
    }

    return outputObject
}

export const targetBatch=(targetCarton,product,ingredients)=>{
    const keys = Object.values(ingredients)
    const total = keys.reduce((total,item)=>total + item,0)
    const output = total - (total*product?.processLoss)/100
    const totalCarton = Number(((output/(product?.packetWeight/1000))/product?.packetPerCarton).toFixed(2))
    const totalTragetCarton = Number(targetCarton)+(Number(targetCarton)*20)/100
    return Number((totalTragetCarton/totalCarton).toFixed(2))
}

export const getProducts=(demand) =>{
    let products = []
    demand.forEach(product => products.push(product.id));
    return products
}

export const getIngedients=(demand) =>{
    let ingredients = []
    demand.forEach(product => {
        product.ingredients.forEach(ingredient => ingredients.push(ingredient))
    });
    return ingredients
}

export const getIngedient=(ingredients,name)=>{
    const ingredient = ingredients.filter(ingredient => ingredient.hasOwnProperty(name)).reduce((acc,item) => acc + item[name],0).toFixed(2);

    return Number(ingredient)
}

export const totalCartonByTargetCarton=(targetCarton)=>{
    const totalTragetCarton =  Number((Number(targetCarton)+(Number(targetCarton)*20)/100))
    const wastage = (totalTragetCarton * 0.5)/100
    return Number((totalTragetCarton + wastage).toFixed(0))
}

export  const totalFoilByTargetCarton=(targetCarton,product)=>{
    const totalTragetCarton =  totalCartonByTargetCarton(targetCarton)
    const foil = totalTragetCarton * product?.foilWeight * product?.packetPerCarton
    const wastage = (foil * 2)/100
    return ((foil + wastage)/1000).toFixed(2)
}

export  const totalTrayByTargetCarton=(targetCarton,product)=>{
    const totalTragetCarton =  totalCartonByTargetCarton(targetCarton)
    const foil = totalTragetCarton * product?.packetPerCarton
    const wastage = (foil * 0.5)/100
    return ((foil + wastage)/1000).toFixed(2)
}

export  const totalBoardByTargetCarton=(targetCarton)=>{
    const totalTragetCarton =  totalCartonByTargetCarton(targetCarton)
    const foil = totalTragetCarton * 2
    const wastage = (foil * 0.5)/100
    return ((foil + wastage)/1000).toFixed(2)
}

export const getDemandList=(demand)=>{
    //get all products ingredientslist
    const ingredients = getIngedients(demand)

    //get all products ingredients
    const uniqueKeys = new Set();

    ingredients.forEach(obj => {
    const keys = Object.keys(obj);
        keys.forEach(key => {
            uniqueKeys.add(key);
        });
    });
    
    const ingredients_name = Array.from(uniqueKeys);

    //get array of ingredients
    const data = []

    ingredients_name.forEach(name => {
        data.push({
            [name]: getIngedient(ingredients,name)
        })
    })
    
    //ingredients array to object
    const raw = ingredients_Array_to_Obj(data)
    

    const products = getProducts(demand)

    products.forEach(product =>{
        demand.forEach(dProduct =>{
            if(dProduct.id == product){
                console.log(dProduct)
            }
        })
    })
    
    console.log(products)

}