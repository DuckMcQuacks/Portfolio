import {Link} from "react-router-dom"

interface props{
    darkMode: boolean,
    imageDark: string,
    imageLight: string,
    desc: string,
    title: string
}

export default function ProjectTemplate(props: props){
    return(
        <div className="projectTemplate">
            <img className="projectImage" src={props.darkMode ? props.imageDark : props.imageLight }/>
            <div className="projectDesc">
                <h1>{props.title}</h1>
                {props.desc}
                <br />
                <Link to="/Projects" style={{textTransform:"uppercase"}}>
                <h1 className={"button"+(props.darkMode ? " buttondark textdark" : " textlight")}><p>Case Study</p></h1>
                </Link>
            </div>
        </div>
    )
}