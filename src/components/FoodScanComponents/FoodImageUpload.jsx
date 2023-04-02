import React, { useState } from 'react';
import {MdCloudUpload} from "react-icons/md"
import axios from 'axios';

const FoodImageUpload = ({setFoodApiData,setFoodImage,showLoading, setScan, Error}) => {
    const [capturedImg, setCapturedImg] = useState(null);
    
    const handleDataFetch = async () =>{
      if(capturedImg !== null){
        showLoading(true)
        
        const formData = new FormData()
        formData.append("file",capturedImg)
        formData.append("upload_preset","foodifyy-img-data")
        formData.append("cloud_name","dlhrg1au6")

        // cloudnary config
        const imgData = await fetch('https://api.cloudinary.com/v1_1/dlhrg1au6/image/upload',{
          method:"POST",
          body:formData
        }).then(res => res.json())
          .catch(err => console.log("fetched-err: ",err))

        const {secure_url} = imgData; 
        setFoodImage(secure_url)

        // food data fetching url
        const apiUrl = `https://api.foodifyy.com/predict/${secure_url}`
        
        await axios.get(apiUrl).then(res => {
                                  setFoodApiData(res.data)
                                  Error.current = res.data 
                                }).catch(err => { 
                                   console.log("err: ",err);
                                   Error.current = {
                                    status: 500,
                                    display_msg: "Click picture again or Try again later",
                                   }   
                                })
        showLoading(false);
        setScan(true);
      }
    }
 
  return (
    <div className='w-full py-5 md:px-0 px-2 flex items-center flex-col bg-white rounded-md shadow-sm'>  
      <div className='flex w-[90%] flex-wrap items-center justify-center md:justify-between'>
        <form 
          className='w-full mb-2 rounded-md h-[300px] border-2 border-dashed cursor-pointer'
          onClick={() => document.querySelector(".upload-input-field").click()}
        >
          <input
            type="file"
            capture="user"
            accept="image/*"
            className="upload-input-field"
            hidden
            onChange={(e)=>setCapturedImg(e.target.files[0])}
          />
            {capturedImg === null ? (
              <div className='w-full h-full p-4 flex flex-col justify-center items-center'>  
                <MdCloudUpload
                  size={60}
                  className="text-[#00745b]"
                />
                <div className='text-xl font-bold text-[#333333] mb-1'>
                  Press here to click Food Image
                </div>
                <div className='text-gray-500 mb-2'>
                  File Supported: JPG, PNG
                </div>
                <div className='mb-3'> or </div>
                <div className='border-2 border-green-700 px-6 py-1 text-[#00745b] font-semibold rounded-md'>
                  Browse Food Image
                </div>
              </div>
              ) : (
                <div className='w-full h-full p-8'>  
                  <img 
                    src={URL.createObjectURL(capturedImg)} 
                    alt="captured image"
                    className="w-full h-full rounded-md object-cover"
                    />
                  </div>
              )
            }
          </form>

        {capturedImg !== null && <div className='w-full'>  
          <button onClick={()=>setCapturedImg(null)} className='w-full py-2 px-4 shadow-lg hover:bg-zinc-50 bg-zinc-100 rounded-md border-2 border-gray-800 md:text-2xl active:border-b-black flex-grow active:border-b-4 mb-1'>
              Click Again 
          </button>
          <button onClick={handleDataFetch} className='w-full py-2 px-4 shadow-lg hover:bg-zinc-50 bg-zinc-100 rounded-md border-2 border-gray-800 md:text-2xl active:border-b-black flex-grow active:border-b-4'>
            Upload Food Image 
        </button>
        </div>  }
      </div>
    </div>
  )
}

export default FoodImageUpload



