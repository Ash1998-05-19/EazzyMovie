import React from 'react'
import Home from './Home'
import Error from './Error'
import { Routes, Route} from "react-router-dom"
import DialogueBox from './DialogueBox'
import "./App.css"

const App = () => {
  return (
    <>
    
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/movie/:id" element={<DialogueBox/>}/>
    <Route path="*" element={<Error/>}/>
    </Routes>
    
    </>
  )
}

export default App
