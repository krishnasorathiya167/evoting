import React, { useRef } from 'react'
import logo2 from "../images/logo2.png"
import axios from 'axios';
import { ADD_USER, BASE_URL } from '../constant';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Userlogin = () => {

    let cardNo = useRef();
    let password = useRef();
    let navigate = useNavigate();

    let loginData = async () => {
        if (localStorage.getItem("logedin")) {
            alert("You Are Already Voting...");
            return;
        }
        let data = {
            cardNo: cardNo.current.value,
            password: password.current.value,
        }
        console.log(data);

        try {
            let res = await axios.post(BASE_URL + ADD_USER, data)
            let result = res.data.data;
            localStorage.setItem("user", JSON.stringify(result))
            localStorage.setItem("logedin", true)
            navigate("/user")
        } catch (error) {
            Swal.fire({
                title: "not Found ?",
                text: "Voter Not Found?",
                icon: "question"
            });
        }
    }
    let adminData = () => {
        navigate("/login")
    }
    return (
        <div>
            <section className="login">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <div className="login-side d-flex justify-content-center align-items-center">
                            <div className="logo-img">
                                <img src={logo2} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="data">
                            <div className="info">
                                <div className="login-data">
                                    <h2>User Login</h2>
                                    <label className='d-block'>User Name:
                                        <input type="text" className='form-control' name='cardNo' ref={cardNo} placeholder='Enter Name' /></label>
                                    <label className='d-block'>Password:
                                        <input type="text" className='form-control' name='password' ref={password} placeholder='Enter Password' /></label>
                                </div>
                                <div className="login-btn">
                                    <button className='btn mt-4 mb-0 w-100' onClick={loginData} >Login</button>
                                </div>
                                <div className="login-btn">
                                    <button className='btn mt-4 mb-0 w-100' onClick={adminData} >Admin Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Userlogin
