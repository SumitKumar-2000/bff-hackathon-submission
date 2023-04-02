import React, { useContext, useRef, useState } from 'react'
import Chart from 'react-apexcharts'
import demoFoodImage from "../../assets/demo-food-img.png"
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

// sub components
import FoodDataSelected from './FoodDataSelected';
import NoneSelected from './NoneSelected';
// import { AuthCheck } from '../../context/authContext';
// import { useNavigate } from 'react-router-dom';

const FoodDataPlot = ({foodApiData,foodImage, setScan}) => {

    // const {authVariables} = useContext(AuthCheck)
    // const navigate = useNavigate()

    const [showMore, setShowMore] = useState(false)
    const [onOptionsSelect, setOnOptionsSelect] = useState("")
    const [showTrueFoodData, setShowTrueFoodData] = useState("")

    const fatPercentage = useRef(0)
    const proteinPercentage = useRef(0)
    const carbsPercentage = useState(0)

    // const healthIndex = (foodItem) => {
    //     const foodItem = {
    //       "index": 15,
    //       "item_name": "besan chilla",
    //       "item_name1": "besan chilla",
    //       "item_found": "bean cake",
    //       "Calories": 130,
    //       "Serving_Size ": "1 cake",
    //       "Total_Fat_g": "6.82",
    //       "Saturated_Fat_g": "1.234",
    //       "Monounsaturated_Fat_g": 2.704,
    //       "Sodium_mg": "60",
    //       "Total_Carbohydrate_g": 15.77,
    //       "Dietary_Fiber_g": "0.9",
    //       "Sugars_g": 6.81,
    //       "Calcium_mg": "3",
    //       "Iron_mg": "0.67",
    //       "Potassium_mg": 58,
    //       "Vitamin_A_mcg": "0",
    //       "Vitamin_C_mg": "0",
    //       "Trans_Fat_g": 0,
    //       "Vitamin_D_mcg": 0,
    //       "Cholesterol_mg": "0",
    //       "Protein_g": 1.71,
    //       "Polyunsaturated_Fat_g": 2.519
    //     };
        
    //     const goodNutrients = foodItem.Protein_g + foodItem.Dietary_Fiber_g + foodItem.Calcium_mg + foodItem.Iron_mg + foodItem.Potassium_mg + foodItem.Vitamin_A_mcg + foodItem.Vitamin_C_mg;
    //     const badNutrients = parseFloat(foodItem.Total_Fat_g) + parseFloat(foodItem.Saturated_Fat_g) + parseFloat(foodItem.Trans_Fat_g) + parseFloat(foodItem.Cholesterol_mg) + parseFloat(foodItem.Sodium_mg) + parseFloat(foodItem.Sugars_g);
    //     const healthIndex = (goodNutrients - badNutrients) / foodItem.Calories;
        
    //     // health_index = (foodItem.Calories/100 * 0.4) + (foodItem.total_fat * 9/100 * 0.2) + (saturated_fat * 9/100 * 0.1) + (sodium/1000 * 0.1) + (fiber * 0.1) + (protein * 4/100 * 0.1)
        
    //     console.log(`The health index of ${foodItem.item_name} is ${healthIndex}`);
    //     return healthIndex
    // }

    if(foodApiData){
        var calorieSum = parseFloat(foodApiData.Total_Carbohydrate_g) + parseFloat(foodApiData.Total_Fat_g) + parseFloat(foodApiData.Protein_g);

        fatPercentage.current = Math.round((foodApiData.Total_Fat_g / calorieSum) * 100)
        proteinPercentage.current = Math.round((foodApiData.Protein_g / calorieSum) * 100)
        carbsPercentage.current = Math.round((foodApiData.Total_Carbohydrate_g / calorieSum) * 100)

        // (async () => {
        //     const formData = new FormData();
        //     formData.append("feeddata", {
        //         user_name: authVariables.name,
        //         uuid: authVariables.user_google_uuid,
        //         post_id: 1001,
        //         image_url: foodImage,
        //         health_index: healthIndex(foodApiData),
        //         food_name: foodApiData.item_name,
        //         carbs: foodApiData.Total_Carbohydrate_g,
        //         fat: foodApiData.Total_Fat_g,
        //         cal: foodApiData.Calories,
        //         protein: foodApiData.protein_g,
        //         sugar: foodApiData.Sugars_g,
        //         sno: null,
        //     })
        //     await fetch("https://BFF-DB-Backend.ishkapoor.repl.co/publish_post",{
        //         method: "POST",
        //         body: formData
        //     }).then(res => {
        //             console.log("post response: ", res.data)
        //             navigate("/feed")
        //         })
        //       .catch(err => console.log("post response err: ",err))
        // })()
    }

  return (
    foodApiData && <div className='bg-[#fafafa] rounded-md p-4 flex flex-col'>
        {onOptionsSelect === "" && <div className='flex mb-1 gap-3 flex-wrap pb-4'>
                <div className='flex flex-col items-center p-[2px] shadow-md bg-[#1a1313] rounded-md w-full'>
                    <img src={foodImage === "" ? demoFoodImage:foodImage}
                         alt="Food Image" 
                         className="w-full shadow-md h-[300px] object-cover rounded-md"
                    />
                    <div className='flex justify-center items-center'>
                        <span className='text-white font-medium text-lg' >{(foodApiData.item_name).toUpperCase()}</span>      
                    </div>
                </div>
                <div className='flex items-center w-full h-full justify-center p-1 shadow-md bg-white border border-slate-200 rounded-md' >
                        <div className='text-[#333333] font-normal text-xl' >Calories -</div>
                        <div className='text-[#536976] ml-1 text-xl font-bold'>{foodApiData.Calories}</div>
                </div>
                <div className='shadow-md h-full w-full flex justify-center items-center bg-white border border-slate-200 rounded-md'>      
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
                <div className='flex flex-col items-center justify-center p-1 flex-grow shadow-md border border-slate-200 bg-white rounded-md gap-1' >
                    <div className='text-[#333333] font-medium' >Carbs (g)</div>
                    <img 
                        src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676913714/Foodifyy%20Icons/Carbs-Rice-96_o5xr5x.png" 
                        alt="nutrient - Carbs"
                        className='w-[40px]'
                    />
                    <div className='text-[#536976] ml-1 font-bold'>{foodApiData.Total_Carbohydrate_g}</div>
                </div>
                <div className='flex flex-col items-center justify-center p-1 flex-grow shadow-md border border-slate-200 bg-white rounded-md gap-1' >
                    <div className='text-[#333333] font-medium' >Protein (g)</div> 
                    <img 
                        src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676913697/Foodifyy%20Icons/Protein-Lettuce-96_snvogv.png" 
                        alt="nutrient - Protein"
                        className='w-[40px]'
                    />
                    <div className='text-[#536976] ml-1 font-bold'>{foodApiData.Protein_g}</div>
                </div>
                <div className='flex flex-col items-center justify-center p-1 flex-grow shadow-md border border-slate-200 bg-white rounded-md gap-1' >
                    <div className='text-[#333333] font-medium' >Fat (g)</div>
                    <img 
                        src="https://res.cloudinary.com/dlhrg1au6/image/upload/v1676913708/Foodifyy%20Icons/Fat-Potato-96_vjuvmh.png" 
                        alt="nutrient - Fat"
                        className='w-[40px]'
                    />
                    <div className='text-[#536976] font-bold'>{foodApiData.Total_Fat_g}</div>
                </div>
        </div>}
        
        {onOptionsSelect === "" && <div className='pb-4 w-full'>
            <div className='w-full flex justify-center items-center mb-1 font-medium' onClick={() => setShowMore(prev => !prev)}>
                <div className='cursor-pointer'>{showMore ? "Show Less" : "Show More"}</div> 
                <div className='ml-1'>{showMore ? <HiOutlineChevronDown/> : <HiOutlineChevronUp/>}</div>
            </div>

            <div className={`${showMore ? "inline-block" : "hidden"} w-full transition-all duration-500`}>
                <div className='w-full flex bg-white justify-between p-2 shadow-sm'>
                    <div>
                        Sodium (mg)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Sodium_mg}
                    </div>
                </div>
                <div className='w-full flex bg-white justify-between p-2 shadow-sm'>
                    <div>
                        Calcium (mg)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Calcium_mg}
                    </div>
                </div>
                <div className='w-full flex bg-white justify-between p-2 shadow-sm'>
                    <div>
                        Dietary Fiber (g)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Dietary_Fiber_g}
                    </div>
                </div>
                <div className='w-full flex bg-white justify-between p-2 shadow-sm'>
                    <div>
                        Potassium (mg)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Potassium_mg}
                    </div>
                </div>
                <div className='w-full flex bg-white justify-between p-2 shadow-sm'>
                    <div>
                        Sugar (g)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Sugars_g}
                    </div>
                </div>
                <div className='w-full flex bg-white justify-between p-2 shadow-sm'>
                    <div>
                        Iron (mg)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Iron_mg}
                    </div>
                </div>
                <div className='w-full flex bg-white justify-between p-2 shadow-sm'>
                    <div>
                        Cholesterol (mg)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Cholesterol_mg}
                    </div>
                </div>
                <div className='w-full flex bg-white justify-between p-2 shadow-sm'>
                    <div>
                    Mono Unsaturated Fat (g)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Monounsaturated_Fat_g}
                    </div>
                </div>
                <div className='w-full flex bg-white justify-between p-2 shadow-sm'>
                    <div>
                    Poly Unsaturated Fat (g)
                    </div>
                    <div className='font-medium'>
                        {foodApiData.Polyunsaturated_Fat_g}
                    </div>
                </div>
            </div>
        </div>}

        {onOptionsSelect === "" && <div className='w-full rounded-md shadow-md p-4 border border-slate-200 bg-white'>
            <div className='text-lg mb-1 font-medium text-ellipsis'>
                Did our prediction matched with the image you clicked ?
            </div>
            <div className='w-full flex gap-4'>
                <div>
                    <label htmlFor='input-yes' className='text-xl text-gray-500 mr-2'>Yes</label>
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
                    <label htmlFor='input-no' className='text-xl text-gray-500 mr-2'>No</label>
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


        {showTrueFoodData === "Yes" && onOptionsSelect === "" ? <div className='w-full mt-4 rounded-md shadow-md p-4 border border-slate-200 bg-white'>
            <div className='text-lg mb-5 font-medium'>
                Awesome! We're glad we could help you find the nutritional values of your meal. Enjoy your meal! 
            </div>
            <button
                onClick={()=>setScan(false)}
                className='w-full rounded-md text-white text-lg font-medium bg-[#00745B] text-center py-1'
            >
                Scan Again
            </button>
        </div> : null}

        {showTrueFoodData === "No" && onOptionsSelect === "" ? <div className='w-full mt-4 rounded-md shadow-md p-4 border border-slate-200 bg-white'>   
            <div className='text-lg mb-4 font-medium text-ellipsis'>
               Select food that perfectly matches the food image you clicked
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
        
        {onOptionsSelect!=="" && onOptionsSelect !== "None" && <FoodDataSelected onOptionsSelect={onOptionsSelect}/>}
        {onOptionsSelect!=="" && onOptionsSelect === "None" && <NoneSelected/>}

    </div>
  )
}

export default FoodDataPlot