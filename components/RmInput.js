import handleRmInput from "../utils/handleRmInput";

export default function RmInput({name,ingredient,ingredients,setIngredients}){
    return(
        <div className="input">
            <label htmlFor={ingredient}>{name}</label>
            <input type='number' name={ingredient} onChange={(e)=>handleRmInput(e,ingredients,setIngredients)}/>
        </div>
    )
}