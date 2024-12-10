import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import appStore from '../../../../features/appStore'
import toast from 'react-hot-toast'
import HeadInfo from '../../../../components/HeadInfo'
import { PiCalculatorLight } from "react-icons/pi";
import { GiBlackBook } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";

export default function Section() {
    const router = useRouter()
    const { logout, app_user } = appStore()
    const handleLogout = () => {
        logout()
        router.push('/')
        toast.success('Logged out successfully')
    }

    const paths = [
        {
            path: '/v2/recipe/',
            name: 'Recipe Book',
            icon: <GiBlackBook />
        },
        {
            path: '/v2/recieved/rm/',
            name: 'Raw Material Recieved',
            icon: <PiCalculatorLight />
        },
        {
            path: '/v2/recieved/pm/',
            name: 'Packing Material Recieved',
            icon: <PiCalculatorLight />
        },
        {
            path: '/v2/consumption/rm/',
            name: 'Raw Material Calculation',
            icon: <PiCalculatorLight />
        },
        {
            path: '/v2/consumption/pm/',
            name: 'Packing Material Calculation',
            icon: <PiCalculatorLight />
        },
        {
            path: '/v2/calculation/',
            name: 'Day By Calculation',
            icon: <PiCalculatorLight />
        },
    ]

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
                        paths.map(path => (
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
