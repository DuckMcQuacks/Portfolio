import {useState, useEffect} from "react"
import { Link} from "react-router-dom"

export default function Navbar(){
    const [width , setWidth] = useState(window.innerWidth)
    const [isActive, setActive] = useState(false)
    //Conditional rendering for cross-Device compatibility regarding phones
    useEffect(() => {
        let cb = function () {
          setWidth(window.innerWidth);
          setActive(width > 670 ? isActive : false)
        };
        window.addEventListener("resize", cb);
      
        return () => {
          window.removeEventListener("resize", cb);
        };
      }, []);
      //Dealing with the mobile version of navbar, hiding and showing the menu
      function clickHandler()
      {
        setActive(!isActive)
      }
    return(
        <>
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
            </div> : 
            <div className={"fill"+(isActive ? " active" : "")} onClick={clickHandler}></div> 
            }
        </nav>
        <ul className={isActive ? "not_hidden" : "hidden"}>
            <hr></hr>
            <li>
            <Link to="/" >
                <p className="navButton" onClick={clickHandler}>Home</p>
            </Link>
            </li>
            <hr></hr>
            <li>
            <Link to="/About" >
            <p className="navButton" onClick={clickHandler}>About</p>
            </Link>
            </li>
            <hr></hr>
            <li>
            <Link to="/Projects" >
            <p className="navButton" onClick={clickHandler}>Projects</p>
            </Link>
            </li>
            <hr></hr>
            <li>
            <Link to="/Contact" >
            <p className="navButton" onClick={clickHandler}>Contact</p>
            </Link>
            </li>
            <hr></hr>
        </ul>
        </>
    )
}