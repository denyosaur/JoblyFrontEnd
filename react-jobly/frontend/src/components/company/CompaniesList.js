import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../../apiContext"

import SearchBar from "../navigation/SearchBar"
import CompanyCard from "./CompanyCard"
import "../../css/CompaniesList.css"

const CompaniesList = () => {
    const api = useContext(ApiContext);
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        async function getCompanies() {
            const res = await api.getAllCompanies()
            setCompanies(res)
        }
        getCompanies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const searchCompanies = async (term) => {
        let params = { name: term }
        const res = await api.searchCompanies(params)
        setCompanies(res)
    }

    return (<div className="CompaniesList">
        <div className="CompaniesList-body">
            <ul className="CompaniesList-list">
                <li>
                    <div className="CompaniesList-search">
                        <SearchBar search={searchCompanies} />
                    </div>
                </li>
                {companies.map(company => {
                    let companyLink = `/companies/${company.handle}`
                    return (<li key={company.handle}>
                        <Link exact="true" to={companyLink} key={company.handle}>
                            <CompanyCard name={company.name} logo={company.logoUrl} description={company.description} />
                        </Link>
                    </li>)
                })}
            </ul>
        </div>
    </div>
    )
}

export default CompaniesList;