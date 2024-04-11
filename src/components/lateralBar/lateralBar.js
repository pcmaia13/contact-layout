import './lateralBar.css'

function Lcontainer(props) {
    
    return(
        <div className="lcontainer">
            <div>
                <img className="images-logo" src="./logo.png" alt=""></img>
            </div>

            <div>
                <a href='https://www.instagram.com/jvma_ia/'>
                    <img className="images-icon-ig" src="./instagram.png" alt=""></img>
                </a>
            </div>


            <div>
                <img className="images-icon-git" src="./github.png" alt=""></img>
            </div>
        </div>
    )
}

export default Lcontainer
