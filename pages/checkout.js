import React from 'react'
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi'
import { MdDelete } from 'react-icons/md'

const checkout = ({ cart, addToCart, updateCartItem, clearCart, removeItem, subtotal }) => {
    return (
        <>
            <div className="container">
                <section className="text-gray-600 ">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="text-5xl title-font text-gray-900">Checkout</h1>
                        </div>
                        <div className="lg:w-2/3 md:w-2/3 mx-auto">
                            <h2 className='font-semibold text-3xl mb-5'>1. Delivery Details</h2>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 md:py-6 w-1/2">
                                    <div className="">
                                        <label htmlFor="name" className="leading-7 text-md text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 md:py-6 w-1/2">
                                    <div className="">
                                        <label htmlFor="email" className="leading-7 text-md text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 md:py-6 w-full">
                                    <div className="">
                                        <label htmlFor="message" className="leading-7 text-md text-gray-600">Address</label>
                                        <textarea id="message" name="message" rows={3} className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 md:py-6 w-1/2">
                                    <div className="">
                                        <label htmlFor="phone" className="leading-7 text-md text-gray-600">Phone</label>
                                        <input type="number" id="phone" name="phone" className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 md:py-6 w-1/2">
                                    <div className="">
                                        <label htmlFor="pincode" className="leading-7 text-md text-gray-600">Pincode (India)</label>
                                        <input type="number" id="pincode" name="pincode" className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 md:py-6 w-1/2">
                                    <div className="">
                                        <label htmlFor="state" className="leading-7 text-md text-gray-600">State</label>
                                        <input type="text" id="state" name="state" className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 md:py-6 w-1/2">
                                    <div className="">
                                        <label htmlFor="district" className="leading-7 text-md text-gray-600">District</label>
                                        <input type="text" id="district" name="district" className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="lg:w-2/3 md:w-2/3 mx-auto">
                            <h2 className='font-semibold text-3xl my-8'>2. Review Cart Items and Pay</h2>
                            <div className="py-6 w-full">
                                <div className="w-full text-2xl bg-opacity-50 rounded border border-gray-300  outline-none bg-green-400 text-gray-700 py-8 px-6 leading-8 transition-colors duration-200 ease-in-out">
                                    <ol className=''>
                                        {Object.keys(cart).length === 0 && <li className='text-2xl p-0 m-0'>Your Cart is Empty!</li>}
                                        {Object.keys(cart).map((item, index) => {
                                            return <li key={item} className='flex justify-between mb-6'>
                                                {index + 1 + '. ' + cart[item].name}
                                                <div className='flex'>
                                                    <HiMinusCircle className='mr-6 cursor-pointer' onClick={() => { updateCartItem(item, cart[item].quantity, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} size={20} />
                                                    <span>{cart[item].quantity}</span>
                                                    <HiPlusCircle className='ml-6 cursor-pointer' onClick={() => { addToCart(item, cart[item].quantity, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} size={20} />
                                                    <MdDelete className='ml-6 cursor-pointer' onClick={() => { removeItem(item) }} size={20} />
                                                </div>
                                            </li>
                                        }
                                        )}
                                        <div className='mt-4'>Total: ₹{subtotal}</div>
                                    </ol>
                                </div>
                            <button className='mt-6 px-6 py-4 text-white bg-green-500 rounded hover:bg-green-600'>Pay ₹{subtotal} </button>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default checkout
