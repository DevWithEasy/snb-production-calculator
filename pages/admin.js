import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import AddProduct from "../components/AddProduct"
import AddSection from "../components/AddSection"
import AddUser from "../components/AddUser"
import useUserStore from "../features/userStore"

export default function Admin(){
    const users = useUserStore(state=>state.user)
    const [user,setUser] = useState(false)
    const [section,setSection] = useState(false)
    const [product,setProduct] = useState(false)
    const data = [
        {
            title : 'Biscuit',
            link : 'biscuit'
        },
        {
            title : 'Wafer',
            link : 'wafer'
        },
        {
            title : 'Cake',
            link : 'cake'
        },
        {
            title : 'Bakery',
            link : 'bakery'
        },
        {
            title : 'Snacks',
            link : 'snacks'
        },
        {
            title : 'Lachcha',
            link : 'lachcha'
        },
    ]
    console.log(users);
    return(
        <div className="flex justify-center">
            <Head>
                <title>S&B Nice Food Valley Ltd.</title>
                <meta name="description" content="S&B Nice Food Valley Ltd." />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="w-full mx-4 md:w-1/2 px-2 py-4 mt-10 border rounded-md shadow-lg space-y-2">
                <div className="space-x-2 border-b pb-4">
                    <Link href=''>
                        <a className="p-2 bg-gray-100 rounded" onClick={()=>setUser(!user)}>Add User</a>
                    </Link>
                    <Link href=''>
                        <a className="p-2 bg-gray-100 rounded" onClick={()=>setSection(!section)}>Add Section</a>
                    </Link>
                    <Link href=''>
                        <a className="p-2 bg-gray-100 rounded" onClick={()=>setProduct(!product)}>Add Product</a>
                    </Link>
                </div>
                <div className="p-2">
                    <h3 className="text-center bg-gray-500 p-2 text-white">Add Recipe</h3>
                    {data.map((item, index) =><Link key={index} href={`/add_product/${item.link}`}>
                            <a className="block p-2">{item.title}</a>
                    </Link>)}
                </div>

                {user && <AddUser user={user} setUser={setUser}/>}
                {section && <AddSection section={section} setSection={setSection}/>}
                {product && <AddProduct product={product} setProduct={setProduct}/>}
            </div>
        </div>
    )
}