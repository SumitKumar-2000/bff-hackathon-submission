import React from 'react'
import { Link } from 'react-router-dom'

const Err_404 = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col items-center mt-[100px] max-w-[70%]'>
            <div className='text-4xl font-bold mb-4'>Ooops...</div>
            <div className='text-4xl mb-8'>Page Not Found</div>
            <div className='mb-6 text-center'>
                <div className='md:text-xl'>We're sorry, the page you requested could not be accessed <br/> Please Sign In</div>    
            </div>
            <button className='w-[180px] md:w-[240px] rounded-full bg-[#00745b] md:text-3xl text-white py-1 md:py-2 mb-10'>
                <Link to="/" >
                    Sign In
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Err_404