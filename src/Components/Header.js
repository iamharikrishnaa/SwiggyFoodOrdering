import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{
const [btnName,setbtnName] = useState("Login")

    useEffect(()=>{
        console.log("useEffect called")
    },[btnName])

    return(
        <div id="header">
            <div id="logo-container">
                <img src={LOGO_URL} alt="logo-image"/>
            </div>
            <div id="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About us</li>
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