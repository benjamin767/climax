import React from "react";
import "./CityDetails.css";
export default function CityDetils({city:{name, img, min, max, temp, wind, weather, clouds, latitud, longitud}}) {
    
    return (<>
    <div className="container w-75">
        <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row">
                <div className="col-md-4">
                    <h3>{name}</h3>
                    <p>Weather: {weather}</p>
                    <p>Clouds: {clouds}</p>
                    <p>Wind: {wind}</p>
                    <p>Lon: {longitud}</p>
                    <p>Lat: {latitud}</p>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <p>Min: {min}°</p>
                        <p>Max: {max}°</p>
                        <p>Temp: {temp}</p>
                        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img-weather"/>
                    </div>
                </div>
                <div className="col-md-4 bg_img">
                </div>
            </div>
        </div>
    </div>
    </>);
}