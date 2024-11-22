import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import appStore from '../../../../features/appStore'
import toast from 'react-hot-toast'
import HeadInfo from '../../../../components/HeadInfo'

export default function Section() {
    const router = useRouter()
    const {logout,user} = appStore()
    const handleLogout=()=>{
        logout()
        router.push('/')
        toast.success('Logged out successfully')
    }
    return (
        <>
        <HeadInfo title={`${user?.name} - ${user?.section}`}/>
        <div>
            <Link href={`/v2/recipe/${router.query.section}`}>
                <p>Recipe</p>
            </Link>
            <Link href={`/v2/consumption/rm/${router.query.section}`}>
                <p>RM Consumption</p>
            </Link>
            <Link href={`/v2/consumption/pm/${router.query.section}`}>
                <p>PM Consumption</p>
            </Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
        </>
        
    )
}
