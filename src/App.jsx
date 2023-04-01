import FoodScan from "./pages/FoodScan"
import Navbar from './components/Navbar/Navbar'
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FeedPage from "./pages/FeedPage"

function App() {  

  const [scan, setScan] = useState(false)

  return (

    <Router>
      <Navbar scan={scan} setScan={setScan}/>
      <Routes>
        <Route path="/" element={<FeedPage/>} />
        <Route path="/foodScan" element={<FoodScan scan={scan} setScan={setScan} />} exact/> 
      </Routes>
    </Router>  
  )
}

export default App
