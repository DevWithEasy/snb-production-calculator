import handleInput from "../../utils/v1/handleInput";

export default function SectionInput({label,name,products,product,setProduct}){
    return(
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <div>
                <input type='text' name={name} onChange={(e)=>handleInput(e,product,setProduct)}/>
                <select>
                    <option value="">Select Product</option>
                    
                </select>
            </div>
        </div>
    )
}