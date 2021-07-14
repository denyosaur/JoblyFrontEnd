import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../../css/Navbar.css"

const Navbar = ({ authed }) => {
    let authStatus = localStorage.getItem("token") || false
    let username = localStorage.getItem("username") || false

    useEffect(() => {
        console.log("test")
        authStatus = authed
        username = localStorage.getItem("username")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authed])


    return (
        <nav className="Navbar">
            <div className="Navbar-home">
                <NavLink exact to="/">
                    Jobly
                </NavLink>
            </div>
            <div className="Navbar-navigation">
                {authStatus !== false && <span className="Navbar-loggedin">
                    <NavLink exact to="/companies">
                        Companies
                    </NavLink>
                    <NavLink exact to="/jobs">
                        Jobs
                    </NavLink>
                    <NavLink exact to="/profile">
                        {username}
                    </NavLink>
                    <NavLink exact to="/logout">
                        Log out
                    </NavLink>
                </span>}
                {authStatus === false && <span className="Navbar-loggedout">
                    <NavLink exact to="/login">
                        Login
                    </NavLink>
                    <NavLink exact to="/signup">
                        Sign Up
                    </NavLink>

                </span>}
            </div>
        </nav>
    )
}

export default Navbar;