export default function ingredientTotal(allItems,name){
    const items = allItems.filter(item => item.name === name)
    const total = items.reduce((total,item) => total + item.quantity , 0)
    console.log(total.toFixed(2));
}