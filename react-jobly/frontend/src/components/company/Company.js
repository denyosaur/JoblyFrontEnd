import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import JobCard from "../jobs/JobCard";
import ApiContext from "../../apiContext";
import "../../css/Company.css"

function Company() {
    const api = useContext(ApiContext);
    const { handle } = useParams();
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getInfo() {
            const res = await api.getCompany(handle)
            setInfo(res)
        }
        getInfo()
        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) { }
    return <div className="Company">
        {loading ? (<div>loading</div>) : (<div className="Company-info">
            <div className="Company-header">
                <img src={info.logoUrl} alt={info.name} />
                <h3>{info.name}</h3>
            </div>
            <div className="Company-description">
                <p>{info.description}</p>
            </div>
            <div className="Company-jobs">
                <ul>
                    {info.jobs && info.jobs.map(job => {
                        return <li key={job.id} >
                            <JobCard id={job.id} title={job.title} salary={job.salary} equity={job.equity} key={job.id} />
                        </li>
                    })}
                </ul>
            </div>
        </div>)}
    </div>

};

export default Company;