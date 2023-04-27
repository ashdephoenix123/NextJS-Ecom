import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <section className="flex items-center h-full p-16 py-40 dark:bg-green-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className=" text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-white">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-xl font-semibold md:text-3xl">Sorry, we could not find the product you are searching for.</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded dark:bg-green-500 dark:text-white">Back to homepage</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound
