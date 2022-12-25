import handleInput from "../utils/handleInput";

export default function Input({ingredient,quantity,setQuantity}){
    console.log(ingredient);
    return(
        <div className="input">
            <label htmlFor={ingredient.code_name}>{ingredient.name}</label>
            <div>
                <input type='number' name={ingredient.code_name} onChange={(e)=>handleInput(e,quantity,setQuantity)}/>
            </div>
        </div>
    )
}