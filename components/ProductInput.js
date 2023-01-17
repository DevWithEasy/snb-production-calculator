import handleRmInput from "../utils/handleRmInput";

export default function ProductInput({label,name,product,setProduct}){
    return(
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <input type='number' name={name} onChange={(e)=>handleRmInput(e,product,setProduct)}/>
        </div>
    )
}