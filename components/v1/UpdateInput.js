import handleRmInput from "../../utils/v1/handleRmInput";

export default function UpdateInput({label,name,value,product,setProduct}){
    return(
        <div className="w-full flex justify-between items-center">
            <label className="w-6/12 p-2">{label}</label>
                <div className="w-6/12 flex border rounded">
                    <input className="w-4/12 p-2 text-center border-r" type='number' value={value} disabled/>
                    <input className="w-8/12 p-2 text-center rounded focus:outline-none focus:ring-2" type='number' name={name}  onChange={(e)=>handleRmInput(e,product,setProduct)}/>
                </div>
        </div>
    )
}