import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Forgot = () => {
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem('usertoken')) {
      router.push('/')
    }
  }, [])
  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8 my-16">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="/fav.png" alt="Your Company" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Forgot Password</h2>

          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="focus:outline-none relative block w-full  py-4 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-md sm:leading-6" placeholder="Email address" />
              </div>
            </div>

            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md bg-green-600 py-4 px-2  text-md font-semibold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                Continue
              </button>
            </div>
            <div className="relative flex items-center w-full">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">Or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="flex items-center justify-center">
              <div className="mx-2 block text-md text-gray-900"> Go back to</div>
              <Link href="/login" className='font-medium text-green-600 hover:text-green-500'>Log In</Link>
              <div className="mx-2 block text-md text-gray-900">page</div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Forgot
