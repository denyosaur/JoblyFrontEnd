import React from "react";
import "../../css/JobCard.css"

const JobCard = ({ id, title, salary, equity, companyName = null }) => {
    return (<div className="JobCard">
        <div className="JobCard-title">
            <h5>{title}</h5>
        </div>
        {companyName &&
            <div className="JobCard-company">
                <h4>{companyName}</h4>
            </div>}
        <div className="JobCard-info">
            <div>Salary: ${salary}</div>
            <div>Equity: {equity}</div>
        </div>
        <div className="JobCard-apply">
            <button>Apply</button>
        </div>
    </div>
    )
}

export default JobCard;