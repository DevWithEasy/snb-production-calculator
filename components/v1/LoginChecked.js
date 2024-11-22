import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useUserStore from '../../features/userStore';

const LoginChecked = () => {
    const { loged, adminData } = useUserStore()
    const [hide, setHide] = useState(false)
    const [type, setType] = useState("password")
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    function handleHide() {
        if (type === "password") {
            setType("text")
            setHide(true)
        }
        if (type === "text") {
            setType("password")
            setHide(false)
        }
    }

    async function loginUser() {
        if (!username || !password) {
            toast.error("Please enter a username and password")
        }
        try {
            setLoading(true)
            const res = await axios.post('/api/user/login', { username, password })
            if (res.data.status == 200) {
                setLoading(false)
                loged(res.data.data.user)
            }
            if (res.data.data.user.section == 'Admin') {
                adminData(res.data.data)
            }
        } catch (error) {
            setLoading(false)
            toast.error(error.response.data.message)
        }

    }
    return (
        <div
            className='fixed left-0 top-0 h-screen w-full flex justify-center items-center bg-slate-500/50 z-10'
        >
            <div className="w-full mx-2 md:mx-0 md:w-1/2 flex justify-center items-center">
            <div className="w-full relative bg-white rounded-md p-4 space-y-2">
                <div className="space-y-2">
                    <label className="w-full pl-1">Username :</label>
                    <input className="w-full border p-2  rounded-md focus:outline-none focus:ring-2" type="email" name="" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="space-y-2 relative">
                    <label className="w-full pl-1">Password :</label>
                    <input className="w-full border p-2  rounded-md focus:outline-none focus:ring-2" type={type} name="" onChange={(e) => setPassword(e.target.value)} />
                    {!hide ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute right-3 top-8 w-6 h-6" onClick={() => handleHide()}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute right-3 top-8 w-6 h-6" onClick={() => handleHide()}>
                            <path strokeL="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>

                    }
                </div>
                <div className="py-2">
                    <button className="px-6 py-2 bg-slate-500 text-white rounded" onClick={() => loginUser()}>
                        {loading ?
                            <span className="flex items-center space-x-2">
                                <span>Login...</span>
                            </span>
                            : 'Login'
                        }
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginChecked;