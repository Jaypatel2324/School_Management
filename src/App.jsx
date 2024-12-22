import { useState } from 'react'

import './App.css'
import Login from './Compenent/Login'
import Registaration from './Compenent/Registaration'
import Navbar from './Compenent/Navbar'
import  {BrowserRouter}  from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
    <Login/>
   <Registaration/>
    </>
  )
}

export default App
