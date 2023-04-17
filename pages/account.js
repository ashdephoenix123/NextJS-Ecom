import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Account = () => {
  const router = useRouter();

  useEffect(()=> {
    if(!localStorage.getItem('usertoken')){
      router.push('/')
    }
  }, [])

  return (
    <div>
      account
    </div>
  )
}

export default Account
