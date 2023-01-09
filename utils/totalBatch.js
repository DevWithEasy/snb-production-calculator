export default function totalBatch(recipe){
    const keys = Object.values(recipe)
    const total = keys.reduce((total,item)=>total + item,0)
    return total
}