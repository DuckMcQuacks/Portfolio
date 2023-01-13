import ProjectTemplate from "./projectTemplate"
import portfolioDarkDesktop from "./images/portfolio_desktopDark.png";
import portfolioDarkPhone from "./images/portfolio_phoneDark.jpg";
import portfolioLightDesktop from "./images/portfolio_desktopLight.png";
import portfolioLightPhone from "./images/portfolio_phoneLight.jpg";
import {useState, useEffect} from "react"

interface props{
    darkmode: boolean
}

export default function PortfolioStudy({darkmode} : props){
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
        if(darkmode){
            if(width > 720){
                return portfolioDarkDesktop
            }
            return portfolioDarkPhone
        }
        if(width> 720){
            return portfolioLightDesktop
        }
        return portfolioLightPhone
    }

    let image : string = imageDecider();
    const isInvert= darkmode ? "" : " invert"
    return(
    <>
        <div className={"container pattern columnCenter"+(darkmode?"" : " patternGrey")}>
            <h1>Portfolio</h1>
            <p>The page contains the overview of the Portfolio page, it explains what tools were used and why they were used.</p>   
            <div className="rowCenter">
            <a href="https://github.com/DuckMcQuacks/Portfolio" target="_blank">
            <h1 className={"button"+(darkmode ? " buttondark textdark" : " textlight")} style={{textTransform: "uppercase"}}>
                <p>Project Link</p>
            </h1>
            </a>
            </div>
        </div>
        <div className="container columnCenter">
        <img className="studyImage" src={image}/>
        </div>
        <div className="caseStudyContainer">
        <h1>Overview</h1>
        <p>Portfolio is a simple and clean single-page website. The websites is responsive, providing a clean and consistent look on all devices allowing for ease of use. It has a built-in theme switcher so that the user can choose wether they want a bright look and feel to the site, or a dark one.</p>
        </div>
      </>  
    )
}