export default function RmView({name,ingredient}){
    return(
        <div className={ingredient == 0 ? `hidden` : `w-full flex justify-between py-2 print:py-0 border-b print:border-gray-500 items-center rounded print:rounded-none hover:bg-gray-500 hover:text-white transition-all duration-300 hover:scale-[1.02] print:text-sm`}>
            <label htmlFor="" className='w-3/4 pl-2 print:pl-0'>{name}</label>
            <div className='w-1/4 text-center'>
                {
                    Number(ingredient)  == 0 ? "-" : ingredient
                }
            </div>
        </div>
    )
}