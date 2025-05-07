import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}  />
    <Route  path='/Dashboard' element={<Dashboard/>} />
   </Routes>
   
   </BrowserRouter>




    </>
  )
}

export default App
