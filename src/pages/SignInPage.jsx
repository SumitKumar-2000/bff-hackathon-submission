import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// auth imports
import { auth, googleProvider } from '../config/authConfig/firebaseauthconfig';
import { signInWithPopup } from 'firebase/auth';
import { AuthCheck } from '../context/authContext';

const SignInPage = () => {
  
    const {setAuthValues} = useContext(AuthCheck);
    const navigate = useNavigate();
    
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
          if(userAuth){
            setAuthValues({
             uid: userAuth.uid,
             email: userAuth.email
            })
            navigate('/foodScan');  
          } else {
            setAuthValues(null)
          }
        })
    
        return () => unsubscribe;
      },[])  

  // google auth 
  const handleGoogleSignIn = async () => {
    // google auth popup
    await signInWithPopup(auth, googleProvider).
    then(data => {
        console.log("loggedIn User: ", data.user);
      }
    ).catch(err => console.log("signIn with google auth err: ",err)) 
    
  }

  return (
    <div className='px-4 max-w-[600px] mx-auto'>

        <div className='flex flex-col items-center border-2 rounded-md p-4 mt-[100px] shadow-sm'>
            <img 
            src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676916476/Foodifyy%20Icons/foodifyy-logo_yrgmra.png" 
            alt="foodifyy logo"
            className='w-[200px] h-[200px] mb-4'
            />
            <button 
                type='button'
                onClick={handleGoogleSignIn}
                className='shadow-md rounded-md py-2 px-10 flex justify-center gap-4 items-center font-medium border border-slate-100'
            >
                <div>
                <img src="/Google Logo.svg" className='w-[1.2rem]' alt=""/>  
                </div>
                <div>
                    Sign In With Google
                </div>
            </button>
        </div>
    </div>
  )
}

export default SignInPage