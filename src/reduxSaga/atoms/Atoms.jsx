import { useNavigate } from "react-router-dom"
import logoo from "../images/logoo.png"
import { useState } from "react";

let Navbar = ({name,cardNo,sex,password,role}) => {

    let navigate=useNavigate();
    const [profile, setprofile] = useState("none")
   

    let logout=()=>{
        localStorage.removeItem("logedin")
        if(role=="Admin"){
            navigate("/login")
        }else{
            navigate("/userlogin")
        }
    }
    let user=()=>{
        setprofile("block")
    }

    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="logo d-flex">
                        <img src={logoo} alt="logo-img" />
                    </div>
                    <div className="user" onClick={user}>
                        <i class="fa-regular fa-user"></i>
                    </div>
                </div>
            </div>
            <div className="profile" >
                <div className="profile-name position-relative" style={{display:`${profile}`}}>
                    <div className="space"></div>
                    <div className="user position-absolute">
                        <button>{name[0]}</button>
                    </div>
                    <ul>
                        <li><a href="#">name : {name}</a></li>
                        {cardNo&& <li><a href="#">cardNo : {cardNo}</a></li>}
                        {sex&& <li><a href="#">sex : {sex}</a></li>}
                        {password&& <li><a href="#">password : {password}</a></li>}
                        
                    </ul>
                    <button className="logout" onClick={logout}>
                        <i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>Log out
                    </button>
                </div>
                </div>
            </>
            )
}

            export {Navbar}