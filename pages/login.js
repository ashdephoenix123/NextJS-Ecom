import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8 my-2">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="/fav.png" alt="Your Company" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Log In to your account</h2>

          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="focus:outline-none relative block w-full rounded-t-md border-0 py-4 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-md sm:leading-6" placeholder="Email address" />
              </div>
              <div>
                <label for="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="focus:outline-none relative block w-full rounded-b-md border-0 py-4 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-md sm:leading-6" placeholder="Password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className=" h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                <label for="remember-me" className="ml-2 block text-md text-gray-900">Remember me</label>
              </div>

              <div className="text-md">
                <Link href="/forgot" className="font-medium text-green-600 hover:text-green-500">Forgot your password?</Link>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md bg-green-600 py-4 px-2  text-md font-semibold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                  </svg>
                </span>
                Log In
              </button>
            </div>
            <div className="relative flex items-center w-full">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">Or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="flex items-center justify-center">
              <div className="mx-2 block text-md text-gray-900">New User?</div>
              <Link href="/signup" className='font-medium text-green-600 hover:text-green-500'>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
