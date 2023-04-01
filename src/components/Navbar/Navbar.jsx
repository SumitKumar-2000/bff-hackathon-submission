import React from 'react'

const Navbar = ({scan, setScan}) => {

  // const {authValues} = useContext(AuthCheck);

  return (
    <div className='max-w-[600px] mx-auto flex py-1 px-4 justify-between items-center border-2 sticky bg-white'>
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

