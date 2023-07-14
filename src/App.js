import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Destination from './component/Destination'
import {BrowserRouter , Routes, Route}from "react-router-dom"
import Travel from './component/Travel'

function App(){
  return(
    <>
    {/* <h1 classname="bg-primary">React</h1>
    <p>This is a paragraph</p> */}
    <BrowserRouter>
    <Travel/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/contact" element={<Destination/>}/>
      <Route path ="/dest" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;