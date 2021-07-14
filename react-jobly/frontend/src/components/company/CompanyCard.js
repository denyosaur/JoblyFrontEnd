import React from "react";
import "../../css/CompanyCard.css"

function CompanyCard({ name, logo, description }) {
    return <div className="CompanyCard">
        <div className="CompanyCard-header">
            <div className="CompanyCard-name">
                <h4>{name}</h4>
            </div>
            <div className="CompanyCard-logo">
                <img src={logo} alt={name} />
            </div>
        </div>
        <div className="CompanyCard-description">
            <label>Description: </label>
            {description}
        </div>
    </div>
};

export default CompanyCard;