import React, { useState, useContext } from "react";
import ApiContext from "../../apiContext"

import "../../css/SignUp.css"

const SignUp = ({ setAuthed }) => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    };
    const api = useContext(ApiContext);
    const [form, setForm] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        try {
            const register = api.register(form)
            localStorage.setItem("token", register)
            setAuthed(localStorage.getItem("token"))
            api.token = register
            setForm(INITIAL_STATE)
        }
        catch (e) {
            setForm(INITIAL_STATE)
            alert(e)
        }
    }

    return <div className="SignUp">
        <h1>SignUp Page</h1>
        <div className="SignUp-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange} value={form.username}></input>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="password" onChange={handleChange} value={form.password}></input>

                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" onChange={handleChange} value={form.firstName}></input>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={handleChange} value={form.lastName}></input>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Email" onChange={handleChange} value={form.email}></input>
                <button>Submit</button>
            </form>
        </div>
    </div>
}
export default SignUp;