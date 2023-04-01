import FoodScan from "./pages/FoodScan"
import Navbar from './components/Navbar/Navbar'
import { useState } from "react"
import TestFooter from "./components/Footer/testFooter"

function App() {  

  const [scan, setScan] = useState(false)

  return (
    <div className="h-[100vh]">
      <div className="h-[96%]">
        <Navbar scan={scan} setScan={setScan}/>
        <FoodScan scan={scan} setScan={setScan} />
      </div>
      <div className="h-[4%]">
        {!scan && <TestFooter/>}
      </div>
    </div>
  )
}

export default App
