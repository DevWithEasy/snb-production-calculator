import handleInput from "../utils/handleInput";

export default function Input({ingredient,quantity,setQuantity}){
    console.log(ingredient);
    return(
        // <div className="input">
        //     {/* <label htmlFor={ingredient.code_name}>{ingredient.name}</label>
        //     <input type='number' name={ingredient.code_name} onChange={(e)=>handleInput(e,quantity,setQuantity)}/> */}
        // </div>
        <tr>
            <td>
                <label htmlFor={ingredient.code_name}>{ingredient.name}</label>
            </td>
            <td>
                <input type='number' name={ingredient.code_name} onChange={(e)=>handleInput(e,quantity,setQuantity)} className='add_input'/>
            </td>
        </tr>
    )
}