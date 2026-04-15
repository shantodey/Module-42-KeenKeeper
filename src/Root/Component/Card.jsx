import React from 'react';

const Card = ({ info }) => {
    return (
        <div className="card bg-base-100 shadow-md p-6 items-center text-center">
            <div className="avatar mb-3">
                <div className="w-20 rounded-full">
                    <img src={info.picture} />
                </div>
            </div>

            <h2 className="font-semibold text-lg">{info.name}</h2>
            <p className="text-sm text-gray-400 mb-2">{info.days_since_contact}d ago</p>

            <div className={`
    badge badge-sm mb-3
    ${status === "overdue" ? "badge-error" : ""}
    ${status === "almost due" ? "badge-warning" : ""}
    ${status === "on-track" ? "badge-success" : ""}
  `}>
                {status}
            </div>

            <button className="btn btn-warning btn-sm rounded-full">
                {status === "overdue" && "Almost Due"}
                {status === "almost due" && "Due Soon"}
                {status === "on-track" && "On Track"}
            </button>
        </div>
    );
};

export default Card;