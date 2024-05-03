import React from 'react'
import { forwardRef } from 'react'

const Input =forwardRef(function input({
    lable,
    type="text",
    placeholder,
    className="",
    ...props
},ref){
    return (
        <div className='w-full'>
            {
                lable&& <label className='inline-block mb-1 pl-1'>{lable}</label>
            }
            <input 
            type={type} 
            placeholder={placeholder}  
            className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className}`}
            {...props}
            ref={ref}
            />
        </div>
    )
})


export default Input