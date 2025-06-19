import './App.css'
import Home from "../src/features/home/Home"
import { Route, Routes } from 'react-router-dom'
import Details from './features/details/details'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Pizza/:name' element={<Details/>}/>
    </Routes>
    </>
  )
}

export default App
