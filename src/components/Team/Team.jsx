import React from "react";
import "./Team.css";
import { teamData } from "../../data";
export default function Team() {
return (
    <>
        <main className="team">
            <div className="main-text">
                <h1 className="text-center position-relative">Our Team</h1>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="text-center col-lg-6  text-muted p-2">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                        inventore facere minim
                    </p>
                </div>
            </div>
            <div className="container ">
                <div className="row g-4 pt-2 pb-5">
                    {teamData.map((team) => (<div key={team.id} className="col-lg-4 col-xl-3 col-md-6">
                            <div className="card px-3 pt-4">
                                <img src={team.imageURL} className="card-img-top w-100 m-auto" alt="team imaga"/>
                                <div className="card-body">
                                    <h5 className="card-title">{team.name}</h5>
                                    <p className="card-text text-muted"> {team.deccription}</p>
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
