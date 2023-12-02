import React from 'react'

const Alert = (props) => {
  
  return (
    <div className={`bg-red-700 text-white absolute py-0.5 text-center font-normal left-[50%] transition-all duration-300 ease-linear translate-x-[-50%]  w-[80%] rounded-md sm:w-[60%] md:w-[40%] md:text-lg lg:w-[30%] ${props.classStyle} `}>
        Please select all fields...!
    </div>
  )
}

export default Alert
