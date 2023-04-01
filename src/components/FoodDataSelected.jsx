import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Chart from 'react-apexcharts'
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const FoodDataSelected = ({onOptionsSelect}) => {

    const [showMore, setShowMore] = useState(false)
    const [apiResponse, setApiResponse] = useState(null);
    
    useEffect(()=>{
        (()=>{
            axios.get(`https://api.foodifyy.com/pred/${onOptionsSelect}`)
                 .then(res => {setApiResponse(res.data), console.log("apiresponse: ", res.data)})
                 .catch(err => console.log("selected options fetched error: ",err))
        })()
    },[])

    const fatPercentage = useRef(0)
    const proteinPercentage = useRef(0)
    const carbsPercentage = useState(0)

    if(apiResponse){
        var calorieSum = parseFloat(apiResponse.Total_Carbohydrate_g) + parseFloat(apiResponse.Total_Fat_g) + parseFloat(apiResponse.Protein_g);

        fatPercentage.current = Math.round((apiResponse.Total_Fat_g / calorieSum) * 100)
        proteinPercentage.current = Math.round((apiResponse.Protein_g / calorieSum) * 100)
        carbsPercentage.current = Math.round((apiResponse.Total_Carbohydrate_g / calorieSum) * 100)
    }

    return (
       apiResponse && <div className='mt-4'>
            <div className='flex mb-2 gap-3 flex-wrap pb-4 border-b-2 border-b-gray-200'>
                <div className='flex items-center p-1 flex-grow shadow-md border-black bg-[#1a1313] border-2 rounded-md w-full'>
                    <div className='flex justify-evenly mx-4 w-full'>
                        <div><span className='text-slate-200 text-xs'>Food - </span> <span className='text-white text-xs font-semibold' >{apiResponse.item_name}</span></div>  
                        <div className='text-white'>|</div>
                        <div><span className='text-slate-200 text-xs'>Servings - </span> <span className='text-white text-xs font-semibold' >{apiResponse["Serving_Size "]}</span></div>    
                    </div>
                </div>
                <div className='flex items-center w-full h-full justify-center p-1 shadow-md bg-zinc-100 rounded-md' >
                        <div className='text-[#333333] font-normal text-xl' >Calories -</div>
                        <div className='text-[#536976] ml-1 text-xl font-bold'>{apiResponse.Calories}</div>
                </div>
                <div className='shadow-md h-full w-full flex justify-center items-center bg-[#fafafa] rounded-md'>      
                    <Chart type='donut' 
                        series={[proteinPercentage.current, fatPercentage.current, carbsPercentage.current]} 
                        options={{
                            chart: {
                                type: 'donut',
                            },
                            legend: {
                                position: 'right'
                              },
                            labels: ['Protein (%)','Fat (%)','Carbs (%)'],
                            colors: ["#A5D6B7  ","#FFAB91","#FFE082"],
                            plotOptions: {
                                pie:{
                                    donut: {
                                        size: '80%',
                                        labels:{
                                            show:true,
                                        },
                                        borderRadius: '10px',
                                    }
                                }
                            },
                            dataLabels:{
                                enabled:false
                            }
                        }}
                        height={300}
                        width={300}
                    />
                </div>
                <div className='flex flex-col items-center justify-center p-1 flex-grow shadow-md border-zinc-50 bg-zinc-50 border-2 rounded-md gap-1' >
                    <div className='text-[#333333] font-medium' >Carbs (g)</div>
                    <img 
                        src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676913714/Foodifyy%20Icons/Carbs-Rice-96_o5xr5x.png" 
                        alt="nutrient - Carbs"
                        className='w-[40px]'
                    />
                    <div className='text-[#536976] ml-1 font-bold'>{apiResponse.Total_Carbohydrate_g}</div>
                </div>
                <div className='flex flex-col items-center justify-center p-1 flex-grow shadow-md border-zinc-50 bg-zinc-50 border-2 rounded-md gap-1' >
                    <div className='text-[#333333] font-medium' >Protein (g)</div> 
                    <img 
                        src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676913697/Foodifyy%20Icons/Protein-Lettuce-96_snvogv.png" 
                        alt="nutrient - Protein"
                        className='w-[40px]'
                    />
                    <div className='text-[#536976] ml-1 font-bold'>{apiResponse.Protein_g}</div>
                </div>
                <div className='flex flex-col items-center justify-center p-1 flex-grow shadow-md border-zinc-50 bg-zinc-50 border-2 rounded-md gap-1' >
                    <div className='text-[#333333] font-medium' >Fat (g)</div>
                    <img 
                        src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676913708/Foodifyy%20Icons/Fat-Potato-96_vjuvmh.png" 
                        alt="nutrient - Fat"
                        className='w-[40px]'
                    />
                    <div className='text-[#536976] ml-1 font-bold'>{apiResponse.Total_Fat_g}</div>
                </div>
        </div>
        
        <div className='pb-4 w-full'>
            <div className='w-full flex justify-center items-center font-medium' onClick={() => setShowMore(prev => !prev)}>
                <div className='cursor-pointer'>{showMore ? "Show Less" : "Show More"}</div> 
                <div className='ml-1'>{showMore ? <HiOutlineChevronDown/> : <HiOutlineChevronUp/>}</div>
            </div>

            <div className={`${showMore ? "inline-block" : "hidden"} w-full mt-1 transition-all duration-500`}>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Sodium (mg)
                    </div>
                    <div className='font-medium'>
                        {apiResponse.Sodium_mg}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Calcium (mg)
                    </div>
                    <div className='font-medium'>
                        {apiResponse.Calcium_mg}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Dietary Fiber (g)
                    </div>
                    <div className='font-medium'>
                        {apiResponse.Dietary_Fiber_g}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Potassium (mg)
                    </div>
                    <div className='font-medium'>
                        {apiResponse.Potassium_mg}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Sugar (g)
                    </div>
                    <div className='font-medium'>
                        {apiResponse.Sugars_g}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Iron (mg)
                    </div>
                    <div className='font-medium'>
                        {apiResponse.Iron_mg}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Cholesterol (mg)
                    </div>
                    <div className='font-medium'>
                        {apiResponse.Cholesterol_mg}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                    Mono Unsaturated Fat (g)
                    </div>
                    <div className='font-medium'>
                        {apiResponse.Monounsaturated_Fat_g}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                    Poly Unsaturated Fat (g)
                    </div>
                    <div className='font-medium'>
                        {apiResponse.Polyunsaturated_Fat_g}
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default FoodDataSelected
