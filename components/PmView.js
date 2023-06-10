export default function PmView({name,unit,pm}){
    return(
        <div className={pm == 0 ? `hidden` : `w-full flex justify-between py-2 print:py-0 border-b print:border-gray-500 items-center rounded print:rounded-none hover:bg-gray-500 hover:text-white transition-all duration-300 print:text-sm`}>
            <label htmlFor="" className='w-6/12 pl-2'>{name}</label>
            <label htmlFor="" className='w-2/12 pl-2'>{unit ? unit : 'Kg'}</label>
            <div className='w-4/12 text-center'>
                {
                    Number(pm)  == 0 ? "-" : pm
                }
            </div>
        </div>
    )
}