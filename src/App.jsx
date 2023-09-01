import { useState } from "react"
import './App.css'
import NavBar from "./components/Navbar/Navbar"
import Rick from "./components/Rick/Rick"
import { Link } from "react-router-dom"

const App = ()=>{
  return (
    <main>
      <NavBar/>
      <Rick/>
    </main>
  )
}

export default App;
