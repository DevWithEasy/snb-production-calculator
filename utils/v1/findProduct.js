export default function findProduct(products,id){
    const product = products.find(product=>product.id == id)
    return product
}