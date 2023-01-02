import React from "react"
import { Link} from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <Link to="/" >
                <p className="navButton">Home</p>
            </Link>
            <Link to="/About" >
            <p className="navButton">About</p>
            </Link>
            <Link to="/Projects" >
            <p className="navButton">Projects</p>
            </Link>
            <Link to="/Contact" >
            <p className="navButton">Contact</p>
            </Link>
        </nav>
    )
}