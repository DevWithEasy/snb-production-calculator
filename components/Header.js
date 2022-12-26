import Image from "next/image";

export default function Header(){
    return(
        <div className="sticky top-0 bg-gray-200 py-2 flex justify-center text-2xl md:text-4xl">
            <div className="flex flex-col md:flex-row items-center space-x-2">
                <Image src='/logo.png' alt='logo' width={80} height={80}/>
                <span className="font-bold text-red-500">S&B Nice Food Valley Ltd.</span>
            </div>
        </div>
    )
}