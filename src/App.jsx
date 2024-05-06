import './App.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser,logoutUser } from './store/authslice'
import {authservice} from './Appwrite/auth'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function App() {
 
 const [loading , setLoading] = useState(true)
 const dispatch = useDispatch()

 useEffect(() => {
    authservice.getaccount()
    .then((userdata)=>{
      if (userdata) {
        dispatch(loginUser(userdata))
      } else {
        dispatch(logoutUser())
      }
    })
    .finally(()=>setLoading(false))
 }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  else{
    return(
      <div className='flex flex-col min-h-screen bg-gray-400'>
  <div className='flex-grow'>
    <Header className='mb-5' />
    <main className='container mx-auto px-4'>
     TODO: <Outlet />
    </main>
    <Footer className='mt-5' />
  </div>
</div>
    )
  }
}

export default App
