import React from 'react'

const ProfilePage = () => {
  return (
    <div className='h-[85vh] px-2'>
      <div className='flex flex-col items-center gap-8 w-full'>
        <div className='text-[28px] mt-2 font-bold text-[#333333]'>ISH KAPOOR</div>
        <div className='w-full flex px-12 justify-between'>
          <div className='flex flex-col items-center'>
            <div className='font-medium text-[30px]'>132</div>
            <div className='font-medium text-[16px] text-gray-400'>HEALTH</div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='font-medium text-[30px]'>50</div>
            <div className='font-medium text-[16px] text-gray-400'>POSTS</div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center mb-2 gap-1'>
          <div className='text-[24px] font-medium text-gray-400' >POSTS</div>
          <div className='h-[2px] w-full px-4 mx-auto bg-gray-400'></div>
        </div>
      </div>
      <div className='w-full px-4 h-[320px] bg-slate-400 overflow-x-hidden overflow-y-scroll'>
        hey
      </div>
    </div>
  )
}

export default ProfilePage