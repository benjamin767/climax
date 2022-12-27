import React from "react";
import { Link } from "react-router-dom";

export default function Card({ city:{ id, img, max, min, name } }) {
    return (<>
        <div>
            <button>x</button>
            <Link to={`/${id}`}><h3>{name}</h3></Link>
            <p>min: {min}</p>
            <p>max: {max}</p>
            <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="img"/>
        </div>
    
    </>);
}