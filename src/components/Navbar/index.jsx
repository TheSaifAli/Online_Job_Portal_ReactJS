import React from 'react'

const Navbar = () => {
  return (
    <div className='pt-5 flex items-center justify-start mx-5 text-white lg:mx-16 lg:pt-8'>
      <div className='font-bold  text-center flex items-center gap-3'>
        <img src="logo2.png" className='w-10  rounded-tl-[50%] rounded-br-[50%] shadow-md lg:w-14' alt="" />
        <h1 className='text-lg lg:text-xl'>JobPocket.</h1>
        </div>
    </div>
  )
}

export default Navbar
