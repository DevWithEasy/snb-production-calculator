import Image from "next/image";

export default function PrintHeader(){
    return(
        <div className="hidden print:flex justify-center text-2xl print:pt-5 print:pb-0.5">
            <div className="flex flex-col items-center">
                <Image src='/logo.png' alt='logo' width={50} height={50}/>
                <span className="font-bold text-red-500">S&B Nice Food Valley Ltd.</span>
            </div>
            <div className="print:absolute top-0 w-full text-gray-400">
            <p className="w-full flex justify-between text-xs">
                <span>{window.location.href}</span>
                <span>{new Date().toLocaleString()}</span>
            </p> 
        </div>
        </div>
    )
}