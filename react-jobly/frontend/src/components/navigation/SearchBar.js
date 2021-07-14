import React, { useState } from "react";
import "../../css/SearchBar.css";

const SearchBar = ({ search }) => {
    const [term, setTerm] = useState("")

    const handleChange = (evt) => {
        let text = evt.target.value
        setTerm(text)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        search(term)
        evt.target.reset()
    }

    return (<div className="SearchBar">
        <form className="SearchBar-form" onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input id="search" type="text" placeholder="Enter search term.." onChange={handleChange} />
            <button className="SearchBar-button">Search</button>
        </form>
    </div>
    )
}

export default SearchBar;