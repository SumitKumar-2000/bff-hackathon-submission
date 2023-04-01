import FoodScan from "./pages/FoodScan"
import Navbar from './components/Navbar/Navbar'
import { useContext, useState } from "react"
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import FeedPage from "./pages/FeedPage"
import SignInPage from "./pages/SignInPage"
import ProfilePage from "./pages/ProfilePage"
import Err_404 from "./pages/err_404"

// auth imports
import { AuthCheck } from "./context/authContext"

function App() {  

  const {authValues} = useContext(AuthCheck);

  const [scan, setScan] = useState(false)

  return (

    <Router>
      <Navbar scan={scan} setScan={setScan}/>
      <Routes>
        <Route path="/" element={<SignInPage/>} exact/> 
        <Route path="/feed" element={authValues !== null ? <FeedPage/> : <Err_404/>} exact /> 
        <Route path="/profile/:userId" element={authValues !== null ? <ProfilePage/> : <Err_404/>} exact/> 
        <Route path="/foodScan" element={authValues !== null ? <FoodScan scan={scan} setScan={setScan} /> : <Err_404/>} exact /> 
      </Routes>
    </Router>  
  )
}

export default App
