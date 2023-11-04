export default function RmView({name,ingredient}){
    return(
        <div className={ingredient == 0 ? `hidden` : `w-full flex justify-between py-2 print:py-0.5 border-b print:border-gray-400 items-center rounded print:rounded-none hover:bg-gray-500 hover:text-white transition-all duration-300 print:text-xs`}>
            <label htmlFor="" className='w-3/4 pl-2'>{name}</label>
            <div className='w-1/4 text-right pr-4'>
                {
                    Number(ingredient)  == 0 ? "-" : ingredient
                }
            </div>
        </div>
    )
}