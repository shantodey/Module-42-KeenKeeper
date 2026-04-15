import React from 'react';
import { Link } from 'react-router';

const Card = ({ info }) => {
    return (
        <Link to={`/user/${info.id}`}  className="card bg-base-100 shadow-md p-6 items-center text-center">
            <div className="avatar mb-3">
                <div className="w-20 rounded-full">
                    <img src={info.picture} />
                </div>
            </div>

            <h2 className="font-semibold text-lg">{info.name}</h2>
            <p className="text-sm text-gray-400 mb-2">{info.days_since_contact}d ago</p>

            <div className={`
                badge badge-sm mb-3
                ${info.status === "overdue" ? "badge-error" : ""}
                ${info.status === "almost due" ? "badge-warning" : ""}
                ${info.status === "on-track" ? "badge-success" : ""}
            `}>
                {info.status}
            </div>

            <button className="btn btn-warning btn-sm rounded-full">
                {info.status === "overdue" && "Almost Due"}
                {info.status === "almost due" && "Due Soon"}
                {info.status === "on-track" && "On Track"}
            </button>
        </Link>
    );
};

export default Card;