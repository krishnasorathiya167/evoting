import logoo from "../images/logoo.png"

let Navbar = () => {
    return (
        <>
                <div className="navbar">
                    <div className="container">
                        <div className="logo d-flex">
                            <img src={logoo} alt="logo-img" />
                        </div>
                        <div className="profile">
                            <i class="fa-regular fa-user"></i>
                        </div>
                    </div>
                </div>
        </>
    )
}

export { Navbar }