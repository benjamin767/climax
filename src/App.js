import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CityDetils from './components/CityDetails/CityDetails';
import axios from 'axios';
const { REACT_APP_API_KEY } = process.env;

function App() {
  const [state, setState] = useState([]);
  const onClose = (id) => {
    setState(state.filter(c => c.id !== id));
  }
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
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          state.push(cityData)
          let hash = {};
          setState(state.filter(o => hash[o.id] ? false : hash[o.id] = true))
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let [ciudad] = state.filter(c => c.id === parseInt(ciudadId));
    if (ciudad) return ciudad;
    return null;
  }
  return (
    <BrowserRouter>
      <Route
        exact path="/"
        render={() => <Home cities={state} onSearch={onSearch} onClose={onClose}/>}
      />
      <Route
        exact path="/:cityId"
        render={({match}) => <CityDetils city={onFilter(match.params.cityId)} />}
      />
    </BrowserRouter>
  );
}


export default App;
