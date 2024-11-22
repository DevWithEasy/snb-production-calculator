import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import appStore from "../../features/appStore"
import toast from "react-hot-toast"
import logo from '../../public/logo.png'
import Image from 'next/image'
import Link from "next/link"
import { FaCheckCircle } from "react-icons/fa";

export default function Login() {
    const {loged,user} = appStore()
    const router = useRouter()
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
    async function login() {
        setLoading(true)
        try {
            const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL+`?route=login&username=${username}&password=${password}`)
            if(data.sucess){
                setLoading(false)
                toast.success(data.message)

                const user = data.data

                loged(user)
                if(user.role === 'admin'){
                    router.push('/v2/admin')
                }else{
                    router.push('/v2/user_area/'+user.section.toLowerCase())
                }
            }else{
                setLoading(false)
                toast.error(data.message)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(()=>{
        if(user) {
            toast.success('Already loged in.')
            setTimeout(()=>{
                router.push('/v2/user_area/'+user.section.toLowerCase())
            },1000)
        }
    },[router,user])
    return (
        <div className="h-screen w-full flex justify-center items-center bg-gray-100">
            <div className="relative flex flex-col items-center bg-white rounded-md p-4 space-y-2">
                <button
                    className="absolute top-0 right-0 px-2 py-1 flex items-center space-x-1 bg-green-500 text-white text-sm rounded-tr"
                >
                    <FaCheckCircle/>
                    <span>V.2 (Appscript)</span>
                </button>
                <Image
                    alt='logo'
                    src={logo}
                    height={60}
                    width={80}
                />
                <h2 className="text-lg p-2 text-red-500">User Authentication Required</h2>
                <div className="space-y-2">
                    <label className="w-full pl-1">Username :</label>
                    <input className="w-full border-2 p-2  rounded-md focus:outline-none focus:border-blue-500" type="email" name="" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="space-y-2 relative">
                    <label className="w-full pl-1">Password :</label>
                    <input className="w-full border-2 p-2  rounded-md focus:outline-none focus:border-blue-500" type={type} name="" onChange={(e) => setPassword(e.target.value)} />
                    {!hide ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute right-3 top-9 w-5 h-5" onClick={() => handleHide()}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute right-3 top-9 w-5 h-5" onClick={() => handleHide()}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>

                    }
                </div>
                <div className="py-2 w-full">
                    <button className="w-full px-6 py-2 bg-slate-500 text-white rounded" onClick={() => login()}>
                        {loading ? "Connecting..." : "Login"}
                    </button>
                </div>
                <div
                    className="text-blue-500"
                >
                    <Link href="/v1/login">Go to V-1</Link>
                </div>
            </div>
        </div>
    )
}