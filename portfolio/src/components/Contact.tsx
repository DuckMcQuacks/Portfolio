import {useState} from 'react'
import { send } from 'emailjs-com';
interface props{
    darkmode: boolean
}

export default function Contact({darkmode}:props){
    const [formData, setFormData] = useState({
        from_name:"",
        reply_to:"",
        message:"",
        to_name:"Dominik"

    })
    function handleChange(event : any){
        setFormData((prev) => {
            return {...prev, [event.target.name]: event.target.value}
        })
    }
    function containsNumbers(str: string) {
        return /[0-9]/.test(str);
      }
    //back-end express train
        async function sendData(e:any){
            e.preventDefault();
            send(
              'service_da495e9',
              'template_huftt3t',
              formData,
              'MsI1kcrR8fk9DP2e_'
            )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
              })
              .catch((err) => {
                alert('FAILED... \n'+ err);
              });
              setFormData({        
              from_name:"",
              reply_to:"",
              message:"",
              to_name:"Dominik"})
        }
        
    return(
        <div className="contact">
            <div className={"container pattern"+(darkmode?"" : " patternGrey")}>
                <div className="contactSection">
                    <div className="contactIntro">
                        <h1>Contact</h1>
                        <hr />
                        <p>You can <span>Contact </span> me by filling out the form below, I will try to get back to you as soon as possible.</p>
                    </div>
                    <form className={darkmode ? "dark" : "light"} onSubmit={sendData}>
                        <h3>Name</h3>
                        <input className={darkmode ? "dark" : "light"} value={formData.from_name} type="text" name="from_name" id="from_name" placeholder="Enter Your Name" onChange={handleChange} required/>
                        <h3>Email</h3>
                        <input className={darkmode ? "dark" : "light"} value={formData.reply_to} type="email" name="reply_to" id="reply_to" placeholder="Enter Your Mail" onChange={handleChange} required/>
                        <h3>Message</h3>
                        <textarea className={darkmode ? "dark" : "light"} value={formData.message} name="message" placeholder="Enter Your Message" onChange={handleChange} required></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}