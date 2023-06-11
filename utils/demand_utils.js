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

export const targetCarton=(targetCarton)=>{
    const total =  Number((Number(targetCarton)+(Number(targetCarton)*20)/100))
    return Number(total.toFixed(0))
}

export const cartonPerBatch=(product,ingredients)=>{
    const keys = Object.values(ingredients)
    const total = keys.reduce((total,item)=>total + item,0)
    const output = total - (total*product?.processLoss)/100
    const totalCarton = Number(((output/(product?.packetWeight/1000))/product?.packetPerCarton).toFixed(2))
    return totalCarton
}

export const targetBatch=(targetCarton,cartonPerBatch)=>{
    return Number((targetCarton/cartonPerBatch).toFixed(2))
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

export const getTotalPmItem=(object,name)=>{
    const result = Object.keys(object).map(key =>object[key])
    return result.map(item=> item[name]).reduce((acc,cur)=>acc+cur,0)
}

export const getTotalInnerMaster=(object,name,unit)=>{

    if(name == 'inner' && unit == 15){
        return Object.keys(object)
        .filter(key=> key =='Special_Chanachur_15_gm' || key =='Jhal_Chanachur_15_gm' || key =='Fried_Peas')
        .map((key=> object[key]))
        .map(item=> item.inner_poly)
        .reduce((acc,cur)=>acc+cur,0)

    }else if(name == 'inner' && unit == 90){
        return Object.keys(object)
        .filter(key=> key =='Special_Chanachur_90_gm' || key =='Jhal_Chanachur_90_gm')
        .map((key=> object[key]))
        .map(item=> item.inner_poly)
        .reduce((acc,cur)=>acc+cur,0)

    }else if(name == 'inner' && unit == 180){
        return Object.keys(object)
        .filter(key=> key =='Special_Chanachur_180_gm')
        .map((key=> object[key]))
        .map(item=> item.inner_poly)
        .reduce((acc,cur)=>acc+cur,0)

    }else if(name == 'master' && unit == 15){
        return Object.keys(object)
        .filter(key=> key =='Special_Chanachur_15_gm' || key =='Jhal_Chanachur_15_gm' || key =='Fried_Peas')
        .map((key=> object[key]))
        .map(item=> item.master_poly)
        .reduce((acc,cur)=>acc+cur,0)

    }else if(name == 'master' && unit == 90){
        return Object.keys(object)
        .filter(key=> key =='Special_Chanachur_90_gm' || key =='Special_Chanachur_180_gm' || key =='Jhal_Chanachur_90_gm')
        .map((key=> object[key]))
        .map(item=> item.master_poly)
        .reduce((acc,cur)=>acc+cur,0)

    }
}

export const getTotalFoil=(object,name)=>{

    if(name == 'vanilla'){
        return Object.keys(object)
        .filter(key=> key =='Tiffin_Cake_Vanilla_Standard' || key =='Tiffin_Cake_Vanilla_Family')
        .map((key=> object[key]))
        .map(item=> item.wrapper)
        .reduce((acc,cur)=>acc+cur,0)

    }else if(name == 'chocolate'){
        return Object.keys(object)
        .filter(key=> key =='Tiffin_Cake_Chocolate_Standard' || key =='Tiffin_Cake_Chocolate_Family')
        .map((key=> object[key]))
        .map(item=> item.wrapper)
        .reduce((acc,cur)=>acc+cur,0)

    }else if(name == 'milk11'){
        return Object.keys(object)
        .filter(key=> key =='Milk_Cake_11_gm_Standard' || key =='Milk_Cake_11_gm_Family')
        .map((key=> object[key]))
        .map(item=> item.wrapper)
        .reduce((acc,cur)=>acc+cur,0)

    }else if(name == 'milk22'){
        return Object.keys(object)
        .filter(key=> key =='Milk_Cake_22_gm_Standard' || key =='Milk_Cake_22_gm_Family')
        .map((key=> object[key]))
        .map(item=> item.wrapper)
        .reduce((acc,cur)=>acc+cur,0)

    }else if(name == 'lexus'){
        return Object.keys(object)
        .filter(key=> key =='Lexus_Mini' || key =='Lexus_Family')
        .map((key=> object[key]))
        .map(item=> item.wrapper)
        .reduce((acc,cur)=>acc+cur,0)

    }else if(name == 'cookies'){
        return Object.keys(object)
        .filter(key=> key =='Milk_Cookies' || key =='Chocolate_Cookies')
        .map((key=> object[key]))
        .map(item=> item.tray)
        .reduce((acc,cur)=>acc+cur,0)

    }else if(name == 'dryCake'){
        return Object.keys(object)
        .filter(key=> key =='Dry_Cake_Mini' || key =='Dry_Cake_Family')
        .map((key=> object[key]))
        .map(item=> item.paper)
        .reduce((acc,cur)=>acc+cur,0)

    }
}

export const totalFoilByTargetCarton=(product)=>{
    const foil = product.target * product?.foilWeight * product?.packetPerCarton
    const wastage = (foil * 2)/100
    return Number(((foil + wastage)/1000).toFixed(2))
}

export const totalCartonByTargetCarton=(targetCarton)=>{
    const wastage = (targetCarton * 0.5)/100
    return Number((targetCarton + wastage).toFixed(0))
}

export  const totalBoardByTargetCarton=(targetCarton)=>{
    const board = targetCarton * 2
    const wastage = (board * 0.5)/100
    return Number((board + wastage).toFixed(0))
}

export const totalTrayByTargetCarton=(product)=>{
    const tray = product.target * product?.packetPerCarton
    const wastage = (tray * 0.5)/100
    if(product.id === 'Active_Energy_Family' || product.id === 'Best_Choice_Family' || product.id === 'Valencia_Orange_Family' || product.id === 'Chocolate_Cookies' || product.id === 'Milk_Cookies' || product.id === 'Butter_Cookies' || product.id === 'Dry_Cake_Family'){
        return Number((tray + wastage).toFixed(0))
    }else{
        return 0
    }
}

export  const totalATCByTargetCarton=(product,packet)=>{
    const atc = product.target * packet
    const wastage = (atc * 0.5)/100
    if(product.id === 'Lexus_Family' || product.id === 'Lachcha_Semai_500gm' || product.id === 'Tiffin_Cake_Vanilla_Family' || product.id === 'Tiffin_Cake_Chocolate_Family' || product.id === 'Milk_Cake_11_gm_Family' || product.id === 'Milk_Cake_22_gm_Family' || product.id === 'Dry_Cake_Family'){
        return Number((atc + wastage).toFixed(0))
    }else{
        return 0
    }
}

export  const totalGumTape_2ByTargetCarton=(product)=>{
    if(product.section === 'Biscuit' || product.section === 'Wafer' || product.section === 'Bakery'){
        return Number((product.target / 250).toFixed(0))
    }else if(product.section === 'Snacks'){
        return Number((product.target / 120).toFixed(0))
    }else if(product.id === 'Tiffin_Cake_Vanilla_Standard' || product.id === 'Tiffin_Cake_Chocolate_Standard' || product.id === 'Milk_Cake_11_gm_Standard' || product.id === 'Milk_Cake_22_gm_Standard' || product.id === 'Lachcha_Semai_200gm'){
        return Number((product.target / 234).toFixed(0))
    }else if(product.id === 'Tiffin_Cake_Vanilla_Family' || product.id === 'Tiffin_Cake_Chocolate_Family' || product.id === 'Milk_Cake_11_gm_Family' || product.id === 'Milk_Cake_22_gm_Family' || product.id === 'Lachcha_Semai_500gm'){
        return Number((product.target / 168).toFixed(0))
    }else{
        return 0
    }
}

export  const totalGumTape_1ByTargetCarton=(product)=>{
   if(product.id === 'Tiffin_Cake_Vanilla_Family' || product.id === 'Tiffin_Cake_Chocolate_Family' || product.id === 'Milk_Cake_11_gm_Family' || product.id === 'Milk_Cake_22_gm_Family'){
        return Number((product.target / 20).toFixed(0))
    }else if(product.id === 'Butter_Cookies'){
        return Number((product.target / 10).toFixed(0))
    }else if(product.id === 'Lexus_Family'){
        return Number((product.target / 12).toFixed(0))
    }else{
        return 0
    }
}

export  const totalInnerPolyByTargetCarton=(product)=>{
    const result =(size)=>{
        const foil = product.target * size * product?.packetPerCarton
        const wastage = (foil * 2)/100
        return Number(((foil + wastage)/1000).toFixed(2))
    }
    const result2 =(size)=>{
        const foil = (product.target * size * product?.packetPerCarton)/product?.packet_per_inner
        const wastage = (foil * 2)/100
        return Number(((foil + wastage)/1000).toFixed(2))
    }

    if(product.id === 'Special_Toast'){
        return result(product?.inner_poly_9_11_5)
     }else if(product.id === 'Butter_Toast'){
        return result(product?.inner_poly_8_11_5)
     }else if(product.id === 'Butter_Cookies'){
        const foil = product.target * product?.inner_poly_6_8 * product?.packetPerCarton * 2
        const wastage = (foil * 2)/100
        return Number(((foil + wastage)/1000).toFixed(2))
     }else if(product.id === 'Special_Chanachur_15_gm' || product.id === 'Jhal_Chanachur_15_gm' || product.id === 'Fried_Peas'){
        return result2(product?.inner_poly_18_15)
     }else if(product.id === 'Special_Chanachur_120_gm' || product.id === 'Jhal_Chanachur_120_gm'){
        return result2(product?.inner_poly_17_19_5)
     }else if(product.id === 'Special_Chanachur_180_gm'){
        return result2(product?.inner_poly_16_21_5)
     }else if(product.id === 'Fried_Dal'){
        return result2(product?.inner_poly_24_15)
     }else if(product.id === 'BBQ'){
        return result2(product?.inner_poly_19_20)
     }else{
         return 0
     }
}

export  const totalMasterPolyByTargetCarton=(product)=>{
    const result =(size)=>{
        const foil = product.target * size
        const wastage = (foil * 2)/100
        return Number(((foil + wastage)/1000).toFixed(2))
    }

    if(product.id === 'Special_Chanachur_15_gm' || product.id === 'Jhal_Chanachur_15_gm' || product.id === 'Fried_Peas'){
        return result(product?.master_poly_25_47)
     }else if(product.id === 'Special_Chanachur_120_gm' || product.id === 'Jhal_Chanachur_120_gm' || product.id === 'Special_Chanachur_180_gm'){
        return result(product?.master_poly_35_26)
     }else if(product.id === 'Fried_Dal'){
        return result(product?.master_poly_44_23)
     }else if(product.id === 'BBQ'){
        return result(product?.master_poly_28_42)
     }else{
         return 0
     }
}


//---------------lachcha------------------------

export const getLachchaMasterPoly=(product)=>{
    const foil = product.target * product?.master_poly_24_22_5
    const wastage = (foil * 2)/100
    if(product.id === 'Lachcha_Semai_200gm'){
        return Number(((foil + wastage)/1000).toFixed(2))
    }else{
        return 0
    }
}

//--------------Cake------------------------------
export const getCakeOuterPoly=(product)=>{
    const packet = product.id =='Milk_Cake_22_gm_Family' ? 10 : 18
    const foil = product.target * packet * product?.shrink_outer_poly
    const wastage = (foil * 2)/100
    if(product.id === 'Tiffin_Cake_Vanilla_Family' || product.id === 'Tiffin_Cake_Chocolate_Family' || product.id === 'Milk_Cake_11_gm_Family' || product.id === 'Milk_Cake_22_gm_Family'){
        return Number(((foil + wastage)/1000).toFixed(2))
    }else{
        return 0
    }
    
}

//-------------Bakery----------------------------
export const getBakeryPaper=(product) =>{
    if(product.id == 'Dry_Cake_Mini' || product.id == 'Dry_Cake_Family' ||product.id == 'Butter_Cookies'){
        const paper = product.target * product?.dryCakepaper * product?.packetPerCarton
        return Number((paper/1000).toFixed(2))
    }else{
        return 0
    }
}

//-----------------------------------------------

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
    const products = getProducts(demand)
    const data = []

    products.forEach(product =>{
        demand.forEach(dProduct =>{
            if(dProduct.id == product && dProduct.section == 'Wafer'){
                const key = nameWith_(dProduct.name)
                const wra_qty = totalFoilByTargetCarton(dProduct)

                const ctn_qty = totalCartonByTargetCarton(dProduct.target)
                const board_qty = totalBoardByTargetCarton(dProduct.target)
                const gumTape_qty = totalGumTape_2ByTargetCarton(dProduct)
                data.push({
                    [key] : key,
                    wrapper : wra_qty, 
                    carton : ctn_qty, 
                    board : board_qty,
                    gumTap2 : gumTape_qty
                })
            }else if(dProduct.id == product && dProduct.section == 'Biscuit'){
                const key = nameWith_(dProduct.name)
                const wra_qty = totalFoilByTargetCarton(dProduct)
                const ctn_qty = totalCartonByTargetCarton(dProduct.target)
                const tray_qty = totalTrayByTargetCarton(dProduct)
                const atc_qty = totalATCByTargetCarton(dProduct,6)
                const gumTape_qty = totalGumTape_2ByTargetCarton(dProduct)
                const gumTapeBoth_qty = dProduct.id == 'Lexus_Family' ? totalGumTape_1ByTargetCarton(dProduct) : 0
                
                data.push({
                    [key] : key,
                    wrapper : wra_qty, 
                    carton : ctn_qty, 
                    tray : tray_qty,
                    atc : atc_qty,
                    gumTap2 : gumTape_qty,
                    gumTapBoth : gumTapeBoth_qty
                })
            }else if(dProduct.id == product && dProduct.section == 'Lachcha'){
                const key = nameWith_(dProduct.name)
                const wra_qty = totalFoilByTargetCarton(dProduct)
                const ctn_qty = dProduct.id == 'Lachcha_Semai_500gm' ?totalCartonByTargetCarton(dProduct.target) : 0
                const atc_qty = totalATCByTargetCarton(dProduct,12)
                const master_poly = getLachchaMasterPoly(dProduct)
                const gumTape_qty = totalGumTape_2ByTargetCarton(dProduct)
                data.push({
                    [key] : key,
                    wrapper : wra_qty, 
                    carton : ctn_qty, 
                    master_poly : master_poly, 
                    atc : atc_qty,
                    gumTap2 : gumTape_qty
                })
            }else if(dProduct.id == product && dProduct.section == 'Cake'){
                const key = nameWith_(dProduct.name)
                const wra_qty = totalFoilByTargetCarton(dProduct)
                const ctn_qty = totalCartonByTargetCarton(dProduct.target) 
                const atc_qty = dProduct.id == 'Milk_Cake_22_gm_Family'?totalATCByTargetCarton(dProduct,10) : totalATCByTargetCarton(dProduct,18)
                const outer_poly = getCakeOuterPoly(dProduct)
                const gumTape_qty = totalGumTape_2ByTargetCarton(dProduct)
                const gumTape1_qty = totalGumTape_1ByTargetCarton(dProduct)
                data.push({
                    [key] : key,
                    wrapper : wra_qty, 
                    carton : ctn_qty, 
                    outer_poly : outer_poly, 
                    atc : atc_qty,
                    gumTap2 : gumTape_qty,
                    gumTap1 : gumTape1_qty
                })
            }else if(dProduct.id == product && dProduct.section == 'Bakery'){
                const key = nameWith_(dProduct.name)
                const wra_qty = totalFoilByTargetCarton(dProduct)
                const ctn_qty = totalCartonByTargetCarton(dProduct.target) 
                const atc_qty = totalATCByTargetCarton(dProduct,6)
                const tray_qty = dProduct.id != 'Butter_Cookies' ? totalTrayByTargetCarton(dProduct) : 0 
                const jar_qty = dProduct.id == 'Butter_Cookies' ? totalTrayByTargetCarton(dProduct) : 0 
                const inner_poly_qty = totalInnerPolyByTargetCarton(dProduct)
                const paper = getBakeryPaper(dProduct)
                const gumTape_qty = totalGumTape_2ByTargetCarton(dProduct)
                const gumTape1_qty = dProduct.id == 'Butter_Cookies' ? totalGumTape_1ByTargetCarton(dProduct) : 0
                data.push({
                    [key] : key,
                    wrapper : wra_qty, 
                    carton : ctn_qty, 
                    atc : atc_qty,
                    tray : tray_qty,
                    jar : jar_qty,
                    inner_poly: inner_poly_qty,
                    paper : paper,
                    label : jar_qty,
                    gumTap2 : gumTape_qty,
                    gumTap1 : gumTape1_qty
                })
            }else if(dProduct.id == product && dProduct.section == 'Snacks'){
                const key = nameWith_(dProduct.name)
                const wra_qty = totalFoilByTargetCarton(dProduct)
                const inner_poly_qty = totalInnerPolyByTargetCarton(dProduct)
                const master_poly_qty = totalMasterPolyByTargetCarton(dProduct)
                const gumTape_qty = totalGumTape_2ByTargetCarton(dProduct)
                data.push({
                    [key] : key,
                    wrapper : wra_qty, 
                    inner_poly: inner_poly_qty,
                    master_poly: master_poly_qty,
                    gumTap2 : gumTape_qty,
                })
            }
        })
    })
    
    return (arrayOfObj_to_object(data))
}

export const getDemand=(demand)=>{
    return {
        rm : getDemandRM(demand),
        pm : getDemandPM(demand)
    }
}