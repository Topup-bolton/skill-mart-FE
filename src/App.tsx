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
import AdminHeader from './components/layout/header/admin-header/AdminHeader';
import AdminDashboard from './pages/admin-dashboard/AdminDashboard';

function App() {

  return (

    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/find-laborer' element={<Laborer />} />
        <Route path='/about' element={<LoginForm />} />
        
    </Routes> */}
<AdminDashboard/>    
    </BrowserRouter>
    
  )
}

export default App
