import React from "react";
export default function CityDetils({ city: { name, img, min, max, temp, wind, weather, clouds, latitud, longitud } }) {

    return (<>
        <div className="container w-100 vh-75">
            <div className="card mb-3 mx-auto bg-dark text-light shadow-lg">
                <div
                    className="d-flex flex-row justify-content-center w-100"
                >
                    <h3>{name}</h3>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-body">
                            <p>Weather: {weather}</p>
                            <p>Clouds: {clouds}%</p>
                            <p>Wind: {wind} km/h</p>
                            <p>Lon: {longitud}</p>
                            <p>Lat: {latitud}</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-body">
                            <p>Min: {min}°</p>
                            <p>Max: {max}°</p>
                            <p>Temp: {temp}°</p>
                            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img-weather" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                        <img 
                            src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg" 
                            alt="city"
                            className="img-fluid"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}