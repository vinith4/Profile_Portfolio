
import LandingPage from '../features/LandingPage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Portfolio from '../features/portfolio'
import About from '../features/about'
import Contact from '../features/contact'
import ToggleButton from '../components/atom/toggleButton'
import Loader from '../features/loader'
import { useEffect, useState } from 'react'

export default function HomeRouter  () {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
      <>
         <div>
        <BrowserRouter>
        <ToggleButton />
        <Routes>
            <Route path="/home" element={<LandingPage/>}></Route>
            <Route path="/portfolio" element={<Portfolio/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
      </>
    )}
  </>
   
  )
}
