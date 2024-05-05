import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { authservice } from '../Appwrite/auth'
import { useNavigate,Link } from 'react-router-dom'
import { loginUser as slicelogin } from '../store/authslice'
import { Logo, Button, Input } from './index'


function Signup() {
    const dispatch=useDispatch()
    const [error,seterror]=useState("")
    const navigate=useNavigate()
    const {register,handleSubmit} =useForm()


    const signup=async(data)=>{
        seterror("")
        try {
            const session= await authservice.ceateaccounte(data)
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
       <div  className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          <div className="mb-2 flex justify-center">
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="100%" />
                </span>
          </div>
            <h2 className="text-center text-2xl font-bold leading-tight" >Register</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                allredy have an account 
                <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                     Log in
                    </Link>
            </p>
            {
                error && <p className='text-red-600 mt-8 text-center'>{error}</p>
            }
        </div>

        <form onSubmit={handleSubmit(signup)}>

            <Input
            lable="email"
            type="text"
            placeholder="email"
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
            lable='name'
            type="text"
            placeholder="username"
            className="mt-4"
            {
                ...register("name"),{
                    required:true,
                }
            }
            />
            <Input
            lable="password"
            type="text"
            placeholder='password'
            className="mt-4"
            {
                ...register("password"),{
                    register:true
                }
            }
            />
            <Button 
            type='submit'
            className='w-full mt-4'>
                signup
            </Button>
            

        </form>

    </div>
  )
}

export default Signup
