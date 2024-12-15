import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import appStore from '../../features/appStore';

export default function AuthCheck({ children }) {
    const router = useRouter()
    const { app_user } = appStore()

    return (
        <div className='relative'>
            {children}
        </div>
    )
}

