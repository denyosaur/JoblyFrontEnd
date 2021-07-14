import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import ApiContext from "../../apiContext"

const Login = ({ setAuthed }) => {
    const api = useContext(ApiContext);
    const history = useHistory();
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const [form, setForm] = useState(INITIAL_STATE)

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const login = await api.login(form)
        localStorage.setItem("token", login)
        localStorage.setItem("username", form.username)
        setForm(INITIAL_STATE)
        setAuthed(localStorage.getItem("token"))
        history.push("/")
    }

    return (<div className="Login">
        <h1>Login Page</h1>
        <div className="Login-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"></label>
                <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange} value={form.username}></input>

                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} value={form.password}></input>
                <button>Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Login;