import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Section() {
    const router = useRouter()
    
    return (
        <div>
            <Link href={`/v2/recipe/${router.query.section}`}>Go Recipe</Link>
        </div>
    )
}
