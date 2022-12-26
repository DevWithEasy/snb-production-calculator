import handleInput from "../utils/handleInput";

export default function ProductInput({label,name,product,setProduct}){
    return(
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <div>
                <input type='text' name={name} onChange={(e)=>handleInput(e,product,setProduct)}/>
            </div>
        </div>
    )
}