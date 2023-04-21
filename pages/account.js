import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Account = () => {
  const router = useRouter();
  const [address, setAddress] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pincode: "",
    password: "",
    npassword: "",
    cpassword: ""
  });


  const getUser = async (token) => {
    const res = await fetch(`/api/getUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    });
    const data = await res.json();
    if (data.found) {
      setAddress((prev) => {
        return {
          ...prev,
          name: data.name,
          email: data.email,
          address: data.address,
          pincode: data.pincode,
          phone: data.phone
        }
      })
    } else {
      toast.error("Something went wrong, Please logout and try again.", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      //Log user out
      localStorage.clear();
      window.location = '/'
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('usertoken')) {
      router.push('/')
    } else {
      getUser(localStorage.getItem('usertoken'));
    }
  }, [])


  const updateAddress = async (e) => {
    const { name, value } = e.target;

    setAddress(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const submitUpdatedDetails = async () => {
    const res = await fetch(`/api/updateUserDetails`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: address.name, email: address.email, address: address.address, phone: address.phone, pincode: address.pincode })
    })
    const data = await res.json();
    if (data.success) {
      toast.success("Your Data has been successfully Updated!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(data.error, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  const setNewPassword = async () => {
    const res = await fetch(`/api/setNewPasssword`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: address.email, npassword: address.npassword, cpassword: address.cpassword, password: address.password })
    })
    const data = await res.json();
    if (data.success) {
      setAddress((prev) => {
        return {
          ...prev,
          password: "",
          npassword: "",
          cpassword: ""
        }
      })
      toast.success("Your Password is successfully Updated!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(data.error, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div className='container  text-gray-600'>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className='font-bold text-6xl text-center my-9'>My Account</h2>
      <div className="container px-5 py-24 mx-auto ">
        <div className="mx-auto">
          <h2 className='font-semibold text-3xl mb-5'>1. Default Delivery Details</h2>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full sm:w-1/2">
              <div className="">
                <label htmlFor="name" className="leading-7 text-md text-gray-600">Name</label>
                <input type="text" id="name" name="name" value={address.name} onChange={updateAddress} className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="">
                <label htmlFor="email" className="leading-7 text-md text-gray-600">Email (cannot be updated)</label>
                <input type="email" readOnly={true} id="email" name="email" value={address.email} className="w-full text-2xl mt-1 bg-opacity-50 bg-slate-300 rounded border border-gray-300 focus:border-green-500  focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="">
                <label htmlFor="address" className="leading-7 text-md text-gray-600">Address</label>
                <textarea id="address" name="address" value={address.address} onChange={updateAddress} rows={5} className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="">
                <label htmlFor="phone" className="leading-7 text-md text-gray-600">Phone</label>
                <input type="number" id="phone" name="phone" maxLength={10} value={address.phone} onChange={updateAddress} placeholder='Enter 10 digit phone number' className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="">
                <label htmlFor="pincode" className="leading-7 text-md text-gray-600">Pincode</label>
                <input type="number" id="pincode" name="pincode" maxLength={6} value={address.pincode} onChange={updateAddress} className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <button onClick={submitUpdatedDetails} className='disabled:bg-green-300 mt-6 ml-2 px-6 py-4 text-white bg-green-500 rounded hover:bg-green-600'>Submit</button>
          </div>
        </div>
        <div className="mx-auto my-16">
          <h2 className='font-semibold text-3xl mb-5'>2. Change Password</h2>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="">
                <label htmlFor="password" className="leading-7 text-md text-gray-600">Enter Old Password</label>
                <input type="password" id="password" name="password" value={address.password} onChange={updateAddress} className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="">
                <label htmlFor="npassword" className="leading-7 text-md text-gray-600">Set New Password</label>
                <input type="password" id="npassword" name="npassword" value={address.npassword} onChange={updateAddress} className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="">
                <label htmlFor="cpassword" className="leading-7 text-md text-gray-600">Confirm New Password</label>
                <input type="password" id="cpassword" name="cpassword" value={address.cpassword} onChange={updateAddress} className="w-full text-2xl mt-1 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <button onClick={setNewPassword} className='ml-2 disabled:bg-green-300 mt-6 px-6 py-4 text-white bg-green-500 rounded hover:bg-green-600'>Submit</button>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Account
