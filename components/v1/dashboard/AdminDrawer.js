import { useRouter } from 'next/router';
import React from 'react';
import useUserStore from '../../../features/userStore';

const AdminDrawer = () => {
    const router = useRouter()
    const {active,setActive,logout} = useUserStore()
    const logoutUser =()=>{
        logout()
        router.push("/v1")
    }
    const actives = ['Dashboard', 'Recipes', 'Users', 'Products']
    return (
        <div>
       {
                actives.map((item,index)=><button
                    key={index}
                    onClick={()=>setActive(index)}
                    className={`block w-full p-2 border-b text-left hover:bg-blue-50 ${active == index ? 'bg-blue-50' : ''}`}
                >
                    {item}
                </button>)
            }
            <button
                onClick={()=>logoutUser()}
                className={`block w-full p-2 border-b text-left hover:bg-red-100 `}
            >
                Logout
            </button>
    </div>
    );
};

export default AdminDrawer;