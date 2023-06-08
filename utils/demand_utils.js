import { ingredients_Array_to_Obj } from "./api_utils";

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

export const getDemandList=(demand)=>{

    const ingredients = getIngedients(demand)

    const uniqueKeys = new Set();

    ingredients.forEach(obj => {
    const keys = Object.keys(obj);
        keys.forEach(key => {
            uniqueKeys.add(key);
        });
    });
    
    const ingredients_name = Array.from(uniqueKeys);
    const data = []

    ingredients_name.forEach(name => {
        data.push({
            [name]: getIngedient(ingredients,name)
        })
    })
    
    const result = ingredients_Array_to_Obj(data)
    console.log(result)
}