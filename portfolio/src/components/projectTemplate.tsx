import {Link} from "react-router-dom"
import {useState, useEffect} from 'react'

interface props{
    darkMode: boolean
    imageDarkDesktop: string
    imageDarkPhone: string
    imageLightDesktop: string
    imageLightPhone: string
    desc: string
    title: string
    linkName: string 
}

export default function ProjectTemplate(props: props){
    const [width , setWidth] = useState(window.innerWidth)
  
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

    function imageDecider(){
        if(props.darkMode){
            if(width > 720){
                return props.imageDarkDesktop
            }
            return props.imageDarkPhone
        }
        if(width> 720){
            return props.imageLightDesktop
        }
        return props.imageLightPhone
    }

    let image : string = imageDecider();
    return(
        <div className="projectTemplate">
            <img className="projectImage" src={image}/>
            <div className="projectDesc">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <br />
                <Link to={"/Projects/"+props.linkName} style={{textTransform:"uppercase"}}>
                <h1 className={"button"+(props.darkMode ? " buttondark textdark" : " textlight")}><p>Case Study</p></h1>
                </Link>
            </div>
        </div>
    )
}