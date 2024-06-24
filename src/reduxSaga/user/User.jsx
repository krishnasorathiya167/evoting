import React from 'react'
import { Navbar } from '../atoms/Atoms'

const User = () => {

    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user.name);

    return (
        <div>
            <Navbar  name={user.name} cardNo={user.cardNo} sex={user.sex} />

        </div>
    )
}

export default User
