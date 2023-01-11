export default function Ingredient({name,value}){
    return(
        <div className="flex justify-between items-center py-2">
            <p className="w-2/3">{name}</p>
            <p className="w-1/3 text-center">{value}</p>
        </div>
    )
}