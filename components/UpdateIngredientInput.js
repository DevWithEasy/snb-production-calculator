import updateHandleInput from "../utils/updateHandleInput";

export default function UpdateIngredientInput({ingredient,quantity,setQuantity}){
    // console.log(ingredient);
    return(
        <div className="input">
            <label htmlFor={ingredient.code_name}>{ingredient.name}</label>
            <input type='number' name={ingredient.code_name} value={ingredient.quantity} onChange={(e)=>updateHandleInput(e,quantity,setQuantity)}/>
        </div>
    )
}