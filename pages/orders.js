import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// import connectDB from "@/middleware/conn";
// import Order from '@/models/Order'

const Orders = () => {
    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem('usertoken')) {
            router.push('/')
        }
    }, [])
    return (
        <>
            <div className="container">
                <div className="font-semibold text-3xl my-10">My Orders</div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">#Order ID</th>
                                            <th scope="col" className="px-6 py-4">First</th>
                                            <th scope="col" className="px-6 py-4">Last</th>
                                            <th scope="col" className="px-6 py-4">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-zinc-200">
                                            <td className="whitespace-nowrap px-6 py-6 font-medium">1</td>
                                            <td className="whitespace-nowrap px-6 py-6">Mark</td>
                                            <td className="whitespace-nowrap px-6 py-6">Otto</td>
                                            <td className="whitespace-nowrap px-6 py-6">@mdo</td>
                                        </tr>
                                        <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-zinc-200">
                                            <td className="whitespace-nowrap px-6 py-6 font-medium">2</td>
                                            <td className="whitespace-nowrap px-6 py-6">Jacob</td>
                                            <td className="whitespace-nowrap px-6 py-6">Thornton</td>
                                            <td className="whitespace-nowrap px-6 py-6">@fat</td>
                                        </tr>
                                        <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-zinc-200">
                                            <td className="whitespace-nowrap px-6 py-6 font-medium">3</td>
                                            <td className="whitespace-nowrap px-6 py-6">Larry</td>
                                            <td className="whitespace-nowrap px-6 py-6">Wild</td>
                                            <td className="whitespace-nowrap px-6 py-6">@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// export async function getServerSideProps(context) {
//     await connectDB();
//     const orders = await Order.find({ userId: user.id });
   

//     return {
//         props: {orders: orders}
//     }
// }

export default Orders
