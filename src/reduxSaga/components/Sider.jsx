import React from 'react'
import { Link } from 'react-router-dom'

const Sider = () => {
    return (
        <div>
            <div className="sider-data">
                <ul>
                    <Link to={"/"}><li> <i class="fa-solid fa-house"></i> Dashboard</li></Link>
                    <Link to={"/party"}><li><i class="fa-regular fa-handshake"></i> Party </li></Link>
                    <Link to={"/voter"}><li> <i className="fa-solid fa-square-poll-vertical"></i> Voter </li></Link>
                    <Link to={"/election"}><li> <i className="fa-solid fa-atom"></i> Election</li></Link>
                    <Link to={"/partyconnection"}><li> <i className="fa-solid fa-address-book"></i> Party Connection</li></Link>
                </ul>
            </div>
        </div>

    )
}

export default Sider
