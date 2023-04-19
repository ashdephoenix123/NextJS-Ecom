import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Orders = () => {
    const router = useRouter();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            const res = await fetch(`/api/fetchOrders`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token: localStorage.getItem('usertoken') })
            });
            const data = await res.json();
            setOrders(data)
        }
        if (!localStorage.getItem('usertoken')) {
            router.push('/')
        } else {
            fetchOrders()
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
                                            <th scope="col" className="px-6 py-4">Item Name</th>
                                            <th scope="col" className="px-6 py-4">Status</th>
                                            <th scope="col" className="px-6 py-4">More Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.length !== 0 &&
                                            orders.map((order, index) => {
                                                return <tr key={index}
                                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-zinc-200">
                                                    <td className="whitespace-nowrap px-6 py-6 font-medium">{order.orderID}</td>
                                                    <td className="whitespace-nowrap px-6 py-6">{Object.keys(order.products)[0]} {Object.keys(order.products).length-1 !==0 && `and ${Object.keys(order.products).length-1} more`}</td>
                                                    <td className="whitespace-nowrap px-6 py-6 font-semibold text-slate-600">{order.status}</td>
                                                    <td className="whitespace-nowrap px-6 py-6"><Link href={`/order?id=${order.orderID}`} className='hover:underline'>here</Link></td>
                                                </tr>
                                            })
                                        }
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

export default Orders
