interface props{
    darkmode: boolean
}

export default function PortfolioStudy({darkmode} : props){
    const isInvert= darkmode ? "" : " invert"
    return(
    <>
        <div className={"container pattern columnCenter"+(darkmode?"" : " patternGrey")}>
            <h1>Portfolio</h1>
            <p>The page contains the overview of the Portfolio page, it explains what tools were used and why they were used.</p>   
            <div className="rowCenter">
            <h1 className={"button"+(darkmode ? " buttondark textdark" : " textlight")} style={{textTransform: "uppercase"}}>
                <p>Project Link</p>
            </h1>
            </div>
        </div>
      </>  
    )
}