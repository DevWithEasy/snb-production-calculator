import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'
import { BiLogOutCircle } from "react-icons/bi"
import HeadInfo from '../../../../components/HeadInfo'
import appStore from '../../../../features/appStore'
import path_categorys from '../../../../utils/v2/path_categorys'

export default function Section() {
    const router = useRouter()
    const { logout, app_user } = appStore()
    
    const handleLogout = () => {
        logout();
        const isDevelopment = process.env.NODE_ENV === 'development';
        const domain = isDevelopment ? 'localhost' : 'snbfood.vercel.app';
        const path = '/'
        Cookies.remove('authToken', { path, domain });
        Cookies.remove('section', { path, domain })
        toast.success('Logged out successfully')
        router.push('/')
    }

    return (
        <>
            <HeadInfo title={`${app_user?.name} - ${app_user?.section}`} />
            <div
                className='bg-white rounded-lg border'
            >
                <div
                    className='bg-gray-100 px-4 py-2'
                >
                    <p>{app_user.name} ({app_user.section})</p>
                </div>
                <div
                    className='px-4 pt-2'
                >
                    {
                        path_categorys.map((category) => (
                            <div key={category.title}>
                                {category.title && <p className='border-b'>{category.title}</p>}
                                <div>
                                    {
                                        category.paths.map((path, j) => (
                                            <Link key={path.path} href={path.path + router.query.section}>
                                                <p
                                                    className='my-3 flex items-center space-x-2'
                                                >

                                                    {path.icon}
                                                    <span>{path.name}</span>
                                                </p>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div
                    className='px-4 py-2 flex justify-end'
                >
                    <button onClick={handleLogout}
                        className='px-4 py-1 flex items-center space-x-1 bg-red-50/50 text-red-500 rounded-lg border border-red-100'
                    >
                        <BiLogOutCircle size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </>

    )
}
