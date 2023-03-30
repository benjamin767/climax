import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ city: { id, img, max, min, name },onClose }) {
    return (
        <>
            <div className="card bg-dark text-light width">
                <div id="closeIcon" className="row">
                    <button onClick={()=>onClose(id)} className="btn btn-sm btn-danger">X</button>
                </div>
                <div className="card-body">
                    <Link to={`/${id}`}><h3>{name}</h3></Link>
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <p>min</p>
                            <p>{min}°C</p>
                            <p>max</p>
                            <p>{max}°C</p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}