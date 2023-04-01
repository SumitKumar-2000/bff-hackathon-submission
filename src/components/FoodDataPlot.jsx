import React, { useRef, useState } from 'react'
import Chart from 'react-apexcharts'
import demoFoodImage from "../assets/demo-food-img.png"
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

// sub components
import FoodDataSelected from './FoodDataSelected';
import NoneSelected from './NoneSelected';

const FoodDataPlot = ({foodApiData,foodImage, setScan}) => {

    const [showMore, setShowMore] = useState(false)
    const [onOptionsSelect, setOnOptionsSelect] = useState("")
    const [showTrueFoodData, setShowTrueFoodData] = useState("")

    const fatPercentage = useRef(0)
    const proteinPercentage = useRef(0)
    const carbsPercentage = useState(0)

    if(foodApiData){
        var calorieSum = parseFloat(foodApiData.Total_Carbohydrate_g) + parseFloat(foodApiData.Total_Fat_g) + parseFloat(foodApiData.Protein_g);

        fatPercentage.current = Math.round((foodApiData.Total_Fat_g / calorieSum) * 100)
        proteinPercentage.current = Math.round((foodApiData.Protein_g / calorieSum) * 100)
        carbsPercentage.current = Math.round((foodApiData.Total_Carbohydrate_g / calorieSum) * 100)
    }

  return (
    foodApiData && <div className='bg-white mt-2 rounded-md p-4 flex flex-col'>
        {onOptionsSelect === "" && <div className='flex mb-2 gap-3 flex-wrap pb-4 border-b-2 border-b-gray-200'>
                <div className='flex items-center p-1 flex-grow shadow-md border-black bg-[#1a1313] border-2 rounded-md w-full'>
                    <img src={foodImage === "" ? demoFoodImage:foodImage} alt="Food Image" className="rounded-md shadow-md w-[100px] h-[100px] object-fill"/>
                    <div className='flex flex-col ml-4'>
                        <div><span className='text-slate-200'>Food - </span> <span className='text-white' >{foodApiData.item_name}</span></div>  
                        <div><span className='text-slate-200'>Servings - </span> <span className='text-white' >{foodApiData["Serving_Size "]}</span></div>    
                    </div>
                </div>
                <div className='flex items-center w-full h-full justify-center p-1 shadow-md bg-zinc-100 rounded-md' >
                        <div className='text-[#333333] font-normal text-xl' >Calories -</div>
                        <div className='text-[#536976] ml-1 text-xl font-bold'>{foodApiData.Calories}</div>
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
                    <div className='text-[#536976] ml-1 font-bold'>{foodApiData.Total_Carbohydrate_g}</div>
                </div>
                <div className='flex flex-col items-center justify-center p-1 flex-grow shadow-md border-zinc-50 bg-zinc-50 border-2 rounded-md gap-1' >
                    <div className='text-[#333333] font-medium' >Protein (g)</div> 
                    <img 
                        src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676913697/Foodifyy%20Icons/Protein-Lettuce-96_snvogv.png" 
                        alt="nutrient - Protein"
                        className='w-[40px]'
                    />
                    <div className='text-[#536976] ml-1 font-bold'>{foodApiData.Protein_g}</div>
                </div>
                <div className='flex flex-col items-center justify-center p-1 flex-grow shadow-md border-zinc-50 bg-zinc-50 border-2 rounded-md gap-1' >
                    <div className='text-[#333333] font-medium' >Fat (g)</div>
                    <img 
                        src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676913708/Foodifyy%20Icons/Fat-Potato-96_vjuvmh.png" 
                        alt="nutrient - Fat"
                        className='w-[40px]'
                    />
                    <div className='text-[#536976] ml-1 font-bold'>{foodApiData.Total_Fat_g}</div>
                </div>
        </div>}
        
        {onOptionsSelect === "" && <div className='pb-4 w-full'>
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
                        {foodApiData.Sodium_mg}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Calcium (mg)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Calcium_mg}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Dietary Fiber (g)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Dietary_Fiber_g}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Potassium (mg)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Potassium_mg}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Sugar (g)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Sugars_g}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Iron (mg)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Iron_mg}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                        Cholesterol (mg)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Cholesterol_mg}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                    Mono Unsaturated Fat (g)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Monounsaturated_Fat_g}
                    </div>
                </div>
                <div className='w-full flex justify-between p-2 shadow-sm'>
                    <div>
                    Poly Unsaturated Fat (g)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Polyunsaturated_Fat_g}
                    </div>
                </div>
            </div>
        </div>}

        {onOptionsSelect === "" && <div className='w-full mt-4 rounded-md shadow-md p-4 border border-slate-200'>
            <div className='text-2xl mb-3 font-medium text-ellipsis'>
                Did our prediction matched the image you clicked ?
            </div>
            <div className='w-full flex gap-4'>
                <div>
                    <label htmlFor='input-yes' className='text-xl mr-2'>Yes</label>
                    <input 
                        type="radio" 
                        name="result-matched" 
                        id='input-yes' 
                        className='accent-green-600' 
                        value={"Yes"} 
                        onChange={e=>setShowTrueFoodData(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor='input-no' className='text-xl mr-2'>No</label>
                    <input 
                        type="radio" 
                        name="result-matched" 
                        id='input-no' 
                        className='accent-green-600' 
                        value={"No"} 
                        onChange={e=>setShowTrueFoodData(e.target.value)} 
                    />
                </div>
            </div>
        </div>}


        {showTrueFoodData === "Yes" && onOptionsSelect === "" ? <div className='w-full mt-4 rounded-md shadow-md p-4 border border-slate-200'>
            <div className='text-2xl mb-5 font-medium'>
                Awesome! We're glad we could help you find the nutritional values of your meal. Enjoy your meal! 
            </div>
            <button
                onClick={()=>setScan(false)}
                className='w-full rounded-md text-white text-lg font-medium bg-[#00745B] text-center py-1'
            >
                Scan Again
            </button>
        </div> : null}

        {showTrueFoodData === "No" ? <div className='w-full mt-4 rounded-md shadow-md p-4 border border-slate-200'>   
            <div className='text-2xl mb-4 font-medium text-ellipsis'>
               Select food that perfectly matches with the food image you clicked
            </div>            
            <select 
                className={`w-full rounded-[2px] px-1 h-[35px] text-[#ACACAC] text-sm bg-[#ffffff] cursor-pointer focus:outline-none border`}
                onChange={(e)=>{setOnOptionsSelect(e.target.value)}}
            >
                <option value="" className='text-[#333333]'>-- Select food --</option>
                {
                    foodApiData.name.map((foodItem,idx) => {
                        return (
                            <option 
                                key={idx}
                                value={foodItem}
                                className="text-[#333333]"
                            >
                                {foodItem}
                            </option>
                        )
                    })
                }
                <option value="None" className='text-[#333333]'>None</option>
            </select>
        </div> : null}  
        
        {onOptionsSelect !== "" && onOptionsSelect !== "None" && <FoodDataSelected onOptionsSelect={onOptionsSelect}/>}
        {onOptionsSelect !== "" && onOptionsSelect === "None" && <NoneSelected/>}

    </div>
  )
}

export default FoodDataPlot