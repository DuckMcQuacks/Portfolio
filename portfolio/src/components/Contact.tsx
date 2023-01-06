import React from 'react'
interface props{
    darkmode: boolean
}

export default function Contact({darkmode}:props){
    const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3000/Contact')
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