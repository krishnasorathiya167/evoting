import React, { useEffect } from 'react'
import './App.css';
import { Navbar } from './reduxSaga/atoms/Atoms';
import Sider from './reduxSaga/components/Sider';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './reduxSaga/admin/pages/Dashboard';
import Party from './reduxSaga/admin/pages/Party';
import Voter from './reduxSaga/admin/pages/Voter';
import Election from './reduxSaga/admin/pages/Election';
import Partyconnection from './reduxSaga/admin/pages/Partyconnection';
import { useDispatch } from 'react-redux';
import { GET_CONNECTION_PENDING, GET_ELECTION_PENDING, GET_PARTY_PENDING, GET_VOTER_PENDING } from './reduxSaga/admin/action';
import Login from './reduxSaga/components/Login';
import Userlogin from './reduxSaga/components/Userlogin';
import User from './reduxSaga/user/User';

const App = () => {

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_PARTY_PENDING });
    dispatch({ type: GET_VOTER_PENDING });
    dispatch({ type: GET_ELECTION_PENDING });
    dispatch({ type: GET_CONNECTION_PENDING });
  }, []);
  let admin = JSON.parse(localStorage.getItem("admin"))
  console.log(admin.role);


  // let role = "admin";
  return (
    // <Login />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={admin.role == "Admin" ? <Home /> : <Navigate to={"/login"} />} />
      <Route path='/userlogin' element={<Userlogin />} />
      <Route path='/user' element={<User />} />
    </Routes>
  )
}


let Home = () => {
  let navigate = useNavigate()
  let logout = () => {
    localStorage.removeItem("logedin")
    navigate("/login")
  }
  let admin = JSON.parse(localStorage.getItem("admin"))
  return (
    <>
      <Navbar name={admin.name} password={admin.password} role={admin.role} />

      <div className="adminbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="siderbar">
                <Sider />
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-6 p-0">
              {/* <button className='btn' onClick={logout} >log out</button> */}
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/party' element={<Party />} />
                <Route path='/voter' element={<Voter />} />
                <Route path='/election' element={<Election />} />
                <Route path='/partyconnection' element={<Partyconnection />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// if (role == "admin") {

//   return (
//     <>
//       <Navbar element={role} />
//       <div className="adminbar">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3 col-md-4 col-sm-6">
//               <div className="siderbar">
//                 <Sider />
//               </div>
//             </div>
//             <div className="col-lg-9 col-md-8 col-sm-6 p-0">
//               <Routes>
//                 <Route path='/' element={<Dashboard />} />
//                 <Route path='/party' element={<Party />} />
//                 <Route path='/voter' element={<Voter />} />
//                 <Route path='/election' element={<Election />} />
//                 <Route path='/partyconnection' element={<Partyconnection />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// else if (role === "user") {
//   return (
//     <>
//       <Navbar />
//     </>
//   )
// }


// return (
//   <div>
//     <Navbar/>
//     <Sider/>
//   </div>
// )


export default App

