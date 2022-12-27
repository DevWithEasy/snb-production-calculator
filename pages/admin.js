import Link from "next/link"
import { useState } from "react"
import AddProduct from "../components/AddProduct"
import AddSection from "../components/AddSection"

export default function Admin(){
    const [section,setSection] = useState(false)
    const [product,setProduct] = useState(false)
    const data = [
        {
            title : 'Biscuit',
            link : 'biscuit'
        },
        {
            title : 'Wafer',
            link : 'wafer'
        },
        {
            title : 'Cake',
            link : 'cake'
        },
        {
            title : 'Bakery',
            link : 'bakery'
        },
        {
            title : 'Snacks',
            link : 'snacks'
        },
        {
            title : 'Lachcha',
            link : 'lachcha'
        },
    ]
    return(
        <div className="">
            <Link href=''>
                <a onClick={()=>setSection(!section)}>Add Section</a>
            </Link>
            <Link href=''>
                <a onClick={()=>setProduct(!product)}>Add Product</a>
            </Link>
            {data.map((item, index) =><Link key={index} href={`/add_product/${item.link}`}>
                    <a>{item.title}</a>
            </Link>)}

            {section && <AddSection section={section} setSection={setSection}/>}
            {product && <AddProduct product={product} setProduct={setProduct}/>}
        </div>
    )
}