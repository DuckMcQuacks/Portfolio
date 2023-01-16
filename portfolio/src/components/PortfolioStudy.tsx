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
    //Tools used and the description for each
    const skillsObject : skillsType = {
        skills : ["HTML","CSS","TypeScript","React","GIT","Github"],
        skillsDesc : ["Hypertext markup language, is a markup language used to create the frontend of websites.",
        "Cascading Style Sheets, used to manipulate the properties of HTML",
        "A superset of JavaScript, it's Object-oriented whereas JavaScript is a prototype based language.",
        "A JavaScript-based UI development library, focused on making it easy to create single-page websites.",
        "A version control system, it enables multiple developers to work on the same code base and tracks changes.",
        "A code hosting platform for version control and collaboration. Makes it easy to share code between developers.",
    ]
    }
    interface skillsType{
        skills : string[]
        skillsDesc : string[]
    }
    const skillsArray = skillsObject.skills.map((a,b)=>{
        return(
            <div key={b} className={"aboutSkill" +(darkmode ? " aboutSkillDark" : "")} title={skillsObject.skillsDesc[b]}>{a}</div>
        )
    })

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
        <p>I used a few tools, the very obvious ones are HTML and CSS. I used vite TypeScript-React framework for the Front-End. This was my first project that used TypeScript, it took a bit to get used to it, but overall it made it easier to develop the project. </p>
        <p>I used GIT for version control and Github for storage, I was the sole developer that worked on the project. For the layout I took inspiration from <a href="https://www.rammaheshwari.com" target="_blank"> Ram Maheswari </a> as I very much liked the layout of his portfolio.</p>
        <p>You can find a README.md in the github repository which you can look into if you want further information regarding the project.</p>
        <h1>Tools Used</h1>
        <div className="aboutSkills">
                    {skillsArray}
        </div>
        </div>
      </>  
    )
}