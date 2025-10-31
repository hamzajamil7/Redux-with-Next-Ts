'use client';

import { useSelector } from "react-redux";



export const DisplayUser = () => {

    const userData = useSelector((state: any) => state.users);

    return (
        <div className="p-16">
            <h1>User List Component</h1>


            {userData.map((user: any) => (
                <div key={user.id} className="border-2 p-4 m-4 rounded-md">
                    <h2 className="text-xl font-bold">Name: {user.name}</h2>
                    <p className="text-gray-700">Email: {user.email}</p>
                    <p className="text-gray-700">Address: {user.address}</p>
                </div>
            ))}
        </div>
    )
}