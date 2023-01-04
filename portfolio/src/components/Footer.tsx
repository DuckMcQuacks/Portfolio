export default function Footer(){
    return(
        <footer>
            <div className="info">
                <div className="about">
                    <h2>DOMINIK NÁNDOR MENUS</h2>
                    <p className="small">Currently a Frontend focused Web developer, able to design and build the Frontend of Websites.</p>
                </div>
                <div className="social">
                    <h2>SOCIAL</h2>
                    <div className="socialImages">
                        <div className="img linkedIn"></div>
                        <div className="img github"></div>
                        <div className="img discord"></div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="copyright"> This is the copyright</div>
        </footer>
    )
}