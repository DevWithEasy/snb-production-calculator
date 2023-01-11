export default function ingredient(all,name){
    return Number(all.filter(item => item.name == name).map(item=>item.quantity).reduce((total,item)=>total+item,0).toFixed(2))
}