import {
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillEdit, AiFillFileMarkdown, AiOutlineDelete, AiOutlineMenu, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import useUserStore from '../features/userStore';
import adminUIData from '../utils/adminUIData';
import AddProduct from './AddProduct';
import AddSection from './AddSection';
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';
import UpdateUser from './UpdateUser';

const DashBoard = () => {
    const {user,logout,users,products,sections} = useUserStore()
    const [active,setActive] = useState(0)
    const [action,setAction] = useState('recipe')
    const router = useRouter()

    const logoutUser =()=>{
        logout()
        router.push("/")
    }

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

    return(
        <div className="m-4 border rounded-md shadow-lg">
            <Head>
                <title>S&B Nice Food Valley Ltd.</title>
                <meta name="description" content="S&B Nice Food Valley Ltd." />
                <link rel="icon" href="/logo.png" />
            </Head>
            <h1 className='text-center text-2xl'>Admin Dashboard</h1>
            <div className='flex justify-between'>
                <div className='w-4/12'>

                </div>
                <div className="w-8/12 m-4 p-2 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-y-2">
                        <div className="border p-2 rounded shadow">
                            <div className="flex justify-between items-center bg-gray-500 p-2 text-white">
                                <span>Recipes</span>
                                <p className="w-1/2 flex space-x-4">
                                    <AiOutlineUnorderedList size={25} onClick={()=>sactionHandler('recipe')} className={active === 0 ? 'bg-green-300 p-1 rounded' :'hover:scale-150 transition-all duration-300 hover:bg-green-300 p-1 rounded'}/>
                                    <AiFillEdit size={25} onClick={()=>sactionHandler('update/recipe')} className={active === 1 ? 'bg-green-300 p-1 rounded' :'hover:scale-150 transition-all duration-300 hover:bg-green-300 p-1 rounded'}/>
                                    <BiAddToQueue size={25} onClick={()=>sactionHandler('add')} className={active === 2 ? 'bg-green-300 p-1 rounded' :'hover:scale-150 transition-all duration-300 hover:bg-green-300 p-1 rounded'}/>
                                    <AiFillFileMarkdown size={25} onClick={()=>sactionHandler('monthly_demand')} className={active === 3 ? 'bg-green-300 p-1 rounded' :'hover:scale-150 transition-all duration-300 hover:bg-green-300 p-1 rounded'}/>
                                </p>
                            </div>
                            <div className="mt-2">
                                {adminUIData.map((item, index) =><Link key={index} href={`/${action}/${item.link}`}>
                                        <a className="block p-2 hover:bg-blue-50 hover:transition-all duration-300 rounded">{item.title}</a>
                                </Link>)}
                            </div>
                        </div>
                        <div className="border p-2 rounded shadow">
                            <table className="w-full">
                                <thead className="bg-gray-500 p-2 text-white font-bold">
                                    <tr>
                                        <td className="p-2">Name</td>
                                        <td className="p-2 text-center">Username</td>
                                        <td className="p-2 text-center">Password</td>
                                        <td className="p-2 text-center">Section</td>
                                        <td className="p-2 text-center">Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user=><tr key={user.id} className="border-b hover:bg-blue-50 hover:transition-all duration-300 rounded">
                                        <td className="p-2">{user?.name}</td>
                                        <td className="p-2 text-center">{user?.username}</td>
                                        <td className="p-2 text-center">{user?.password}</td>
                                        <td className="p-2 text-center">{user?.section}</td>
                                        <td className="p-2 flex justify-center items-center space-x-2">
                                            <UpdateUser {...{user,sections}}/>
                                            <DeleteUser {...{user,sections}}/>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                        <div className="border p-2 rounded shadow">
                            <h1 className="bg-gray-500 p-2 text-white">All Products</h1>
                            <div className="h-[400px] overflow-x-auto">
                                <table className="w-full ">
                                    <tbody>
                                        {products.map(product=><tr key={product.id} className="border-b hover:bg-blue-50 hover:transition-all duration-300 rounded">
                                            <td className="p-2">{product?.name}</td>
                                            <td className="p-2 text-center">{product?.section}</td>
                                            <td className="p-2 flex justify-center items-center space-x-2">
                                                <AiFillEdit size={25} className="hover:scale-150 transition-all duration-300 hover:bg-green-500 p-1 rounded cursor-pointer hover:text-white"/>
                                                <AiOutlineDelete size={25} className="hover:scale-150 transition-all duration-300 hover:bg-red-500 p-1 rounded cursor-pointer hover:text-white"/>
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashBoard;