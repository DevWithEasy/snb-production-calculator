export default function Ingredient({name,value}){
    return(
        <div className="flex justify-between items-center p-2 mx-2 border-b">
            <p className="w-2/3">{name}</p>
            <p className="w-1/3 text-right">{value}</p>
        </div>
    )
}