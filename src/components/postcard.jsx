import React from 'react'
import storege from '../Appwrite/Storege'
import { Link } from 'react-router-dom'
const postcard = ({
    $id,
   title,
   feturedimage,

}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div
        className='w-full cursor-pointer duration-200 hover:shadow-lg'
        >
            <div 
            className='w-full h-52 bg-gray-200 overflow-hidden rounded-lg'
            >
                <img src={storege.getfilepreview(feturedimage)} alt={title} 
                className='rounded=xl w-full h-full object-cover object-center'
                />
            </div>
        </div>
        <h2
        className='text-xl font-bold mt-2 text-gray-800 hover:text-blue-500 duration-200'
        >
            {title}
        </h2>
    </Link>
  )
}

export default postcard
