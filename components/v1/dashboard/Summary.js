import React from 'react';
import useUserStore from '../../../features/userStore';

const Summary = () => {
    const {users,products,sections} = useUserStore()
    
     return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div className='p-4 bg-blue-50 text-center rounded text-blue-600'>
                <h1>Total Admin</h1>
                <span className='text-2xl'>{users.filter(user=>user.section == 'Admin').length}</span>
            </div>
            <div className='p-4 bg-blue-50 text-center rounded text-blue-600'>
                <h1>Total users</h1>
                <span className='text-2xl'>{users.filter(user=>user.section != 'Admin').length}</span>
            </div>
            <div className='p-4 bg-yellow-50 text-center rounded text-yellow-600'>
                <h1>Total sections</h1>
                <span className='text-2xl'>{sections.length}</span>
            </div>
            <div className='p-4 bg-green-50 text-center rounded text-green-600'>
                <h1>Total Products</h1>
                <span className='text-2xl'>{products.length}</span>
            </div>
        </div>
    );
};

export default Summary;