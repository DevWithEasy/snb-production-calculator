export default function targetBatch(targetCarton,product){

    const keys = Object.values(product?.recipe)
    const total = keys.reduce((total,item)=>total + item,0)
    const output = total - (total*product?.info?.processLoss)/100
    const totalCarton = Number(((output/(product?.info?.packetWeight/1000))/product?.info?.packetPerCarton).toFixed(2))
    const totalTragetCarton = Number(targetCarton)+(Number(targetCarton)*20)/100
    return Number((totalTragetCarton/totalCarton).toFixed(2))
}