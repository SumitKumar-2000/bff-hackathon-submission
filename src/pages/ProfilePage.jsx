import React from 'react'

const profileData = [
  {
    id: 1,
    img: "https://c.ndtvimg.com/gws/349/assets/4.jpeg",
    healthIndex: 10
  },
  {
    id: 2,
    img: "https://sugargeekshow.com/wp-content/uploads/2020/10/baked_donut_recipe_featured.jpg",
    healthIndex: 10
  },
  {
    id: 3,
    img: "https://static.onecms.io/wp-content/uploads/sites/43/2022/09/26/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1.jpg",
    healthIndex: 10
  },
  {
    id: 4,
    img: "https://c.ndtvimg.com/gws/349/assets/4.jpeghttps://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg",
    healthIndex: 10
  },
  {
    id: 5,
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/07/medu-vada-recipe-500x500.jpg",
    healthIndex: 10
  },
]

const ProfilePage = () => {
  return (
    <div className='h-[85vh] px-2'>
      <div className='flex flex-col items-center justify-evenly w-full h-[35%]'>
        <div className='text-[28px] font-bold text-[#333333]'>ISH KAPOOR</div>
        <div className='w-full flex justify-evenly'>
          <div className='flex flex-col items-center'>
            <div className='font-medium text-[30px]'>132</div>
            <div className='font-medium text-[14px] text-gray-400'>HEALTH</div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='font-medium text-[30px]'>50</div>
            <div className='font-medium text-[14  px] text-gray-400'>POSTS</div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center mb-2 gap-1'>
          <div className='text-[20px] font-medium text-gray-600' >POSTS</div>
          <div className='h-[2px] w-[70%] mx-auto bg-gray-400'></div>
        </div>
      </div>
      <div className='w-full px-2 h-[65%] overflow-x-hidden justify-between overflow-y-scroll flex flex-wrap'>
        {
          profileData.map(data => {
            return (
              <div key={data.id} className='w-[48%] rounded-md bg-white border border-gray-200 shadow-sm p-2 mb-4'>
                <div className='w-full h-[100px] mb-2'>
                  <img 
                    src={data.img} 
                    alt="image" 
                    className='w-full h-full rounded-md object-cover'
                  />
                </div>
                <div className='bg-white w-full'>
                  <div className='w-full h-[3px] bg-slate-200 rounded-full'>
                    <div className='w-[80%] h-full bg-red-600 rounded-full'></div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProfilePage