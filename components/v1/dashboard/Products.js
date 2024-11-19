import React from 'react';
import AddProduct from './product/AddProduct';
import UpdateProduct from './product/UpdateProduct';
import DeleteProduct from './product/DeleteProduct';
import useUserStore from '../../../features/userStore';

const Products = () => {
    const { products } = useUserStore()
    return (
        <div className="">
            <AddProduct />
            <table className="w-full overflow-x">
                <thead className="bg-gray-500 p-2 text-white font-bold">
                    <tr>
                        <td className="p-2">Product Name</td>
                        <td className="p-2 text-center">Section</td>
                        <td className="p-2 text-center">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => <tr key={product.id} className="border-b hover:bg-blue-50 hover:transition-all duration-300 rounded">
                        <td className="p-2">{product?.name}</td>
                        <td className="p-2 text-center">{product?.section}</td>
                        <td className="p-2 flex justify-center items-center space-x-2">
                            <UpdateProduct {...{ product }} />
                            <DeleteProduct {...{ product }} />
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Products;