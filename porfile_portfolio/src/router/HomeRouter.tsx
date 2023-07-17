import React from 'react'
import LandingPage from '../features/LandingPage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

export default function HomeRouter  () {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
