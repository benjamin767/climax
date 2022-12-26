import React, { useState } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import NavBar from "../NavBar/NavBar";
import axios from 'axios';
const { REACT_APP_API_KEY } = process.env;

export default function Home() {
    const [state, setState] = useState([]);
    const onSearch = (city) => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)
            .then(r => r.data)
            .then((recurso) => {
                if (recurso.main) {
                    const cityData = {
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        name: recurso.name,
                    };
                    state.push(cityData)
                    let hash = {};
                    setState(state.filter(o => hash[o.id] ? false : hash[o.id] = true))
                } else {
                    alert("Ciudad no encontrada");
                }
            })
            .catch(() => alert("Ciudad no encontrada"));
    };
    return (
        <>
            <NavBar onSearch={onSearch} />
            <h1>Climax</h1>
            <div><CardsContainer cities={state} /></div>
        </>
    );
}