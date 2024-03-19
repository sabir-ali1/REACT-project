import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Homecomponents from './components/Homecomponents'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'
import Logout from './pages/Logout'


const App = () => {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='*' element={<Error/>}/>
         <Route path='/logout' element={<Logout/>}/>
        </Routes>
        <Homecomponents />
        <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App