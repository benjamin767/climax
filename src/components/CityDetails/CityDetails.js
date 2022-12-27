import React from "react";

export default function CityDetils({city:{name, img, min, max, temp, wind, weather, clouds, latitud, longitud}}) {
    return (<>
        <h2>{name}</h2>
        <p>min: {min}</p>
        <p>max: {max}</p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img"/>
        <p>temp: {temp}</p>
        <p>wind: {wind}</p>
        <p>weather: {weather}</p>
        <p>clouds: {clouds}</p>
        <p>longitud: {longitud}</p>
        <p>latitud: {latitud}</p>
    </>);
}