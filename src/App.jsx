import FoodScan from "./pages/FoodScan"
import Navbar from './components/Navbar/Navbar'
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {  

  const [scan, setScan] = useState(false)

  return (

    <Router>
      <Navbar scan={scan} setScan={setScan}/>
      <Routes>
        <Route path="/foodScan" element={<FoodScan scan={scan} setScan={setScan} />}/> 
      </Routes>
    </Router>  
  )
}

export default App
