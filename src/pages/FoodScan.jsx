import React, { useState } from 'react'
import { useRef } from 'react'
import FoodDataPlot from '../components/FoodScanComponents/FoodDataPlot'
import FoodImageUpload from '../components/FoodScanComponents/FoodImageUpload'
import DropLoader from '../components/loaders/DropLoader'
import ScanError from '../components/FoodScanComponents/ScanError'


const FoodScan = ({scan, setScan}) => {
  
    const [foodImage,setFoodImage] = useState('')
    const [foodApiData, setFoodApiData] = useState({})
    const [loading, showLoading] = useState(false)

    const Error = useRef({})

  return (
    <div className='max-w-[600px] h-[100%] mx-auto'>
      {
        !scan ? (
          <FoodImageUpload setFoodApiData={setFoodApiData} setFoodImage={setFoodImage} showLoading={showLoading} setScan={setScan} Error={Error}/>
        ) : (
          Error.current.status === 200 ? (
            <FoodDataPlot foodApiData={foodApiData} foodImage={foodImage} setScan={setScan}/>
          ) : (
            <ScanError errorData={Error.current} foodImage={foodImage}/>
          )
        )
      }

      {!scan && <div className='px-7 py-3'>
        {loading ? (
          <div className='w-full flex justify-center items-center'>
            <DropLoader/>
          </div>
        ) : (
          <div className='font-semibold text-lg text-center'>
            Click food image to get its nutrients ...
          </div>
        )}
      </div>}
    </div>
  )
}

export default FoodScan
