interface props{
    darkmode: boolean
}

export default function About({darkmode}:props){
    const skills : string[] = ["HTML","CSS","JavaScript","TypeScript","React","GIT","Github","Responsive Design","Terminal","SQL Basics","C#","C","Python"];
    const skillsArray = skills.map(a=>{
        return(
            <div className={"aboutSkill" +(darkmode ? " aboutSkillDark" : "")}>{a}</div>
        )
    })
    return(
        <div className="aboutSection">
        <div className="aboutIntro">
            <h1>About me</h1>
            <hr />
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
        </div>
        <div className="aboutContent">
            <div className="aboutMe">
                <h1>Get to know me!</h1>
                <p>I am a Frontend focused Web Developer, building clean looking Front-end of websites and Web Applications. You can check out some of my work in the Projects section.</p>
                <p>I am open to Job opportunities where I can contribute, learn and grow, If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                <div className={"button"+(darkmode ? " buttondark" : "")}>Contact</div>
            </div>
            <div className="aboutMySkills">
                <h1>My Skills</h1>
                <div className="aboutSkills">
                    {skillsArray}
                </div>
            </div>
        </div>
        </div>
    )
}