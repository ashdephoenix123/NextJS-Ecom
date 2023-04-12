import React from 'react'

const Order = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-md title-font text-gray-500 tracking-widest">The Sharkk Co.</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID: #897346</h1>

              <p className="leading-relaxed mb-4">Your Order has been successfully placed.</p>
              <div className="flex mb-4">
                <a className="flex-grow border-b-2 border-gray-300 py-2 font-semibold">Item Description</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 font-semibold">Color</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 font-semibold">Size</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 font-semibold">Quantity</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 font-semibold">Price</a>
              </div>
              <div className="flex border-gray-200 py-2">
                <span className="text-gray-500 flex-grow">Anime Hoodie</span>
                <span className="flex-grow text-gray-900">Red</span>
                <span className="flex-grow text-gray-900">L</span>
                <span className="flex-grow text-gray-900">2</span>
                <span className="flex-grow text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500 flex-grow">Boston- TShirt</span>
                <span className="flex-grow text-gray-900">Red</span>
                <span className="flex-grow text-gray-900">L</span>
                <span className="flex-grow text-gray-900">2</span>
                <span className="flex-grow text-gray-900">₹499</span>

              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500 flex-grow">Boston- TShirt</span>
                <span className="flex-grow text-gray-900">Red</span>
                <span className="flex-grow text-gray-900">L</span>
                <span className="flex-grow text-gray-900">2</span>
                <span className="flex-grow text-gray-900">₹499</span>

              </div>
              <div className="flex mt-10 items-center">
                <span className="title-font font-medium text-2xl text-gray-900">Subtotal: ₹499</span>
                <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Continue Shopping</button>
                <button className="flex ml-2 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Track Order</button>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Order
