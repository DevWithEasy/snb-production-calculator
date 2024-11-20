import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import appStore from '../../../../features/appStore'
import toast from 'react-hot-toast'

export default function Section() {
    const router = useRouter()
    const {logout} = appStore()
    const handleLogout=()=>{
        logout()
        router.push('/')
        toast.success('Logged out successfully')
    }
    return (
        <div>
            <Link href={`/v2/recipe/${router.query.section}`}>Go Recipe</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
