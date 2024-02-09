import React from "react";
import "./Team.css";
import { teamData } from "../../data";
export default function Team() {
return (
    <>
        <main className="pt-2 team">
            <h1 className="team-text">Our Team</h1>
            <div className="container ">
                <div className="row g-4 pt-2 pb-5">
                    {teamData.map((team) => (<div key={team.id} className="col-lg-4 col-xl-3 col-md-6">
                            <div className="card px-3 pt-4">
                                <img src={team.imageURL} className="card-img-top w-100 m-auto" alt="team imaga"/>
                                <div className="card-body">
                                    <h5 className="card-title">{team.name}</h5>
                                    <p className="card-text text-muted"> {team.deccription} </p>
                                    <a href={team.link} target="_blank" className="btn btn-team w-100 shadow-none">
                                        <i className="fa-brands fa-linkedin px-1"></i> LinkedIn  
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    </>
);
}
