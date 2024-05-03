import React from 'react'

const Button = ({
    childer,
    type="button",
    bgcolor="bg-blue-500",
    color="text-white",
    className="",
    ...props
}) => {
  return (
    <button 
    className={`px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ${bgcolor} ${color} ${className} `}
    type={type}
    {...props}

    >
      {childer}
    </button>
  )
}

export default Button
