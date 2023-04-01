import React from 'react'

const Navbar = ({scan, setScan}) => {
  return (
    <div className='w-full flex py-3 px-2 justify-between items-center border-b-2 sticky bg-white'>
      <div>
        <img 
          src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676916476/Foodifyy%20Icons/foodifyy-logo_yrgmra.png" 
          alt="foodifyy logo"
          className='w-[40px] h-[40px]'
        />
      </div>
      {scan && <button 
          onClick={()=>setScan(false)}
          className="font-semibold text-[#00745B] cursor-pointer"
        >
        Scan Again
      </button>}
    </div>
  )
}

export default Navbar

