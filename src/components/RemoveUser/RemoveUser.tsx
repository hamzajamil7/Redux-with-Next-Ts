"use client";
import { removeUser } from "@/app/redux/slice";
import { useDispatch, useSelector } from "react-redux";


export default function RemoveUser() {


    const userData = useSelector((state: any) => state.users);
    const dispatch = useDispatch();


    const deleteUsers = (id: any, e: any) => {
        e.preventDefault();

        dispatch(removeUser(id));
    };




    return (
        <>
            <div>

                <h2>Remove UserPage</h2>
            </div>
            <div className="p-16">



                {userData.map((user: any) => (
                    <div key={user.id} className="border-2 p-4 m-4 rounded-md">
                        <h2 className="text-xl font-bold">Name: {user.name}</h2>
                        <p className="text-gray-700">Email: {user.email}</p>
                        <p className="text-gray-700">Address: {user.address}</p>



                        <button className="p-3 bg-red-500 rounded-lg" onClick={(e) => deleteUsers(user.id, e)}>Remove User</button>
                    </div>


                ))}
            </div>

        </>
    );
}