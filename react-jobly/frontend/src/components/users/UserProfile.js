import React, { useState, useEffect, useContext } from "react";


import ApiContext from "../../apiContext"

const UserProfile = () => {
    const INITIAL_VALUE = {
        firstName: "placeholder",
        lastName: "placeholder",
        email: "placeholder"
    }
    let username = localStorage.getItem("username") || false
    const api = useContext(ApiContext);
    const [form, setForm] = useState(INITIAL_VALUE)

    useEffect(async () => {
        const info = await api.currUser(username)
        setForm({
            firstName: info.user.firstName,
            lastName: info.user.lastName,
            email: info.user.email
        })
    }, [])

    const patchInfo = async (name, data) => {
        const info = await api.patchUser(name, data)
        setForm(info.user)
        console.log(info)
        return info
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        try {
            patchInfo(username, form)
            alert("updated!")
        }
        catch (e) {
            alert(e)
        }
    }

    return (<div>
        <h1>UserProfile Page</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder={form.firstName} onChange={handleChange} value={form.firstName}></input>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder={form.lastName} onChange={handleChange} value={form.lastName}></input>

                <label htmlFor="firstName">Email</label>
                <input type="text" id="email" name="email" placeholder={form.email} onChange={handleChange} value={form.email}></input>

                <button>Submit</button>
            </form>
        </div>
    </div>
    )
}

export default UserProfile;