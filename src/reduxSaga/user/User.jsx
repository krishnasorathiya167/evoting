import React, { useState } from 'react'
import { Navbar } from '../atoms/Atoms'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { POST_VOTE_PENDING } from './action';
import Privateroute from '../services/Privateroute';

const User = () => {

    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user.name);

    // connection

    let connection = useSelector((state) => state.adminReducer);
    console.log(connection);

    let navigate = useNavigate();

    let dispatch = useDispatch()
    const [vote, setvote] = useState({})

    // vote

    let userVote = (val) => {
        let data = {
            user: user?._id,
            party: val?.party._id,
            election: val?.election._id,
        }
        setvote(data)
        console.log(data);   
    } 
    
    let submit=()=>{
        dispatch({ type: POST_VOTE_PENDING, payload: vote })
        document.getElementById('vote').disable=true;
        setTimeout(function(){
            logout();
        },3000)
        
    }
    function logout(){
        localStorage.removeItem("logedin");
        navigate("/userlogin")
    }



    return (
        <div>
            <Privateroute/>
            <Navbar name={user.name} cardNo={user.cardNo} sex={user.sex} />
            <div className="userdata">
                <div className="container">
                    <div className="user-table mt-5">
                        <table className='w-100 text-center'>
                            <thead>
                                <tr>
                                    <th scope="col">Party Name</th>
                                    <th scope="col">Party Logo</th>
                                    <th scope="col">Button</th>
                                    {/* <th scope="col">Submit</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    connection.connection?.map((val, ind) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{val?.party?.party_name}</td>
                                                    <td><img src={val?.party?.party_logo} alt="img" /></td>
                                                    <td><input type="radio" id='vote' onClick={() => userVote(val)} name='vote' /></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        <div className="submit-btn d-flex justify-content-end mt-5">
                            <button onClick={submit}>Submit</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default User
