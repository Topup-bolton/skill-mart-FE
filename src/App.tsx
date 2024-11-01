import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupForm from './pages/sign-up/SignUpForm'
import LoginForm from './pages/log-in/LogInForm'
import HomePage from './pages/home/HomePage'
import Laborer from './pages/laborer/Laborer'
import About from './pages/about/About';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/find-laborer' element={<Laborer />} />
        <Route path='/about' element={<LoginForm />} />
        
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
