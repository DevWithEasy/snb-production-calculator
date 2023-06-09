export const nameWith_ = (name)=>{
    const nameWith_ = name.replace(/ /g, '_');
    return nameWith_
}



export const ingredients_Obj_to_Array=(ingredients_obj,batch)=>{
    return Object.entries(ingredients_obj).map(([key, value]) => ({ [key]: value* batch }))
}

export const array_to_Obj=(input_array)=>{
    const outputObject = {};

    for (const item of input_array) {
        const key = Object.keys(item)[0];
        const value = item[key];
        outputObject[key] = value;
    }

    return outputObject
}

export const arrayOfObj_to_object=(input_arrayOfObj)=>{
    const result = {};
    for (const obj of input_arrayOfObj) {
    const [key, val] = Object.entries(obj)[0];
    result[key] = { ...result[key], [key]: val, ...obj } || obj;
    delete result[key][key];
    }

    return result
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
    return Number(((foil + wastage)/1000).toFixed(2))
}

export  const totalTrayByTargetCarton=(targetCarton,product)=>{
    const totalTragetCarton =  totalCartonByTargetCarton(targetCarton)
    const tray = totalTragetCarton * product?.packetPerCarton
    const wastage = (tray * 0.5)/100
    if(product.id === 'Active_Energy_Family' || product.id === 'Best_Choice_Family' || product.id === 'Valencia_Orange_Family'){
        return Number((tray + wastage).toFixed(0))
    }else{
        return 0
    }
}

export  const totalATCByTargetCarton=(targetCarton,product)=>{
    const totalTragetCarton =  totalCartonByTargetCarton(targetCarton)
    const atc = totalTragetCarton * 6
    const wastage = (atc * 0.5)/100
    if(product.id === 'Lexus_Family'){
        return Number((atc + wastage).toFixed(0))
    }else{
        return 0
    }
}

export  const totalBoardByTargetCarton=(targetCarton)=>{
    const totalTragetCarton =  totalCartonByTargetCarton(targetCarton)
    const board = totalTragetCarton * 2
    const wastage = (board * 0.5)/100
    return Number((board + wastage).toFixed(0))
}

export const getDemandRM=(demand)=>{
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
    return array_to_Obj(data)

}

export const getDemandPM=(demand)=>{
    const rm = getDemandRM(demand)
    const products = getProducts(demand)
    const data = []

    products.forEach(product =>{
        demand.forEach(dProduct =>{
            if(dProduct.id == product && dProduct.section == 'Wafer'){
                const key = nameWith_(dProduct.name)
                const wra_qty = totalFoilByTargetCarton(dProduct.target,dProduct)

                const ctn_qty = totalCartonByTargetCarton(dProduct.target)
                const board_qty = totalBoardByTargetCarton(dProduct.target)
                data.push({
                    [key] : key,
                    wrapper : wra_qty, 
                    carton : ctn_qty, 
                    board : board_qty
                })
            }else if(dProduct.id == product && dProduct.section == 'Biscuit'){
                const key = nameWith_(dProduct.name)
                const wra_qty = totalFoilByTargetCarton(dProduct.target,dProduct)

                const ctn_qty = totalCartonByTargetCarton(dProduct.target)
                const board_qty = totalTrayByTargetCarton(dProduct.target,dProduct)
                const atc_qty = totalATCByTargetCarton(dProduct.target,dProduct)
                data.push({
                    [key] : key,
                    wrapper : wra_qty, 
                    carton : ctn_qty, 
                    tray : board_qty,
                    atc : atc_qty
                })
            }
        })
    })
    
    console.log(arrayOfObj_to_object(data))
}