import React from 'react'
interface props{
    darkmode: boolean
}

export default function Contact({darkmode}:props){
    const skillsObject : skillsType = {
        skills : ["HTML","CSS","JavaScript","TypeScript","React","GIT","Github","RWD","Terminal","SQL","C#","C","Python"],
        skillsDesc : ["Hypertext markup language, is a markup language used to create the frontend of websites.",
        "Cascading Style Sheets, used to manipulate the properties of HTML",
        "A scripting or programming language that allows you to implement complex features on web pages",
        "A superset of JavaScript, it's Object-oriented whereas JavaScript is a prototype based language.",
        "A JavaScript-based UI development library, focused on making it easy to create single-page websites.",
        "A version control system, it enables multiple developers to work on the same code base and tracks changes.",
        "A code hosting platform for version control and collaboration. Makes it easy to share code between developers.",
        "Responsive web design allows the page to adopt to different screen sizes and ratios, allowing the page to look great on all screens.",
        "A text-based interface, the ability to efficiently navigate and run programs in a terminal.",
        "Structured Query Language is used to communicate with a database, allowing to read and write it, used for relational databases.",
        "A general purpose programming language, it's an object oriented programming language.",
        "A low level general purpose programming language, allows more control over memory usage.",
        "A high-level object oriented programming language, commonly used for data science and back-end"
    ]
    }
    interface skillsType{
        skills : string[]
        skillsDesc : string[]
    }
    const skillsArray = skillsObject.skills.map((a,b)=>{
        return(
            <div className={"aboutSkill" +(darkmode ? " aboutSkillDark" : "")} title={skillsObject.skillsDesc[b]}>{a}</div>
        )
    })
    const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
      console.log(data)
  }, []);
    return(
        <div className="contact">
            <div className={"container pattern"+(darkmode?"" : " patternGrey")}>
                <div className="contactSection">
                    <div className="contactIntro">
                        <h1>Contact</h1>
                        <hr />
                        <p>You can <span>Contact </span> me by filling out the form below, I will try to get back to you as soon as possible.</p>
                    </div>
                    <form className={darkmode ? "dark" : "light"} action="POST">
                        <h3>Name</h3>
                        <input className={darkmode ? "dark" : "light"} type="text" name="name" id="name" placeholder="Enter Your Name" />
                        <h3>Email</h3>
                        <input className={darkmode ? "dark" : "light"} type="email" name="email" id="email" placeholder="Enter Your Mail" />
                        <h3>Message</h3>
                        <textarea className={darkmode ? "dark" : "light"} placeholder="Enter Your Message"></textarea>
                        <input type="button" value="Submit"/>
                        <p>{!data ? "Loading..." : data}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}