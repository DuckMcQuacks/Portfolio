import {useState, useEffect} from "react"
import { Link} from "react-router-dom"

export default function Navbar(){
    const [width , setWidth] = useState(0)
    //Conditional rendering for cross-Device compatibility regarding phones
    useEffect(() => {
        let cb = function () {
          setWidth(window.innerWidth);
        };
        window.addEventListener("resize", cb);
      
        return () => {
          window.removeEventListener("resize", cb);
        };
      }, []);
    return(
        <nav> 
            <Link to="/" >
            <p className="navButton">Dominik Nándor Menus</p>
            </Link>
            { width > 670?
            
            <div className="navButton_Container">
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
            </div> : <p>Dummy Text</p> 
            }
        </nav>
    )
}