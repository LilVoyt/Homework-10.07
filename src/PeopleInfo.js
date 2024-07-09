import React from "react";
import PeopleList from "./PeopleList";
import './PeopleInfo.css';

function PeopleInfo({number}){
    let person = PeopleList[number];
    const { fullName, phone, email } = person;
    return <div className="info">
        <h2>{fullName}</h2>
        <h3>Phone number: {phone}, </h3>
        <h3>Email: {email}</h3>
    </div>
}

export default PeopleInfo;