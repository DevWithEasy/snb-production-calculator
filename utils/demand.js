class Demand{
    constructor(demand){
        this.demand =demand;
    }
    keyName=(name)=>{
        const keyName = name.replace(/ /g, '_');
        return keyName
    }

    array_to_Obj=(input_array)=>{
        const outputObject = {};
        for (const item of input_array) {
            const key = Object.keys(item)[0];
            const value = item[key];
            outputObject[key] = value;
        }
        return outputObject
    }

    arrayOfObj_to_object=(input_arrayOfObj)=>{
        const result = {};
        for (const obj of input_arrayOfObj) {
        const [key, val] = Object.entries(obj)[0];
        result[key] = { ...result[key], [key]: val, ...obj } || obj;
        delete result[key][key];
        }
    
        return result
    }

    getProducts=() =>{
        let products = []
        this.demand.forEach(product => products.push(product.id));
        return products
    }

    getIngedients=() =>{
        let ingredients = []
        this.demand.forEach(product => {
            product.ingredients.forEach(ingredient => ingredients.push(ingredient))
        });
        return ingredients
    }

    getIngedient=(ingredients,name)=>{
        const ingredient = ingredients.filter(ingredient => ingredient.hasOwnProperty(name)).reduce((acc,item) => acc + item[name],0).toFixed(2);
        return Number(ingredient)
    }

    
}