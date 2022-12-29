import handleInput from "../utils/handleInput";

export default function UpdateProductInput({label,name,value,product,setProduct}){
    return(
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <input type='number' name={name} value={value} onChange={(e)=>handleInput(e,product,setProduct)}/>
        </div>
    )
}