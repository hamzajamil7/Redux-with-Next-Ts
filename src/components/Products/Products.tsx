'use client';

import { fetchAPIUsers } from "@/app/redux/slice"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"



export default function ProductPage() {


    const dispatch = useDispatch<any>();
    const { UsersAPIData } = useSelector((state: any) => state);
    const [hasFetched, setHasFetched] = useState(false);

    const getApiData = async () => {

        console.log(UsersAPIData)
        setHasFetched(true);
        dispatch(fetchAPIUsers());
    };




    return (
        <>
            <div className="p-16 mt-4">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={getApiData}
                >
                    Load Products
                </button>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Product List</h2>

                    {!hasFetched && (
                        <p className="text-gray-500">Click "Load Products" to fetch data.</p>
                    )}

                    {hasFetched && (UsersAPIData || []).length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {UsersAPIData.map((user: any) => (
                                <div
                                    key={user.id}
                                    className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                                >
                                    <h3 className="text-lg font-bold mb-2">{user.title}</h3>
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-medium">Price:</span> ${user.price}
                                    </p>
                                    <p className="text-gray-600">{user.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </>





    )





}