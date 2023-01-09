//recieve parameter recipe and batch no

export default function ingredientsByBatch(product,batch){
    const keys = Object.keys(product?.recipe)
    const array = keys.map(item=>{
         return {name: item,quantity:product?.recipe[item]}
    })
    const data = array.map(item=>{
        return {name: item.name,quantity: item.quantity * Number(batch)}
    })
    return data;
}