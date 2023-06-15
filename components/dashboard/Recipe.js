import { Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEdit, AiFillFileMarkdown, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import adminUIData from '../../utils/adminUIData';
import { useRouter } from 'next/router';

const Recipe = () => {
    const router = useRouter()
    const [active,setActive] = useState(0)
    const [action,setAction] = useState('recipe')
    function sactionHandler (type){
        if(type == "recipe"){
            setAction(type);
            setActive(0)
            toast.success('View Mode Active')
        }
        if(type == "update/recipe"){
            setAction(type);
            setActive(1)
            toast.success('Update Mode Active')
        }
        if(type == "add"){
            setAction(type);
            setActive(2)
            toast.success('Recipe Add Mode Active')
        }
        if(type == "monthly_demand"){
            setAction(type);
            setActive(3)
            toast.success('Monthly Demand Mode Active')
        }
       
    }
    return (
        <div className="">
                            <div className="flex justify-center items-center p-2 space-x-4">
                                    <AiOutlineUnorderedList size={25} onClick={()=>sactionHandler('recipe')} className={active === 0 ? 'bg-gray-500 text-white p-1 rounded' :'hover:scale-150 transition-all duration-300 hover:bg-gray-500 hover:text-white p-1 rounded'}/>
                                    <AiFillEdit size={25} onClick={()=>sactionHandler('update/recipe')} className={active === 1 ? 'bg-gray-500 text-white p-1 rounded' :'hover:scale-150 transition-all duration-300 hover:bg-gray-500 hover:text-white p-1 rounded'}/>
                                    <BiAddToQueue size={25} onClick={()=>sactionHandler('add')} className={active === 2 ? 'bg-gray-500 p-1 rounded' :'hover:scale-150 transition-all duration-300 hover:bg-gray-500 hover:text-white p-1 rounded'}/>
                                    <AiFillFileMarkdown size={25} onClick={()=>sactionHandler('monthly_demand')} className={active === 3 ? 'bg-gray-500 text-white p-1 rounded' :'hover:scale-150 transition-all duration-300 hover:bg-gray-500 hover:text-white p-1 rounded'}/>
                            </div>
                            <div className="mt-2 space-y-2">
                                {adminUIData.map((item, index) =><Link 
                                    key={index}
                                    // onClick={() =>router.push(`/${action}/${item.link}`)} 
                                    href={`/${action}/${item.link}`}
                                    className='block w-full p-2 text-left bg-gray-50 hover:bg-blue-100 hover:transition-all duration-300 rounded'
                                >
                                    <a>{item.title}</a>
                                </Link>)}
                            </div>
                        </div>
    );
};

export default Recipe;