import Image from "next/image";
import { useRouter } from "next/router";

export default function PrintHeader(){
    const router = useRouter()
    return(
        <div className="hidden print:flex justify-center text-2xl print:pt-2 print:pb-0.5">
            <div className="flex flex-col items-center">
                <Image src='/logo.png' alt='logo' width={50} height={50}/>
                <span className="font-bold text-red-500">S&B Nice Food Valley Ltd.</span>
            </div>
            <div className="print:absolute top-2 w-full px-12 text-gray-700">
                <p className="w-full flex justify-between text-xs py-1">
                    <span>https://snbfood.vercel.app{router.pathname}</span>
                    {/* <span>{new Date().toLocaleString()}</span> */}
                </p> 
            </div>
        </div>
    )
}