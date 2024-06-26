import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Privateroute = () => {

let auth = localStorage.getItem("logedin");
return auth?<Outlet/>:<Navigate to={"/login"} />;
}

export default Privateroute
