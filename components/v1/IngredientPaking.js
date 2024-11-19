export default function Ingredientpacking({name,value,unit}){
    return(
        <div className="flex justify-between items-center p-2 mx-2 border-b">
            <p className="w-2/3">{name}</p>
            <p className="w-1/3 text-right">
                <span>{value} </span>
                <span className="text-xs"> {unit}</span>
            </p>
        </div>
    )
}