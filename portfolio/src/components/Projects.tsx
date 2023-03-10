import ProjectTemplate from "./projectTemplate";
import portfolioDarkDesktop from "./images/portfolio_desktopDark.png";
import portfolioDarkPhone from "./images/portfolio_phoneDark.jpg";
import portfolioLightDesktop from "./images/portfolio_desktopLight.png";
import portfolioLightPhone from "./images/portfolio_phoneLight.jpg";

interface props {
    darkmode: boolean,
}

export default function Projects({darkmode}:props){
    return(
        <div className="projectsSection">
             <div className="projectsIntro">
            <h1>Projects</h1>
            <hr />
            <p>Here you can find some of the projects I have worked on before. <br /> Each has a title, a short description, and a link to a page where I go into more detail about the project. <br /> Each project has its own documentation as well.</p>
            </div>
            <ProjectTemplate
            imageDarkDesktop={portfolioDarkDesktop}
            imageDarkPhone={portfolioDarkPhone}
            imageLightDesktop={portfolioLightDesktop}
            imageLightPhone={portfolioLightPhone}
            darkMode={darkmode}
            desc={"My portfolio. A webpage which contains links and descriptions to all of my projects allowing other people to view them. Made with the intention of showcasing some of my work."}
            title={"Portfolio"}
            linkName={"portfolio"} 
            />
        </div>
    )
}