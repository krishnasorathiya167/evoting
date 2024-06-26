import React, { useRef } from 'react'
import logo2 from '../images/logo2.png'
import axios from 'axios';
import { ADD_ADMIN, BASE_URL } from '../constant';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let name = useRef();
  let password = useRef();
  let navigate = useNavigate()
  let loginData = async () => {
    let data = {
      name: name.current.value,
      password: password.current.value,
    }
    console.log(data);

    let res = await axios.post(BASE_URL + ADD_ADMIN, data)
    // console.log(res);
    let result = res.data.data;
    console.log(result);
    localStorage.setItem("admin", JSON.stringify(result))
    localStorage.setItem("logedin",true)
    navigate("/")
  }
  let userData=()=>{
    navigate("/userlogin")
  }

  return (
    <>
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
                  <h2>Admin Login</h2>
                  <label className='d-block'>User Name:
                    <input type="text" className='form-control' name='name' ref={name} placeholder='Enter Name' /></label>
                  <label className='d-block'>Password:
                    <input type="text" className='form-control' name='password' ref={password} placeholder='Enter Password' /></label>
                </div>
                <div className="login-btn">
                  <button className='btn mt-4 mb-0 w-100' onClick={loginData} >Login</button>
                  <button className='btn mt-3 w-100 mb-0' onClick={userData} >user login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
