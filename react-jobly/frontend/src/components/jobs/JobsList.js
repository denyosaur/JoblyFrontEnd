import React, { useState, useEffect, useContext } from "react";
import ApiContext from "../../apiContext"

import SearchBar from "../navigation/SearchBar"
import JobCard from "./JobCard"
import "../../css/CompaniesList.css"

const JobsList = () => {
    const api = useContext(ApiContext);
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        async function getJobs() {
            const res = await api.getAllJobs()
            setJobs(res)
        }
        getJobs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const searchJobs = async (term) => {
        let params = { title: term }
        const res = await api.searchJobs(params)
        setJobs(res)
    }

    return (<div className="JobsList">
        <div className="JobsList-body">
            <ul className="JobsList-list">
                <li>
                    <div className="JobsList-search">
                        <SearchBar search={searchJobs} />
                    </div>
                </li>
                {jobs.map(job => {
                    return (<li key={job.id}>
                        <JobCard title={job.title} salary={job.salary} equity={job.equity} companyName={job.companyName} />
                    </li>)
                })}
            </ul>
        </div>
    </div>
    )
}

export default JobsList;