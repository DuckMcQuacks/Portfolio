import image from "../assets/bw-image.jpg"
import imag from "../assets/color-image.jpg"

interface props{
    darkmode: boolean;
  }
export default function Home({darkmode}:props){
    return(
        <div className={"container pattern"+(darkmode?"" : " filterGrey")}></div>
    )
}
function AnimImg(){
    return(
    <div className="mask-container">
        <div className="color-image"></div>
        <img className="blackWhite" />
    </div>
    )
}