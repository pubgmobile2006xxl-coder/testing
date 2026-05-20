import second from "react";
import grop from "../../assets/img/Group 1.png"
import "./Header.css"

function Header() {
    return(
        <>
        <header>
            <div className="container">
                <div className="navar">
                    <img src={grop} alt="rasm"/>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <select name="" id="">
                        <option value="uz">uzb</option>
                        <option value="ru">rus</option>
                        <option value="en">eng</option>
                    </select>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header