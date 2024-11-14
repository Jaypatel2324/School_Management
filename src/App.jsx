import { useState } from 'react'

import './App.css'
import Login from './Compenent/Login'
import Registaration from './Compenent/Registaration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Login/>
   
   <Registaration/>
    </>
  )
}

export default App
