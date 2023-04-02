import React from 'react'

const FeedPage = () => {

  const feedData = [
    {
      id: 1,
      img:"https://c.ndtvimg.com/gws/349/assets/4.jpeg",
      foodName:"abcde",
      health:"45",
      userName: "Sumit",
    },
    {
      id: 2,
      img:"https://sugargeekshow.com/wp-content/uploads/2020/10/baked_donut_recipe_featured.jpg",
      foodName:"abcde",
      health:"45",
      userName: "Sumit",
    },
    {
      id: 3,
      img:"https://static.onecms.io/wp-content/uploads/sites/43/2022/09/26/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1.jpg",
      foodName:"abcde",
      health:"45",
      userName: "Sumit",
    },
    {
      id: 4,
      img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2014/07/medu-vada-recipe-500x500.jpg",
      foodName:"abcde",
      health:"45",
      userName: "Sumit",
    },
  ]

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
              <div className='w-full rounded-md'>
                <img 
                  src={data.img} 
                  alt="food img"
                  className='w-full rounded-md h-[150px] object-cover'
                />
              </div>
              <div className='bg-white flex justify-between'>
                <div className='flex flex-col items-start'>
                  <div className='font-semibold text-lg'>{data.foodName}</div>
                  <div className='py-1 px-2 bg-gray-300 rounded-sm text-sm text-medium text-gray-600' >{data.userName}</div>
                </div>
                <div className=''>
                  
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