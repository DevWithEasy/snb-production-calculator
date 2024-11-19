import handleInput from "../../utils/v1/handleInput";

export default function IngredientInput({ingredient,quantity,setQuantity}){
    return(
        <div className="input">
            <label htmlFor={ingredient.code_name}>{ingredient.name}</label>
            <input type='text' name={ingredient.code_name} onChange={(e)=>handleInput(e,quantity,setQuantity)}/>
        </div>
    )
}