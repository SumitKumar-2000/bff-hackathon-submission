import React from 'react'

const ScanError = ({errorData, foodImage}) => {
  return (
    <div className=' px-4 py-6'>
      <div className='w-full h-[300px] border border-gray-600 rounded-md mb-4 shadow-md p-4'>
        <img 
            src={foodImage} 
            alt="captured image"
            className='w-full h-full rounded-md object-cover'
        />
      </div>
      <hr/>
      <div className='text-lg font-medium text-red-600 my-4 text-center rounded-md'>
         {errorData.display_msg} !!!
      </div>
    </div>
  )
}

export default ScanError
