import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import appStore from '../../../../features/appStore'
import toast from 'react-hot-toast'
import HeadInfo from '../../../../components/HeadInfo'
import { PiCalculatorLight } from "react-icons/pi";
import { GiBlackBook } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";
import { LuFileInput } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

export default function Section() {
    const router = useRouter()
    const { logout, app_user } = appStore()
    const handleLogout = () => {
        logout()
        router.push('/')
        toast.success('Logged out successfully')
    }

    const path_categorys = [
        {
            title: '',
            paths: [
                {
                    path: '/v2/recipe/',
                    name: 'Recipe Book',
                    icon: <GiBlackBook />
                },
                {
                    path: '/v2/calculation/',
                    name: 'Stock recieved consumption',
                    icon: <FaBook />
                },
            ]
        },
        {
            title: 'Raw Materials',
            paths: [
                {
                    path: '/v2/recieved/rm/',
                    name: 'Insert daily recieved',
                    icon: <LuFileInput />
                },
                {
                    path: '/v2/consumption/rm/',
                    name: 'Daily consumption calculation',
                    icon: <PiCalculatorLight />
                },
                {
                    path: '/v2/update/recieved/rm/',
                    name: 'Update daily recieved',
                    icon: <FaRegEdit />
                },
                {
                    path: '/v2/update/consumption/rm/',
                    name: 'Update daily consumption',
                    icon: <FaRegEdit />
                },
            ]
        },
        {
            title: 'Packing Materials',
            paths: [
                {
                    path: '/v2/recieved/pm/',
                    name: 'Insert daily recieved',
                    icon: <LuFileInput />
                },

                {
                    path: '/v2/consumption/pm/',
                    name: 'Daily consumption calculation',
                    icon: <PiCalculatorLight />
                },

                {
                    path: '/v2/update/recieved/pm/',
                    name: 'Update daily recieved',
                    icon: <FaRegEdit />
                },

                {
                    path: '/v2/update/consumption/pm/',
                    name: 'Update daily consumption',
                    icon: <FaRegEdit />
                },
            ]
        }
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
