import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import ApiContext from "../../apiContext"

const Logout = ({ setAuthed }) => {
    const history = useHistory();
    const api = useContext(ApiContext);
    useEffect(() => {
        api.token = null
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setAuthed(false)
        history.push("/login")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (<div>
        logged out
    </div>)
}

export default Logout;