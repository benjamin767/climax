import React from "react";

export default function Card({ city:{ id, img, max, min, name } }) {
    return (<>
        <div>
            <h3>{name}</h3>
            <p>min: {min}</p>
            <p>max: {max}</p>
            <img src={img} alt="img"/>
        </div>
    </>);
}