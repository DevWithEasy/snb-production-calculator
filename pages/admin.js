import { collection, getDocs, query } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from 'react-hot-toast';
import { AiFillEdit, AiFillFileMarkdown, AiOutlineDelete, AiOutlineLogout, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { useDispatch } from "react-redux";
import AddProduct from "../components/AddProduct";
import AddSection from "../components/AddSection";
import AddUser from "../components/AddUser";
import { db } from "../database/conncetDB";
import { logout } from "../features/slice/userSlice";
import { adminUIData } from "../public/adminUIdata";

export async function getServerSideProps(){
    const q= query(collection(db,'users'))
    const docs = await getDocs(q)
    const users = [];
    docs.forEach(data => users.push({id:data.id,user : data.data()}));

    const productQ= query(collection(db,'products'))
    const docsProducts = await getDocs(productQ)
    const products = [];
    docsProducts.forEach(data => products.push(data.data()));

    return({
      props : {
        users,products
      }
    })
}

export default function Admin({users,products}){
    const [user,setUser] = useState(false)
    const [section,setSection] = useState(false)
    const [product,setProduct] = useState(false)
    const [active,setActive] = useState(0)
    const [action,setAction] = useState('recipe')
    const dispatch = useDispatch()
    const router = useRouter()
    const logoutUser =()=>{
        dispatch(logout())
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
        <div className="flex justify-center">
            <Head>
                <title>S&B Nice Food Valley Ltd.</title>
                <meta name="description" content="S&B Nice Food Valley Ltd." />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="relative w-full mx-4 px-2 py-4 mt-10 mb-6 border rounded-md shadow-lg space-y-2">
                <div className="space-x-2 border-b pb-4">
                    <Link href=''>
                        <a className="p-2 bg-gray-500 text-white rounded" onClick={()=>setUser(!user)}>Add User</a>
                    </Link>
                    <Link href=''>
                        <a className="p-2 bg-gray-500 text-white rounded" onClick={()=>setSection(!section)}>Add Section</a>
                    </Link>
                    <Link href=''>
                        <a className="p-2 bg-gray-500 text-white rounded" onClick={()=>setProduct(!product)}>Add Product</a>
                    </Link>
                    <AiOutlineLogout size={25} onClick={()=>logoutUser()} className="absolute top-4 right-4 cursor-pointer hover:text-red-500"/>
                </div>
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
                        {adminUIData.map((item, index) =><Link key={index} href={`/${action}/${item.link}`}>
                                <a className="block p-2 hover:bg-blue-50 hover:transition-all duration-300 rounded">{item.title}</a>
                        </Link>)}
                    </div>
                    <div className="border p-2 rounded shadow">
                        <h1 className="bg-gray-500 p-2 text-white">All Users</h1>
                        <table className="w-full">
                            <tbody>
                                {users.map(user=><tr key={user.id} className="border-b hover:bg-blue-50 hover:transition-all duration-300 rounded">
                                    <td className="p-2">{user?.user?.name}</td>
                                    <td className="p-2 text-center">{user?.user?.section}</td>
                                    <td className="p-2 flex justify-center items-center space-x-2">
                                        <AiFillEdit size={25} className="hover:scale-150 transition-all duration-300 hover:bg-green-500 p-1 rounded cursor-pointer hover:text-white"/>
                                        <AiOutlineDelete size={25} className="hover:scale-150 transition-all duration-300 hover:bg-red-500 p-1 rounded cursor-pointer hover:text-white"/>
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

                {user && <AddUser user={user} setUser={setUser}/>}
                {section && <AddSection section={section} setSection={setSection}/>}
                {product && <AddProduct product={product} setProduct={setProduct}/>}
            </div>
        </div>
    )
}