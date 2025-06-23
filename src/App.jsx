import './App.css'
import Home from "../src/features/home/Home"
import { Route, Routes } from 'react-router-dom'
import Details from './features/details/Details'
import Confirmation from './features/confirmation/Confirmation'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Pizza/:name' element={<Details/>}/>
      <Route path='/confirmation' element={<Confirmation/>}/>
    </Routes>
    </>
  )
}

export default App
