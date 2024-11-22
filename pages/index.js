import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '../public/logo.png'
import { ImSpinner2 } from "react-icons/im";
import { useRouter } from 'next/router';
import appStore from '../features/appStore';

export default function Index() {
    const router = useRouter()
    const { app_user } = appStore()
    useEffect(()=>{
        if(app_user.section){
            return router.push('/v2/user_area/'+app_user?.section.toLowerCase())
        }else{
            setTimeout(()=>{
                return router.push('/v2/login')
            },2000)
        }
    },[router,app_user])
    return (
        <div
            className='h-[calc(100%-128px)] flex flex-col justify-center items-center'
        >
            <div
                className='relative flex flex-col items-center'
            >
                <Image
                    alt='logo'
                    src={logo}
                    height={60}
                    width={80}
                />
                <p
                    className='font-bold hidden md:block'
                >
                    S&B Nice Food Valley Ltd.
                </p>
                <ImSpinner2 size={260} className="absolute -top-24 md:-top-16 w-40 md:w-80 animate-spin text-gray-200" />
            </div>

        </div>
    )
}
