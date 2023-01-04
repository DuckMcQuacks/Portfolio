import { useState } from 'react'
import Navbar from './components/navbar'
import { Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  function themeSwitch(){setDarkMode((prev) => !prev)}
  return (
  <div className={darkMode ? "dark" : "light"}>
    <header >
      <Navbar themeSwitch={themeSwitch} darkmode={darkMode}/>
    </header>
    <div className={"container"+(darkMode ? " dark" : "light")}> 
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/About" element={<About />}/>
        <Route path ="/Projects" element={<Projects />}/>
        <Route path ="/Contact" element={<Contact />}/>
      </Routes>
    </div>
    <Footer/>
  </div>
  )
}

