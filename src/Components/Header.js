import { useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () =>{
const [btnName,setbtnName] = useState("Login")

    return(
        <div id="header">
            <div id="logo-container">
                <img src={LOGO_URL} alt="logo-image"/>
            </div>
            <div id="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>Cart</li>
                    <button 
                        className="login" 
                        onClick={()=>{
                           btnName==="Login" 
                           ?setbtnName("Logout")
                           :setbtnName("Login")
                        }}
                        >{btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;