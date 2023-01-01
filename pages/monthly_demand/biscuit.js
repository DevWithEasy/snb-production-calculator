import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../database/conncetDB";

export async function getServerSideProps(){
    const q= query(collection(db,'recipes'),where('section','==', 'Wafer'))
        const docs = await getDocs(q)
        const products = [];
        docs.forEach(data => products.push(data.data()));
    return{
        props:{products}
    }
}

export default function BiscuitDemand({products}){
    function findProduct(products,name){
        const product = products.find(product=>product.name == name)
        return product
    }
    const vanillaWafer = findProduct(products, 'Vanilla Wafer')
    const chocolateWafer = findProduct(products, 'Chocolate Wafer')

    function ingredientsByBatch(ingredients,batch){
        return ingredients.map(ingredient=>{
            return {...ingredient,quantity : ingredient.quantity * batch}
        })
    }
    
    const vanillaWaferIngredients = ingredientsByBatch(vanillaWafer.ingredients,1)
    const chocolateWaferIngredients = ingredientsByBatch(chocolateWafer.ingredients,1)
    const all = [...vanillaWaferIngredients,...chocolateWaferIngredients]
    function ingredient(all,name){
        return all.filter(item => item.code_name == name).map((a,i)=>a.quantity).reduce((a,i)=>a+i,0).toFixed(2)
    }
    const chocolateBrownColour_6059 = ingredient(all, 'chocolateBrownColour_6059')
    console.log(chocolateBrownColour_6059);
    return(
        <div>
            Demand
        </div>
    )
}