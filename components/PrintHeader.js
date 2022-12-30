import Image from "next/image";

export default function PrintHeader(){
    return(
        <div className="print:flex justify-center text-2xl md:text-2xl">
            <div className="flex flex-col items-center space-x-2">
                <Image src='/logo.png' alt='logo' width={50} height={50}/>
                <span className="font-bold text-red-500">S&B Nice Food Valley Ltd.</span>
            </div>
        </div>
    )
}