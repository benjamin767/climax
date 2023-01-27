import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import SearchBar from "../SearchBar/SearchBar";

export default function Home({ onSearch, cities, onClose }) {
   
    return (
        <>
            <SearchBar onSearch={onSearch}/>
            <div><CardsContainer cities={cities} onClose={onClose}/></div>
        </>
    );
}