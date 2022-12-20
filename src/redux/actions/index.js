import axios from 'axios';
import { GET_CITY } from './actionsType';
const {REACT_APP_API_KEY} = process.env;

export const getCity = (city) => (dispatch) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)
        .then(r => r.data)
        .then((recurso) => {
            if(recurso.main){
                const cityData = {
                    min: Math.round(recurso.main.temp_min),
                    max: Math.round(recurso.main.temp_max),
                    img: recurso.weather[0].icon,
                    id: recurso.id,
                    name: recurso.name,
                };
                console.log(cityData)
                dispatch({type: GET_CITY, payload: cityData});
            } else {
                alert("Ciudad no encontrada");
            }
        })
        .catch(() => alert("Ciudad no encontrada"));
};