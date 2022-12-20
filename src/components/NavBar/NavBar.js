import React from "react";
import { useDispatch } from 'react-redux';
import { getCity } from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";


export default function NavBar() {
    const dispatch = useDispatch();
    const onSearch = (city) => {
        dispatch(getCity(city));
    };

    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
        </nav>
    );
}