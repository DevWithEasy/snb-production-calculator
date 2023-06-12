import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useUserStore from '../../features/userStore';
import Products from './Products';
import Recipe from './Recipe';
import Summary from './Summary';
import Users from './Users';

const DashBoard = () => {
    const {active,setActive,logout} = useUserStore()

    const router = useRouter()

    const logoutUser =()=>{
        logout()
        router.push("/")
    }

    const actives = ['Dashboard', 'Recipes', 'Users', 'Products']

    return(
        <div className="m-4">
            <Head>
                <title>S&B Nice Food Valley Ltd.</title>
                <meta name="description" content="S&B Nice Food Valley Ltd." />
                <link rel="icon" href="/logo.png" />
            </Head>
            <h1 className='text-center text-2xl border-b'>Admin Dashboard</h1>
            <div className='flex justify-between p-2 gap-x-4'>
                <div className='w-3/12 space-y-2'>
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
                            onClick={()=>logout()}
                            className={`block w-full p-2 border-b text-left hover:bg-red-100 `}
                         >
                            Logout
                         </button>
                </div>
                <div className="w-9/12 px-2">

                    {
                        active === 0 ? <Summary/> :
                        active === 1? <Recipe/> :
                        active === 2? <Users/> :
                        <Products/>
                    }

                </div>
            </div>
        </div>
    )
};

export default DashBoard;