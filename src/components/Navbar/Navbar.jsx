import React, { useContext, useState } from 'react'
import { AiOutlineMore } from "react-icons/ai";

// auth import
import { AuthCheck } from '../../context/authContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/authConfig/firebaseauthconfig';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Properties = ({setPropertiesOpen}) => {
  const navigate = useNavigate();
  const handleLogout = async () =>{
    await signOut(auth).then(() => console.log("user SignedOut"))
    navigate("/")
    window.location.reload();
  }

  return (
    <div className='absolute top-4 right-4 z-30 w-[120px] p-4 bg-white border border-gray-200 rounded-md shadow-md'>
      <div className='w-full h-full flex flex-col gap-2 justify-between'>
        <Link to="/profile" onClick={()=>setPropertiesOpen(false)} className='w-full' >Your Profile</Link>
        <Link to="/chat" onClick={()=>setPropertiesOpen(false)} className='w-full' >Chat bot</Link>
        <Link to="/feed" onClick={()=>setPropertiesOpen(false)} className='w-full' >Feed</Link>
        <div onClick={handleLogout}  className='w-full' >Logout</div>
      </div>
    </div>
  )
};

const Navbar = ({scan, setScan}) => {

  const {authValues} = useContext(AuthCheck);
  const [propertiesOpen, setPropertiesOpen] = useState(false)
  const location = useLocation()
  
  return (
    <div className='max-w-[600px] mx-auto flex py-1 px-4 justify-between items-center border-2 sticky bg-white'>
      <Link to="/foodScan">
        <img 
          src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676916476/Foodifyy%20Icons/foodifyy-logo_yrgmra.png" 
          alt="foodifyy logo"
          className='w-[40px] h-[40px]'
        />
      </Link>
      <div className='flex relative items-center'> 
        {scan && location.pathname === "/foodScan" && <button 
            onClick={()=>setScan(false)}
            className="font-semibold text-[#00745B] cursor-pointer"
            >
          Scan Again
        </button>}
        {authValues ? (
        <AiOutlineMore
          className='ml-2'
          onClick={()=>setPropertiesOpen(prevState => !prevState)}
        />
        ) : null}

      {propertiesOpen ? <Properties setPropertiesOpen={setPropertiesOpen}/> : null}
      </div>
    </div>
  )
}

export default Navbar

