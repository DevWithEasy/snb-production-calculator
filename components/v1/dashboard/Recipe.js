import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEdit, AiFillFileMarkdown, AiOutlineFileExcel, AiOutlineUnorderedList, AiOutlineCopyrightCircle} from 'react-icons/ai';
import { BiSolidAddToQueue } from 'react-icons/bi';
import adminUIData from '../../../utils/v1/adminUIData';
import Link from 'next/link';

const Recipe = () => {
    const [active, setActive] = useState(0)
    const [action, setAction] = useState('recipe')
    function sactionHandler(type) {
        if (type == "/v1/recipe") {
            setAction(type);
            setActive(0)
            toast.success('View Mode Active')
        }
        if (type == "/v1/recipe/update") {
            setAction(type);
            setActive(1)
            toast.success('Update Mode Active')
        }
        if (type == "/v1/add") {
            setAction(type);
            setActive(2)
            toast.success('Recipe Add Mode Active')
        }
        if (type == "/v1/recipe/compare") {
            setAction(type);
            setActive(3)
            toast.success('Compare Mode Active')
        }
        if (type == "/v1/monthly_demand") {
            setAction(type);
            setActive(3)
            toast.success('Monthly Demand Mode Active')
        }
        if (type == "/v1/recipe/all") {
            setAction(type);
            setActive(4)
            toast.success('Excel Generate Mode Active')
        }

    }
    return (
        <div className="">
            <div className="flex justify-center items-center p-2 space-x-4">
                <AiOutlineUnorderedList size={25} onClick={() => sactionHandler('/v1/recipe')} className={active === 0 ? 'bg-gray-500 text-white p-1 rounded' : 'hover:scale-150 transition-all duration-300 hover:bg-gray-500 hover:text-white p-1 rounded'} />
                <AiFillEdit size={25} onClick={() => sactionHandler('/v1/recipe/update')} className={active === 1 ? 'bg-gray-500 text-white p-1 rounded' : 'hover:scale-150 transition-all duration-300 hover:bg-gray-500 hover:text-white p-1 rounded'} />
                <BiSolidAddToQueue size={25} onClick={() => sactionHandler('/v1/add')} className={active === 2 ? 'bg-gray-500 p-1 rounded' : 'hover:scale-150 transition-all duration-300 hover:bg-gray-500 hover:text-white p-1 rounded'} />
                <AiFillFileMarkdown size={25} onClick={() => sactionHandler('/v1/monthly_demand')} className={active === 3 ? 'bg-gray-500 text-white p-1 rounded' : 'hover:scale-150 transition-all duration-300 hover:bg-gray-500 hover:text-white p-1 rounded'} />
                <AiOutlineCopyrightCircle size={25} onClick={() => sactionHandler('/v1/recipe/compare')} className={active === 3 ? 'bg-gray-500 text-white p-1 rounded' : 'hover:scale-150 transition-all duration-300 hover:bg-gray-500 hover:text-white p-1 rounded'} />
                <AiOutlineFileExcel size={25} onClick={() => sactionHandler('/v1/recipe/all')} className={active === 4 ? 'bg-gray-500 text-white p-1 rounded' : 'hover:scale-150 transition-all duration-300 hover:bg-gray-500 hover:text-white p-1 rounded'} />
            </div>
            <div className="mt-2 space-y-2">
                {adminUIData.map((item, index) => <Link
                    target="_blank"
                    key={index}
                    href={`${action}/${item.link}`}
                    className='block w-full p-2 text-left bg-gray-50 hover:bg-blue-100 hover:transition-all duration-300 rounded'
                >
                    {item.title}
                </Link>)}
            </div>
        </div>
    );
};

export default Recipe;