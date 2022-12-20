import { GET_CITY } from "../actions/actionsType";
const initialState = {
    allCities: [],
};

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_CITY:
            return{...state, allCities: [...state.allCities, action.payload]};
        default:
            return {...state};
    }
}