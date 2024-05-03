import React from 'react'
import { useId } from 'react'

const select = (
    {options,
    lable,
    className,
    ...props
    },ref
    
) =>{
    const id=useId()
  return (
    <div>
      {lable && <label htmlFor={id}>{lable}</label>}
       <select
       ref={ref}
       className={``}
       {...props}
       id={id}
       >
        {
            options?.map((option)=>(
                <option key={option} value={option }>
                    {option}
                </option>
            ))
        }

       </select>
    </div>
  )
}

export default React.forwardRef(select)
