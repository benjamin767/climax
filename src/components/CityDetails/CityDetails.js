import React from "react";

export default function CityDetils({city:{name, img, min, max, temp, wind, weather, clouds, latitud, longitud}}) {
    
    return (<>
    <div className="container">
        <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row">
                <div className="col-md-4">
                    <h3>{name}</h3>
                    <p>weather: {weather}</p>
                    <p>clouds: {clouds}</p>
                    <p>longitud: {longitud}</p>
                    <p>latitud: {latitud}</p>
                </div>
                <div className="col-md-4">
                    <div className="card-body text-start mt-2">
                        <p>min: {min}</p>
                        <p>max: {max}</p>
                        <p>temp: {temp}</p>
                        <p>wind: {wind}</p>
                        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img-weather"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>);
}