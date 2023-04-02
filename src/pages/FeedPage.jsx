import React, { useEffect, useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'

const FeedPage = () => {
  const [feedData, setFeedData] = useState([]);
  useEffect(()=>{
    try{
      (async()=>{
        await axios.get("https://BFF-DB-Backend.ishkapoor.repl.co/get_feed").then(res => {
          console.log("feed data: ",res.data);
          setFeedData(res.data);
        })
      })()
    }catch(err){
      console.log(err.message);
    }
  },[])

  return (
    <div className='h-[85vh] px-4'>
    <div className='h-full'>
      <div className='w-full my-4'>
        <div className='w-full text-2xl mb-1 font-bold'>Hello, Ish</div>
        <div className='w-full tracking-widest mb-3'>See what the world is eating...</div>
        <div className='w-full text-xl font-medium'>Your Feed</div>
      </div>
      <div className='w-full '>
      {
        feedData.map(data => {
          return (
            <div className='w-full rounded-md p-2 shadow-md bg-white border-2 border-gray-200 mb-2'>
              <div className='w-full rounded-md border-b-4 border-b-red-500'>
                <img 
                  src={data.image_url} 
                  alt="food img"
                  className='w-full rounded-md h-[150px] object-cover'
                />
              </div>
              <div className='bg-white flex justify-between'>
                <div className='flex flex-col justify-between items-start'>
                  <div className='font-semibold text-lg'>{data.food_name}</div>
                  <div className='py-1 px-3 bg-gray-300 rounded-sm text-medium text-gray-400' >{data.user_name}</div>
                </div>
                <div className='flex flex-col justify-evenly items-end'>
                  <div className='text-lg'>34</div>
                  <div>
                    <HiOutlineChevronDown className='text-xl'/>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
    </div>
  )
}

export default FeedPage