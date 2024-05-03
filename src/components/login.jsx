import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser as slicelogin } from '../store/authslice'
import { authservice } from '../Appwrite/auth'
import { useForm } from 'react-hook-form'
import {Logo,Button,Input} from "./index"
const login = () => {
   const dispatch =useDispatch()
   const [error,seterror]=useState("")
   const navigate =useNavigate()
   const {register,handleSubmit} =useForm()

   const login=async(data)=>{
    seterror("")
     try {
       const session= await authservice.login(data)
       if(session){
        const userdata=  await authservice.getaccount()
        if(userdata)dispatch(slicelogin(userdata));
        navigate("/")
        
       }
        
     } catch (error) {
        seterror(error.message)
     }
   }

  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}> 
            <div className="mb-2 flex justify-center">
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Don't have an account?
                <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
            </p>
            {
                error && <p className='text-red-600 mt-8 text-center'>{error}</p>
            }
        </div>

        <form onSubmit={handleSubmit(login)}>
            <div>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="mt-4"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="mt-4"
                    {...register("password", {
                        required: true,
                    })}
                />
                
               <Button
                type='submit'
                className='w-full mt-4'
               >Sign in</Button>
            </div>
        </form>
    </div>
  )
}

export default login
