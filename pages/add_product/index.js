import Link from "next/link";

export default function AddProduct(){
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
        <div className="add_product_page">
            <div className="flex flex-col">
                {data.map((item, index) =><Link key={index} href={`/add_product/${item.link}`}>
                    <a>{item.title}</a>
                </Link>)}
            </div>
        </div>
    )
}