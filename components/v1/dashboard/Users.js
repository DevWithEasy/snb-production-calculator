import React from 'react';
import useUserStore from '../../../features/userStore';
import { AddUser, DeleteUser, UpdateUser } from '../Index';
const Users = () => {
    const {users,sections} = useUserStore()
    return (
        <div className="">
            <AddUser/>
                            <table className="w-full overflow-x">
                                <thead className="bg-gray-500 p-2 text-white font-bold">
                                    <tr>
                                        <td className="p-2">User Name</td>
                                        <td className="p-2 text-center">Section</td>
                                        <td className="p-2 text-center">Action</td>
                                    </tr>
                                </thead>
                                    <tbody>
                                        {users.map(user=><tr key={user.id} className="border-b hover:bg-blue-50 hover:transition-all duration-300 rounded">
                                            <td className="p-2">{user?.name}</td>
                                            <td className="p-2 text-center">{user?.section}</td>
                                            <td className="p-2 flex justify-center items-center space-x-1">
                                            <UpdateUser {...{user,sections}}/>
                                            <DeleteUser {...{user,sections}}/>
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </table>
                        </div>
    );
};

export default Users;