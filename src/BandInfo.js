import React from "react";
import "./BandInfo.css";
import Band from "./Band.js";

function BandInfo(){
    const newBand = new Band();
    const { name, description, members, songs, photo } = newBand;
    return (
        <div className="band-info">
            <div className="band-head">
                <img src={photo} alt={name} />
                <h2>{name}</h2>
            </div>
            <div className="band-details">
                <p>{description}</p>
                <h3>Members:</h3>
                <ul>
                    {members.map((member, index) => (
                        <li key={index}>{member}</li>
                    ))}
                </ul>
                <h3>Songs:</h3>
                <ul>
                    {songs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BandInfo;
