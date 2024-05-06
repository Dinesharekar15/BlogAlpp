import React from 'react'
import {authservice} from '../../Appwrite/auth'
import {logoutUser} from '../../store/authslice'
import { useDispatch } from 'react-redux'
const Logoutbtn = () => {
    const dispatch = useDispatch()
    const logout=()=>{
        authservice.logout()
        .then(()=>{
            dispatch(logoutUser())
        })
    }

  return (
    <div>
      <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logout}>logout</button>
    </div>
  )
}

export default Logoutbtn
