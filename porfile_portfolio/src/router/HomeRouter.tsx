import React from 'react'
import LandingPage from '../features/LandingPage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Portfolio from '../features/portfolio'
import About from '../features/about'
import Contact from '../features/contact'

export default function HomeRouter  () {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/portfolio" element={<Portfolio/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
